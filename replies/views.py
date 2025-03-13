from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from rest_framework.exceptions import PermissionDenied
from replies.models import Reply
from .serializers import ReplySerializer


# Create your views here.
class ReplyViewSet(viewsets.ModelViewSet):
    queryset = Reply.objects.all()
    serializer_class = ReplySerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        """Override the default perfor_create method to associate user with the reply."""
        serializer.save(user=self.request.user)

    def perform_update(self, serializer):
        """Override the update method to ensure only the owner can edit the reply."""
        reply = self.get_object()
        if reply.user != self.request.user:
            raise PermissionDenied("You do not have permission to edit this reply.")
        serializer.save()

    def perform_destroy(self, instance):
        """Override the destroy method to ensure only the owner cna delete the reply."""
        if instance != self.request.user:
            raise PermissionDenied("You do not have permission to delete this reply.")
        instance.delete()