from django.conf.urls import url
from . import views

urlpatterns = [
	url(r"^$", views.index, name ='index'),
	url(r"^success$", views.success, name = 'success'),
    url(r'^process$', views.process, name = 'process'),
    url(r'^delete_confrimation/(?P<id>\d)$', views.delete_confrimation, name = 'delete_confrimation'),
    url(r'^delete/(?P<id>\d)$', views.delete, name = 'delete'),
    url(r'^return_home$', views.return_home, name = 'return_home')

]
