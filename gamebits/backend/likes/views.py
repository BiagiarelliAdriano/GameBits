from rest_framework import viewsets, permissions
from rest_framework.response import Response
from rest_framework.decorators import action
from .models import Like
from posts.models import Post

class LikeViewSet(viewsets.ViewSet):
    """Handles liking, unliking, and checking if a post is liked."""
    permission_classes = [permissions.IsAuthenticated]

    def create(self, request, post_id=None):
        """Toggle like for a post (like if not liked, unlike if already liked)."""
        post = Post.objects.get(id=post_id)
        like, created = Like.objects.get_or_create(user=request.user, post=post)

        if not created:
            like.delete()
            return Response({"liked": False, "message": "Post unliked"})
        
        return Response({"liked": True, "message": "Post liked"})

    @action(detail=False, methods=['get'], url_path='is_liked/(?P<post_id>[^/.]+)')
    def is_liked(self, request, post_id=None):
        """Check if the logged-in user has liked a specific post."""
        post = Post.objects.get(id=post_id)
        liked = Like.objects.filter(user=request.user, post=post).exists()
        return Response({"liked": liked})
