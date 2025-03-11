from django.urls import path
from .views import UserProfileListCreateView, UserProfileDetailView, RegisterUserView, LoginView, CurrentUserView

urlpatterns = [
    path('register/', RegisterUserView.as_view(), name='user-register'),
    path('login/', LoginView.as_view(), name="user-login"),
    path('', UserProfileListCreateView.as_view(), name='user-list-create'),
    path('<int:pk>/', UserProfileDetailView.as_view(), name='user-detail'),
    path('current/', CurrentUserView.as_view(), name='user-current'),
]
