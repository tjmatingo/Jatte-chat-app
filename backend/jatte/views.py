from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response


# Create your views here.
@api_view(['GET'])
def mainChat(request):
    return Response({"message": "Hello from Django"})

@api_view(['GET'])
def jatteAbout(request):
    return Response({"about": "Jatte means Talking in Norwegian!"})

