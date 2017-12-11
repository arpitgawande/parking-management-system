import React from 'react';
import './landingPage.css';
import fetch from 'cross-fetch';
import { Link } from 'react-router-dom';

export default class Landing extends React.Component {
    constructor(props) {
        super(props);
        this.baseURL = 'http://localhost:3000/';
        this.handleInputChange = this.handleInputChange.bind(this);
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        this.findAllUsers().then(response => {
            this.setState({ users: response });
        });
    }

    handleInputChange(event) {
        this.setState({ userId: event.target.value });
    }

    findAllUsers() {
        let url = this.baseURL + 'allUsers';
        return fetch(url)
            .then(response => { return Promise.resolve(response.json()) },
            err => { console.log("error") });
    }

    findUserById() {
        let id = this.state.userId;
        let url = this.baseURL + 'findUser?id=' + id;
        return fetch(url)
            .then(response => { return Promise.resolve(response.json()) },
            err => { console.log("error") });
    }

    getAllUsers() {
        this.findAllUsers().then(response => {
            this.setState({ users: response });
        });
    }

    getUser() {
        this.findUserById().then(user => {
            this.setState({ users: user });
        });
    }

    getUserData() {
        let items = [];
        for (var i = 0; i < this.state.users.length; i++) {
            let userId = this.state.users[i].user_id;
            items.push(<tr>
                <td>{this.state.users[i].user_name}</td>
                <td>{this.state.users[i].user_address}</td>
                <td><Link to={`vehicle/${userId}`}>Add Vehicle</Link></td>
                <td><Link to={`grabSpot/${userId}`}>Grab Spot</Link></td>
            </tr>);
        }
        return items;
    }

    render() {
        return (
            <div class='form'>
                <div className="app-header-container">
                    <h1 className="app-header-text">Rutgers Parking System</h1>
                </div>
                <label>Search User:</label>
                <input class='input textbox' type='text'
                    placeholder='Enter User Id'
                    name='firstName'
                    value={this.state.userId}
                    onChange={this.handleInputChange} /><br />
                <input type='button' value='Search' onClick={() => { this.getUser() }} />
                <input type='button' value='All users' onClick={() => { this.getAllUsers() }} />
                <Link to='/addUser'>Add User</Link>
                <h1>List Of Users</h1>
                <table class="pure-table pure-table-horizontal">
                    <tr>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Add Vehicle</th>
                        <th>Grab Spot</th>
                    </tr>
                    {this.getUserData()}
                </table>
            </div>
        );
    }
}