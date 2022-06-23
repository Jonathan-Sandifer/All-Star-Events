import djwto.authentication as auth
from django.http import JsonResponse

# import json
# from .models import Event , BookmarkedEvent
# from common.json import ModelEncoder

# import djwto.tokens as tokens
# from djwto.exceptions import JWTValidationError
# from django.core.exceptions import ImproperlyConfigured
# import jwt


# class ParkListEncoder(ModelEncoder):
#     model = Event
#     properties = ["name", "state", "description",  "picture_url"]

# Create your views here.
@auth.jwt_login_required
def protected_view(request):
    return JsonResponse({"received": request.payload})


def public_view(request):
    return JsonResponse({"received": request.method})