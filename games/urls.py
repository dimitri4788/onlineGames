from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^hangwoman/$', views.hangwoman, name='hangwoman'),
    url(r'^aboutMe/$', views.aboutMe, name='aboutMe'),
]
