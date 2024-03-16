import React from 'react';
import { FaSearch } from 'react-icons/fa';

const Search = () => {
    return (
        <div className='flex items-center'>
             <FaSearch className="absolute ml-5"></FaSearch>
        <input
          type="text"
          placeholder="Search your Destination"
          className="input input-bordered border-white  md:w-[370px] w-auto bg-transparent text-white placeholder-white pl-12"
        />
        </div>
    );
};

export default Search;