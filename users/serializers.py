from rest_framework import serializers
from django.contrib.auth.hashers import make_password
from django.contrib.auth import get_user_model
from .models import UserProfile


# Serializer for the UserProfile(Custom User model)
class UserProfileSerializer(serializers.ModelSerializer):
    """Serializer for the UserProfile model."""

    created_at = serializers.DateTimeField(format='%Y-%m-%d %H:%M:%S',
                                           read_only=True)
    updated_at = serializers.DateTimeField(format='%Y-%m-%d %H:%M:%S',
                                           read_only=True)

    class Meta:
        model = UserProfile
        fields = ['id', 'username', 'email', 'password', 'profile_picture',
                  'bio', 'level', 'experience_points', 'date_joined',
                  'is_active', 'created_at', 'updated_at']
        extra_kwargs = {
            'password': {'write_only': True},  # Hide password in responses
            'level': {'read_only': True},
            # Users cannot manually change their level
            'experience_points': {'read_only': True},
            # Prevent manual XP changes
            'date_joined': {'read_only': True},  # Auto-set on user creation
        }

    def create(self, validated_data):
        """Create user with hashed password."""
        validated_data['password'] = make_password(validated_data['password'])
        return super().create(validated_data)

    def update(self, instance, validated_data):
        """Ensure password is hashed when updated."""
        if 'password' in validated_data:
            validated_data['password'] = make_password(
                validated_data['password'])
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
