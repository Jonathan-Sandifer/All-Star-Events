import React from "react";
import Footer from "./Footer";

class PreferenceSelect extends React.Component {


    render() {
        return (
            <main className="preference-main">&nbsp;
                <div className="header">
                    <h1>What do you like to do?</h1>
                </div>
                <div className="wrapper">
                    <div className="border">
                        <input type="checkbox" id="parks" name="parks" value="Parks"/>
                        <label for="parks">Parks</label>
                    </div>
                    <div className="border">
                        <label for="concert">Concerts</label>
                        <input type="checkbox" id="concert" name="concert" value="Concerts"/>
                    </div>
                    <div className="border">
                        <input type="checkbox" id="Sports" name="Sports" value="Sports"/>
                        <label for="Sports">Sports</label>
                    </div>
                    <div className="border">
                        <label for="Water Activities">Water Activities</label>
                        <input type="checkbox" id="Water Activities" name="Water Activities" value="Water Activities"/>
                    </div>
                    <div className="border">
                        <input type="checkbox" id="Theater" name="Theater" value="Theater"/>
                        <label for="Theater">Theater</label>
                    </div>
                    <div className="border">
                        <label for="Trails"> Trails</label>
                        <input type="checkbox" id="Trails" name="Trails" value="Trails"/>
                    </div>
                    <div className="border">
                        <input type="checkbox" id="Art" name="Art" value="Art"/>
                        <label for="Art"> Art</label>
                    </div>
                    <div className="border">
                        <label for="Museums"> Museums</label>
                        <input type="checkbox" id="Museums" name="Museums" value="Museums"/>
                    </div>
                    <div className="border">
                        <input type="checkbox" id="Camping" name="Camping" value="Camping"/>
                        <label for="Camping">Camping</label>
                    </div>
                    <div className="border">
                        <label for="Sailing"> Sailing</label>
                        <input type="checkbox" id="Sailing" name="Sailing" value="Sailing"/>
                    </div>
                    <div className="border">
                        <input type="checkbox" id="Kayaking" name="Kayaking" value="Kayaking"/>
                        <label for="Kayaking"> Kayaking</label>
                    </div>
                    <div className="border">
                        <label for="vehicle1"> Hiking</label>
                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                    </div>
                </div>
                <div className="center">
                    <button className="pref-button">Save Preferences</button>
                </div>
            </main>
        )
    }
}

export default PreferenceSelect