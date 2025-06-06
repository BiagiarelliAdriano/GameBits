from rest_framework import viewsets, permissions, status
from rest_framework.response import Response
from rest_framework.decorators import action
from django.shortcuts import get_object_or_404
from follow.models import Follow
from .serializers import FollowSerializer
from users.models import UserProfile


# Create your views here.
class FollowViewSet(viewsets.ModelViewSet):
    queryset = Follow.objects.all()
    serializer_class = FollowSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        # Optional: filter to only the current user's follows if needed
        return Follow.objects.filter(follower=self.request.user)

    @action(detail=False, methods=['post'], url_path='toggle/(?P<following_id>[^/.]+)')
    def toggle_follow(self, request, following_id=None):
        following = get_object_or_404(UserProfile, id=following_id)

        if request.user == following:
            return Response({"error": "You cannot follow yourself"}, status=status.HTTP_400_BAD_REQUEST)

        follow, created = Follow.objects.get_or_create(follower=request.user, following=following)

        if not created:
            follow.delete()
            action_performed = "unfollowed"
        else:
            action_performed = "followed"

        followers_count = Follow.objects.filter(following=following).count()
        is_following = Follow.objects.filter(follower=request.user, following=following).exists()

        return Response({
            "message": f"{action_performed} successfully",
            "following_id": is_following,         # True if following, False if unfollowed
            "followers_count": followers_count,   # Updated number of followers
        }, status=status.HTTP_200_OK)
