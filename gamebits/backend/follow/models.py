from django.db import models
from users.models import UserProfile
from api.mixins import CreatedAtMixin

# Create your models here.
class Follow(CreatedAtMixin):
    follower = models.ForeignKey(UserProfile, related_name="following", on_delete=models.CASCADE)
    following = models.ForeignKey(UserProfile, related_name="followers", on_delete=models.CASCADE)

    class Meta:
        unique_together = ('follower', 'following')

    def __str__(self):
        return f"{self.follower.username} follows {self.following.username}"