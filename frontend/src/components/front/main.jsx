import React, { useState, useEffect } from 'react';
import NavButton from '../shared/nav_button';
import { Redirect, withRouter } from 'react-router-dom';

const Main = props => {
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        if (redirect) {
            setRedirect(false);
        };
    })
 
    if (redirect) {
        return (
            <Redirect to="/signup" />
        )
    } else {
        return (
            <main>
                <section className="front-main-section section1">
                    <img src={window.copyPhoto1} className="front-main-photo"/>
                    <div className="content">
                        <p className="title">Tell us your next story.</p>
                        <p className="text">String ideas and notes into outlines.</p>
                        <p className="text">Instantly format your manuscripts.</p>
                        <p className="text">Practice with flash fiction and peer editing.</p>
                        <br></br>
                        <p className="text">Put your thoughts on the page. Narrem will help with the rest.</p>
                        <NavButton action={() => {setRedirect(true)}} classes="demo-button" text="SIGN UP FOR FREE"/>
                    </div>
                </section>
            </main>
        )
    }
}

export default withRouter(Main);