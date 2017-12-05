import React from 'react';

export default class GrabSpot extends React.Component {
    render() {
        return(
            <div>
                <h1>Grab Spot</h1>
                <select name='campuses'>
                    <option value='camden'>Camden</option>
                    <option value='new brunswik'>New Brunswik</option>
                    <option value='newark'>Newark</option>
                </select>
            </div>
        );
    }
}