import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import Logo from "/logo.jpeg"; // import your logo

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow">
      <div className="container mx-auto flex justify-between items-center px-4 py-4 lg:py-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center">
            <img
              src={Logo}
              alt="ALINO Logo"
              className="w-12 h-12 object-contain"
            />
          </Link>
          <p className="text-2xl lg:text-3xl font-semibold">ALINO</p>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden sm:flex gap-8">
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

        {/* Hamburger Icon (Mobile Only) */}
        <button
          className="sm:hidden text-3xl focus:outline-none"
          onClick={() => setIsOpen(true)}
          aria-label="Open Menu"
        >
          <HiOutlineMenu />
        </button>
      </div>

      {/* Mobile Fullscreen Sidebar */}
      <div
        className={`fixed inset-0 bg-white z-50 transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "translate-x-full"} sm:hidden`}
      >
        {/* Header with Close Icon */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
          <p className="text-2xl font-semibold">Menu</p>
          <button
            onClick={() => setIsOpen(false)}
            className="text-3xl focus:outline-none"
            aria-label="Close Menu"
          >
            <HiOutlineX />
          </button>
        </div>

        {/* Nav Links */}
        <ul className="flex flex-col mt-6 gap-6 px-6 text-lg font-medium">
          <li>
            <Link to="/" onClick={() => setIsOpen(false)} className="uppercase hover:text-primary">
              Home
            </Link>
          </li>
          <li>
            <Link to="/menu" onClick={() => setIsOpen(false)} className="uppercase hover:text-primary">
              Menu
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setIsOpen(false)} className="uppercase hover:text-primary">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setIsOpen(false)} className="uppercase hover:text-primary">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>

      {/* Dark Overlay Behind Menu */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40 sm:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;
