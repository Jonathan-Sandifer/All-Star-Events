import React from 'react'



function EventsParks(props) {
  let searchData = props.sData
  console.log("events and parks", searchData)
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
              {/* <tbody>
          {props.searchData.map(searchData => {
            return (
              <tr key={searchData.id}>
                <td>{searchData.events}</td>
              </tr>
            );
          })}
        </tbody> */}
            </div>
            <div className="column">
              <h1>Parks</h1>
            </div>
        </div>
            </div>
       
    );
  }
  
  export default EventsParks;