from rest_framework import viewsets, permissions, status
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework.exceptions import NotFound
from .models import Like
from posts.models import Post


class LikeViewSet(viewsets.ViewSet):
    """Handles liking, unliking, and checking if a post is liked."""
    permission_classes = [permissions.IsAuthenticated]

    def create(self, request, post_id=0):
        """Toggle like for a post (like if not liked, unlike if already liked)."""
        if not post_id or post_id == 0:
            return Response(
                {"detail": "post_id is required."},
                status=status.HTTP_400_BAD_REQUEST
            )
        try:
            post = Post.objects.get(id=post_id)
        except Post.DoesNotExist:
            raise NotFound(detail="Post not found")

        like, created = Like.objects.get_or_create(user=request.user, post=post)

        if not created:
            like.delete()
            liked = False
        else:
            liked = True

        # Recalculate post likes count
        likes_count = Like.objects.filter(post=post).count()

        return Response({
            "liked": liked,
            "likes_count": likes_count,
            "has_liked": liked,
        })
