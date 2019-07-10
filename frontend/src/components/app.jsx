import React from 'react';
import FrontMain from './front/main';
import FrontHeader from './front/header';
import SignupMain from './user/signup';
import { connect } from 'react-redux';
import { AuthRoute } from '../util/route_util';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

const App = props => {
    return (
        <>
            <Switch>
                <Route exact path="/" component={FrontHeader} />
            </Switch>

            <Switch>
                <Route exact path="/" component={FrontMain} />
                <Route path="/signup" component={SignupMain} />
            </Switch>
        </>
    )
}

export default withRouter(connect(null, null)(App));