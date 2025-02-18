from rest_framework import serializers
from django.contrib.auth.hashers import make_password
from .models import UserProfile

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