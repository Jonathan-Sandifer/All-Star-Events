import { Link } from "react-router-dom";
import React from "react";

class PreferenceSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      preferences: {
        parks: false,
        sports: false,
        concerts: false,
        waterActivities: false,
        theater: false,
        trails: false,
        artsAndCulture: false,
        museumExhibits: false,
        camping: false,
        sailing: false,
        kayaking: false,
        hiking: false,
      }, 
    };
    this.handleCheckbox = this.handleCheckbox.bind(this);
  }

  handleCheckbox(event) {
    let state = this.state;
    state.preferences[event.target.value.replace(" ", "")] =
      event.target.checked;
    this.setState(state);
  }

  async setPreferences(preference) {
    const url = `${process.env.REACT_APP_ACCOUNTS_HOST}/api/update/`;
    const response = await fetch(url, {
      method: "put",
      credentials: "include",
      body: JSON.stringify({ preference }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      return { message: "Your Preferences have been saved" };
    }
  }

  handleSave(event) {
    let state = this.state;
    let container = {};
    for (let key of Object.keys(state["preferences"])) {
      if (state["preferences"][key] === true) {
        container["name"] = key[0].toUpperCase() + key.slice(1, key.length);
        this.setPreferences(container, 2);
      }
    }
  }

  render() {
    return (
      <main className="preference-main">
        &nbsp;
        <div className="header">
          <h1>What do you like to do?</h1>
        </div>
        <form>
          <div className="wrapper">
            <div className="border">
              <input
                onChange={this.handleCheckbox}
                type="checkbox"
                id="parks"
                name="parks"
                value="parks"
                checked={this.state.preferences.parks}
              />
              <label htmlFor="parks">Parks</label>
            </div>
            <div className="border">
              <label htmlFor="concert">Concerts</label>
              <input
                onChange={this.handleCheckbox}
                type="checkbox"
                id="concert"
                name="concert"
                value="concerts"
                checked={this.state.preferences.concerts}
              />
            </div>
            <div className="border">
              <input
                onChange={this.handleCheckbox}
                type="checkbox"
                id="Sports"
                name="Sports"
                value="sports"
                checked={this.state.preferences.sports}
              />
              <label htmlFor="Sports">Sports</label>
            </div>
            <div className="border">
              <label htmlFor="Water Activities">Water Activities</label>
              <input
                onChange={this.handleCheckbox}
                type="checkbox"
                id="Water Activities"
                name="Water Activities"
                value="water Activities"
                checked={this.state.preferences.waterActivities}
              />
            </div>
            <div className="border">
              <input
                onChange={this.handleCheckbox}
                type="checkbox"
                id="Theater"
                name="Theater"
                value="theater"
                checked={this.state.preferences.theater}
              />
              <label htmlFor="Theater">Theater</label>
            </div>
            <div className="border">
              <label htmlFor="Trails"> Trails</label>
              <input
                onChange={this.handleCheckbox}
                type="checkbox"
                id="Trails"
                name="Trails"
                value="trails"
                checked={this.state.preferences.trails}
              />
            </div>
            <div className="border">
              <input
                onChange={this.handleCheckbox}
                type="checkbox"
                id="Art"
                name="Art"
                value="arts And Culture"
                checked={this.state.preferences.artsAndCulture}
              />
              <label htmlFor="Art"> Arts and Culture</label>
            </div>
            <div className="border">
              <label htmlFor="Museums"> Museum Exhibits</label>
              <input
                onChange={this.handleCheckbox}
                type="checkbox"
                id="Museums"
                name="Museums"
                value="museum Exhibits"
                checked={this.state.preferences.museumExhibits}
              />
            </div>
            <div className="border">
              <input
                onChange={this.handleCheckbox}
                type="checkbox"
                id="Camping"
                name="Camping"
                value="camping"
                checked={this.state.preferences.camping}
              />
              <label htmlFor="Camping">Camping</label>
            </div>
            <div className="border">
              <label htmlFor="Sailing"> Sailing</label>
              <input
                onChange={this.handleCheckbox}
                type="checkbox"
                id="Sailing"
                name="Sailing"
                value="sailing"
                checked={this.state.preferences.sailing}
              />
            </div>
            <div className="border">
              <input
                onChange={this.handleCheckbox}
                type="checkbox"
                id="Kayaking"
                name="Kayaking"
                value="kayaking"
                checked={this.state.preferences.kayaking}
              />
              <label htmlFor="Kayaking"> Kayaking</label>
            </div>
            <div className="border">
              <label htmlFor="hiking"> Hiking</label>
              <input
                onChange={this.handleCheckbox}
                type="checkbox"
                id="hiking"
                name="hiking"
                value="hiking"
                checked={this.state.preferences.hiking}
              />
            </div>
          </div>
          <div className="center">
            <button
              onClick={this.handleSave()}
              type="submit"
              className="clear"
            >
              {" "}
              <Link className="pref-button" to="/">
                Save Preferences
              </Link>
            </button>
          </div>
        </form>
      </main>
    );
  }
}

export default PreferenceSelect;
