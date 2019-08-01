import React from 'react';
import Logo from '../shared/logo';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(e, key) {
        this.setState({
            [key]: e.target.value,
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.action({
            email: this.state.email,
            password: this.state.password,
        }).then(res => {
            if (this.props.currentUser) {
                this.props.closeModal();
            }
        })
    }

    render() {
        return (
            <div className="user-form-box">
                <Logo />
                <div className="title" id="byline">
                    {this.props.text === "Sign Up" ? "Let's get started." : "Welcome back!"}
                </div>
                <form className="user-form">
                    <input
                        type="text"
                        value={this.state.email}
                        placeholder="Email address"
                        className="user-form-input"
                        onChange={e => this.handleChange(e, "email")} />
                    <input
                        type="password"
                        value={this.state.password}
                        placeholder = "Password"
                        className="user-form-input"
                        onChange={e => this.handleChange(e, "password")} />
                    <input
                        type="submit"
                        className="nav-button form-button"
                        onClick={this.handleSubmit}
                        value={this.props.text} />
                </form>
            </div>
        )
    }
}

const msp = state => {
    return {
        currentUser: state.session.currentUser
    };
};

const mdp = dispatch => {
    return {
        closeModal: () => dispatch(closeModal()),
    };
};

export default connect(msp, mdp)(Form);