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
    permission_classes = [permissions.AllowAny]

    # so i can use query_params and get_queryset
    def get_queryset(self):
        """
        Base queryset: messages from chats where user participates.
        Override list() to further filter by chat_id if provided.
        """
        return ChatMessage.objects.filter(chat__participants=self.request.user)

    def list(self, request, *args, **kwargs):
        """
        Only return messages from threads where the 
        current user is a participant.
        """
        queryset = self.filter_queryset(self.get_queryset())
        chat_id = self.request.query_params.get('chat')
        if chat_id:
            queryset = queryset.filter(chat_id=chat_id)
        serializer_ret = self.get_serializer(queryset, many=True)
        return Response(serializer_ret.data)

    
    def create(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            serializer.save(sender=self.request.user)
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=400)
            

    def update(self, request, pk=None):
        chat = self.get_queryset(pk=pk)
        serializer = self.serializer_class(chat, data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=400)
        

    def retrieve(self, request, pk=None):
        chat = self.get_queryset(pk=pk)
        serializer = self.serializer_class(chat)
        return Response(serializer.data)

    def destroy(self, request, pk=None):
        chat = self.get_queryset(pk=pk)
        chat.delete()
        return Response(status=204)

class ChatViewSet(viewsets.ModelViewSet):
    serializer_class = ChatSerializer
    permission_classes = [permissions.AllowAny]

    # so i can use query_params and get_queryset
    def get_queryset(self):
        """
        Base queryset: messages from chats where user participates.
        Override list() to further filter by chat_id if provided.
        """
        return Chat.objects.all()

    def list(self, request, *args, **kwargs):
        """
        Return only the chat threads where the 
        current user is listed in participants.
        """
        queryset = self.filter_queryset(self.get_queryset())
        serializer_ret = self.get_serializer(queryset, many=True)
        return Response(serializer_ret.data)
    
    def create(self, serializer):
        """
        When creating a new chat, automatically add 
        the creator as a participant.
        """

        if serializer.is_valid():
            chat = serializer.save()
            chat.participants.add(self.request.user)
    
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=400)
    
    
            

    def update(self, request, pk=None):
        chat = self.get_queryset(pk=pk)
        serializer = self.serializer_class(chat, data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=400)
        

    def retrieve(self, request, pk=None):
        chat = self.get_queryset(pk=pk)
        serializer = self.serializer_class(chat)
        return Response(serializer.data)

    def destroy(self, request, pk=None):
        chat = self.get_queryset(pk=pk)
        chat.delete()
        return Response(status=204)