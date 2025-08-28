import React from "react";
import { Link } from "react-router-dom";
import Profile from "../../assets/profile.png";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="py-4 lg:py-6">
      <div className="container flex justify-between items-center">
        {/* logo section */}
        <div>
          <p className="text-3xl lg:text-4xl font-semibold">ALINO</p>
        </div>

        {/* Menu section */}
        <div className="flex justify-center items-center gap-10">
          <ul className="gap-8 hidden sm:flex">
            <li className="hover:border-b-2 border-primary uppercase">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:border-b-2 border-primary uppercase">
              <Link to="/menu">Menu</Link>
            </li>
            <li className="hover:border-b-2 border-primary uppercase">
              <Link to="/about">About</Link>
            </li>
            <li className="hover:border-b-2 border-primary uppercase">
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
