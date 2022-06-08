import { getProtectedView, getPublicView } from '../api';
import { Route, Routes } from 'react-router-dom';
import React from 'react';


class SearchBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            search: ''
        }
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleSearch(event) {
        let value = event.target.value;
        value = value.split(" ").join("");
        this.setState({search: value});
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
            <button>GO</button>
                <Routes>
                    <Route className='spacer active' to="/EventsParks">Your Events/Parks</Route>
                </Routes>
            </li>
        </form>
    </>
);
 }
}

export default SearchBar;
