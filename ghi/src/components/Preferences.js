import React from "react";

class PreferenceSelect extends React.Component {


    render() {
        return (
            <main>
                <div className="header">
                    <h1>What do you like to do?</h1>
                </div>
                <div className="wrapper">
                    <div className="border">
                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                        <label for="vehicle1">Parks</label>
                    </div>
                    <div className="border">
                        <label for="vehicle1">Concerts</label>
                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                    </div>
                    <div className="border">
                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                        <label for="vehicle1">Sports</label>
                    </div>
                    <div className="border">
                        <label for="vehicle1">Water Activities</label>
                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                    </div>
                    <div className="border">
                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                        <label for="vehicle1">Theater</label>
                    </div>
                    <div className="border">
                    <label for="vehicle1"> Trails</label>
                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                    </div>
                    <div className="border">
                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                    <label for="vehicle1"> Art</label>
                    </div>
                    <div className="border">
                    <label for="vehicle1"> Museums</label>
                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                    </div>
                    <div className="border">
                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                    <label for="vehicle1">Camping</label>
                    </div>
                    <div className="border">
                    <label for="vehicle1"> Sailing</label>
                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                    </div>
                    <div className="border">
                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                    <label for="vehicle1"> Kayaking</label>
                    </div>
                    <div className="border">
                    <label for="vehicle1"> Hiking</label>
                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                    </div>
                    <div className="border">
                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                    <label for="vehicle1"> Hiking</label>
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