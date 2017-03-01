from django.conf.urls import url
from . import views           # This line is new!



urlpatterns = [
    url(r'^$', views.index)     # This line has changed!
]







# from django.conf.urls import url
#
# def index(request):
#     print "8" * 100
#     print "8" * 100
#     print "bannanapeel"
#     print "8" * 100
#     print "8" * 100
#
# urlpatterns = [
#     url(r'^$', index)
# ]







# print " I will be your future routes; HTTP request will be captured by me"
