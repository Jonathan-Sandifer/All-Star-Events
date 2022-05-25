# Integrations

The application will need to get the following kinds of
data from third-party sources:

* Weather data and city/ country by latitude and longitude
* Indoor and Outdoor Events that can be participated solo or with groups, within the users local area
* Also display nearby hiking and mountain biking trails, campgrounds, ski resorts, ATV trails, and more.



These are the API"s providing data to the application 
- GEO LOCATION: https://rapidapi.com/natkapral/api/ip-geo-location/
- TRAIlS/OUTDOORS: https://rapidapi.com/trailapi/api/trailapi/
- EVENTS: https://rapidapi.com/AndrianaCodes/api/eventbrite-com/


*GEO LOCATION API*
- RETURN VALUES: State, city, latitude, longitude 
- DESCRIPTION: We will use this geo location API once the users input their selected state and city. Once selected, we will then display activities that are within and nearby that selected city. This will be the Main api that all of our other api's will center around. We will need to give the other api's city, state, zip, or lat,long parameters.



*TRAILS/Parks API*
- RETURN VALUES: city, latitude, longitude, difficulty, dogs allowed, 
- DESCRIPTION: The data retrieved from this api will display the park or trails location, difficulty rating, description, elevation, length. This data will be shown when the user visits their suggestions page, and when they check their saved events page




*EVENTBRITE API*
- RETURN VALUES: City, Date, Time, description, Name/title
- DESCRIPTION: The eventbrite api will display indoor and outdoor events in the users selected location. This data will be shown when the user visits their suggestions page, and when they check their saved events page. These events may be ticketed, free, solo, or meant for groups.