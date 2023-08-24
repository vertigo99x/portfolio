from django.db import models
from django.utils import timezone

class Mails(models.Model):
    name = models.CharField(max_length=255, null=True)
    email = models.EmailField(max_length=254)
    subject = models.CharField(max_length=255, null=True)
    message = models.TextField(max_length=2000)
    date_added = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return f"{self.name} -> {self.subject}"
    
    class Meta:
        ordering = ['-date_added']