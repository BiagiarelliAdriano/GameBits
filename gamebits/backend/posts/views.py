from rest_framework import generics
from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly
from posts.models import Post
from api.serializers import PostSerializer
from likes.models import Like
from follow.models import Follow

# Create your views here.
class PostListCreateView(generics.ListCreateAPIView):
    """View to list and create posts."""
    serializer_class = PostSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]

    def get_queryset(self):
        """Allow filtering by liked and followed posts."""
        user = self.request.user
        queryset = Post.objects.all().order_by('-created_at')

        filter_type = self.request.query_params.get('filter')

        if user.is_authenticated:
            if filter_type == 'liked':
                liked_posts = Like.objects.filter(user=user).values_list('post_id', flat=True)
                queryset = queryset.filter(id__in=liked_posts)
            
            elif filter_type == 'followed':
                followed_users = Follow.objects.filter(follower=user).values_list('following_id', flat=True)
                queryset = queryset.filter(author__id__in=followed_users)
        
        return queryset

    def perform_create(self, serializer):
        """Override perform_create to associate the post with the logged-in user."""
        serializer.save(author=self.request.user)

class PostDetailView(generics.RetrieveUpdateDestroyAPIView):
    """View to retrieve, update, or delete a single post."""
    serializer_class = PostSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        """Ensure users can only edit or delete their own posts."""
        return Post.objects.all()