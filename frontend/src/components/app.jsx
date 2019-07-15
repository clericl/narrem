import React from 'react';
import Modal from './modal';
import FrontMain from './front/main';
import FrontHeader from './front/header';
import { connect } from 'react-redux';
import { AuthRoute } from '../util/route_util';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

const App = props => {
    return (
        <>
            <Modal />

            <Switch>
                <Route exact path="/" component={FrontHeader} />
            </Switch>

            <Switch>
                <Route exact path="/" component={FrontMain} />
            </Switch>
        </>
    )
}

export default withRouter(connect(null, null)(App));