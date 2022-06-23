from django.urls import path

from .views import protected_view, public_view, save_parks

urlpatterns = [
    path("protected/", protected_view, name="protected_view"),
    path("public/", public_view, name="public_view"),
    path("saved_events/", save_parks, name="saved_events"),
]
