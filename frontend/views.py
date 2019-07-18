import json
from django.shortcuts import render
from django.contrib.auth import get_user_model

User = get_user_model()

def index(request):
    return render(request, 'frontend/index.html')

def users(request):
    params = json.loads(request.body)
    user = User.objects.create_user(
        email=params['email'],
        password=params['password']
    )

    user.save()