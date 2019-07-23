import React from 'react';

const NavButton = ({ action, klasses, text }) => {
    return (
        <div className={`nav-button ${klasses}`} onClick={action}>
            {text}
        </div>
    )
}

export default NavButton;