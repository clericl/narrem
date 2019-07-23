import React from 'react';
import Form from './form';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/session_actions';

const SigninModal = props => {
    return (
        <div>
            <Form action={props.loginUser} text="Log In" />
        </div>
    )
}

const mdp = dispatch => {
    return {
        loginUser: user => dispatch(loginUser(user)),
    }
}

export default connect(null, mdp)(SigninModal);