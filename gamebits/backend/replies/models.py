from django.db import models
from users.models import UserProfile
from comments.models import Comment
from api.mixins import CreatedAtMixin

# Create your models here.
class Reply(CreatedAtMixin):
    user = models.ForeignKey(UserProfile, on_delete=models.CASCADE, related_name='replies')
    comment = models.ForeignKey(Comment, on_delete=models.CASCADE, related_name='replies')
    content = models.TextField()
    parent_reply = models.ForeignKey('self', null=True, blank=True, on_delete=models.CASCADE, related_name='nested_replies')

    class Meta:
        ordering = ['created_at']
    
    def __str__(self):
        return f"Reply by {self.user.username} to comment {self.comment.id}"