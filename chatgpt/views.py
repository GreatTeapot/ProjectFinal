from rest_framework.permissions import AllowAny, IsAuthenticated, IsAdminUser
from .models import ChatText, Story
from openai import OpenAI
from rest_framework import status, generics
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import ChatGptSerializer, StorySerializer

client = OpenAI(
    api_key="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",
)
# sadas

class CustomUserList(generics.ListAPIView):
    permission_classes = [IsAuthenticated]
    queryset = ChatText.objects.all()
    serializer_class = StorySerializer


class ChatMasterView(APIView):
    serializer_class = ChatGptSerializer
    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):
        serializer = ChatGptSerializer(data=request.data)

        if serializer.is_valid():
            input_text = serializer.validated_data['text']

            # Получение текущей истории из базы данных
            current_story = Story.objects.latest('id')

            chat_completion = client.chat.completions.create(
                messages=[
                    {
                        "role": "system",
                        "content": f"В конце ты должен описать что произойдет дальше с положительными или отрицательными эффектами и в конце истории будет указано оставшееся здоровье персонажа в формате  Здоровье - {current_story.health}."
                    },
                    {
                        "role": "assistant",
                        "content": f" история: {current_story.description}."
                    },
                    {
                        "role": "user",
                        "content": input_text,
                    }
                ],
                model="gpt-3.5-turbo",
                temperature=1,
                max_tokens=2000
            )

            # Сохранение ответа в модели ChatText
            response_text = chat_completion.choices[0].message.content
            ChatText.objects.create(text=input_text, answer_player=response_text)

            # Обновление здоровья в текущей истории
            health_indexes = [response_text.find("Здоровье - "), response_text.find("Здоровье игрока:")]
            health_values = []

            for index in health_indexes:
                if index != -1:
                    # Извлекаем числовое значение после фразы
                    value = int(response_text[index + len("Здоровье - "):].split('.')[0].strip())
                    health_values.append(value)

            # Используем более актуальное значение здоровья
            if health_values:
                current_story.health = max(health_values)
                current_story.save()
            # Удаление "Здоровье игрока" из response_text
            response_text = response_text.replace(f"Здоровье игрока: {current_story.health}", "")
            # Вывод оставшегося здоровья
            response_data = {"text": f"{response_text} Здоровье игрока: {current_story.health}"}

            return Response(response_data, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class StoryView(APIView):
    serializer_class = StorySerializer
    permission_classes = [IsAdminUser]

    def post(self, request, *args, **kwargs):
        serializer = StorySerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request, *args, **kwargs):
        stories = Story.objects.all()
        serializer = StorySerializer(stories, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
