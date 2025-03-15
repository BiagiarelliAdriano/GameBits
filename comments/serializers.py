from rest_framework import serializers
from .models import Comment

class CommentSerializer(serializers.ModelSerializer):
    """Serializer for the Comment model."""
    user = serializers.StringRelatedField(read_only=True)
    post = serializers.PrimaryKeyRelatedField(read_only=True)
    created_at = serializers.DateTimeField(format='%Y-%m-%d %H:%M:%S', read_only=True)
    updated_at = serializers.DateTimeField(format='%Y-%m-%d %H:%M:%S', read_only=True)

    class Meta:
        model = Comment
        fields = ['id', 'user', 'post', 'content', 'created_at', 'updated_at']
        read_only_fields = ['id', 'user', 'post', 'created_at', 'updated_at']