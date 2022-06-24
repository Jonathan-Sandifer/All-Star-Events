# Integrations

The application will need to get the following kinds of
data from third-party sources:

* Weather data and city/ country by latitude and longitude
* Indoor and Outdoor Events that can be participated solo or with groups, within the users local area
* Also display nearby hiking and mountain biking trails, campgrounds, ski resorts, ATV trails, and more.


These are the API"s providing data to the application 

- GEO LOCATION: https://rapidapi.com/natkapral/api/ip-geo-location/

- Weather information: https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key} 

- TRAIlS/OUTDOORS: 'https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=INSERT-API-KEY-HERE'

- EVENTS: https://api.seatgeek.com/2


*GEO LOCATION API*
- RETURN VALUES: Latitude and Longitude  
- DESCRIPTION: For our application to work properly we need lat and lon values to inject into our other 3rd party api calls. This api allows us to take the inputted user city and state information then turn that into latitude and longitude values that can be used in our subsequent apis 


*Open Weather API*
- RETURN VALUES: Temperature and Weather Description 
- DESCRIPTION: Pretty self explanatory one here. We wanted to provide the user with accurate real time weather information for each location they end up searching for events and parks. This api allows us to do just that.  

*National Parks Service Api*
- RETURN VALUES: Name of the Park , description of the park, state where it is located 
- DESCRIPTION: Originally we spent days trying to gain access to trailforks api or all trails, but the only api that we could finds ot fit some of our needs was from the National parks service. Based off the api it listed certain types of outdoor activities that we could filter through to all people to pick activities they like to do and get shown the correct parks that have those activities. 


*SeatGeek API*
- RETURN VALUES: Name, Venue, City, Time , Type of Event 
- DESCRIPTION: The Seat Geek api is the only event api we were able to find that allows free access. It gives loads of information on events we had to sort and filter through all of it to gain access to the information we needed such as the name of the event, the event venue, the city its in, the time of the event, and what type of event it is. 