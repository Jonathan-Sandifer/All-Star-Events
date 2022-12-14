import json
from django.http import JsonResponse
import requests
import os
from .models import User
from .states import convert_state_to_abbr
from common.user import get_user_information

GEOCODING_API_KEY = os.environ["GEOCODING_API_KEY"]
NATIONAL_PARKS_API_KEY = os.environ["NATIONAL_PARKS_API_KEY"]
OPEN_WEATHER_API_KEY = os.environ["OPEN_WEATHER_API_KEY"]

CURRENT_OPEN_WEATHER_API_KEY = os.environ["CURRENT_OPEN_WEATHER_API_KEY"]

SEAT_GEEK_CLIENT_ID = os.environ["SEAT_GEEK_CLIENT_ID"]
SEAT_GEEK_SECRET = os.environ["SEAT_GEEK_SECRET"]

# 2nd this function takes in the city information the user typed in on the from end
def get_multiple_locations(request, city):
    if request.method == "GET":
        return get_location_details(city)
        # call get location details to get the 5 options
        # returns a response an array of objects to the front end


def filter_preferences_for_events(event_content, preference_list):
    preference_name = []
    events = []
    for preference in preference_list:
        preference_name.append(preference.name.lower())
    for event in event_content["events"]:
        for taxonomy in event["taxonomies"]:
            event_type = taxonomy["name"].lower()
            if event_type in preference_name or (
                event_type + "s" in preference_name
            ):
                events.append(event)
    return events


def filter_preferences_for_parks(park_content, preference_list):
    preference_name = []
    parks = []
    park_ids = set()
    for preference in preference_list:
        preference_name.append(preference.name.lower())
    for park in park_content["data"]:
        for activity in park["activities"]:
            activity_type = activity["name"].lower()
            if activity_type in preference_name:
                if park["id"] not in park_ids:
                    park_ids.add(park["id"])
                    parks.append(park)
    return parks


# Include a state parameter
def get_events(request, lat, lon, state):
    if request.method == "GET":
        user = get_user_information(request)
        if user:
            user = User.objects.get(id=user["user"]["id"])
            event_url = f"https://api.seatgeek.com/2/events?lat={lat}&lon={lon}&per_page=100&client_id={SEAT_GEEK_CLIENT_ID}"
            event_response = requests.get(event_url)
            event_content = json.loads(event_response.content)
            filtered_events = filter_preferences_for_events(
                event_content, user.preferences.all()
            )
            abbr = convert_state_to_abbr(state)
            parks_url = f"https://developer.nps.gov/api/v1/parks?stateCode={abbr}&limit=20&api_key={NATIONAL_PARKS_API_KEY}"
            parks_response = requests.get(parks_url)
            parks_content = json.loads(parks_response.content)
            filtered_parks = filter_preferences_for_parks(
                parks_content, user.preferences.all()
            )
            return JsonResponse(
                {
                    "events": filtered_events,
                    "parks": filtered_parks,
                },
                safe=False,
            )
        else:
            event_url = f"https://api.seatgeek.com/2/events?lat={lat}&lon={lon}&per_page=100&client_id={SEAT_GEEK_CLIENT_ID}"
            event_response = requests.get(event_url)
            event_content = json.loads(event_response.content)
            abbr = convert_state_to_abbr(state)
            parks_url = f"https://developer.nps.gov/api/v1/parks?stateCode={abbr}&limit=20&api_key={NATIONAL_PARKS_API_KEY}"
            parks_response = requests.get(parks_url)
            parks_content = json.loads(parks_response.content)
            composed_response = event_content
            parks_values = parks_content.get("data")
            composed_response["parks"] = parks_values
            return JsonResponse(composed_response, safe=False)


# 3rd this function gets the city information from get_multiple_locations above
# and calls open weather api and gets the lat, lon, and state
# information associated with that city


def get_location_details(city):
    params = {
        "q": f"{city}",
        "limit": 5,
        "appid": GEOCODING_API_KEY,
    }
    url = "http://api.openweathermap.org/geo/1.0/direct"
    response = requests.get(url, params=params)
    content = json.loads(response.content)
    location_results = []
    for location in content:
        location_results.append(
            {
                "lat": location["lat"],
                "lon": location["lon"],
                "state": location["state"],
            }
        )
    return JsonResponse(location_results, safe=False)


def get_weather(request, lat, lon):
    url = f"http://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&units=imperial&appid={CURRENT_OPEN_WEATHER_API_KEY}"
    response = requests.get(url)
    content = json.loads(response.content)
    return JsonResponse(content)
