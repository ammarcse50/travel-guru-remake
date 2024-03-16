import React from "react";

import logo from "../../../../public/logo.png";
import { FaSearch } from "react-icons/fa";
const Navbar = () => {
  return (
    <div className=" absolute flex">
      <img src={logo} className="w-[120.26px] h-[56px] bg-white" alt="" />

      <span className="flex items-center gap-2 border rounded-s">
      <FaSearch />
        <input
          type="search"
          placeholder="Search your Destination..."
          name="search"
          id=""
        />
      </span>
    </div>
  );
};

export default Navbar;
