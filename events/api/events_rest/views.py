import djwto.authentication as auth
from django.views.decorators.http import require_http_methods
from django.http import JsonResponse
import json
from .models import Event
from common.json import ModelEncoder 

import djwto.tokens as tokens
from djwto.exceptions import JWTValidationError
from django.core.exceptions import ImproperlyConfigured


class EventListEncoder(ModelEncoder):
    model = Event
    properties = ["name", "event_type", "city", "venue_name", "picture_url"]


# Create your views here.
@auth.jwt_login_required
def protected_view(request):
    return JsonResponse({"received": request.payload})


def public_view(request):
    return JsonResponse({"received": request.method})

@require_http_methods(["POST"])
def save_events(request):
    content = json.loads(request.body)
    token = content.get("token")
    content.pop(token)
    event = Event.objects.create(**content)
    return JsonResponse(
        event,
        encoder=EventListEncoder,
        safe=False,
    )

def get_user_information(request):
    try:
        token = auth.get_raw_token_from_request(request)
        print("this is the token!!!!", token)
        payload = tokens.decode_token(token)
        request.payload = payload
        return payload
    except (JWTValidationError, ImproperlyConfigured) as err:
        print(err)
        return None