from django.db import models
from django.contrib.auth.models import AbstractUser
import cloudinary.models


class UserProfile(AbstractUser):
    """
    Custom user model extending Django's AbstractUser,
    adding profile picture, bio, leveling system, and timestamps.
    """
    profile_picture = cloudinary.models.CloudinaryField('image',
                                                        blank=True, null=True)
    bio = models.TextField(blank=True, max_length=500)
    level = models.IntegerField(default=1)
    experience_points = models.IntegerField(default=0)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

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
