import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar2 = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [open, setOpen] = useState(false);

  return (
    <nav
      className={`relative z-10 px-6 py-0 flex flex-col items-center transition-all duration-300 ${
        isHome ? "bg-transparent" : "bg-[#F5FAE1] shadow-md"
      }`}
      style={{
        backgroundImage: "url('/images/designnn.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "140px", // reduced height from 180px to 140px
      }}
    >
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black opacity-10"></div>

      {/* Logo + Menu */}
      <div className="relative w-full flex justify-between items-center mt-2 z-10">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/images/logonaba.png"
            alt="Naba Al Jannah Logo"
            className="w-12 h-12 mt-1" // slightly smaller logo
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
              : "opacity-0 pointer-events-none scale-95"
          } md:opacity-100 md:pointer-events-auto md:scale-100`}
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
           <Link to="/donate" className="hover:text-pink-800 transition">
                      Donate
                    </Link>
           <Link to="/login">
                    <button className="font-semibold py-1.5 px-5 rounded-full shadow-lg transition bg-pink-900 text-white hover:bg-pink-700">
                      Login
                    </button>
                    </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar2;
