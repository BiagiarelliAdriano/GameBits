from django.urls import path, include
from rest_framework.routers import DefaultRouter
from follow import views

router = DefaultRouter()
router.register(r'', views.FollowViewSet, basename='follow')

urlpatterns = [
    path('', include(router.urls)),
]
