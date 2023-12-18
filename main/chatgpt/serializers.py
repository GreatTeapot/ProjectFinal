from rest_framework import serializers
from authapp.models import CustomUser

from .models import ChatText, Story, Games


class ChatTextInfo(serializers.ModelSerializer):
    class Meta:
        model = ChatText
        fields = '__all__'


# chatgpt/serializers.py
class GamesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Games
        fields = ['id', 'user', 'story', 'game_name', 'max_events']


class ChatGptSerializer(serializers.ModelSerializer):
    games = GamesSerializer(required=False)

    # Добавьте поле 'name' из Story
    name = serializers.CharField()

    class Meta:
        model = ChatText
        fields = ['id', 'text', 'answer_player', 'user', 'story', 'games', 'name']

    def create(self, validated_data):
        # Извлекаем 'name' из validated_data
        name = validated_data.pop('name')

        # Находим соответствующую Story по имени
        story = Story.objects.get(name=name)

        # Создаем ChatText, связанный с этой Story
        chat_text = ChatText.objects.create(story=story, **validated_data)

        return chat_text


class StorySerializer(serializers.ModelSerializer):
    user = serializers.PrimaryKeyRelatedField(queryset=CustomUser.objects.all())

    class Meta:
        model = Story
        fields = ['id', 'name', 'role', 'description', 'health', 'user']
