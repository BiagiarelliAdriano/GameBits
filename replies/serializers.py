from rest_framework import serializers
from .models import Reply
from users import UserProfileSerializer
from comments.serializers import CommentSerializer

class ReplySerializer(serializers.ModelSerializer):
    user = UserProfileSerializer()
    comment = CommentSerializer()
    parent_reply = serializers.PrimaryKeyRelatedField(queryset=Reply.objects.all(), required=False) # Nested replies
    created_at = serializers.DateTimeField(format='%Y-%m-%d %H:%M:%S', read_only=True)
    updated_at = serializers.DateTimeField(format='%Y-%m-%d %H:%M:%S', read_only=True)

    class Meta:
        model = Reply
        fields = ['id', 'user', 'comment', 'content', 'created_at', 'parent_reply']
        read_only_fields = ['id', 'created_at']