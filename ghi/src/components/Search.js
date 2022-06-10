import { Link } from 'react-router-dom';
import React from 'react';


class SearchBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            search: '',
            states: [],
            selected_area: {}
        }
        this.handleSearch = this.handleSearch.bind(this);
        this.getMultipleLocations = this.getMultipleLocations.bind(this);
        this.saveValues = this.saveValues.bind(this);

    }

    async handleSearch(event) {
        let value = event.target.value;
        await this.setState({search: value});  
    
    }

    async saveValues(event) {
        let selected_state = event.target.value
        for (let state of this.state.states) {
            console.log(state);
            if (selected_state === state["state"]) {
                selected_state = state
            }
        }
        // selected location includes lat lon state
        await this.setState({selected_area: selected_state})
        
    }

    async saveValues(event) {
        let selected_state = event.target.value
        for (let state of this.state.states) {
            console.log(state);
            if (selected_state === state["state"]) {
                selected_state = state
            }
        }
        await this.setState({selected_area: selected_state})
        
        
    }

    async saveValues(event) {
        let selected_state = event.target.value
        for (let state of this.state.states) {
            console.log(state);
            if (selected_state === state["state"]) {
                selected_state = state
            }
        }
        await this.setState({selected_area: selected_state})
        
        
    }
   
    
    // async getEvents(event) {
    //     event.preventDefault()
    //     const url = `http://localhost:8030/api/events/${this.state.selected_area.lat}/${this.state.selected_area.lon}/`
    //     console.log("?!?!?!?!?!", url)
    // }

    //1st step someone types in city on front end, goes to get_multiple_locations in acls.py on the backend
    async getMultipleLocations(event) {
        event.preventDefault()
        const url = `http://localhost:8030/api/events/${this.state.search}/`
        const response = await fetch(url); //4th step data response from backend sends 5 specific cities 
        if (response.ok) {
            const five_locations = await response.json();
            console.log("this is data", five_locations)
            
            this.setState({states:five_locations}, () => {
                console.log("this is state", this.state);
            })
            // console.log(this.state.state);
            // let lat = data[0]['lat'].toFixed(4)
            // let lon = data[0]['lon'].toFixed(4)
            // console.log(lat, lon);
            // delete data[0]['lat']
            // delete data[0]['lon']
            // this.setState({latitude: lat, longitude: lon}) 
        }
    }


    render() {
        return (
    <>
        <form action="/" method="get">

            <br />
            <div className="search-box">
            <input onChange={this.handleSearch} type="text"
            className="search-bar"
            placeholder="Enter a city..." 
            />
            </div>
            <select onChange={this.saveValues} placeholder="state" id="state" className="t">
            <option value="">Choose a State</option>
                {this.state.states.map((area, i) => {
                    return (
                    <option key={i} value={area.state}>
                    {area.state}
                    </option>
                )}) }
            </select>
            <li >
                <button onClick={this.getMultipleLocations} to="/EventsParks" className="pref-button"><Link to="/EventsParks">GO</Link></button>
            </li>
        </form>
    </>
);
 }
}

export default SearchBar;
