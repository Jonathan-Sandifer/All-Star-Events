import djwto.authentication as auth
from django.views.decorators.http import require_http_methods
from django.http import JsonResponse
import json
from .models import Event
from common.json import ModelEncoder 


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
    event = Event.objects.create(**content)
    return JsonResponse(
        event,
        encoder=EventListEncoder,
        safe=False,
    )

