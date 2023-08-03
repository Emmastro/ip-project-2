from django.db import models

# Create your models here.

class Contact(models.Model):
    name = models.CharField(max_length=200, default="")
    email = models.CharField(max_length=200, default="")
    message = models.TextField(default="")
    created_at = models.DateTimeField(auto_now_add=True)

class Author(models.Model):
    name = models.CharField(max_length=100, blank=False, unique=True)

class Blog(models.Model):
    # author = models.ForeignKey(Author, on_delete=models.PROTECT, blank=False)
    author = models.CharField(max_length=200, blank=False)
    title = models.CharField(max_length=200, default="")
    content = models.TextField(default="")
    created_at = models.DateTimeField(auto_now_add=True)

