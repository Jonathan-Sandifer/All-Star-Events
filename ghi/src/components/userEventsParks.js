import React,{useState, useEffect} from 'react'

function UserEventsParks(props) {

  const token = props.token 
  // console.log("TOKEN!!!!@#@#@$", token)
  const [savedEvent, setSavedEvents] = useState([])

  useEffect(() => {
    if (token) {
        const fetchSavedEvents = async () => {
        const url = `http://localhost:8080/api/show_events/`
        const response = await fetch(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.ok){
          const savedEventsData = await response.json()
          console.log("????????", savedEventsData)
          setSavedEvents(savedEventsData)
        }}; 
        fetchSavedEvents()
    }
    else {
      console.log("sucks to suck")
    }
 
  },[token])
  console.log("!!!!!!!!", savedEvent)
  return (
    
    <div className="user-events-parks">
      <div className="user-cards">
        <div className="user-card">
        {savedEvent.map(event => {
            return (
              <div key={event.id}>
              <>
              {event.event.name}
              {event.event.venue_name}
              {event.event.event_type}
              {event.event.city}

                </>
              </div>
            );
          })}
          <img
            className="user-card-image"
            src="https://fakeimg.pl/400x300/009578/fff/"
            alt=""
          />
          <div className="user-card-content">
            
            <p>
              Alias itaque praesentium eum, consequatur ducimus asperiores
              accusantium velit minima?
            </p>
            <div className="user-card-content"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserEventsParks;
