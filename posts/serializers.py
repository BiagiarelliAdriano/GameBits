from rest_framework import serializers
from posts.models import Post


class PostSerializer(serializers.ModelSerializer):
    """
    Serializer for Post model.
    Includes extra fields for:
    - Whether the current user has liked the post ('has_liked').
    - Count of likes ('likes_count').
    - Author information (username and id).
    - Author's profile picture URL.
    - Count of comments on the post.
    - Whether the current user is the author ('is_author').

    Requires 'request' in the serializer context to determine
    user-related fields.
    """
    has_liked = serializers.SerializerMethodField()
    likes_count = serializers.IntegerField(source='likes.count',
                                           read_only=True)
    author = serializers.ReadOnlyField(source='author.username')
    author_id = serializers.ReadOnlyField(source='author.id')
    profile_picture = serializers.SerializerMethodField()
    comments_count = serializers.SerializerMethodField()
    is_author = serializers.SerializerMethodField()

    class Meta:
        model = Post
        fields = ['id', 'author', 'author_id', 'title', 'game', 'image',
                  'content', 'created_at', 'updated_at', 'has_liked',
                  'likes_count', 'profile_picture', 'comments_count',
                  'is_author']

    def get_has_liked(self, obj):
        request = self.context.get('request')
        if request and request.user.is_authenticated:
            return obj.likes.filter(user=request.user).exists()
        return False

    def get_profile_picture(self, obj):
        profile_picture = getattr(obj.author, 'profile_picture', None)
        return profile_picture.url if profile_picture else None

    def get_comments_count(self, obj):
        return obj.comments.count()

    def get_is_author(self, obj):
        request = self.context.get('request')
        return (
            request.user.is_authenticated and request.user == obj.author
            if request else False
        )
