import React from "react";

class PreferenceSelect extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            preferences: {
                parks: false,
                sports: false,
                concerts: false,
                waterActivities: false,
                theater: false,
                trails: false,
                art: false,
                museums: false,
                camping: false,
                sailing: false,
                kayaking: false,
                hiking: false
                
            }
        }
        this.handleCheckbox = this.handleCheckbox.bind(this);
    }

    handleCheckbox(event) {
        // console.log(event.target.value);
        let state = this.state;
        state.preferences[event.target.value] = event.target.checked;
        this.setState(state);
        
    }

    async setPreferences(preference, user_id) {
        const url = `http://localhost:8030/api/update/${user_id}/`;
        console.log(JSON.stringify(preference));
        const response = await fetch(url, {
            method: 'put',
            // credentials: 'include',
            body: JSON.stringify({preference}),
            headers: {
                'Content-Type': 'application/json',
            }
        });
        if (response.ok) {
            return {"message": 'Your Preferences have been saved'};
        }
    }

    handleSave(event) {
        let state = this.state
        console.log(typeof(state));
        let container = {}
        for (let key of Object.keys(state['preferences'])) {
            // console.log(key);
            // console.log(state['preferences'][key])
            if (state['preferences'][key] === true) {
                // this.setPreferences(key); [p,a,r,k,s]
                container['name'] = key[0].toUpperCase() + key.slice(1, key.length);
                // console.log(container);
                this.setPreferences(container, 2)
            }
        }
        // for (const [key, value] of Object.entries(state)) {
        //     console.log(key["art"]);
        // }
       
    }

    render() {
        return (
            <main className="preference-main">&nbsp;
                <div className="header">
                    <h1>What do you like to do?</h1>
                </div>
                <form>
                    <div className="wrapper">
                        <div className="border">
                            <input onChange={this.handleCheckbox} type="checkbox" id="parks" name="parks" value="parks" checked={this.state.preferences.parks}/>
                            <label htmlFor="parks">Parks</label>
                        </div>
                        <div className="border">
                            <label htmlFor="concert">Concerts</label>
                            <input onChange={this.handleCheckbox} type="checkbox" id="concert" name="concert" value="concerts" checked={this.state.preferences.concerts}/>
                        </div>
                        <div className="border">
                            <input onChange={this.handleCheckbox} type="checkbox" id="Sports" name="Sports" value="sports" checked={this.state.preferences.sports}/>
                            <label htmlFor="Sports">Sports</label>
                        </div>
                        <div className="border">
                            <label htmlFor="Water Activities">Water Activities</label>
                            <input onChange={this.handleCheckbox} type="checkbox" id="Water Activities" name="Water Activities" value="water Activities" checked={this.state.preferences.waterActivities}/>
                        </div>
                        <div className="border">
                            <input onChange={this.handleCheckbox} type="checkbox" id="Theater" name="Theater" value="theater" checked={this.state.preferences.theater}/>
                            <label htmlFor="Theater">Theater</label>
                        </div>
                        <div className="border">
                            <label htmlFor="Trails"> Trails</label>
                            <input onChange={this.handleCheckbox} type="checkbox" id="Trails" name="Trails" value="trails" checked={this.state.preferences.trails}/>
                        </div>
                        <div className="border">
                            <input onChange={this.handleCheckbox} type="checkbox" id="Art" name="Art" value="art" checked={this.state.preferences.art}/>
                            <label htmlFor="Art"> Art</label>
                        </div>
                        <div className="border">
                            <label htmlFor="Museums"> Museums</label>
                            <input onChange={this.handleCheckbox} type="checkbox" id="Museums" name="Museums" value="museums" checked={this.state.preferences.museums}/>
                        </div>
                        <div className="border">
                            <input onChange={this.handleCheckbox} type="checkbox" id="Camping" name="Camping" value="camping" checked={this.state.preferences.camping}/>
                            <label htmlFor="Camping">Camping</label>
                        </div>
                        <div className="border">
                            <label htmlFor="Sailing"> Sailing</label>
                            <input  onChange={this.handleCheckbox} type="checkbox" id="Sailing" name="Sailing" value="sailing" checked={this.state.preferences.sailing}/>
                        </div>
                        <div className="border">
                            <input onChange={this.handleCheckbox} type="checkbox" id="Kayaking" name="Kayaking" value="kayaking" checked={this.state.preferences.kayaking}/>
                            <label htmlFor="Kayaking"> Kayaking</label>
                        </div>
                        <div className="border">
                            <label htmlFor="hiking"> Hiking</label>
                            <input onChange={this.handleCheckbox} type="checkbox" id="hiking" name="hiking" value="hiking" checked={this.state.preferences.hiking}/>
                        </div>
                    </div>
                    <div className="center">
                        <button onClick={this.handleSave()} type="submit" className="pref-button">Save Preferences</button>
                    </div>
                </form>
            </main>
        )
    }
}

export default PreferenceSelect