// This folder will only work when we can get a user backend going
// Although I will make it able to display in the beginning to be more easily worked upon

import React from 'react'

function UserEventsParks() {
    return (
      <div className="user-events-parks">
        <br />
        <br />
            <div className="user-column">
              <h1> Your Events </h1>
            </div>
            <div className="user-column">
              <h1>Your Parks</h1>
            </div>
            <div className="user-row">
            <div class="user-card">
              <div className="user-column">
                <h1>Falling in Reverse Concert</h1>
                  <p>details and pic</p>
                <h1>Rockford RiverDays</h1>
                  <p>details and pic</p>
                <h1>June 2022 California Rodeo</h1>
                  <p>details and pic</p>
                <h1>Event</h1>
                <h1>Event</h1>
              </div>
            </div>
            <div class="user-card"></div>
            <div className="user-column">
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

  export default UserEventsParks;
