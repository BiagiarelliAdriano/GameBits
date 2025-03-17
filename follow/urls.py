from django.urls import path, include
from rest_framework.routers import DefaultRouter
from follow import views

router = DefaultRouter()
router.register(r'follow', views.FollowViewSet, basename='follow')

urlpatterns = [
    path('', include(router.urls)),
]
