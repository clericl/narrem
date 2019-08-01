import React from 'react';
import Modal from './modal';
import FrontMain from './front/main';
import FrontHeader from './front/header';
import { ProtectedRoute, AuthRoute } from '../util/route_util';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

const App = props => {
    return (
        <>
            <Modal />

            <Switch>
                <AuthRoute exact path="/" component={FrontHeader} />
            </Switch>

            <Switch>
                <AuthRoute exact path="/" component={FrontMain} />
            </Switch>
        </>
    )
}

export default withRouter(App);