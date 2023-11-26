from rest_framework import serializers

from .models import CustomUser


class UserRegisSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = CustomUser
        fields = ('id', 'username', 'email', 'password', 'first_name', 'last_name')
        extra_kwargs = {
            'username': {'write_only': True},
            'email': {'write_only': True},
            'password': {'write_only': True},
            'first_name': {'required': False,'write_only': True},
            'last_name': {'required': False,'write_only': True},
        }

    def create(self, validated_data):
        user = CustomUser.objects.create_user(
            email=validated_data.get('email', ''),
            username=validated_data['username'],
            password=validated_data['password'],
            first_name=validated_data.get('first_name', ''),
            last_name=validated_data.get('last_name', ''),
        )
        return user


class ChangePasswordSerializer(serializers.Serializer):
    old_password = serializers.CharField(required=True)
    new_password = serializers.CharField(required=True)