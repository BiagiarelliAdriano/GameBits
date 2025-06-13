from django.db import models
from django.conf import settings
from posts.models import Post
from .mixins import CreatedAtUpdatedAtMixin


# Create your models here.
class Like(CreatedAtUpdatedAtMixin):
    """Model representing a 'like' by a user on a post."""
    user = models.ForeignKey(settings.AUTH_USER_MODEL,
                             on_delete=models.CASCADE)
    post = models.ForeignKey(Post, on_delete=models.CASCADE,
                             related_name="likes")

    class Meta:
        unique_together = ('user', 'post')

    def __str__(self):
        return f"{self.user.username} liked {self.post.title}"
