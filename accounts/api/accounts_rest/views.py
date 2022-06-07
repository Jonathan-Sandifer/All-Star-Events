from .models import Preferences, User
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from common.json import ModelEncoder
import json
# Create your views here.



class PreferenceListEncoder(ModelEncoder):
    model = Preferences
    properties = ["name"]
    # encoders = {
    #     "Users": UserListEncoder
    # }

class UserEncoder(ModelEncoder):
    model = User
    properties = ["id", "username", "email", "first_name", "last_name"]

class UserListEncoder(ModelEncoder):
    model = User
    properties = ["id", "username", "email", "password"]
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

@require_http_methods(["GET", "POST"])
def api_list_users(request):
    if request.method == "GET":
        users = User.objects.all()
        return JsonResponse(
            {"users": users},
            encoder=UserListEncoder,
            safe=False
        )
    elif request.method == "POST":
        content = json.loads(request.body)
        print("@@@@@@@@@", content)
        user = User.objects.create_user(**content)
        return JsonResponse(
            user,
            encoder=UserEncoder,
            safe=False,
        )

@require_http_methods(["GET"])
def api_user_token(request):
    if "jwt_access_token" in request.COOKIES:
        token = request.COOKIES["jwt_access_token"]
        return JsonResponse(
            {"token": token,},
        )
    response = JsonResponse({"detail": "no session"})
    response.status_code = 404
    return response



#  @@@@@@@@@ {'username': 'user', 'email': '123@gmail.com',
#  'password': '2843', 'first_name': '', 'last_name': ''}