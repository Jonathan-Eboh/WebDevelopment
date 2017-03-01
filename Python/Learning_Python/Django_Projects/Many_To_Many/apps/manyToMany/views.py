from django.shortcuts import render, redirect
from django.contrib import messages
from .models import User, Interest
from django.urls import reverse


#index
def index(request):
    return render(request, "manyToMany/index.html")

def add_user(request):
    if request.method != "POST":
        return redirect(reverse("index"))
    else:
        if User.userManager.validateUser(request.POST):
            print "Went through", "*" * 50
            return redirect(reverse("showResults"))
        else:
            print "Did not go through", "-" * 50
            return redirect(reverse("index"))



#showResults
def show_results(request): #whenever we want to make availible, the information we are manipilating we pass it to a function in the from of a dictionary then pass that to what the function renders
    print "cat"
    context = {
    "users" : User.userManager.all() #in particular we are passing all of the data associated with our User class
    }
    print context
    return render(request, "manyToMany/results.html", context)

#showInterest
def show_interest(request,id): #needs to take id because we are going to show the interest of a specific user
    user = User.userManager.filter(id = id)
    context = {
        "profile" : user[0].interest.all() #all the inerest assoiciated with the specific implicite id field.
    }
    return render(request, "manyToMany/interests.html", context) #passing context to the render request gives the given page access to all the information inside of context

def delete_interest(request,id): #again we need id because we are trying to preform an action with a specific id
    Interest.objects.get(id=id).delete() #its ok to use .get here because we know that there is only one of what we are asking for and that it is indeed within our database
    #So we are grabing the specific user id and then running .delete() on that information
    #make sure to understand which "id" is which and what each one is doing
    return redirect(reverse("showResults"))

def delete_user(request, id):
    User.userManager.get(id=id).delete()
    #similar logic is used to delete a given user
    return redirect(reverse("showResults"))
