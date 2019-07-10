import React from 'react';
import Logo from '../shared/logo';
import NavButton from '../shared/nav_button';

const Header = props => {
    return (
        <header className="front-header">
            <nav className="front-nav">
                <div>
                    <Logo />
                </div>
                <div className="session-nav">
                    <NavButton action={() => {console.log("pika pika")}} classes="session-button" text="Sign Up" />
                    <NavButton action={() => {console.log("pika pika")}} classes="session-button" text="Log In" />
                </div>
            </nav>
        </header>
    )
}

export default Header;