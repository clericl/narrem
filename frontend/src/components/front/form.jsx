import React from 'react';

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
        });
    }

    render() {
        return (
            <>
                <form className="user-form">
                    <input
                        type="text"
                        value={this.state.email}
                        placeholder="Email address"
                        onChange={e => this.handleChange(e, "email")} />
                    <input
                        type="password"
                        value={this.state.password}
                        placeholder = "Password"
                        onChange={e => this.handleChange(e, "password")} />
                </form>
                <div className="nav-button" onClick={this.handleSubmit}>
                    {this.props.text}
                </div>
            </>
        )
    }
}

export default Form;