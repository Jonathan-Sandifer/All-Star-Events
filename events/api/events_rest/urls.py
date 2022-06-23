from django.urls import path

from .views import protected_view, public_view, save_events, show_saved_events

urlpatterns = [
    path('protected/', protected_view, name="protected_view"),
    path('public/', public_view, name="public_view"),
    path('saved_events/', save_events, name="saved_events"),
    path('show_events/', show_saved_events, name="show_saved_events")
]
