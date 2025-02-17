from django.db import models
from datetime import datetime

# Mixin for models that need a 'created_at' field
class CreatedAtMixin(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        abstract = True