from django.urls import path
from .views import PostListCreateView, PostDetailView

"""
URL patterns for the posts app.
Includes endpoints to list/create posts and retrieve/update/delete individual posts.
"""

urlpatterns = [
    path('', PostListCreateView.as_view(), name='post-list-create'),
    path('<int:pk>/', PostDetailView.as_view(), name='post-detail'),
]
