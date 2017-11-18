import React from 'react';
import { Route} from 'react-router-dom';
import Landing from './landing/landingPage';
import Login from './login/login';
import Register from './register/register';

export default class Routes extends React.Component {
        render() {
            return(
                <switch>
                    <Route exact path='/' component={Landing} />
                    <Route path='/login' component={Login} />
                    <Route path='/register' component={Register} />
                </switch>
        );
    }
}
