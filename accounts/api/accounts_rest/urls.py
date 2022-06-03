from .views import api_list_preferences, api_list_users
from django.urls import path


urlpatterns = [
    path("preferences/", api_list_preferences, name="api_preferences"),
    path("users/", api_list_users, name="api_users"),
]