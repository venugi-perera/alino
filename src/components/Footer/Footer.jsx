// Footer.jsx
import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Restaurant</h2>
          <p className="text-gray-400">
            Serving delicious meals with love and passion. Enjoy our cozy
            ambiance, fast delivery, and gourmet menu.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <a href="#home" className="hover:text-red-500">
                Home
              </a>
            </li>
            <li>
              <a href="#menu" className="hover:text-red-500">
                Menu
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-red-500">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-red-500">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="text-gray-400">123 Main Street, City, Country</p>
          <p className="text-gray-400">+123 456 7890</p>
          <p className="text-gray-400">contact@restaurant.com</p>
          <div className="flex mt-4 space-x-4">
            <a
              href="#"
              className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-full"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-full"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-full"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="mt-10 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Our Restaurant. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
