import React from 'react';
import Header from '../shared/Header/Header';
import Navbar from '../shared/Navbar/Navbar';
import Search from './search/Search';

const Home = () => {
    return (
        <div>
            <Navbar ></Navbar>
            <div className='absolute mt-8 ml-96'>  <Search></Search></div>
        
              
            <Header></Header>
        </div>
    );
};

export default Home;