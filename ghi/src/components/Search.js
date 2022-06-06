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
        <div style={{backgroundColor: 'rgba(255, 255, 255, .8)', padding: '1em'}}>
            <p>Look in the console for results</p>
            <button onClick={getProtectedView}>Get protected view (requires login)</button>
            <button onClick={getPublicView}>Get public view</button>
        </div>
    </>
);

export default SearchBar;
