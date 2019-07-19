import json
from django.db import IntegrityError
from django.core.exceptions import ValidationError
from django.http import HttpResponse
from django.shortcuts import render
from django.contrib.auth import get_user_model, authenticate, login
from django.contrib.auth.password_validation import validate_password

User = get_user_model()

def index(request):
    return render(request, 'frontend/index.html')

def users(request):
    response = HttpResponse()
    params = json.loads(request.body)

    try:
        validate_password(params['password'])
    except ValidationError as e:
        response.status_code = 422
        response.content = e
        return response

    try:
        user = User.objects.create_user(
            email=params['email'],
            password=params['password']
        )
        user.save()
        user_login(request)
    except IntegrityError:
        response.status_code = 422
        response.content = e
        return response

def user_login(request):
    response = HttpResponse()
    params = json.loads(request.body)

    user = authenticate(
        email=params['email'],
        password=params['password']
    )

    if user is not None:
        login(request, user)
        user_res = {
            'id': user.id,
            'email': user.email
        }
        response.status_code = 200
        response.content = json.loads(user_res)
        return response
    else:
        response.status_code = 422
        return response