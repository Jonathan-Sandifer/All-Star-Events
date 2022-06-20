from webbrowser import get
from .views import ( 
    api_list_preferences, api_list_users, api_user_token, 
    api_show_user, api_update_user, 
)
from .acls import get_multiple_locations, get_events, get_weather
from django.urls import path


urlpatterns = [
    path("preferences/", api_list_preferences, name="api_preferences"),
    path("users/", api_list_users, name="api_users"),
    path("users/me/token/", api_user_token, name="api_token"),
    path("users/<int:pk>/", api_show_user, name="api_user"),
    path("update/", api_update_user, name="api_update"),
    path("events/<str:city>/", get_multiple_locations, name="api_multiple_locations"),
    path("events/<str:lat>/<str:lon>/<str:state>/", get_events, name="api_events" ),
    path("weather/<str:lat>/<str:lon>/", get_weather, name="get_weather" )
    # include /<str:state> in the above path
    
    
]
