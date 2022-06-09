import { Link } from 'react-router-dom';
import React from 'react';


class SearchBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            search: '',
            state: []
        }
        this.handleSearch = this.handleSearch.bind(this);
        this.getMultipleEvents = this.getMultipleEvents.bind(this);
    }

    async handleSearch(event) {
        let value = event.target.value;
        await this.setState({search: value});
        
        
    }
    
    async getMultipleEvents(event) {
        event.preventDefault()
        const url = `http://localhost:8030/api/events/${this.state.search}/`
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            
            await this.setState({state:data})
            console.log(this.state);
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
            <select placeholder="" id="" className="t">
            <option value="">Choose a State</option>
            </select>
            <li >
                <button onClick={this.getMultipleEvents} to="/EventsParks" className="pref-button"><Link to="/EventsParks">GO</Link></button>
            </li>
        </form>
    </>
);
 }
}

export default SearchBar;
