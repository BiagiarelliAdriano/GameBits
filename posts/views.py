from rest_framework import generics
from rest_framework.permissions import (
    IsAuthenticated,
    IsAuthenticatedOrReadOnly,
)

from rest_framework.parsers import MultiPartParser, FormParser
from posts.models import Post
from .serializers import PostSerializer
from likes.models import Like
from follow.models import Follow
from django.db.models import Q


# Create your views here.
class PostListCreateView(generics.ListCreateAPIView):
    """View to list and create posts."""
    serializer_class = PostSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]
    parser_classes = (MultiPartParser, FormParser)

    def get_queryset(self):
        """Allow filtering by liked, followed, author, and search."""
        user = self.request.user
        queryset = Post.objects.all().order_by('-created_at')

        # Filter by author
        author_id = self.request.query_params.get('author')
        if author_id:
            queryset = queryset.filter(author__id=author_id)

        # Filter by liked or followed
        filter_type = self.request.query_params.get('filter')
        if user.is_authenticated:
            if filter_type == 'liked':
                liked_posts = Like.objects.filter(user=user).values_list(
                    'post_id', flat=True)
                queryset = queryset.filter(id__in=liked_posts)

            elif filter_type == 'followed':
                followed_users = Follow.objects.filter(
                    follower=user).values_list('following_id', flat=True)
                queryset = queryset.filter(author__id__in=followed_users)

        # Search by title, game, or author username
        search_query = self.request.query_params.get('search')
        if search_query:
            queryset = queryset.filter(
                Q(title__icontains=search_query) |
                Q(game__icontains=search_query) |
                Q(author__username__icontains=search_query)
            )

        return queryset.select_related('author').prefetch_related('likes')

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)

    def get_serializer_context(self):
        context = super().get_serializer_context()
        context['request'] = self.request
        return context

class PostDetailView(generics.RetrieveUpdateDestroyAPIView):
    """View to retrieve, update, or delete a single post."""
    serializer_class = PostSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Post.objects.select_related('author')

    def get_serializer_context(self):
        """Include the request context for has_liked."""
        context = super().get_serializer_context()
        context['request'] = self.request
        return context
