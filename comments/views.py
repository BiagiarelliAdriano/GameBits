from rest_framework import viewsets, permissions
from rest_framework.response import Response
from rest_framework.exceptions import PermissionDenied
from comments.models import Comment
from .serializers import CommentSerializer
from posts.models import Post
from rest_framework.pagination import PageNumberPagination


# Create your views here.
class CommentViewSet(viewsets.ModelViewSet):
    """Handles creating, retrieving, updating, and deleting comments."""
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    pagination_class = PageNumberPagination

    def perform_create(self, serializer):
        """Assign the logged-in user and post to the comment."""
        post_id = self.request.data.get('post')
        try:
            post = Post.objects.get(id=post_id)
        except Post.DoesNotExist:
            return Response({"error": "Post not found"}, status=404)

        serializer.save(user=self.request.user, post=post)

    def update(self, request, *args, **kwargs):
        """Ensure only the comment owner can update it."""
        comment = self.get_object()
        if comment.user != request.user:
            raise PermissionDenied("You can only edit your own comments.")
        return super().update(request, *args, **kwargs)

    def destroy(self, request, *args, **kwargs):
        """Ensure only the comment owner can delete it."""
        comment = self.get_object()
        if comment.user != request.user:
            raise PermissionDenied("You can only delete your own comments.")
        return super().destroy(request, *args, **kwargs)
