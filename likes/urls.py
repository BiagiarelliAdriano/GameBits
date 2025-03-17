from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import LikeViewSet

router = DefaultRouter()
router.register(r'likes', LikeViewSet, basename='likes')

urlpatterns = [
    path('posts/<int:post_id>/like/', LikeViewSet.as_view({'post': 'create'}),
         name='like-post'),
    path('', include(router.urls))
]
