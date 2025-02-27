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
        fields = ['id','title','description', 'price', 'image'] 
 
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
        Custom validation:
        1. Check that ieeId is provided if ieeMember is True.
        2. Check that referralCode is provided if isReferralId is True.
        """
        # Validate IEE ID if the user is an IEE member
        if data.get('ieeMember') and not data.get('ieeId'):
            raise serializers.ValidationError({'ieeId': 'IEE ID is required if you are an IEE member.'})
        
        # Validate referralCode if the user has a referral ID
        if data.get('isReferralId') and not data.get('referralCode'):
            raise serializers.ValidationError({'referralCode': 'Referral Code is required if you have a referral ID.'})

        return data