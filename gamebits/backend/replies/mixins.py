from django.db import models

# Mixin for models that need a 'created_at' field
class CreatedAtUpdatedAtMixin(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True