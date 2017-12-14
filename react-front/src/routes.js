import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Landing from './landing/landingPage';
import AddUser from './add-user/AddUser';
import Vehicle from './vehicle/vehicle';
import GrabSpot from './grab-spot/grabSpot';

const Routes = () => (
<Router>
    <switch>
        <Route exact path='/' component={Landing} />
        <Route path='/addUser' component={AddUser} />
        <Route name='vehicle' path='/vehicle/:id' component={Vehicle} />
        <Route name='grabSpot' path='/grabSpot/:id' component={GrabSpot} />
        <Route name='buyPermit' path='/buyPermit/:id' component={Landing} />
    </switch>
</Router>
)

export default Routes;
