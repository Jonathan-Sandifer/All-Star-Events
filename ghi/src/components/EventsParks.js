import React,{useState, useEffect} from 'react'


function EventsParks(props) {
  let searchData = props.sData
  const itemData = JSON.parse(localStorage.getItem('data'));
  const [weather, setWeather] = useState([])
  const lat = itemData.lat_lon.lat
  const lon = itemData.lat_lon.lon
  const [eventID, setEventID] = useState('')
  const [eventName, setEventName] = useState('')
  const [eventType, setEventType] = useState('')
  const [eventCity, setEventCity] = useState('')
  const [eventVenueName, setEventVenueName] = useState('')
  const [eventPictureUrl, setEventPictureUrl] = useState('')

  // console.log(lat)

  useEffect(() => {
    const fetchWeather = async () => {
    
    const url = `http://localhost:8030/api/weather/${lat}/${lon}/`
    const response = await fetch(url)
    if (response.ok){
      const weatherData = await response.json()
      setWeather(weatherData)
    }}; 
    fetchWeather()
  },[])

  function saveEvent(e) {
    const event = JSON.parse(e.target.value)
    setEventID(event.id)
    setEventName(event.title)
    setEventType(event.type)
    setEventCity(event.venue.city)
    setEventVenueName(event.venue.name)
    setEventPictureUrl(event.performers[0].image)
    
  }
  
  function postEvents() {
    const dict = {
      "name": "goats",
      "event_type": "goats",
      "city": "goats",
      "venue_name": "goats goats",
      "picture_url": "",
      "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NTU4NjU4NjUsImV4cCI6MTY1NTk1MjI2NSwianRpIjoiY2JiNGY4MjUtZTkzYy00MzVkLWI0N2UtOGVhNTMxZmZiYTUyIiwidHlwZSI6ImFjY2VzcyIsInVzZXIiOnsidXNlcm5hbWUiOiJzaWVicyIsImlkIjoxLCJwZXJtcyI6W119LCJyZWZyZXNoX2lhdCI6MTY1NTg2NTg2NX0.PJm5djPjThEyVe589zPA23aRRbhwZAWaspjIiAF3wd4"
    }
  }


  console.log("Token" ,props.token) 

  let icon = weather.main?weather.weather[0].icon: <></>
  
    return (
      <div className="events-parks">
        <div className="weather">
          Current Weather
          <br/>
          <div className="weather2">
          {weather.main?weather.main.temp: <></>} °F
          <br/>
          {weather.main?weather.weather[0].description: <></>}
          <br />
          <img  src = {`http://openweathermap.org/img/wn/${icon}@2x.png`} />
          </div>
        </div>
        <div className="row">
            <div className="column">
              <h1>Events</h1>   
          {itemData.events.events.map(event => {
            return (
              <div key={event.id}>
              <>
                <div>
                  <img className="user-card-image" src={event.performers[0].image}/>
                  </div>
                  <div className="user-card-content">
                    <p>
                    {event.title}
                    <br/>
                    {event.venue.name}
                    <br/>
                    {event.venue.city}
                    <br/>
                    {event.datetime_local}
                    <br/>
                    {event.type}
                    <button className="user-card-info" value={JSON.stringify(event)} onClick = {saveEvent}>Save</button>
                    </p>
                  </div>
                </>
              </div>
            );
          })}
            </div>
            <div className="column">
              <h1>Parks</h1>

              {itemData.parks.data.map(park => {
            return (
              <div key={park.id}>
              <>
                <div>
                  <img className="user-card-image" src={park.images[0].url}/>
                  </div>
                  <div className= "user-card-content">
                    <p>
                  
                    {park.fullName}
                    <br/>
                    {park.description}
                    {park.states}
                    <button className="user-card-info">Save</button>
                    </p>
                  </div>
                </>
                </div>
            );
          })}
            </div>
        </div>
            </div> 
    );
  }
  
  export default EventsParks;