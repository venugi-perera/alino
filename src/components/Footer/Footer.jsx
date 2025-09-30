// Footer.jsx
import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 pt-12 pb-6 ps-0 lg:ps-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-6">
        {/* About Section */}
        <div data-aos="fade-up" data-aos-delay="100">
          <h2 className="text-2xl font-semibold mb-4">Our Restaurant</h2>
          <p className="text-gray-400 leading-relaxed">
            Serving delicious meals with love and passion. Enjoy our cozy
            ambiance, fast delivery, and gourmet menu.
          </p>
        </div>

        {/* Quick Links */}
        <div data-aos="fade-up" data-aos-delay="200">
          <h2 className="text-2xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <a href="#home" className="hover:text-red-500 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#menu" className="hover:text-red-500 transition">
                Menu
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-red-500 transition">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-red-500 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div data-aos="fade-up" data-aos-delay="300">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="text-gray-400">11 Narborough Rd Leicester LE3 0LE</p>
          <p className="text-gray-400">+44 7737 098045</p>
          <p className="text-gray-400">alinokam2002@yahoo.fr</p>
          <div className="flex mt-4 space-x-3">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-full transition transform hover:scale-110"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-full transition transform hover:scale-110"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-full transition transform hover:scale-110"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800 my-8"></div>

      {/* Bottom Text */}
      <div className="text-center text-gray-500 text-sm space-y-2 px-6">
        <p>
          <a href="/terms-conditions" className="hover:text-red-500 transition">
            Terms &amp; Conditions
          </a>{" "}
          |{" "}
          <a href="/privacy-policy" className="hover:text-red-500 transition">
            Privacy Policy
          </a>
        </p>
        <p>
          &copy; {new Date().getFullYear()} Our Restaurant. All rights reserved.{" "}
          | Powered by{" "}
          <a
            href="https://www.ansely.co.uk/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500 font-semibold"
          >
            Ansely
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
