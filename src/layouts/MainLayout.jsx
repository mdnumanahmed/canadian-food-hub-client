import React from 'react';
import { Outlet } from 'react-router-dom';
import FoodNavbar from '../shared/FoodNavbar';
import FoodFooter from '../shared/FoodFooter';

const MainLayout = () => {
    return (
        <div>
            <FoodNavbar />
            <Outlet />
            <FoodFooter />
        </div>
    );
};

export default MainLayout;