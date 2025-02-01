from rest_framework import serializers
from .models import Contact
from rest_framework import serializers
from .models import Contact

class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = ['fullName', 'email', 'phone', 'interestedIn', 'message']  # ✅ Ordered as required
