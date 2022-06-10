from webbrowser import get
from .views import ( 
    api_list_preferences, api_list_users, api_user_token, 
    api_show_user, api_update_user, 
)
from .acls import get_multiple_events
from django.urls import path


urlpatterns = [
    path("preferences/", api_list_preferences, name="api_preferences"),
    path("users/", api_list_users, name="api_users"),
    path("users/me/token/", api_user_token, name="api_token"),
    path("users/<int:pk>/", api_show_user, name="api_user"),
    path("update/<int:pk>/", api_update_user, name="api_update"),
    path("events/<str:city>/", get_multiple_events, name="api_events"),

    # path("events/", get_events, name = "api_events" )
    
    # path("parks/", get_parks, name = "api_parks" )
    
]
