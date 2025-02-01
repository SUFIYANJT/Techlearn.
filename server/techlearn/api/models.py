from django.db import models
from phonenumber_field.modelfields import PhoneNumberField


# Create your models here.
class Contact(models.Model):
    fullName = models.CharField(max_length=30)
    email = models.EmailField(unique=True)
    phone = PhoneNumberField(unique=True)
    interestedIn = models.TextField(default="")
    message = models.TextField(default="")
    
class Course(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=100, blank=False, null=False)  # Required and not null
    description = models.TextField(blank=False, null=False)  # Required and not null
    price = models.IntegerField(blank=False, null=False,default=0)  # Required and not null
    image = models.ImageField(upload_to='course_images/', blank=False, null=False,default='course_images/internship_demo.jpg')  # Required and not null
    

class CourseRegistration(models.Model):
    class Year(models.IntegerChoices):
        FIRST_YEAR = 1, '1st Year'
        SECOND_YEAR = 2, '2nd Year'
        THIRD_YEAR = 3, '3rd Year'
        FOURTH_YEAR = 4, '4th Year'

    class Aboard(models.IntegerChoices):
        YES = 1, 'Yes'
        NO = 2, 'No'
        MAY_BE = 3, 'Maybe'

    class Interest(models.IntegerChoices):
        PROGRAMMING = 1, 'Programming'
        DESIGNING = 2, 'Designing'
        NO_CODING = 3, 'Non Coding'
        HARDWARE = 4, 'Hardware'
        NON_OF_THE_ABOVE = 5, 'None of the above'

    id = models.AutoField(primary_key=True)
    fullName = models.CharField(max_length=100, blank=False, null=False)
    phone = PhoneNumberField(unique=True, blank=False, null=False)
    email = models.EmailField(unique=True, blank=False, null=False)
    college = models.CharField(max_length=250, blank=False, null=False)
    year = models.IntegerField(choices=Year.choices, blank=False, null=False)
    program = models.ForeignKey(Course, on_delete=models.CASCADE, blank=False, null=False)
    ieeMember = models.BooleanField(blank=False, null=False)
    ieeId = models.CharField(max_length=100, blank=True, null=True)  # `blank=True` by default, conditional validation in clean()
    isReferralId = models.BooleanField(blank=False, null=False)
    referralCode = models.CharField(max_length=100)
    interestInStudingAboard = models.IntegerField(choices=Aboard.choices, blank=False, null=False)
    InterestedIn = models.IntegerField(choices=Interest.choices, blank=False, null=False)
    bill = models.CharField(max_length=100)

    def clean(self):
        # Custom validation: ieeId is required only if ieeMember is True
        if self.ieeMember and not self.ieeId:
            raise ValidationError({'ieeId': 'IEE ID is required if you are an IEE member.'})
        
        super().clean()  # Call the parent class's clean method