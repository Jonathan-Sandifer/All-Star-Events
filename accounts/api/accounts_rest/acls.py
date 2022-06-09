import json
from django.http import JsonResponse
import requests
import os
from .models import User

GEOCODING_API_KEY = os.environ["GEOCODING_API_KEY"]
NATIONAL_PARKS_API_KEY = os.environ["NATIONAL_PARKS_API_KEY"]

SEAT_GEEK_CLIENT_ID = os.environ["SEAT_GEEK_CLIENT_ID"]
SEAT_GEEK_SECRET = os.environ["SEAT_GEEK_SECRET"]


def get_multiple_events(request, city): # captures request response cycle 
    if request.method == "GET":
       return get_location_details(city)
        # lat = get_location_details(city)[0]
        # lon = get_location_details(city)[1]
        # state = get_location_details(city)[2]

        # call get location details to get the 5 options 
        # returns a response an array of objects to the front end 
        
        # response = requests.get(url)
        # print("response!!!!!!!!!", response)
        # content = json.loads(response.content)
        # print("content!!!!!!!", content)
        # return JsonResponse(content)
 
# def get_events(request, city ):
#     if request.method == "GET":
#         # lat = get_lat_lon(city)[0]
#         # lon = get_lat_lon(city)[1]

#         url = f"https://api.seatgeek.com/2/events?lat={lat}&lon={lon}&client_id={SEAT_GEEK_CLIENT_ID}"
        
#         response = requests.get(url)
#         # print("response!!!!!!!!!", response)
#         content = json.loads(response.content)
#         # print("content!!!!!!!", content)
#         return JsonResponse(content)
   

# def get_lat_lon(city):
#     params = {
#         "q": f"{city}",
#         "limit": 5,
#         "appid": GEOCODING_API_KEY,
#     }
#     url = 'http://api.openweathermap.org/geo/1.0/direct'
#     response = requests.get(url, params=params)
#     content = json.loads(response.content)
#     print(content)
    
#     lat = round(content[0]["lat"], 4)
#     lon = round(content[0]["lon"], 4)
#     return [lat, lon]

    # we know lat and long are correct but not sure how the return statement gets formatted 

def get_location_details(city):
    params = {
        "q": f"{city}",
        "limit": 5,
        "appid": GEOCODING_API_KEY,
    }
    url = 'http://api.openweathermap.org/geo/1.0/direct'
    response = requests.get(url, params=params)
    content = json.loads(response.content)
    # print("?????????", content)
    location_results = []
    for location in content:
        # print("?????????",location)
        location_results.append(
            {"lat":location["lat"], 
            "lon":location["lon"], 
            "state":location["state"]})
    # print("!!!!!", location_results)
    return JsonResponse(location_results,safe=False)
