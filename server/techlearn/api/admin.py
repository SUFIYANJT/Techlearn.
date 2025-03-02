from django.contrib import admin

from .models import Contact

@admin.register(Contact)
class UserProfileAdmin(admin.ModelAdmin):
    list_display = ('fullName', 'phone','email')


from django.contrib import admin
from django.core.exceptions import ValidationError
from .models import CourseRegistration
from django import forms

# Custom form for the admin page
class CourseRegistrationAdminForm(forms.ModelForm):
    class Meta:
        model = CourseRegistration
        fields = '__all__'

    def clean(self):
        # Custom validation: ieeId is required only if ieeMember is True
        cleaned_data = super().clean()
        ieeMember = cleaned_data.get('ieeMember')
        ieeId = cleaned_data.get('ieeId')

        if ieeMember and not ieeId:
            raise ValidationError({'ieeId': 'IEE ID is required if you are an IEE member.'})
        
        return cleaned_data

# Custom Admin view
class CourseRegistrationAdmin(admin.ModelAdmin):
    form = CourseRegistrationAdminForm  # Use the custom form with validation

    # Display specific fields in the admin panel
    list_display = ('fullName', 'phone', 'email', 'college', 'year', 'program', 'ieeMember', 'isReferralId', 'referralCode')
    
    # Add filters in the sidebar
    list_filter = ('year', 'program', 'ieeMember', 'interestInStudingAboard')
    
    # Add search functionality
    search_fields = ('fullName', 'email', 'college')

    # Add fieldsets for organizing the fields on the admin form
    fieldsets = (
        (None, {
            'fields': ('fullName', 'phone', 'email', 'college', 'year', 'program')
        }),
        ('IEE Membership', {
            'fields': ('ieeMember', 'ieeId', 'isReferralId', 'referralCode')
        }),
        ('Interest', {
            'fields': ('interestInStudingAboard', 'InterestedIn')
        }),
        ('Bill', {
            'fields': ('bill',)
        }),
    )

# Register the model and custom admin view
admin.site.register(CourseRegistration, CourseRegistrationAdmin)

from .models import Course

# Custom Admin view for Course model
class CourseAdmin(admin.ModelAdmin):
    # Display the fields you want in the list view
    list_display = ('title', 'price', 'description', 'image','link')

    # Add filters for fields
    list_filter = ('price',)  # For example, you can filter by price

    # Add search functionality
    search_fields = ('title', 'description')

    # Define how the form should be displayed in the admin panel
    fieldsets = (
        (None, {
            'fields': ('title', 'description', 'price', 'image','link')
        }),
    )

    # Optionally, add more customization such as ordering, readonly fields, etc.
    ordering = ('title',)

# Register the Course model with the custom admin view
admin.site.register(Course, CourseAdmin)
