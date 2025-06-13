from rest_framework import serializers
from .models import Follow


class FollowSerializer(serializers.ModelSerializer):
    """Serializer for the Follow model."""

    created_at = serializers.DateTimeField(format='%Y-%m-%d %H:%M:%S',
                                           read_only=True)

    class Meta:
        model = Follow
        fields = ['id', 'follower', 'following', 'created_at']
        read_only_fields = ['id', 'follower', 'created_at']
