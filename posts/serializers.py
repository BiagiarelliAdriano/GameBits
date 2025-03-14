from rest_framework import serializers
from posts.models import Post

class PostSerializer(serializers.ModelSerializer):
    """Serializer for the Post model."""
    has_liked = serializers.SerializerMethodField()
    
    class Meta:
        model = Post
        fields = ['id', 'author', 'title', 'game', 'image', 'content', 'created_at', 'updated_at', 'has_liked']
    
    def get_has_liked(self, obj):
        """Check if the current user has liked the post."""
        request = self.context.get('request')
        if request and request.user.is_authenticated:
            return obj.likes.filter(user=request.user).exists()
        return False