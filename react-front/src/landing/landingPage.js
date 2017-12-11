import React from 'react';
import './landingPage.css';
import { Link } from 'react-router-dom';

export default class Landing extends React.Component {
    render() {
        return (
            <div>
                <div className="app-header-container">
                    <h1 className="app-header-text">Rutgers Parking System</h1>
                </div>
                <label>Search User:</label>
                <input type='text' placeholder='Enter User Id'/><br/>
                <a href='#'>Search</a>
                <Link to='/addUser'>Add User</Link>
                <h1>List Of Users</h1>
            </div>
        );
    }
}