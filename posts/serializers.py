from rest_framework import serializers
from posts.models import Post

class PostSerializer(serializers.ModelSerializer):
    """Serializer for the Post model."""
    
    class Meta:
        model = Post
        fields = ['id', 'author', 'title', 'game', 'image', 'content', 'created_at', 'updated_at']