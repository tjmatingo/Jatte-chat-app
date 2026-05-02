from .models import *
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import viewsets, permissions
from .serializers import *
from rest_framework.response import Response 



@api_view(['GET'])
def jatteAbout(request):
    return Response({"about": "Jatte means Talking in Norwegian!"})



class ChatMessageViewSet(viewsets.ModelViewSet):
    serializer_class = ChatMessageSerializer
    permission_classes = [permissions.IsAuthenticated]

    def list(self):
        """
        Only return messages from threads where the 
        current user is a participant.
        """
        queryset = ChatMessage.objects.filter(thread__participants=self.request.user)
        thread_id = self.request.query_params.get('thread')
        if thread_id:
            queryset = queryset.filter(thread_id=thread_id)
        return queryset
    
    def perform_create(self, serializer):
        """
        Automatically set the sender to the logged-in user.
        """
        serializer.save(sender=self.request.user)

class ChatViewSet(viewsets.ModelViewSet):
    serializer_class = ChatSerializer
    permission_classes = [permissions.IsAuthenticated]

    def list(self):
        """
        Return only the chat threads where the 
        current user is listed in participants.
        """
        return Chat.objects.filter(participants=self.request.user).order_by('-updated_at')

    def perform_create(self, serializer):
        """
        When creating a new chat, automatically add 
        the creator as a participant.
        """
        chat = serializer.save()
        chat.participants.add(self.request.user)