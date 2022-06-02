const SearchBar = () => (
    <form action="/" method="get">
        
        <br />
        <input
            type="text"
            id="header-search"
            placeholder="Enter your city"
            name="s" 
        />
        <button type="submit">Search</button>
    </form>
);

export default SearchBar;