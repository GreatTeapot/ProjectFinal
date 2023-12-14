from rest_framework import serializers
from authapp.models import CustomUser

from .models import ChatText, Story

from authapp.serializers import UsersSerializer


class StorySerializer(serializers.ModelSerializer):
    user = serializers.PrimaryKeyRelatedField(queryset=CustomUser.objects.all())  # Используем PrimaryKeyRelatedField

    class Meta:
        model = Story
        fields = ['id', 'name', 'role', 'description', 'health', 'user']


class ChatGptSerializer(serializers.ModelSerializer):
    story = StorySerializer(required=False)

    class Meta:
        model = ChatText

        fields = ['id', 'text', 'answer_player', 'user', 'story']
