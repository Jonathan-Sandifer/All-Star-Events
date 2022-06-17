import React,{useState, useEffect} from 'react'


function EventsParks(props) {
  let searchData = props.sData
  const itemData = JSON.parse(localStorage.getItem('data'));
  const [weather, setWeather] = useState([])
  const lat = itemData.lat_lon.lat
  const lon = itemData.lat_lon.lon

  useEffect(() => {
    const fetchWeather = async () => {
    const url = `http://localhost:8030/api/weather/${lat}/${lon}/`
    const response = await fetch(url)
    if (response.ok){
      const weatherData = await response.json()
      return weatherData
    }}; setWeather(fetchWeather)
  },[])
  
  
  console.log("data", itemData)
    return (
      <div className="events-parks">
        <br />
        <div className="weather">
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
        <br />
        <div className="row">
            <div className="column">
              <h1>Events</h1>
              
          {itemData.events.events.map(event => {
            return (
              <div key={event.id}>
              <>
                <div>
                  <img src={event.performers[0].image}/>
                  </div>
                  <div >
                    <p>
                    {event.title}
                    {event.venue.name}
                    {event.venue.city}
                    {event.datetime_local}
                    {event.type}
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
                  <img className="park-image" src={park.images[0].url}/>
                  </div>
                  <div>
                    <p>
                    {park.fullName}
                    {park.description}
                    {park.states}
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