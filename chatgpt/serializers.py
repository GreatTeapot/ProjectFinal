from rest_framework import serializers
from .models import Player, ChatText


class PlayerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Player
        fields = ['id', 'health']


class ChatGptSerializer(serializers.ModelSerializer):
    class Meta:
        model = ChatText
        fields = ['text']