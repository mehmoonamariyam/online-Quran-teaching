
import React from "react";
import { Link, useLocation } from "react-router-dom"; // to detect current page

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === "/"; // check if user is on homepage

  return (
    <>
      <nav
        className={`relative z-10 px-6 py-0 flex justify-between items-center transition-all duration-300 ${
          isHome ? "bg-transparent" : "bg-[#F5FAE1] shadow-md"
        }`}
      >
        {/* Logo + Name */}
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


        {/* Navigation Links */}
        <div
          className="absolute top-full left-0 w-full flex flex-col items-center gap-4 py-6 bg-pink-50 font-medium text-rose-900 
                     opacity-0 pointer-events-none scale-95 transition-all duration-300 peer-checked:opacity-100 peer-checked:pointer-events-auto peer-checked:scale-100 
                     md:static md:flex md:flex-row md:items-center md:justify-end md:space-x-6 md:gap-0 md:opacity-100 md:pointer-events-auto md:scale-100 md:bg-transparent"
        >
          <Link to="/" className="hover:text-pink-800 transition">
            Home
          </Link>
          <a href="#" className="hover:text-pink-800 transition">
            About
          </a>
          <Link to="/courses" className="hover:text-pink-800 transition">
            Courses
          </Link>
          <a href="#" className="hover:text-pink-800 transition">
            Tutors
          </a>
          <a href="#" className="hover:text-pink-800 transition">
            Contact
          </a>
          <Link to="/login">
          <button className="font-semibold py-1.5 px-5 rounded-full shadow-lg transition bg-pink-900 text-white hover:bg-pink-800">
            Login
          </button>
          </Link>
        </div>
      </nav>
    </>
  );
};


export default Navbar;
