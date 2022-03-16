import React from 'react';
import { Outlet } from 'react-router';

const Notifications = () => {
    return (
        <div>
            Notifications
            <Outlet />
        </div>
    );
}

export default Notifications;
