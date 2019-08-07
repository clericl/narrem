import React from 'react';
import { connect } from 'react-redux';

const UserMenu = props => {
    return (
        <div>
            {/* <div>
                Stand-in for user icon
            </div> */}
            {props.currentUser.email}
        </div>
    )
}

const msp = state => {
    const currentUser = state.session.currentUser;

    return {
        currentUser: state.entities.users[currentUser],
    }
}

export default connect(msp, null)(UserMenu);