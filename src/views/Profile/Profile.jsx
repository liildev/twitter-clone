import React from 'react';
import { Outlet } from 'react-router';
import Profile from '../../components/Profile/Profile'
const Prof = () => {
    return (
        <div>
            <Profile />
            <Outlet />
        </div>
    );
}

export default Prof;
