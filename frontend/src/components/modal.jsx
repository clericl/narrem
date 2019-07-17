import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../actions/modal_actions';
import CreateUserModal from './front/create_user_modal';
import LoginUserModal from './front/login_user_modal';
import { CSSTransition } from 'react-transition-group';

const Modal = props => {
    const [showModal, setShowModal] = useState(false);
    
    useEffect(() => {
        if (props.modal) {
            setShowModal(true);
        } else {
            setShowModal(false);
        }
    });

    if (!props.modal) {
        return null;
    } else {
        let component;
        switch (props.modal) {
            case "createUser":
                component = <CreateUserModal />;
                break;
            case "loginUser":
                component = <LoginUserModal />;
                break;
            default:
                component = null;
                break;
        }
        return (
            <CSSTransition in={showModal} appear={true} timeout={500} classNames="modal" className="modal-enter">
                <div className="modal-background" onClick={props.closeModal}>
                    <div className="user-box" onClick={e => e.stopPropagation()}>
                        { component }
                    </div>
                </div>
            </CSSTransition>
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