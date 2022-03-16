import React from 'react';
import { Outlet } from 'react-router';

const More = () => {
    return (
        <div>
            More
            <Outlet />
        </div>
    );
}

export default More;
