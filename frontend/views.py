from django.shortcuts import render
from django.contrib.auth.models import User

# Create your views here.

def index(request):
    return render(request, 'frontend/index.html')

def users(request):
    params = request.POST.user

    user = User.objects.create_user(
        email = params.email,
        password = params.password
    )

    user.save()