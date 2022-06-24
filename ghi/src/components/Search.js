import { Link } from "react-router-dom";
import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      states: [],
      selected_area: {},
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.getMultipleLocations = this.getMultipleLocations.bind(this);
    this.saveValues = this.saveValues.bind(this);
  }

  async handleSearch(event) {
    let value = event.target.value;
    await this.setState({ search: value });
  }

  async saveValues(event) {
    let selected_state = event.target.value;
    for (let state of this.state.states) {
      if (selected_state === state["state"]) {
        selected_state = state;
      }
    }
    // selected location includes lat lon state
    await this.setState({ selected_area: selected_state });
    const url = `${process.env.REACT_APP_ACCOUNTS_HOST}/api/events/${this.state.selected_area.lat}/${this.state.selected_area.lon}/${this.state.selected_area.state}/`;
    const response = await fetch(url, {
      credentials: "include",
    });

    if (response.ok) {
      let eventsAndParks = await response.json();
      let selected_lat_lon = {
        lat: this.state.selected_area.lat,
        lon: this.state.selected_area.lon,
      };
      eventsAndParks["lat_lon"] = selected_lat_lon;
      this.props.sSData(eventsAndParks);
      localStorage.setItem("data", JSON.stringify(eventsAndParks));
    }
  }

  //1st step someone types in city on front end, goes to get_multiple_locations in acls.py on the backend
  async getMultipleLocations(event) {
    event.preventDefault();
    const url = `${process.env.REACT_APP_ACCOUNTS_HOST}/api/events/${this.state.search}/`;
    const response = await fetch(url); //4th step data response from backend sends 5 specific cities
    if (response.ok) {
      const five_locations = await response.json();
      this.setState({ states: five_locations }, () => {});
    }
  }

  render() {
    return (
      <>
        <form action="/" method="get">
          <br />
          <div className="search-box">
            <input
              onChange={this.handleSearch}
              onBlur={this.getMultipleLocations}
              type="text"
              className="search-bar"
              placeholder="Enter a city..."
            />
          </div>
          <select
            onChange={this.saveValues}
            placeholder="state"
            id="state"
            className="state-select"
          >
            <option className="drop-down" value="">
              Choose a State
            </option>
            {this.state.states.map((area, i) => {
              return (
                <option key={i} value={area.state}>
                  {area.state}
                </option>
              );
            })}
          </select>
          <li>
            <button className="pref-button" to="/EventsParks">
              <Link className="new" to="/EventsParks">
                GO
              </Link>
            </button>
          </li>
        </form>
      </>
    );
  }
}

export default SearchBar;
