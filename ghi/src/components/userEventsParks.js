import React, { useState, useEffect } from "react";

function UserEventsParks(props) {
  const token = props.token;
  const [savedEvent, setSavedEvents] = useState([]);

  useEffect(() => {
    if (token) {
      const fetchSavedEvents = async () => {
        const url = `${process.env.REACT_APP_EVENTS_HOST}/api/show_events/`;
        const response = await fetch(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.ok) {
          const savedEventsData = await response.json();
          setSavedEvents(savedEventsData);
        }
      };
      fetchSavedEvents();
    } else {
    }
  }, [token]);
  return (
    <div className="user-events-parks">
      <div className="column">
        {savedEvent.map((event) => {
          return (
            <div key={event.event.id}>
              <>
                <div>
                  <img
                    className="user-card-image"
                    src={event.event.picture_url}
                    alt=""
                  />
                </div>
                <div className="user-card-content">
                  <p>
                    {event.event.name}
                    <br />
                    {event.event.venue_name}
                    <br />
                    {event.event.city}
                    <br />
                    {event.event.event_type}
                  </p>
                </div>
              </>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default UserEventsParks;
