from django.urls import path, include
from rest_framework.routers import DefaultRouter
from replies import views

router = DefaultRouter()
router.register(r'replies', views.ReplyViewSet, basename='reply')

urlpatterns = [
    path('', include(router.urls)),
]
