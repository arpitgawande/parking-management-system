import React from 'react';
import { Route } from 'react-router-dom';
import Landing from './landing/landingPage';
import AddUser from './add-user/AddUser';
import Vehicle from './vehicle/vehicle';

export default class Routes extends React.Component {
        render() {
            return(
                <switch>
                    <Route exact path='/' component={Landing} />
                    <Route path='/addUser' component={AddUser} />
                    <Route path='/vehicle' component={Vehicle} />
                </switch>
        );
    }
}
