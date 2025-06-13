from rest_framework import viewsets, permissions
from rest_framework.exceptions import PermissionDenied, NotFound
from comments.models import Comment
from .serializers import CommentSerializer
from posts.models import Post
from rest_framework.pagination import PageNumberPagination


class CommentViewSet(viewsets.ModelViewSet):
    """
    ViewSet for handling creating, retrieving, updating, and deleting comments.

    Permissions:
    - Anyone can read comments.
    - Only authenticated users can create comments.
    - Only comment owners can update or delete their comments.
    """
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    pagination_class = PageNumberPagination

    def get_queryset(self):
        """
        Filter comments by 'post' query parameter.
        Comments are ordered by newest first.
        """
        queryset = super().get_queryset()
        post_id = self.request.query_params.get('post')
        if post_id:
            queryset = queryset.filter(post_id=post_id)
        return queryset.order_by('-created_at')

    def perform_create(self, serializer):
        """
        Assign the logged-in user and the specified post to the comment.
        Raise NotFound if the post does not exist.
        """
        post_id = self.request.data.get('post')
        try:
            post = Post.objects.get(id=post_id)
        except Post.DoesNotExist:
            raise NotFound("Post not found")

        serializer.save(user=self.request.user, post=post)

    def update(self, request, *args, **kwargs):
        """
        Ensure only the comment owner can update their comment.
        """
        comment = self.get_object()
        if comment.user != request.user:
            raise PermissionDenied("You can only edit your own comments.")
        return super().update(request, *args, **kwargs)

    def destroy(self, request, *args, **kwargs):
        """
        Ensure only the comment owner can delete their comment.
        """
        comment = self.get_object()
        if comment.user != request.user:
            raise PermissionDenied("You can only delete your own comments.")
        return super().destroy(request, *args, **kwargs)
