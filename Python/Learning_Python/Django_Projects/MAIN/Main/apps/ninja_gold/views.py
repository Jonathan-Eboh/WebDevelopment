from django.shortcuts import render, redirect
from random import randint as ri

# Create your views here.
def index(request):

    if 'log' not in request.session:
        request.session['log'] = ""


    if 'gold' not in request.session:
        request.session['gold'] = 0
    return render(request, "ninja_gold/index.html")

def process(request):

    if request.GET['button'] == 'farm':

        request.session['gold'] += ri(10,21) #renamed randint function at toplist of module
    elif request.GET['button'] == 'cave':
        request.session['gold'] += ri(5,11)

    elif request.GET['button'] == 'house':
        request.session['gold'] += ri(2,6)

    elif request.GET['button'] == 'casino':
        request.session['gold'] += ri(-50,51)


    return redirect('/')
