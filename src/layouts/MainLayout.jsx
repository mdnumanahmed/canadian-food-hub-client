import React from 'react';
import { Outlet } from 'react-router-dom';
import FoodNavbar from '../shared/FoodNavbar';

const MainLayout = () => {
    return (
        <div>
            <FoodNavbar />
            <Outlet />
        </div>
    );
};

export default MainLayout;