from rest_framework import serializers
from .models import ChatText, Story
from authapp.serializers import UsersSerializer


class ChatGptSerializer(serializers.ModelSerializer):
    class Meta:
        model = ChatText
        fields = ['id', 'text', 'answer_player', 'user']


class StorySerializer(serializers.ModelSerializer):
    user = UsersSerializer()  # Вместо ReadOnlyField используем UsersSerializer для пользователя

    class Meta:
        model = Story
        fields = ['id', 'name', 'role', 'description', 'health', 'user']

