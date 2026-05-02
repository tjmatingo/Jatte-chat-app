from django.urls import path, include
from .views import *
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
# Registering the viewset with the requested variable name/endpoint
router.register(r'message', ChatMessageViewSet, basename='mainChat')

urlpatterns = [
    path('', include(router.urls)),
    path('jatteAbout/', jatteAbout),
]