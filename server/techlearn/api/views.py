from rest_framework import status,generics
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Contact,Course
from .serializer import ContactSerializer,CourseSerializer,CourseRegistrationSerializer

class ContactFormView(APIView):
    def post(self, request):
        serializer = ContactSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()  # ✅ Saves the form data
            return Response({
                "success":True,
                "message": "Contact form submitted successfully!"
                }, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class CourseFormView(APIView):
    def post(self, request):
        serializer = CourseSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({
                "success":True,
                "message": "Course form submitted successfully!"
                
            })
        print("error is ",serializer.errors)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class CourseRegisterationFormView(APIView):
    def post(self, request):
        serializer = CourseRegistrationSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({
                "success":True,
                "message": "Course registeration form submitted successfully!"
                
            })
        print(serializer.errors)
        return Response({"message": "Something wrong with the request form data ", "errors": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
    
class CourseListView(generics.ListAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer
    

import json
from django.http import JsonResponse

def checkPrice(request):
    if request.method == "POST":
        try:
            body = json.loads(request.body.decode("utf-8"))  # Decode and parse JSON
            price = body.get("price")
            return JsonResponse({"price": price})
        except json.JSONDecodeError:
            return JsonResponse({"error": "Invalid JSON"}, status=400)
