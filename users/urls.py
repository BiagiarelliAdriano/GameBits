from django.urls import path
from .views import (
    UserProfileListCreateView, UserProfileDetailView, RegisterUserView,
    CurrentUserView
)

urlpatterns = [
    path('register/', RegisterUserView.as_view(), name='user-register'),
    path('current/', CurrentUserView.as_view(), name='current-user'),
    path('<int:pk>/', UserProfileDetailView.as_view(), name='user-detail'),
    path('', UserProfileListCreateView.as_view(), name='user-list-create'),
]
