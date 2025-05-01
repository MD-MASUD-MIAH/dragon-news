import React from 'react';
import Navbar from '../comonenst/navbar/Navbar';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div className=' bg-base-200 min-h-screen'>

        <div className=' w-11/12 mx-auto py-6'>
        <Navbar ></Navbar> 

        <Outlet></Outlet>
        </div>
        </div>
    );
};

export default AuthLayout;