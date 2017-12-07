import React from 'react';
const CampusController = require('./campus-controller');

export default class Campus extends React.Component {
    constructor(props) {
        const campusCtrl = new CampusController();
        super(props);
        this.state = {
            campuses: campusCtrl.getCampusList()
        }
    }
    createSelectItems() {
        let items = [];
        for (var i = 0; i < this.state.campuses.length; i++) {
            items.push(<option value={this.state.campuses[i]}>{this.state.campuses[i]}</option>);
        }
        return items;
    }
    render() {
        return(
            <div>
                <select name='campuses'>
                    {this.createSelectItems()}
                </select>
            </div>
        );
    }
}