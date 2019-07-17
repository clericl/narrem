import React, { useState, useEffect } from 'react';

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
        e.preventDefault();
        this.setState({
            [key]: e.target.value,
        });
    }

    handleSubmit() {
        this.props.createUser({
            email: this.state.email,
            password: this.state.password,
        });
    }

    render() {
        return (
            <>
                <form className="user-form">
                    <input
                        type="text"
                        value={email}
                        placeholder="Email address"
                        onChange={this.handleChange} />
                    <input
                        type="password"
                        value={password}
                        placeholder = "Password"
                        onChange={this.handleChange} />
                </form>
                <div className="nav-button" onClick={this.handleSubmit}>
                    Sign Up
                </div>
            </>
        )
    }
}

export default Form;