from rest_framework import serializers
from .models import ChatText, Story
# from ..authapp.serializers import UsersSerializer


class ChatGptSerializer(serializers.ModelSerializer):
    class Meta:
        model = ChatText
        fields = ['id', 'text', 'answer_player']


class StorySerializer(serializers.ModelSerializer):
    # user = UsersSerializer(read_only=True)

    class Meta:
        model = Story
        fields = ['id', 'name', 'role', 'description', 'health']

# xssaxa