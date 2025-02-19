from django.db import models
from django.contrib.auth import get_user_model

# Create your models here.
class Post(models.Model):
    author = models.ForeignKey(
        get_user_model(),
        on_delete=models.CASCADE,
        related_name='posts',
        verbose_name='author',
    )
    title = models.CharField(max_length=255, verbose_name="Post Title")
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="Creation Date")
    game = models.CharField(max_length=100, verbose_name="Game Focused On")
    content = models.TextField(verbose_name="Post Content")
    image = models.ImageField(upload_to='images/', blank=True, null=True, verbose_name="Post Image")

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f"{self.title} by {self.author.username}"