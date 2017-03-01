from django.shortcuts import render, redirect

from .models import Course

def index(request):
    return render(request, "courses2/index.html")

def destroy(request):
    return render(request, "courses2/destroy.html")
