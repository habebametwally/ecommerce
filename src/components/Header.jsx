import React from "react";
import { Link } from "react-router-dom";
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';

import logo from "../assets/img/logo.png"; // تأكد من أن المسار صحيح

function Header() {
  return (
    <header>
      {/* Top Header */}
      <div className="bg-black text-white text-sm py-2">
  <div className="container mx-auto px-4 flex flex-row justify-between items-center">
    <ul className="flex flex-row gap-6 items-center">
      <li>
        <Link
          to="#"
          className="flex items-center gap-2 text-white hover:text-red-600"
        >
          <i className="fa fa-phone text-red-600" /> +021-95-51-84
        </Link>
      </li>
      <li>
        <Link
          to="#"
          className="flex items-center gap-2 text-white hover:text-red-600"
        >
          <i className="fa fa-envelope-o text-red-600" /> contact@phoneaccessories.com
        </Link>
      </li>
      <li>
        <Link
          to="#"
          className="flex items-center gap-2 text-white hover:text-red-600"
        >
          <i className="fa fa-map-marker text-red-600" /> 1234 Market Street
        </Link>
      </li>
    </ul>
    <ul className="flex flex-row gap-6 items-center">
      <li>
        <Link
          to="#"
          className="flex items-center gap-2 text-white hover:text-red-600"
        >
          <i className="fa fa-dollar text-red-600" /> USD
        </Link>
      </li>
      <li>
        <Link
          to="#"
          className="flex items-center gap-2 text-white hover:text-red-600"
        >
          <i className="fa fa-user-o text-red-600" /> My Account
        </Link>
      </li>
    </ul>
  </div>
</div>

      {/* Main Header */}
      <div className="bg-[#15161D] py-4">
        <div className="container mx-auto px-4 flex flex-wrap items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0 w-full sm:w-auto mb-4 sm:mb-0">
            <Link to="#" className="block">
              <img src={logo} alt="Logo" className="h-10" />
            </Link>
          </div>

          {/* Search */}
          <div className="flex-grow max-w-xl mx-auto w-full">
            <Paper
              component="form"
              className="flex items-center px-2 py-1 rounded-full shadow"
              sx={{ borderRadius: "50px" }}
            >
              <InputBase
                className="ml-2 flex-1"
                placeholder="Search here"
                inputProps={{ "aria-label": "search" }}
              />
              <IconButton type="submit" sx={{ p: "10px", color: "#D10024" }} aria-label="search">
                <SearchIcon />
              </IconButton>
            </Paper>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-6 mt-4 sm:mt-0">
            {/* Wishlist */}
            <div className="text-white text-center">
              <IconButton>
                <Badge badgeContent={2} color="error">
                  <FavoriteBorderIcon sx={{ color: "white" }} />
                </Badge>
              </IconButton>
              <div className="text-xs">Your Wishlist</div>
            </div>

            {/* Cart */}
            <div className="text-white text-center">
              <IconButton>
                <Badge badgeContent={2} color="error">
                  <ShoppingCartIcon sx={{ color: "white" }} />
                </Badge>
              </IconButton>
              <div className="text-xs">Your Cart</div>
            </div>

            {/* Sign In */}
            <div className="text-white text-center">
              <Link to="sign.html">
                <PersonIcon sx={{ color: "white" }} />
                <div className="text-xs">Sign In/Up</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;