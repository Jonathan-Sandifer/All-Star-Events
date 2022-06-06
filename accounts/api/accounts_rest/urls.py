from .views import api_list_preferences, api_list_users, api_user_token
from django.urls import path


urlpatterns = [
    path("preferences/", api_list_preferences, name="api_preferences"),
    path("users/", api_list_users, name="api_users"),
    path("users/me/token/", api_user_token, name="api_token"),
]
