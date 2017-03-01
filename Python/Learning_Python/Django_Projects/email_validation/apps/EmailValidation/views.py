from django.shortcuts import render, redirect
from django.contrib import messages
from .models import Email
from django.urls import reverse



# Create your views here.
def index(request):
    return render(request, "EmailValidation/index.html")


def process(request):
#process handles connecting our models(logic) to our template(appearance)
    if Email.userManager.registration(request.POST['userEmail']):#checks to see if the email was entered
        Email.userManager.create(user_email=request.POST['userEmail'])#if it is it creates a new entry in the data base in the category called user_email, with the email that was registered by the user
        print('success','*' * 50)
        messages.success(request, "Congrats your email" + " " + request.POST['userEmail'] + " " + "is valid!")
        return redirect('/success')#sends us back to the url that we arbitrialy named success
    else:
        messages.warning(request, "INVALID EMAIL! CANT YOU TYPE!?")
        print('fail','*' * 50)
        return redirect('/')

def success(request):
    context ={# this is responsible for displaying our list of added emails
        "emails": Email.userManager.all()
    }

    return render(request,"EmailValidation/success.html", context)


def delete_confrimation(request, id):
    context = {
        "email": Email.userManager.get(id=id) #grabs the implicit id associated with a given email
    }
    return render(request, "EmailValidation/delete.html", context)

def delete(request, id):
    this = Email.userManager.get(id=id)
    this.delete()
    return redirect('/success')

def return_home(request): #get this to work
    if request.method == "GET":
        return redirect('/')
