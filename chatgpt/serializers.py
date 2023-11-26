from rest_framework import serializers


class ChatGptSerializer(serializers.ModelSerializer):
    class Meta:
        text = serializers.CharField(write_only=True)