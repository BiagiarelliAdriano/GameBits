from django.db import models
from django.contrib.auth import get_user_model
from api.mixins import CreatedAtUpdatedAtMixin
from posts.models import Post
from comments.models import Comment
from replies.models import Reply

# Create your models here.
class Notification(CreatedAtUpdatedAtMixin):
    NOTIFICATION_TYPES = [
        ('likes', 'Likes'),
        ('follow', 'Follow'),
        ('Comment', 'Comment'),
        ('reply', 'Reply'),
        ('level_up', 'Level Up'),
    ]

    user = models.ForeignKey(get_user_model(), on_delete=models.CASCADE, related_name="notifications")
    created_by = models.ForeignKey(get_user_model(), on_delete=models.CASCADE, related_name="created_notifications")
    notification_type = models.CharField(max_length=50, choices=NOTIFICATION_TYPES)
    content = models.TextField()

    post = models.ForeignKey(Post, on_delete=models.CASCADE, null=True, blank=True)
    comment = models.ForeignKey(Comment, on_delete=models.CASCADE, null=True, blank=True)
    reply = models.ForeignKey(Reply, on_delete=models.CASCADE, null=True, blank=True)

    is_read = models.BooleanField(default=False)

    class Meta:
        ordering = ['-created_at']
    
    def __str__(self):
        return f"{self.user.username} - {self.notification_type}"