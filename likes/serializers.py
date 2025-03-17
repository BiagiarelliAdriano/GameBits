from rest_framework import serializers
from .models import Like


class LikeSerializer(serializers.ModelSerializer):
    """Serializer for the Like model."""

    created_at = serializers.DateTimeField(format='%Y-%m-%d %H:%M:%S',
                                           read_only=True)

    class Meta:
        model = Like
        fields = ['id', 'user', 'post', 'created_at']
        read_only_fields = ['id', 'created_at']
