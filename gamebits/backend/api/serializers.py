from rest_framework import serializers
from django.contrib.auth.hashers import make_password
from django.contrib.auth import get_user_model
from users.models import UserProfile
from posts.models import Post
from likes.models import Like
from comments.models import Comment
from follow.models import Follow

# Serializer for the UserProfile(Custom User model)
class UserProfileSerializer(serializers.ModelSerializer):
    """Serializer for the UserProfile model."""

    class Meta:
        model = UserProfile
        fields = ['id', 'username', 'email', 'password', 'profile_picture', 'bio',
                  'level', 'experience_points', 'date_joined', 'is_active']
        extra_kwargs = {
            'password': {'write_only': True}, # Hide password in responses
            'level': {'read_only': True}, # Users cannot manually change their level
            'experience_points': {'read_only': True}, # Prevent manual XP changes
            'date_joined': {'read_only': True}, # Auto-set on user creation
        }

    def create(self, validated_data):
        """Create user with hashed password."""
        validated_data['password'] = make_password(validated_data['password'])
        return super().create(validated_data)
    
    def update(self, instance, validated_data):
        """Ensure password is hashed when updated."""
        if 'password' in validated_data:
            validated_data['password'] = make_password(validated_data['password'])
        return super().update(instance, validated_data)

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

class LikeSerializer(serializers.ModelSerializer):
    """Serializer for the Like model."""

    class Meta:
        model = Like
        fields = ['id', 'user', 'post', 'created_at']
        read_only_fields = ['id', 'created_at']

class CommentSerializer(serializers.ModelSerializer):
    """Serializer for the Comment model."""

    user = serializers.StringRelatedField(read_only=True)
    post = serializers.PrimaryKeyRelatedField(read_only=True)

    class Meta:
        model = Comment
        fields = ['id', 'user', 'post', 'content', 'created_at']
        read_only_fields = ['id', 'user', 'post', 'created_at']

class FollowSerializer(serializers.ModelSerializer):
    """Serializer for the Follow model."""
    
    class Meta:
        model = Follow
        fields = ['id', 'follower', 'following', 'created_at']
        read_only_fields = ['id', 'created_at']