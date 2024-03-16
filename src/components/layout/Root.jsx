import React from 'react';
import { Outlet } from 'react-router-dom';
import Home from '../pages/Home';

const Root = () => {
    return (
        <div className='max-w-[1440px] max-h-[900px] mx-auto font-montserrat'>
           
             <Outlet></Outlet>
        </div>
    );
};

export default Root;