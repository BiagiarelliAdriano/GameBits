from rest_framework import serializers
from posts.models import Post

class PostSerializer(serializers.ModelSerializer):
    """Serializer for the Post model."""

    created_at = serializers.DateTimeField(format='%Y-%m-%d %H:%M:%S', read_only=True)
    updated_at = serializers.DateTimeField(format='%Y-%m-%d %H:%M:%S', read_only=True)

    class Meta:
        model = Post
        fields = ['id', 'author_id', 'title', 'game', 'image', 'content', 'created_at', 'updated_at']
        read_only_fields = ['author', 'created_at', 'updated_at']