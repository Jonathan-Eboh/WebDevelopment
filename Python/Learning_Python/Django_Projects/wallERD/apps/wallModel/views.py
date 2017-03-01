from django.shortcuts import render, redirect

# Create your views here.

def index(result):
    return render(request, "wallModel/index.html")
