from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index), # redirects to the landing page
    url(r'^result$', views.result),#redirects to success route
    url(r'^success$', views.success)#redirects to the results page
]
