from rest_framework import serializers
from .models import Comment


class CommentSerializer(serializers.ModelSerializer):
    """Serializer for the Comment model."""
    author = serializers.ReadOnlyField(source='user.username')
    author_id = serializers.ReadOnlyField(source='user.id')
    profile_picture = serializers.SerializerMethodField()
    post = serializers.PrimaryKeyRelatedField(read_only=True)
    created_at = serializers.DateTimeField(format='%Y-%m-%d %H:%M:%S',
                                           read_only=True)
    updated_at = serializers.DateTimeField(format='%Y-%m-%d %H:%M:%S',
                                           read_only=True)

    class Meta:
        model = Comment
        fields = [
            'id',
            'author',
            'author_id',
            'profile_picture',
            'post',
            'content',
            'created_at',
            'updated_at',
        ]
        read_only_fields = ['id', 'author', 'author_id', 'profile_picture',
                            'post', 'created_at', 'updated_at']

    def get_profile_picture(self, obj):
        """
        Returns the URL of the comment author's profile picture,
        or None if not available.
        """
        if (
            obj.user and
            hasattr(obj.user, 'profile_picture') and
            obj.user.profile_picture
        ):
            return obj.user.profile_picture.url
        return None
