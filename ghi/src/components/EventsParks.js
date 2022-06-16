import React from 'react'



function EventsParks(props) {
  let searchData = props.sData
  console.log("events and parks", searchData)
  const itemData = JSON.parse(localStorage.getItem('data'));
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
            </div>
            <div className="column">
              <h1>Parks</h1>
            </div>
        </div>
        <div className="eprow">
            <div className="column">
              <h1>Falling in Reverse Concert</h1>
                <p>details and pic</p>
              <h1>Rockford RiverDays</h1>
                <p>details and pic</p>
              <h1>June 2022 California Rodeo</h1>
                <p>details and pic</p>
              <h1>Event</h1>
              <h1>Event</h1>
            </div>
            <div className="column">
              <h1>Glacier National Park</h1>
                <p>details and pic</p>
              <h1>Joshua Tree Park</h1>
                <p>details and pic</p>
              <h1>Itasca State Park</h1>
                <p>details and pic</p>
              <h1>Park</h1>
              <h1>Park</h1>
              <h1>Park</h1>
            </div>
        </div>
      </div>
    );
  }
  
  export default EventsParks;