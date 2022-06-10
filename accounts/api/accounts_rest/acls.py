import json
from django.http import JsonResponse
import requests
import os
from .models import User
from .states import convert_state_to_abbr

GEOCODING_API_KEY = os.environ["GEOCODING_API_KEY"]
NATIONAL_PARKS_API_KEY = os.environ["NATIONAL_PARKS_API_KEY"]

SEAT_GEEK_CLIENT_ID = os.environ["SEAT_GEEK_CLIENT_ID"]
SEAT_GEEK_SECRET = os.environ["SEAT_GEEK_SECRET"]

# 2nd this function takes in the city information the user typed in on the fron end 
def get_multiple_locations(request, city): 
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
 
def get_events(request, lat, lon):
    if request.method == "GET":
        # lat = get_lat_lon(city)[0]
        # lon = get_lat_lon(city)[1]

        url = f"https://api.seatgeek.com/2/events?lat={lat}&lon={lon}&client_id={SEAT_GEEK_CLIENT_ID}"
        
        response = requests.get(url)
        # print("response!!!!!!!!!", response)
        content = json.loads(response.content)
        # print("content!!!!!!!", content)
        return JsonResponse(content, safe=False)
   

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

# 3rd this function gets the city information from get_multiple_locations above and calls open weather api and gets the lat, lon, and state information associated with that city  
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
