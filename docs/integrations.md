# Integrations

The application will need to get the following kinds of
data from third-party sources:

* Weather data and city/ country by latitude and longitude
* Indoor and Outdoor Events that can be participated solo or with groups, within the users
local area
* Also display nearby hiking and mountain biking trails, campgrounds, ski resorts, ATV trails, and more.


# API Design

These are the API"s providing data to the application 
- GEO LOCATION: https://rapidapi.com/natkapral/api/ip-geo-location/
- TRAIlS/OUTDOORS: https://rapidapi.com/trailapi/api/trailapi/
- EVENTS: https://rapidapi.com/AndrianaCodes/api/eventbrite-com/


*GEO LOCATION API*

- HTTP METHOD: GET
- PATH: https://api.ipgeolocation.io/ipgeo
- EXPECTED PARAMETERS: Requests
- RETURN VALUES: State, city, latitude, longitude 
- DESCRIPTION: We will use this geo location API once the users input their selected state and city. Once selected, we will then display activities that are within and nearby that selected city



*TRAILS API*

- HTTP METHOD: GET
- PATH: 
- EXPECTED PARAMETERS: 
- RETURN VALUES:
- DESCRIPTION: 



*EVENTBRITE API*

- HTTP METHOD:
- PATH: 
- EXPECTED PARAMETERS: 
- RETURN VALUES:
- DESCRIPTION: 