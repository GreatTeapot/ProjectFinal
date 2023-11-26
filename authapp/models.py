from django.contrib.auth.models import AbstractUser
from django.db import models


class CustomUser(AbstractUser):
    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)    # Добавьте свои дополнительные поля здесь

    def __str__(self):
        return self.username
