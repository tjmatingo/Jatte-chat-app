from django.urls import path, include
from .views import *
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
# Registering the viewset with the requested variable name/endpoint
router.register('message', ChatMessageViewSet, basename='message')
router.register('chat', ChatViewSet, basename='chat')

urlpatterns = [
    path('', include(router.urls)),
    path('jatteAbout/', jatteAbout),
]