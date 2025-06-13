from django.db import models


# Mixin for models that need a 'created_at' field
class CreatedAtUpdatedAtMixin(models.Model):
    """Reusable model mixin to add created_at and updated_at fields."""
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True
