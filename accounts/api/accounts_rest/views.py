from pyexpat import model
import re
from django.shortcuts import render
from .models import Preferences, User
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from common.json import ModelEncoder
# Create your views here.



class PreferenceListEncoder(ModelEncoder):
    model = Preferences
    properties = ["name"]
    # encoders = {
    #     "Users": UserListEncoder
    # }

class UserListEncoder(ModelEncoder):
    model = User
    properties = ["id", "user_name", "email", "password"]
    encoders = {
        "preferences": PreferenceListEncoder
    }

@require_http_methods(["GET"])
def api_list_preferences(request):
    if request.method == "GET":
        preferences = Preferences.objects.all()
        return JsonResponse (
            {"preferences": preferences},
            encoder=PreferenceListEncoder,
            safe=False
        )

@require_http_methods(["GET"])
def api_list_users(request):
    if request.method == "GET":
        users = User.objects.all()
        return JsonResponse(
            {"users": users},
            encoder=UserListEncoder,
            safe=False
        )