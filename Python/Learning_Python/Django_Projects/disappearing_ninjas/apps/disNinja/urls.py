from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index), # redirects to the landing page
    url(r'^ninjas$', views.all_ninjas),
    url(r'^ninjas/(?P<color>\w+)$', views.one_ninja)
]
