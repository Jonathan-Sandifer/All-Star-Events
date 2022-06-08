import json
from django.http import JsonResponse
import requests
import os

GEOCODING_API_KEY = os.environ["GEOCODING_API_KEY"]
NATIONAL_PARKS_API_KEY = os.environ["NATIONAL_PARKS_API_KEY"]


def get_lat_lon(request, city):
    if request.method == "GET":
        params = {
            "q": f"{city}",
            "limit": 1,
            "appid": GEOCODING_API_KEY,
        }
        url = 'http://api.openweathermap.org/geo/1.0/direct'
        response = requests.get(url, params=params)
        content = json.loads(response.content)
        return JsonResponse(content, safe=False)

def get_parks(request):
    if request.method == "GET":

        params = {
            "latitude": 44.409286,
            "longitude": -68.247501,
            "api_key": NATIONAL_PARKS_API_KEY
        }
        url = 'https://developer.nps.gov/api/v1/parks?&api_key=p3q9GlbuoX6XdzRV5RjIIpcXrAicTCAufXROHjIJ'
        response = requests.get(url, params=params)
        content = json.loads(response.content)
        return JsonResponse(content, safe=False)