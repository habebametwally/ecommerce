import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="text-black border border-b-gray-200 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top bar */}
        <div className="flex items-center justify-between h-16">
          {/* Hamburger button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/store" className="hover:underline">All Products</Link></li>
            <li><Link to="/orderhistory" className="hover:underline">Your Order</Link></li>
            <li><Link to="/aboutus" className="hover:underline">About Us</Link></li>
            <li><Link to="/contactus" className="hover:underline">Contact Us</Link></li>
            <li><Link to="#" className="hover:underline">Privacy Policy</Link></li>
            <li><Link to="/trackorders" className="hover:underline">Track My Order</Link></li>
          </ul>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-2">
            <ul className="flex flex-col space-y-3 pb-4">
              <li><Link to="/" className="block hover:underline">Home</Link></li>
              <li><Link to="/store" className="block hover:underline">All Products</Link></li>
              <li><Link to="/orderhistory" className="block hover:underline">Your Order</Link></li>
              <li><Link to="/aboutus" className="block hover:underline">About Us</Link></li>
              <li><Link to="/contactus" className="block hover:underline">Contact Us</Link></li>
              <li><Link to="#" className="block hover:underline">Privacy Policy</Link></li>
              <li><Link to="/trackorders" className="block hover:underline">Track My Order</Link></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
