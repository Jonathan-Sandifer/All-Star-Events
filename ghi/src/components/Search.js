import { Route, Routes, Link } from 'react-router-dom';
import React from 'react';


class SearchBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            search: '',
            lat: '',
            lon: ''
        }
        this.handleSearch = this.handleSearch.bind(this);
        this.getLatLon = this.getLatLon.bind(this);
    }

    async handleSearch(event) {
        let value = event.target.value;
        await this.setState({search: value});
        
        
    }
    
    async getLatLon(event) {
        event.preventDefault()
        const url = `http://localhost:8030/api/geocoding/${this.state.search}`
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
        }

    }


    render() {
        return (
    <>
        <form action="/" method="get">

            <br />
            {/* <input
                type="text"
                id="header-search"
                placeholder="Enter your city"
                name="s"
            />
            <button type="submit">Search</button> */}
            <div className="search-box">
            <input onChange={this.handleSearch} type="text"
            className="search-bar"
            placeholder="Enter a city..." 
            />
            </div>
            <li >
                <button onClick={this.getLatLon} to="/EventsParks" className="pref-button"><Link to="/EventsParks">GO</Link></button>
            </li>
        </form>
    </>
);
 }
}

export default SearchBar;
