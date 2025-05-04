import React from "react";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaCcVisa, FaCreditCard, FaCcPaypal, FaCcMastercard, FaCcDiscover, FaCcAmex } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#1e1f29] text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* About Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">ABOUT US</h3>
            <p className="text-sm text-gray-400 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.
            </p>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-red-500" /> 1734 Stonecoal Road
              </li>
              <li className="flex items-center gap-2">
                <FaPhone className="text-red-500" /> +021-95-51-84
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-red-500" /> email@email.com
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">CATEGORIES</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="#" className="hover:underline">Hot deals</Link></li>
              <li><Link to="#" className="hover:underline">Laptops</Link></li>
              <li><Link to="#" className="hover:underline">Smartphones</Link></li>
              <li><Link to="#" className="hover:underline">Cameras</Link></li>
              <li><Link to="#" className="hover:underline">Accessories</Link></li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">INFORMATION</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="#" className="hover:underline">About Us</Link></li>
              <li><Link to="#" className="hover:underline">Contact Us</Link></li>
              <li><Link to="#" className="hover:underline">Privacy Policy</Link></li>
              <li><Link to="#" className="hover:underline">Orders and Returns</Link></li>
              <li><Link to="#" className="hover:underline">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Service */}
          <div>
            <h3 className="text-lg font-semibold mb-4">SERVICE</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="#" className="hover:underline">My Account</Link></li>
              <li><Link to="#" className="hover:underline">View Cart</Link></li>
              <li><Link to="#" className="hover:underline">Wishlist</Link></li>
              <li><Link to="#" className="hover:underline">Track My Order</Link></li>
              <li><Link to="#" className="hover:underline">Help</Link></li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar with Payment Icons */}
      <div className="bg-[#15161d] py-4">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center gap-4 text-gray-400 text-xl">
            <FaCcVisa />
            <FaCreditCard />
            <FaCcPaypal />
            <FaCcMastercard />
            <FaCcDiscover />
            <FaCcAmex />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
