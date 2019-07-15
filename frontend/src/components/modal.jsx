import React from 'react';
import { connect } from 'react-redux';
import CreateUserModal from './front/create_user_modal';
import LoginUserModal from './front/login_user_modal';

const Modal = props => {
    if (!props.modal) {
        return null;
    } else {
        let component;
        switch (props.modal) {
            case "createUser":
                component = <CreateUserModal />;
            case "loginUser":
                component = <LoginUserModal />;
            default:
                component = null;
        }
        return (
            <div className="modal-background" onClick={props.closeModal}>
                {component}
            </div>
        )
    }
}

const msp = state => {
    return {
        modal: state.ui.modal,
    };
};

const mdp = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(msp, mdp)(Modal);