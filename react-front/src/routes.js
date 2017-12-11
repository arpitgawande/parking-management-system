import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Landing from './landing/landingPage';
import AddUser from './add-user/AddUser';
import Vehicle from './vehicle/vehicle';

const Routes = () => (
<Router>
    <switch>
        <Route exact path='/' component={Landing} />
        <Route path='/addUser' component={AddUser} />
        <Route path='/vehicle' component={Vehicle} />
    </switch>
</Router>
)

export default Routes;