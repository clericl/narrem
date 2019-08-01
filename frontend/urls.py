from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('api/users', views.users),
    path('api/session', views.user_login)
]