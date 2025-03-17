from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .models import Notification
from .serializers import NotificationSerializer


# Create your views here.
class NotificationViewSet(viewsets.ModelViewSet):
    """Handles listing and updating notifications."""
    queryset = Notification.objects.all().order_by('-created_at')
    serializer_class = NotificationSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        """Filter notifications to show only those for the logged-in user."""
        return Notification.objects.filter(user=self.request.user)

    def list(self, request):
        """Returns a list of notifications with unread first, then read
        notifications."""
        unread_notifications = Notification.objects.filter(
            user=request.user, is_read=False).order_by('-created_at')
        read_notifications = Notification.objects.filter(
            user=request.user, is_read=True).order_by('-created_at')

        unread_serializer = self.get_serializer(unread_notifications,
                                                many=True)
        read_serializer = self.get_serializer(read_notifications, many=True)

        return Response({
            'unread_notifications': unread_serializer.data,
            'read_notifications': read_serializer.data
        })

    def update(self, request):
        """Mark a notification as read and manage the max limit of read
        notifications."""
        notification = self.get_object()

        # Mark the notification as read
        notification.is_read = True
        notification.save()

        # If there are more than 50 read notifications, delete the oldest one
        read_notifications = Notification.objects.filter(
            user=request.user, is_read=True).order_by('created_at')
        if read_notifications.count() > 50:
            read_notifications.first().delete()

        return Response({
            "message": "Notification marked as read."
        }, status=status.HTTP_200_OK)
