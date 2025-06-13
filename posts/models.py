from django.db import models
from django.contrib.auth import get_user_model
from .mixins import CreatedAtUpdatedAtMixin


# Create your models here.
class Post(CreatedAtUpdatedAtMixin):
    """
    Model representing a post created by a user.
    """
    author = models.ForeignKey(
        get_user_model(),
        on_delete=models.CASCADE,
        related_name='posts',
        verbose_name='author',
    )
    title = models.CharField(max_length=255, verbose_name="Post Title")
    game = models.CharField(max_length=100, verbose_name="Game")
    content = models.TextField(verbose_name="Content")
    image = models.ImageField(upload_to='images/', blank=True, null=True,
                              verbose_name="Post Image")

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f"{self.title} by {self.author.username}"
