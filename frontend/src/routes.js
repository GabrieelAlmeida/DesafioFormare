import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Login from './pages/login/login';
import Register from './pages/register/register';
import HomeChat from './pages/homeChat/homeChat';
import NotFound from './pages/notFound/notFound';
import LoginConsultor from './pages/loginConsultor/index';
import HomeConsultor from './pages/homeConsultor/homeConsultor';
import RegisterConsultor from './pages/registerConsultor/index';

const Routes = () => (

    <BrowserRouter>
        <Switch>
            <Route path='/' exact component={Login}/>
            <Route path='/register' exact component={Register}/>
            <Route path='/home-chat' exact component={HomeChat}/>
            <Route path='/login-consultor' exact component={LoginConsultor}/>
            <Route path='/home-consultor' exact component={HomeConsultor}/>
            <Route path='/register-consultor' exact component={RegisterConsultor}/>
            <Route component={NotFound}/>
        </Switch>
    </BrowserRouter>

);

export default Routes;