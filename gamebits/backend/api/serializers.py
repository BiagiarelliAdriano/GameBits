from rest_framework import serializers
from users.models import UserProfile
from django.contrib.auth import get_user_model
from posts.models import Post

# Serializer for the UserProfile(Custom User model)
class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ['id', 'username', 'email', 'profile_picture', 'bio', 'level', 'experience_points', 'date_joined', 'is_active']
        read_only_fields = ['id', 'date_joined'] # make the 'id' and 'date_joined' fields read-only

# Serializer for the default Django User model (in case needed separately)
class CustomUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = get_user_model() # This will refer to the UserProfile model
        fields = ['id', 'username', 'email', 'is_active']

class PostSerializer(serializers.ModelSerializer):
    """Serializer for the Post model."""

    class Meta:
        model = Post
        fields = ['id', 'author_id', 'title', 'created_at', 'game', 'image', 'content']
        read_only_fields = ['author', 'created_at']