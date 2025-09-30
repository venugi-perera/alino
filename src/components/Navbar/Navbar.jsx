import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import Logo from "/logo.jpeg"; // import your logo

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="py-4 lg:py-6 relative bg-white shadow">
      <div className="container mx-auto flex justify-between items-center px-4">
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

        {/* Hamburger for Mobile */}
        <button
          className="sm:hidden text-3xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <HiOutlineX /> : <HiOutlineMenu />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-50
          ${isOpen ? "translate-x-0" : "translate-x-full"} sm:hidden`}
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

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;
