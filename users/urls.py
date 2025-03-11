from django.urls import path
from .views import UserProfileListCreateView, UserProfileDetailView, RegisterUserView

urlpatterns = [
    path('register/', RegisterUserView.as_view(), name='user-register'),
    path('', UserProfileListCreateView.as_view(), name='user-list-create'),
    path('<int:pk>/', UserProfileDetailView.as_view(), name='user-detail'),
]
