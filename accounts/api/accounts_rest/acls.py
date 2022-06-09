import json
from django.http import JsonResponse
import requests
import os

GEOCODING_API_KEY = os.environ["GEOCODING_API_KEY"]
SEAT_GEEK_CLIENT_ID = os.environ["SEAT_GEEK_CLIENT_ID"]
SEAT_GEEK_SECRET = os.environ["SEAT_GEEK_SECRET"]



def get_events(request, city ):
    if request.method == "GET":
        lat = get_lat_lon(city)[0]
        lon = get_lat_lon(city)[1]
        
        url = f"https://api.seatgeek.com/2/events?lat={lat}&lon={lon}&client_id={SEAT_GEEK_CLIENT_ID}"
        
        response = requests.get(url)
        # print("response!!!!!!!!!", response)
        content = json.loads(response.content)
        # print("content!!!!!!!", content)
        return JsonResponse(content)
   

def get_lat_lon(city):
    params = {
        "q": f"{city}",
        "limit": 1,
        "appid": GEOCODING_API_KEY,
    }
    url = 'http://api.openweathermap.org/geo/1.0/direct'
    response = requests.get(url, params=params)
    content = json.loads(response.content)
    
    lat = round(content[0]["lat"], 4)
    lon = round(content[0]["lon"], 4)
    return [lat, lon]

    # we know lat and long are correct but not sure how the return statement gets formatted 