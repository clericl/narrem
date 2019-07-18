import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../actions/modal_actions';
import CreateUserModal from './front/create_user_modal';
import LoginUserModal from './front/login_user_modal';

class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
        }
        this.modalRef = React.createRef();
    }

    componentDidUpdate() {
        if (this.props.modal && !this.state.show) {
            this.setState({ show: true });
        } else if (!this.props.modal && this.state.show) {
            this.setState({ show: false });
        }
    }

    render() {
        if (!this.props.modal) {
            return null;
        } else {
            let component;
            switch (this.props.modal) {
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
                <div className={`modal-background modal-enter ${this.state.show ? "modal-enter-active" : ""}`}
                    ref={this.modalRef}
                    onClick={this.props.closeModal}
                >
                    <div className="user-box" onClick={e => e.stopPropagation()}>
                        { component }
                    </div>
                </div>
            )
        }
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