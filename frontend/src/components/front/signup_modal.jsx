import React from 'react';
import Form from './form';
import { connect } from 'react-redux';
import { createUser } from '../../actions/user_actions';

const SignupModal = props => {
    return (
        <div>
            <Form action={props.createUser} text="Sign Up" />
        </div>
    )
}

const mdp = dispatch => {
    return {
        createUser: user => dispatch(createUser(user)),
    }
}

export default connect(null, mdp)(SignupModal);