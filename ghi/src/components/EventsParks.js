import React from 'react'



function EventsParks(props) {
  let searchData = props.sData
  // console.log("events and parks", searchData)
  const itemData = JSON.parse(localStorage.getItem('data'));
  console.log("data", itemData)
  console.log("TYPE OF !!!", Array.isArray(itemData.parks.data))
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
              <>
              <div className="">
                <img src={event.performers[0].image}/>
                </div>
                <div className="">
                <p key={event.id}>
                {event.title}
                {event.venue.name}
                {event.venue.city}
                {event.datetime_local}
                {event.type}
                </p>
                </div>
                </>
            );
          })}
            </div>
            <div className="column">
              <h1>Parks</h1>

              {itemData.parks.data.map(park => {
            return (
              <>
              <div >
                <img className="park-image" src={park.images[0].url}/>
                </div>
                <div className="">
                <p key={park.id}>
                {park.fullName}
                {park.description}
                {park.states}
                </p>
                </div>
                </>
            );
          })}
            </div>
        </div>
            </div> 
    );
  }
  
  export default EventsParks;