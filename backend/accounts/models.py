from django.contrib.auth.models import AbstractUser, PermissionsMixin, UserManager
from django.db import models
import uuid
from pyuploadcare.dj.models import ImageField

class User(AbstractUser):
    
    """
    Custom User model for the accounts app.
    Using AbstractUser keeps the default fields (username, email, etc.)
    but allows for future customization.
    """
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    # Bio or status for the chat profile
    bio = models.TextField(max_length=500, blank=True)
    
    # Uploadcare integration for the profile picture
    # 'manual_crop' ensures users can center their faces for the chat UI
    profile_photo = ImageField(blank=True, null=True, manual_crop="1:1")
    
    # You can add more fields like phone number, online status, etc.
    is_online = models.BooleanField(default=False)

    def __str__(self):
        return self.username