from rest_framework.permissions import AllowAny

from .models import ChatText
from openai import OpenAI
from rest_framework import serializers, status
from rest_framework.response import Response
from rest_framework.views import APIView

from .serializers import ChatGptSerializer

client = OpenAI(
    # defaults to os.environ.get("OPENAI_API_KEY")
    api_key="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",
)
def save_chat_request_and_response(request_text):
    try:
        chat_completion = client.chat.completions.create(
            messages=[
                {
                    "role": "user",
                    "content": request_text,
                }
            ],
            model="gpt-3.5-turbo",
            temperature=1,
            max_tokens=200
        )

        response_text = chat_completion['choices'][0]['message']['content']
        print(response_text)
        # Создаем и сохраняем объект в базе данных с использованием модели ChatText
        response_obj = ChatText.objects.create(text=response_text)

        return response_obj
    except Exception as e:
        print(f"Error during OpenAI API call: {e}")
        return None


class ChatMasterView(APIView):
    serializer_class = ChatGptSerializer
    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):
        serializer = ChatGptSerializer(data=request.data)

        if serializer.is_valid():
            input_text = serializer.validated_data['text']

            # Сохраняем запрос и ответ
            response_obj = save_chat_request_and_response(input_text)

            if response_obj:
                # Отправляем ответ клиенту с информацией об объекте
                response_data = {"text": response_obj.text, "response_id": response_obj.pk}
                return Response(response_data, status=status.HTTP_200_OK)
            else:
                return Response({"error": "Failed to process the request"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
