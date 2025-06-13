from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CommentViewSet

# URLs for the comments app using a router for CommentViewSet
router = DefaultRouter()
router.register(r'', CommentViewSet, basename='comment')

urlpatterns = [
    path('', include(router.urls)),
]
