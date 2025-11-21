import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const path = location.pathname;

  // Pages where navbar should be transparent
  const isTransparentPage =
    path === "/" ||
    path === "/donate" ||
    path === "/courses" ||
    path === "/tutors" ||
    path === "/about" ||
    path === "/contact" ||
    path.startsWith("/courses/"); // Covers course detail pages

  const [open, setOpen] = useState(false);

  // Helper function to check if the link is active
  const isActive = (targetPath) => path === targetPath;

  return (
    <nav
      className={`relative z-10 px-6 py-0 flex flex-col items-center transition-all duration-300 ${
        isTransparentPage ? "bg-transparent" : "bg-[#F5FAE1] shadow-md"
      }`}
    >
      {/* Logo + Menu */}
      <div className="relative w-full flex justify-between items-center mt-2 z-10">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/images/logonaba.png"
            alt="Naba Al Jannah Logo"
            className="w-14 h-14 mt-1"
          />
          <h1 className="text-2xl font-bold text-pink-900 whitespace-nowrap">
            Naba Al Jannah
          </h1>
        </div>

        {/* Hamburger for mobile */}
        <button
          className="block md:hidden text-pink-900 font-bold"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        {/* Menu Links */}
        <div
          className={`absolute md:static top-full left-0 w-full md:w-auto flex flex-col md:flex-row items-center gap-4 md:gap-6 bg-pink-50 md:bg-transparent text-rose-900 font-medium transition-all duration-300 ${
            open
              ? "opacity-100 pointer-events-auto scale-100"
              : "opacity-0 pointer-events-none scale-95 md:opacity-100 md:pointer-events-auto md:scale-100"
          }`}
        >
          <Link
            to="/"
            className={`hover:text-pink-800 transition ${
              isActive("/") ? "text-pink-900 font-bold border-b-2 border-pink-900" : ""
            }`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`hover:text-pink-800 transition ${
              isActive("/about") ? "text-pink-900 font-bold border-b-2 border-pink-900" : ""
            }`}
          >
            About
          </Link>
          <Link
            to="/courses"
            className={`hover:text-pink-800 transition ${
              isActive("/courses") ? "text-pink-900 font-bold border-b-2 border-pink-900" : ""
            }`}
          >
            Courses
          </Link>
          <Link
            to="/tutors"
            className={`hover:text-pink-800 transition ${
              isActive("/tutors") ? "text-pink-900 font-bold border-b-2 border-pink-900" : ""
            }`}
          >
            Tutors
          </Link>
          <Link
            to="/contact"
            className={`hover:text-pink-800 transition ${
              isActive("/contact") ? "text-pink-900 font-bold border-b-2 border-pink-900" : ""
            }`}
          >
            Contact
          </Link>
          <Link
            to="/donate"
            className={`hover:text-pink-800 transition ${
              isActive("/donate") ? "text-pink-900 font-bold border-b-2 border-pink-900" : ""
            }`}
          >
            Donate
          </Link>
          <Link to="/login">
            <button className="font-semibold py-1.5 px-5 rounded-full shadow-lg transition bg-pink-900 text-white hover:bg-pink-800">
              Login
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
