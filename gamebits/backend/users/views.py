from rest_framework import generics, permissions
from django.contrib.auth.models import User
from .models import UserProfile
from .serializers import UserProfileSerializer

class UserProfileListCreateView(generics.ListCreateAPIView):
    """View to list all users and allow user registration."""
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer
    permission_classes = [permissions.AllowAny] # Anyone can register

class UserProfileDetailView(generics.RetrieveUpdateDestroyAPIView):
    """View to retrieve, update, or delete a single user profile."""
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer
    permission_classes = [permissions.IsAuthenticated] # Only logged-in users can modify their profile

    def get_queryset(self):
        """Ensure users can only access their own profile unless they are an admin."""
        if self.request.user.is_staff:
            return UserProfile.objects.all()
        return UserProfile.objects.filter(id=self.request.user.id)