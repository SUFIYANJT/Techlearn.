from rest_framework import serializers
from .models import Contact
from rest_framework import serializers
from .models import Contact, Course, CourseRegistration

class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = ['fullName', 'email', 'phone', 'interestedIn', 'message']  # ✅ Ordered as required

class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = ['title','description', 'price', 'image'] 
 
class CourseRegistrationSerializer(serializers.ModelSerializer):
    class Meta:
        model = CourseRegistration
        fields = [
            'id', 'fullName', 'phone', 'email', 'college', 'year', 'program', 
            'ieeMember', 'ieeId', 'isReferralId', 'referralCode', 
            'interestInStudingAboard', 'InterestedIn', 'bill'
        ]
    def validate(self, data):
        """
        Check that ieeId is provided if ieeMember is True.
        """
        if data.get('ieeMember') and not data.get('ieeId'):
            raise serializers.ValidationError({'ieeId': 'IEE ID is required if you are an IEE member.'})
        return data