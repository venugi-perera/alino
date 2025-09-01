import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import Logo from "/logo.jpeg"; // <-- import your logo image

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="py-4 lg:py-6 relative">
      <div className="container flex justify-between items-center">
        {/* logo section */}
        <div>
          <p className="text-3xl lg:text-4xl font-semibold">ALINO</p>

          {/* <Link to="/">
            <img
              src={Logo}
              alt="ALINO Logo"
              className="w-10 md:w-18 object-contain"
            />
          </Link> */}
        </div>

        {/* Menu for large screens */}
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

        {/* Hamburger button for small screens */}
        <button
          className="sm:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiOutlineX /> : <HiOutlineMenu />}
        </button>
      </div>

      {/* Sidebar for small screens */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } sm:hidden z-50`}
      >
        <ul className="flex flex-col mt-20 gap-6 px-6">
          <li className="hover:border-b-2 border-primary uppercase">
            <Link to="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li className="hover:border-b-2 border-primary uppercase">
            <Link to="/menu" onClick={() => setIsOpen(false)}>
              Menu
            </Link>
          </li>
          <li className="hover:border-b-2 border-primary uppercase">
            <Link to="/about" onClick={() => setIsOpen(false)}>
              About
            </Link>
          </li>
          <li className="hover:border-b-2 border-primary uppercase">
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              Contact Us
            </Link>
          </li>
        </ul>
      </div>

      {/* Overlay when sidebar is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-30 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default Navbar;
