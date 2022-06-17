import React from 'react'



function EventsParks(props) {
  let searchData = props.sData
  console.log("events and parks", searchData)
  const itemData = JSON.parse(localStorage.getItem('data'));
  console.log("data", itemData)
  console.log("TYPE OF !!!", Array.isArray(itemData.events.events))
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
              <tbody>
          {itemData.events.events.map(event => {
            return (
              <tr key={event.id}>
                <td><img src={event.performers[0].image}/></td>
                <td>{event.title}</td>
                <td>{event.venue.name}</td>
                <td>{event.venue.city}</td>
                <td>{event.datetime_local}</td>
                <td>{event.type}</td>
              </tr>
            );
          })}
        </tbody>
            </div>
            <div className="column">
              <h1>Parks</h1>
            </div>
        </div>
            </div> 
    );
  }
  
  export default EventsParks;