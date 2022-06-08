import json
from django.http import JsonResponse
import requests
import os

GEOCODING_API_KEY = os.environ["GEOCODING_API_KEY"]
SEAT_GEEK_CLIENT_ID = os.environ["SEAT_GEEK_CLIENT_ID"]
SEAT_GEEK_SECRET = os.environ["SEAT_GEEK_SECRET"]



def get_events(request):
    if request.method == "GET":

        # params = {
        #     "lat": 32.2228,
        #     "lon": -110.9748,
        #     "client_id": SEAT_GEEK_CLIENT_ID,
        #     "client_secret": SEAT_GEEK_SECRET,    
        # }
        # url = "https://api.seatgeek.com/2/events?lat=32.2228&lon=-110.9748&client_id=MjcxNzgxODN8MTY1MzY4MTI3NC40MDUwOTQ0&client_secret=d56ce5ca2677c7be91cb49c3cb7ff5b362bd16a12b8307b2866378c7000e24ad"
        url = f"https://api.seatgeek.com/2/events?lat=32.2228&lon=-110.9748&client_id={SEAT_GEEK_CLIENT_ID}"
        # print("ID???????????", url)

        response = requests.get(url)
        print("response!!!!!!!!!", response)
        content = json.loads(response.content)
        print("content!!!!!!!", content)
        # return JsonResponse()

        


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