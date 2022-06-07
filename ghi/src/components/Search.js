import { getProtectedView, getPublicView } from '../api';

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
        </form>
    </>
);

export default SearchBar;
