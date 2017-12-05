import React from 'react';

export default class Vehicle extends React.Component {
    render() {
        return(
            <div>
                <h1>Vehicle List</h1>
                <h1>Add Vehicle</h1>
                <label>Plate Number:</label>
                <input type='text' name='plateNumber'/>
                <label>Plate Slate:</label>
                <input type='text' name='plateSlate'/>
                <label>Make:</label>
                <input type='text' name='make'/>
                <label>Model:</label>
                <input type='text' name='model'/>
                <label>Color:</label>
                <input type='text' name='color'/>
                <input type='button' value='Add' onClick={() => alert("vehicle added")}/>
            </div>
        );
    }
}