import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import UserMenu from './user_menu';

const Sidebar = props => {
    return (
        <nav>
            <UserMenu />
            {/* <Search />
            <nav>
                <NavLink>
                    <NoteMenu />
                </NavLink>
                <NavLink>
                    <ManuscriptMenu />
                </NavLink>
                <NavLink>
                    <CommunityMenu />
                </NavLink>
            </nav> */}
        </nav>
    )
}

export default Sidebar;