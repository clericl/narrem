import React, { useState, useEffect } from 'react';

const Form = props => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <form>
            <input
                type="text"
                value={email}
                onChange={e => {
                    e.preventDefault();
                    setEmail(e.target.value)}
                } />
            <input
                type="password"
                value={password}
                onChange={e => {
                    e.preventDefault();
                    setPassword(e.target.value)}
                } />
        </form>
    )
}

export default Form;