import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Admin/Header';
import SideMenu from '../../components/Admin/SideMenu'

const Layout = () => {
    return (
        <div className='Alayout'>
            <Header/>
            <div id='admin'>
                
                <SideMenu/>
                <div>
                <Outlet/>
                </div>

            </div>
            
        </div>
    );
};

export default Layout;