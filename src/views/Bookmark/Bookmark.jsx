import React from 'react';
import { Outlet } from 'react-router';

const Bookmark = () => {
    return (
        <div>
            Bookmark
            <Outlet />
        </div>
    );
}

export default Bookmark;
