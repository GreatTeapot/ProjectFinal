from django.urls import path
from .views import ChatMasterView

urlpatterns = [
    path('game/', ChatMasterView.as_view(), name='game_master'),

]
