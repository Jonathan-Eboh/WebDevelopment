from django.shortcuts import render, redirect

# Create your views here.
def index(request):
    return render(request, "surveyForm/index.html")

def result(request):
    if request.method == 'POST':

        if "count" not in request.session: #sessions are dictionaries in python so you can operate on them as such
            request.session['count'] = 0
        else:
            request.session['count'] += 1

        request.session['name'] = request.POST['name']
        request.session['location'] = request.POST['location']
        request.session['language'] = request.POST['language']
        request.session['comment'] = request.POST['comment']

    return redirect("/success")


def success(request):
    return render(request, "surveyForm/result.html")
