from rest_framework import serializers
from .models import ChatText, Story


class ChatGptSerializer(serializers.ModelSerializer):
    class Meta:
        model = ChatText
        fields = ['id','text', 'answer_player']


class StorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Story
        fields = ['id', 'name', 'role', 'description', 'health']

