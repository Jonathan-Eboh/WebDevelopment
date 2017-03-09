from django.shortcuts import render, redirect, HttpResponse
from django.contrib import messages
from django.core.urlresolvers import reverse
# from .models import User, Quote, Favorite!!!!!!!!!!!

# Create your views here.
#Our landing page with out login form
def index(request):
    return render(request, 'travel_buddy/index.html')

#Our function to listen out for and process the user submitted data from the login form
#Will redirect to the landing page on sucessful register
def register(request):
    return redirect(reverse('index'))

#upon sucessfully loging in the user will be brought to the dashboard through this route
def login(request):
    return redirect(reverse('dashboard'))


#The "home page" for this project upon sucessful login the user will be brought to this page
def dashboard(request):
    return render(request, 'travel_buddy/dashboard.html')

#This funciton will ultimately bring us to our Add Plan page were we will
#allow the user to specify addtiional plans as well as details about those plans
def add_plan(request):
    return render(request, 'travel_buddy/add_plan.html')

def create_plan(request):
    print "cat" , "*" * 50
    return redirect(reverse('add_plan'))


#This will be our page were we display the information given to us from add try as well as
#displaying the other users who have decided to join on a given trip
def destination(request):
    return render(request, 'travel_buddy/destination.html')
