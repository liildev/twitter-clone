import React from 'react';
import { Outlet } from 'react-router-dom';

const Noauthlayouts = () => {
    return (
        <div>
            <Outlet />
        </div>
    );
}

export default Noauthlayouts;
