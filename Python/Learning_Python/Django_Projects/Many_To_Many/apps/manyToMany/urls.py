from django.conf.urls import url, include
from . import views

urlpatterns = [
    url(r'^$', views.index, name="index"),
    url(r'^add_user$', views.add_user, name="addUser"),
    url(r'^showResults$', views.show_results, name="showResults"),
    url(r'^showinterest/(?P<id>\d+)$', views.show_interest, name="showInterest"),
    url(r'^deleteInterest/(?P<id>\d+)$', views.delete_interest, name="deleteInterest"),
    url(r'^deleteUser/(?P<id>\d+)$', views.delete_user, name="deleteUser"),
    url(r'^', views.index, name="index"),

]
