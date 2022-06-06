from django.urls import path

from .views import protected_view, public_view

urlpatterns = [
    path('protected/', protected_view, name="protected_view"),
    path('public/', public_view, name="public_view"),
]
