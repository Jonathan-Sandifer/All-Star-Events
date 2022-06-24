import React, { useState, useEffect } from "react";

function EventsParks(props) {
  const itemData = JSON.parse(localStorage.getItem("data"));
  const [weather, setWeather] = useState([]);
  const lat = itemData.lat_lon.lat;
  const lon = itemData.lat_lon.lon;
  const token = props.token;

  useEffect(() => {
    const fetchWeather = async () => {
      const url = `${process.env.REACT_APP_ACCOUNTS_HOST}/api/weather/${lat}/${lon}/`;
      const response = await fetch(url);
      if (response.ok) {
        const weatherData = await response.json();
        setWeather(weatherData);
      }
    };
    fetchWeather();
  }, [lat, lon]);

  async function saveEvent(e) {
    const event = JSON.parse(e.target.value);
    const eventUrl = `${process.env.REACT_APP_EVENTS_HOST}/api/saved_events/`;
    const fetchConfig = {
      method: "POST",
      body: JSON.stringify({
        name: event.title,
        event_type: event.type,
        city: event.venue.city,
        venue_name: event.venue.name,
        picture_url: event.performers[0].image,
      }),
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      credentials: "include",
    };
    const response = await fetch(eventUrl, fetchConfig);
    if (response.ok) {
      console.log("SUCCCCESSSSSS");
    }
  }

  let icon = weather.main ? weather.weather[0].icon : <></>;

  return (
    <div className="events-parks">
      <div className="weather">
        Current Weather
        <br />
        <div className="weather2">
          {weather.main ? weather.main.temp : <></>} °F
          <br />
          {weather.main ? weather.weather[0].description : <></>}
          <br />
          <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="" />
        </div>
      </div>
      <div className="row">
        <div className="column">
          <h1>Events</h1>
          {itemData.events.map((event) => {
            return (
              <div key={event.id + event.datetime_local}>
                <>
                  <div>
                    <img
                      className="user-card-image"
                      src={event.performers[0].image}
                      alt=""
                    />
                  </div>
                  <div className="user-card-content">
                    <p>
                      {event.title}
                      <br />
                      {event.venue.name}
                      <br />
                      {event.venue.city}
                      <br />
                      {event.datetime_local}
                      <br />
                      {event.type}
                      <br />
                      <button
                        className="user-card-info"
                        value={JSON.stringify(event)}
                        onClick={saveEvent}
                      >
                        Save
                      </button>
                    </p>
                  </div>
                </>
              </div>
            );
          })}
        </div>
        <div className="column">
          <h1>Parks</h1>
          {itemData.parks.map((park) => {
            return (
              <div key={park.id}>
                <>
                  <div>
                    <img
                      className="user-card-image"
                      src={park.images[0].url}
                      alt=""
                    />
                  </div>
                  <div className="user-card-content">
                    <p>
                      {park.fullName}
                      <br />
                      {park.description}
                      {park.states}
                      <br />
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
