from django.contrib import admin
from .models import UserProfile
from rest_framework.authtoken.models import TokenProxy
from django.apps import apps

@admin.register(UserProfile)
class UserProfileAdmin(admin.ModelAdmin):
    list_display = ('id', 'username', 'email', 'level', 'experience_points', 'is_active', 'created_at')
    search_fields = ('username', 'email')
    list_filter = ('is_active', 'created_at', 'level')

if apps.is_installed('rest_framework.authtoken'):
    try:
        admin.site.unregister(TokenProxy)
    except admin.sites.NotRegistered:
        pass
