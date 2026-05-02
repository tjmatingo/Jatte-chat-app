from django.urls import path
from .views import *

urlpatterns = [
    path('mainChat/', mainChat),
    path('jatteAbout/', jatteAbout),
]