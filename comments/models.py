from django.db import models
from users.models import UserProfile
from posts.models import Post
from .mixins import CreatedAtUpdatedAtMixin


# Create your models here.
class Comment(CreatedAtUpdatedAtMixin):
    """Comment model linking a user to a post with content and timestamps."""
    user = models.ForeignKey(UserProfile, on_delete=models.CASCADE,
                             related_name="comments")
    post = models.ForeignKey(Post, on_delete=models.CASCADE,
                             related_name="comments")
    content = models.TextField()

    def __str__(self):
        return f"Comment by {self.user.username} on {self.post.title}"
