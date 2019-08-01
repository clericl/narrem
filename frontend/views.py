import json
from django.db import IntegrityError
from django.core.exceptions import ValidationError
from django.http import JsonResponse
from django.shortcuts import render
from django.contrib.auth import get_user_model, authenticate, login
from django.contrib.auth.password_validation import validate_password

User = get_user_model()

def index(request):
    return render(request, 'frontend/index.html')

def users(request):
    params = json.loads(request.body)

    try:
        validate_password(params['password'])
    except ValidationError as e:
        response = JsonResponse(
            data={"errors": e.messages},
            status=422
        )
        return response

    try:
        user = User.objects.create_user(
            email=params['email'],
            password=params['password']
        )
        user.save()
        response = user_login(request)
        return response
    except IntegrityError:
        response = JsonResponse(
            data={"errors": "Email already in use."},
            status=422
        )
        return response

def user_login(request):
    if request.method == "POST":
        params = json.loads(request.body)

        user = authenticate(
            email=params['email'],
            password=params['password']
        )
        if user is not None:
            login(request, user)
            response = JsonResponse(
                data={
                    'id': user.id,
                    'email': user.email
                }
            )
            return response
        else:
            response = JsonResponse(
                data={"errors": "Cannot find user"},
                status=422
            )
            return response