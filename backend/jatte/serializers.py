from .models import *
from rest_framework import serializers
from accounts.models import User

class UserSimpleSerializer(serializers.ModelSerializer):
    """Simple serializer to show participant details (ID and Username)."""
    class Meta:
        model = User
        fields = ['id', 'username']

class ChatMessageSerializer(serializers.ModelSerializer):
    sender_details = UserSimpleSerializer(source='sender', read_only=True)
    # attachment is handled as a URL string by pyuploadcare
    attachment_url = serializers.SerializerMethodField()

    class Meta:
        model = ChatMessage
        fields = ['id', 'chat', 'sender', 'sender_details', 'message', 'attachment', 'attachment_url', 'timestamp']
        read_only_fields = ['sender', 'timestamp']

    def get_attachment_url(self, obj):
        return str(obj.attachment) if obj.attachment else None

class ChatSerializer(serializers.ModelSerializer):
    participants_details = UserSimpleSerializer(source='participants', many=True, read_only=True)
    # This brings in the message history for the thread
    messages = ChatMessageSerializer(many=True, read_only=True)
    last_message = serializers.SerializerMethodField()

    class Meta:
        model = Chat
        fields = ['id', 'participants', 'participants_details', 'messages', 'last_message', 'created_at', 'updated_at']

    def get_last_message(self, obj):
        last_msg = obj.messages.last()
        if last_msg:
            return ChatMessageSerializer(last_msg).data
        return None