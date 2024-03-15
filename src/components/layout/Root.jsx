import React from 'react';
import { Outlet } from 'react-router-dom';
import Home from '../pages/Home';

const Root = () => {
    return (
        <div className='max-w-[1440px] max-h-[900px] mx-auto'>
           
             <Outlet></Outlet>
        </div>
    );
};

export default Root;