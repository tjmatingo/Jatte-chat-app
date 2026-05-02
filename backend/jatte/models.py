from django.db import models
from django.conf import settings
from pyuploadcare.dj.models import ImageField # Or FileField for any file type
# Create your models here.

# chatroom  model 
class Chat(models.Model):
    participants = models.ManyToManyField(settings.AUTH_USER_MODEL, related_name='threads')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"Thread {self.id}"

class ChatMessage(models.Model):
    thread = models.ForeignKey(Chat, on_delete=models.CASCADE, related_name='messages')
    sender = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='sent_messages')
    message = models.TextField()

    # Uploadcare field
    # manual_crop can be set to '4:3', '16:9', etc.
    attachment = ImageField(blank=True, null=True, manual_crop="")

    timestamp = models.DateTimeField(auto_now_add=True)
    # is_read = models.BooleanField(default=False)

    class Meta:
        ordering = ['timestamp']

    def __str__(self):
        content = self.message[:20] if self.message else "Attachment"
        return f"{self.sender.username}: {self.message[:20]}"