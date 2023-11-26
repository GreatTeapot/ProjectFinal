from django.urls import path
from .views import (
    RegistrationAPIView,
    CustomUserLoginView,  CustomUserList, CustomUserUpdate, LogoutView,
    ChangePasswordAPIView,

)

urlpatterns = [
    path('register/', RegistrationAPIView.as_view(), name='register'),
    path('login/', CustomUserLoginView.as_view(), name='login'),
    path('all-users/', CustomUserList.as_view(), name='all-users'),
    path('user/<int:pk>/', CustomUserUpdate.as_view(), name='user-update'),
    path('logout/', LogoutView.as_view(), name='auth_logout'),
    path('change-password/', ChangePasswordAPIView.as_view(), name='change-password'),
    # path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
