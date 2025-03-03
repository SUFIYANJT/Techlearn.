"""
URL configuration for techlearn project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from api.views import ContactFormView,CourseFormView,CourseRegisterationFormView,CourseListView,CheckPriceView
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('admin/', admin.site.urls),
    path('contact/', ContactFormView.as_view(), name='submit-contact'),  # ✅ Use `.as_view()`
    path('course/', CourseFormView.as_view(), name='submit-course'),  # ✅ Use `.as_view()`
    path('courseregisteration/', CourseRegisterationFormView.as_view(), name='submit-courseregisteration'),  # ✅ Use `.as_view()`
    path('courses/', CourseListView.as_view(), name='course-list'),
    path('checkPrice/',CheckPriceView.as_view(),name="checkprice")
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
