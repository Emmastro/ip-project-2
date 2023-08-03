from django.shortcuts import render
from rest_framework import generics
from .models import Contact, Author, Blog
from .serializers import ContactSerializer, AuthorSerializer, BlogSerializer
from rest_framework.response import Response 
from rest_framework.decorators import api_view
from rest_framework import status


# Create your views here.

# class ContactView(generics.ListAPIView):
#     queryset = Contact.objects.all()
#     serializer_class = ContactSerializer

# class AuthorView(generics.ListAPIView):
#     queryset = Author.objects.all()
#     serializer_class = AuthorSerializer

# class BlogView(generics.CreateAPIView):
#     queryset = Blog.objects.all()
#     serializer_class = BlogSerializer

@api_view(['GET'])
def get_contacts(request):
    contacts = Contact.objects.all()
    serializer = ContactSerializer(contacts, many=True)
    return Response(serializer.data) 

@api_view(['GET'])
def get_authors(request):
    authors = Author.objects.all()
    serializer = AuthorSerializer(authors, many=True)
    return Response(serializer.data) 

@api_view(['GET'])
def get_blogs(request):
    blogs = Blog.objects.all()
    serializer = BlogSerializer(blogs, many=True)
    return Response(serializer.data) 

@api_view(['GET'])
def get_blog(request, id):
    blog = Blog.objects.get(id=id)
    serializer = BlogSerializer(blog, many=False)
    return Response(serializer.data) 

@api_view(['POST'])
def add_contacts(request):
    serializer = ContactSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)




