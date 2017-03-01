from django.shortcuts import render, redirect, HttpResponse
from django.contrib import messages
from .models import User
import bcrypt
from django.urls import reverse

# Create your views here.
def index(request):
    return render(request, "logNReg/index.html")
    # return render(request, "logNReg/index.html")

def register(request):
    register_check = User.userManager.validateReg(request.POST['firstname'], request.POST['lastname'],request.POST["email"], request.POST['password'], request.POST['password_confirm'])
    if register_check == False:
        messages.error(request, "Invalid Registration Information")
        return redirect('/')
    else:
        messages.success(request, "Successful Registration") #if they make it here they are already in the database because that is handeled in the models
        request.session["current_user"] = register_check["True"] #this means the the user is now logged int
        return redirect('/success/{}'.format(request.session['current_user']))#taking the returned id and placing it in the url


def login(request):
    login_check = User.userManager.login(request.POST['logEmail'],request.POST['logPassword'])
    if login_check == False:
        messages.error(request, "Invalid Login Input")
        return redirect('/')
    else:
        messages.success(request, "Successful Login!")
        request.session['current_user'] = login_check['True']
        return redirect('/success/{}').format(request.session['current_user'])

def success(request, id):
    context = {
        'user': User.userManager.filter(id=id)[0]
    }
    return render(request, "logNReg/success.html", context)
