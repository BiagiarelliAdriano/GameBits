from django.db import models
from django.contrib.auth.models import AbstractUser
from api.mixins import CreatedAtUpdatedAtMixin
import cloudinary
import cloudinary.models

# Create your models here.
class UserProfile(AbstractUser, CreatedAtUpdatedAtMixin):
    profile_picture = models.ImageField(upload_to='images/', default='default_profile_snzudq' , blank=True, null=True)
    bio = models.TextField(blank=True, max_length=500)
    level = models.IntegerField(default=1)
    experience_points = models.IntegerField(default=0)
    is_active = models.BooleanField(default=True)

    groups = models.ManyToManyField(
        'auth.Group',
        related_name='userprofile_groups',
        blank=True,
    )
    user_permissions = models.ManyToManyField(
        'auth.Permission',
        related_name='userprofile_permissions',
        blank=True,
    )

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f"{self.username}'s profile"