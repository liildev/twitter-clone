import React from 'react';
import { Outlet } from 'react-router-dom';
import Home from '../../components/Home/Home';

const HomeBlog = () => {
    return (
        <div>
            <Home />
            <Outlet />
        </div>
    );
}

export default HomeBlog;
