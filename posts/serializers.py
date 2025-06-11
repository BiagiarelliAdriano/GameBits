from rest_framework import serializers
from posts.models import Post

class PostSerializer(serializers.ModelSerializer):
    has_liked = serializers.SerializerMethodField()
    likes_count = serializers.IntegerField(source='likes.count', read_only=True)
    author = serializers.ReadOnlyField(source='author.username')
    profile_picture = serializers.SerializerMethodField()

    class Meta:
        model = Post
        fields = ['id', 'author', 'title', 'game', 'image', 'content',
                  'created_at', 'updated_at', 'has_liked', 'likes_count', 'profile_picture']

    def get_has_liked(self, obj):
        request = self.context.get('request')
        if request and request.user.is_authenticated:
            return obj.likes.filter(user=request.user).exists()
        return False

    def get_profile_picture(self, obj):
        if obj.author and hasattr(obj.author, 'profile_picture') and obj.author.profile_picture:
            return obj.author.profile_picture.url
        return None