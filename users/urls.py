from django.urls import path
from .views import (
    UserProfileListCreateView, UserProfileDetailView, RegisterUserView,
    CurrentUserView, EditUsernameView, EditPasswordView
)

"""URL routing for the users app."""
urlpatterns = [
    path('register/', RegisterUserView.as_view(), name='user-register'),
    path('current/', CurrentUserView.as_view(), name='current-user'),
    path('<int:pk>/edit/username/', EditUsernameView.as_view(),
         name='edit-username'),
    path('<int:pk>/edit/password/', EditPasswordView.as_view(),
         name='edit-password'),
    path('<int:pk>/', UserProfileDetailView.as_view(), name='user-detail'),
    path('', UserProfileListCreateView.as_view(), name='user-list-create'),
]
