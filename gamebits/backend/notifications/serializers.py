from rest_framework import serializers
from .models import Notification
from posts.models import Post
from comments.models import Comment
from replies.models import Reply

class NotificationSerializer(serializers.ModelSerializer):
    # Get the user's username as part of the notification response for convenience
    user = serializers.StringRelatedField()
    created_by = serializers.StringRelatedField()

    post = serializers.PrimaryKeyRelatedField(queryset=Post.objects.all(), required=False)
    comment = serializers.PrimaryKeyRelatedField(queryset=Comment.objects.all(), required=False)
    reply = serializers.PrimaryKeyRelatedField(queryset=Reply.objects.all(), required=False)
    created_at = serializers.DateTimeField(format='%Y-%m-%d %H:%M:%S', read_only=True)
    updated_at = serializers.DateTimeField(format='%Y-%m-%d %H:%M:%S', read_only=True)

    notification_type_display = serializers.CharField(source='get_notification_type_display', read_only=True)

    class Meta:
        model = Notification
        fields = ['id', 'user', 'created_by', 'notification_type', 'notification_type_display', 'content',
                  'post', 'comment', 'reply', 'is_read', 'created_at']
        read_only_fields = ['id', 'created_at', 'user', 'created_by']