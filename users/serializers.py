from rest_framework import serializers
from django.contrib.auth.hashers import make_password
from django.contrib.auth import get_user_model
from .models import UserProfile
from follow.models import Follow

class UserProfileSerializer(serializers.ModelSerializer):
    """Serializer for the UserProfile model."""

    created_at = serializers.DateTimeField(format='%Y-%m-%d %H:%M:%S', read_only=True)
    updated_at = serializers.DateTimeField(format='%Y-%m-%d %H:%M:%S', read_only=True)
    profile_picture = serializers.ImageField(required=False, allow_null=True)
    posts_count = serializers.SerializerMethodField()
    followers = serializers.SerializerMethodField()
    following = serializers.SerializerMethodField()
    following_id = serializers.SerializerMethodField()
    is_owner = serializers.SerializerMethodField()

    class Meta:
        model = UserProfile
        fields = ['id', 'username', 'email', 'password', 'profile_picture',
                  'bio', 'level', 'experience_points', 'date_joined',
                  'is_active', 'created_at', 'updated_at', 'posts_count',
                  'followers', 'following', 'following_id', 'is_owner']
        extra_kwargs = {
            'password': {'write_only': True},  # Hide password in responses
            'level': {'read_only': True},
            'experience_points': {'read_only': True},
            'date_joined': {'read_only': True},
        }

    def get_profile_picture(self, obj):
        """Return the correct profile picture of the user."""
        return obj.profile_picture
    
    def get_posts_count(self, obj):
        """Return the number of posts created by the user."""
        return obj.posts.count()
    
    def get_followers(self, obj):
        """Return the total number of followers this user has."""
        return Follow.objects.filter(following=obj).count()
    
    def get_following(self, obj):
        """Return the total number of users this user is following."""
        return Follow.objects.filter(follower=obj).count()
    
    def get_is_owner(self, obj):
        """Return True if the requesting user is the owner of this profile."""
        request = self.context.get("request")
        return request.user == obj if request and request.user.is_authenticated else False
    
    def get_following_id(self, obj):
        """Return the follow relationship ID if the current user follows this user, else None."""
        request = self.context.get("request")
        if request and request.user.is_authenticated:
            follow = Follow.objects.filter(follower=request.user, following=obj).first()
            if follow:
                return follow.id
            return None

    def create(self, validated_data):
        """Create user with hashed password."""
        validated_data['password'] = make_password(validated_data['password'])
        return super().create(validated_data)

    def update(self, instance, validated_data):
        """Ensure password is hashed when updated."""
        if 'password' in validated_data:
            validated_data['password'] = make_password(validated_data['password'])
        return super().update(instance, validated_data)

# Serializer for the Django User model (to handle user registration)
class UserSerializer(serializers.ModelSerializer):
    """Serializer for creating a new user."""

    password1 = serializers.CharField(write_only=True)
    password2 = serializers.CharField(write_only=True)

    class Meta:
        model = get_user_model()
        # Refers to UserProfile or the default User model
        fields = ['username', 'email', 'password1', 'password2']
        extra_kwargs = {
            'password1': {'write_only': True},  # Hide password in responses
            'password2': {'write_only': True},  # Hide password2 in responses
        }

    def validate(self, data):
        """Ensure password1 and password2 match."""
        if data['password1'] != data['password2']:
            raise serializers.ValidationError("Passwords must match.")
        return data

    def create(self, validated_data):
        """Create a user with a hashed password."""
        validated_data.pop('password2')
        password = validated_data.pop('password1')
        user = get_user_model().objects.create_user(**validated_data)
        user.set_password(password)  # Ensure password is hashed
        user.save()
        return user
