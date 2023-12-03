
from django.db import models


class Story(models.Model):
    name = models.CharField(max_length=30,unique=True)
    description = models.TextField()
    role = models.CharField(max_length=20)
    health = models.IntegerField(default=100)

    def __str__(self):
        return f"Player {self.pk}"


class ChatText(models.Model):
    answer_player = models.TextField(default='нечего не выдавай')
    text = models.TextField()

    def __str__(self):
        return f"Chat Text #{self.pk}"


