import React from 'react';
import './landingPage.css';
import { Link } from 'react-router-dom';

export default class Landing extends React.Component {
    render() {
        return (
            <div>
                <div className="app-header-container">
                    <p className="app-header-text">Rutgers University : Parking System</p>
                </div>
                <Link to='/login'>Login</Link>&nbsp;
                <Link to='/register'>Register</Link>
            </div>
        );
    }
}