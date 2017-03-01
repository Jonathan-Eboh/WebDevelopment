from django.conf.urls import url
from . import views

urlpatterns =[
    url(r'^$', views.index, name='index'),
    url(r'^success/(?P<id>\d+)$', views.success, name='success'),
    url(r'^register$', views.register, name='register')
]
