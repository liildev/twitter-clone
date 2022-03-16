import React from 'react';
import { Outlet } from 'react-router-dom';
import SidebarBlog from '../components/Sidebar/SidebarBlog';
const Adminlayouts = () => {
    return (
        <div className="content">
            <SidebarBlog />
            <Outlet />
        </div>
    );
}

export default Adminlayouts;
