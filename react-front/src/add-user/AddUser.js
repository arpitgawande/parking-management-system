import React from 'react';
import fetch from 'cross-fetch';

export default class AddUser extends React.Component {
    constructor(props) {
        super(props);
        this.baseURL = 'http://localhost:3000/';
        this.state = {
            campuses: [],
            userTypeList: [],
            user: {}
        };
    }

    getCampusList() {
        const url = this.baseURL + 'campuses';
        return fetch(url)
            .then(response => { return Promise.resolve(response.json()) },
            err => { console.log("error") });
    }

    getUserTypeList() {
        const url = this.baseURL + 'userTypeList';
        return fetch(url)
            .then(response => { return Promise.resolve(response.json()) },
            err => { console.log("error") });
    }

    createUserTypeSelectItems() {
        this.getUserTypeList()
            .then(response => {
                this.setState({ userTypeList: response });
            });
        let items = [];
        for (var i = 0; i < this.state.userTypeList.length; i++) {
            items.push(<option value={this.state.userTypeList[i].description}>{this.state.userTypeList[i].description}</option>);
        }
        return items;
    }

    createCampusSelectItems() {
        this.getCampusList()
            .then(response => {
                this.setState({ campuses: response });
            });
        let items = [];
        for (var i = 0; i < this.state.campuses.length; i++) {
            items.push(<option value={this.state.campuses[i].campus_name}>{this.state.campuses[i].campus_name}</option>);
        }
        return items;
    }

    render() {
        let user = {};
        return (
            <div>
                <h1>Add User</h1>
                <label>First Name:</label>
                <input type='text' name='firstName' ref={(input) => { user.firstName = input; }} />
                <label>Last Name:</label>
                <input type='text' name='lastName' ref={(input) => { user.lastName = input; }} />
                <label>Address:</label>
                <input type='text' name='address' ref={(input) => { user.address = input; }} />
                <label>User Type:</label>
                <select name='userTypeList' ref = {(input) => user.type = input}>
                    {this.createUserTypeSelectItems()}
                </select>
                <label>Campus:</label>
                <select name='campuses' ref = {(input) => user.Campus = input}>
                    {this.createCampusSelectItems()}
                </select>
                <input type='button' value='Add' onClick={() => {this.setState({user: user}); alert(this.state)}} />
            </div>
        );
    }
}