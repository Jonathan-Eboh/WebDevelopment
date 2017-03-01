from django.shortcuts import render, redirect
from random import choice, randint
from string import ascii_uppercase

# Create your views here.
def index(request):
    if "count" not in request.session: #sessions are dictionaries in python so you can operate on them as such
        request.session['count'] = 0
    else:
        request.session['count'] += 1

    return render(request, "randomWord/index.html")

def random(request):
    randomNumber = randint(1, 14)
    if request.GET['generate'] == 'Reset':
        request.session.clear()
    else:
        request.method == "GET"
        request.session['generate'] = (''.join(choice(ascii_uppercase) for i in range(randomNumber)))
    return redirect('/')



# if request.method == "POST"
# print request.POST
# print request.method
# request.session['name'] = request.POST['first_name']
# return redirect("/")
# else:
# return redirect("/")
