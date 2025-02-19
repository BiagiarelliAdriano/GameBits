from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from posts.models import Post
from api.serializers import PostSerializer

# Create your views here.
class PostListCreateView(generics.ListCreateAPIView):
    """View to list and create posts."""
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        """Override perform_create to associate the post with the logged-in user."""
        serializer.save(author=self.request.user)

class PostDetailView(generics.RetrieveUpdateDestroyAPIView):
    """View to retrieve, update, or delete a single post."""
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        """Ensure users can only edit or delete their own posts."""
        return Post.objects.filter(author=self.request.user)