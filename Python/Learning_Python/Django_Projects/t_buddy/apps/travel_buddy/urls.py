from django.conf.urls import url
from . import views


urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^register$', views.register, name='register'),
    url(r'^login$', views.login, name='login'),
    url(r'^dashboard$', views.dashboard, name='dashboard'),
    url(r'^add_plan$', views.add_plan, name='add_plan'),
    url(r'^create_plan$', views.create_plan, name='create_plan'),
    url(r'^destination$', views.destination, name='destination'),
]
