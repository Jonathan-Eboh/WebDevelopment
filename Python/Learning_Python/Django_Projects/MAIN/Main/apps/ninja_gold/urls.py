from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index), # redirects to the landing page
    url(r'^process$', views.process)
]
