import { getProtectedView, getPublicView } from '../api';
import { Route, Routes } from 'react-router-dom';


const SearchBar = () => (
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
            <input type="text"
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

export default SearchBar;
