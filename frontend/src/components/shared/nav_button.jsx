import React from 'react';

const NavButton = ({ action, classes, text }) => {
    return (
        <div className={`nav-button ${classes}`} onClick={action}>
            {text}
        </div>
    )
}

export default NavButton;