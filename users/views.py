from rest_framework import generics, permissions, status
from rest_framework.response import Response
from rest_framework.views import APIView
from django.contrib.auth.models import User
from .models import UserProfile
from .serializers import UserSerializer, UserProfileSerializer

class RegisterUserView(APIView):
    permission_classes = [permissions.AllowAny]

    def post(self, request):
        # Create the User (authentication)
        user_serializer = UserSerializer(data=request.data)
        if user_serializer.is_valid():
            user = user_serializer.save()
            profile_data = request.data.get('profile', {})
            profile_data['user'] = user.id
            user_profile_serializer = UserProfileSerializer(data=profile_data)
            if user_profile_serializer.is_valid():
                user_profile_serializer.save()

                return Response(user_profile_serializer.data, status=status.HTTP_201_CREATED)
            return Response(user_profile_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
        return Response(user_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

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