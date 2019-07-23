import React from 'react';
import Logo from '../shared/logo';
import NavButton from '../shared/nav_button';
import { connect } from 'react-redux'
import { openModal } from '../../actions/modal_actions';

const Header = props => {
    return (
        <header className="front-header">
            <nav className="front-nav">
                <div>
                    <Logo />
                </div>
                <div className="session-nav">
                    <NavButton action={props.signupModal} klasses="session-button" text="Sign Up" />
                    <NavButton action={props.signinModal} klasses="session-button" text="Log In" />
                </div>
            </nav>
        </header>
    )
}

const mdp = dispatch => {
    return {
        signupModal: () => dispatch(openModal("createUser")),
        signinModal: () => dispatch(openModal("loginUser")),
    }
}

export default connect(null, mdp)(Header);