from django.db import models
from phonenumber_field.modelfields import PhoneNumberField

# Create your models here.
class Contact(models.Model):
    fullName = models.CharField(max_length=30)
    email = models.EmailField(unique=True)
    phone = PhoneNumberField(unique=True)
    interestedIn = models.TextField(default="")
    message = models.TextField(default="")