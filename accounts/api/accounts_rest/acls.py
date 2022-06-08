import json
from django.http import JsonResponse
import requests
import os

GEOCODING_API_KEY = os.environ["GEOCODING_API_KEY"]

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