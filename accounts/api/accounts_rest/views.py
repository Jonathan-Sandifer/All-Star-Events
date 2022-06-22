from stat import SF_APPEND
from .models import Preferences, User
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from common.json import ModelEncoder
import json
import djwto.authentication as auth
# Create your views here.


class UserEncoder(ModelEncoder):
    model = User
    properties = ["id", "username", "email", "first_name", "last_name"]

class UserListEncoder(ModelEncoder):
    model = User
    properties = ["id", "username", "email", "password"]
   
class PreferenceListEncoder(ModelEncoder):
    model = Preferences
    properties = ["name"]

class UserDetailEncoder(ModelEncoder):
    model = User
    properties = ["id", "username", "email", "preferences"]
    encoders = {
        "preferences": PreferenceListEncoder(),
    }

@require_http_methods(["GET", "POST"])
def api_list_preferences(request):
    if request.method == "GET":
        preferences = Preferences.objects.all()
        return JsonResponse (
            {"preferences": preferences},
            encoder=PreferenceListEncoder,
            safe=False
        )
    else:
        content = json.loads(request.body)
        preference = Preferences.objects.create(**content)
        return JsonResponse(
            preference,
            encoder=PreferenceListEncoder,
            safe=False,
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



@require_http_methods(["GET", 'PUT'])
def api_show_user(request, pk):
    user = User.objects.get(id=pk)
    return JsonResponse(
        user,
        encoder=UserDetailEncoder,
        safe=False
    )


@auth.jwt_login_required
@require_http_methods(["PUT"])
def api_update_user(request):
    if request.method == "PUT":
        content = json.loads(request.body)
        content = content['preference']
        try:
            if "name" in content:
                preference = Preferences.objects.get(name=content["name"])
                content["name"] = preference 
                user = User.objects.get(id=request.payload['user']['id'])
                user.preferences.add(preference)
        except Preferences.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid preference"},
                status=400,
            )
        return JsonResponse(
            user,
            encoder=UserDetailEncoder,
            safe=False,
        )
        