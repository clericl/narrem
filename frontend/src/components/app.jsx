import React from 'react';
import Modal from './modal';
import FrontMain from './front/main';
import { connect } from 'react-redux';
import FrontHeader from './front/header';
import Sidebar from './main/sidebar/sidebar';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

const App = props => {
    if (props.currentUser) {
        return (
            <>
                <Modal />
    
                <Switch>
                    <Route exact path="/" component={Sidebar} />
                </Switch>
            </>
        )
    } else {
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
}

const msp = state => {
    return {
        currentUser: state.session.currentUser || null
    }
}

export default withRouter(connect(msp, null)(App));