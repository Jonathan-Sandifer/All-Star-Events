import { Link } from 'react-router-dom';
import React from 'react';


class SearchBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            search: '',
        }
        this.handleSearch = this.handleSearch.bind(this);
        this.getEvents = this.getEvents.bind(this);
    }

    async handleSearch(event) {
        let value = event.target.value;
        await this.setState({search: value});
        
        
    }
    
    async getEvents(event) {
        event.preventDefault()
        const url = `http://localhost:8030/api/events/${this.state.search}/`
        const response = await fetch(url);
        if (response.ok) {
            console.log("wtf")
            const data = await response.json();
            console.log(data);
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
            <li >
                <button onClick={this.getEvents} to="/EventsParks" className="pref-button"><Link to="/EventsParks">GO</Link></button>
            </li>
        </form>
    </>
);
 }
}

export default SearchBar;
