from rest_framework import viewsets, permissions
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from follow.models import Follow
from api.serializers import FollowSerializer
from users.models import UserProfile

# Create your views here.
class FollowViewSet(viewsets.ModelViewSet):
    """Handles following and unfollowing users."""
    queryset = Follow.objects.all()
    serializer_class = FollowSerializer
    permission_classes = [permissions.IsAuthenticated]

    def create(self, request, following_id=None):
        """Toggle follow/Unfollow for a user."""
        following = get_object_or_404(UserProfile, id=following_id)

        if request.user == following:
            return Response({"error": "You cannot follow yourself"}, status=400)
        
        follow, created = Follow.objects.get_or_create(follower=request.user, following=following)

        if not created:
            follow.delete()
            return Response({"message": "Unfollowed successfully"})
        
        return Response({"message": "Followed successfully"})