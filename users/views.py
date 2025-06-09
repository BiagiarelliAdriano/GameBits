from rest_framework import generics, permissions, status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth import authenticate
from django.shortcuts import get_object_or_404
from rest_framework_simplejwt.tokens import RefreshToken
from .models import UserProfile
from .serializers import UserSerializer, UserProfileSerializer


class RegisterUserView(APIView):
    permission_classes = [permissions.AllowAny]

    def post(self, request):
        user_serializer = UserSerializer(data=request.data)
        if user_serializer.is_valid():
            user = user_serializer.save()
            return Response(
                UserProfileSerializer(user, context={'request': request}).data,
                status=status.HTTP_201_CREATED
            )
        return Response(user_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class UserProfileListCreateView(generics.ListCreateAPIView):
    """View to list all users and allow user registration."""
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer
    permission_classes = [permissions.AllowAny]


class UserProfileDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def get_permissions(self):
        # Only allow updates/deletes if it's their own profile
        if self.request.method in ['PUT', 'PATCH', 'DELETE']:
            return [permissions.IsAuthenticated()]
        return [permissions.AllowAny()]


class LoginView(APIView):
    permission_classes = [permissions.AllowAny]

    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        user = authenticate(username=username, password=password)

        if user:
            refresh = RefreshToken.for_user(user)
            return Response({
                'access': str(refresh.access_token),
                'refresh': str(refresh)
            })
        return Response({"detail": "Invalid credentials"},
                        status=status.HTTP_401_UNAUTHORIZED)


class CurrentUserView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        serializer = UserProfileSerializer(request.user, context={'request': request})
        return Response(serializer.data)

class EditUsernameView(APIView):
    permission_classes = [IsAuthenticated]

    def patch(self, request, pk):
        user = get_object_or_404(UserProfile, pk=pk)
        if request.user != user:
            return Response({"detail": "Forbidden."}, status=status.HTTP_403_FORBIDDEN)
        
        new_username = request.data.get("username")
        if not new_username:
            return Response({"detail": "Username is required."}, status=status.HTTP_400_BAD_REQUEST)
        
        user.username = new_username
        user.save()
        return Response({"detail": "Username updated."}, status=status.HTTP_200_OK)

class EditPasswordView(APIView):
    permission_classes = [IsAuthenticated]

    def patch(self, request, pk):
        user = get_object_or_404(UserProfile, pk=pk)
        if request.user != user:
            return Response({"detail": "Forbidden."}, status=status.HTTP_403_FORBIDDEN)

        password = request.data.get("password")
        if not password:
            return Response({"detail": "Password is required."}, status=status.HTTP_400_BAD_REQUEST)
        
        user.set_password(password)
        user.save()
        return Response({"detail": "Password updated."}, status=status.HTTP_200_OK)