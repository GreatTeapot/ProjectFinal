
from django.db import models


class ChatText(models.Model):
    text = models.TextField()

    def __str__(self):
        return f"Chat Text #{self.pk}"


class Player(models.Model):
    health = models.IntegerField(default=100)

    def __str__(self):
        return f"Player {self.pk}"