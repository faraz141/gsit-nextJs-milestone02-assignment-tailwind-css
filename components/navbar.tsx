'use client';
import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };

  return (
    <div>
      <nav className="flex justify-between items-center bg-green-600 sticky top-0 p-2 z-[1000]">
        {/* Title with logo */}
        <Link
          href="/"
          className="flex items-center text-2xl m-4 font-bold ml-24 text-black hover:text-red-500"
        >
          JOB PORTAL
        </Link>

        {/* Hamburger Menu */}
        <div
          className="menu flex flex-col justify-between w-9 h-8 cursor-pointer md:hidden relative"
          onClick={toggleMenu}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
        >
          <span className="block h-1 w-full bg-white rounded transition-all duration-300"></span>
          <span className="block h-1 w-full bg-white rounded transition-all duration-300"></span>
          <span className="block h-1 w-full bg-white rounded transition-all duration-300"></span>
        </div>

        {/* Navbar Links */}
        <ul
          className={`${
            menuOpen ? 'flex' : 'hidden'
          } flex-col md:flex md:flex-row absolute md:static top-full left-0 w-full md:w-auto bg-green-500 md:bg-transparent text-center md:text-left`}
        >
          <li>
            <Link
              href="/"
              onClick={toggleMenu}
              className="block text-black py-4 px-6 md:py-2 md:px-4 text-xl md:text-base mx-2 rounded-lg transition-colors duration-300 hover:bg-gray-200 hover:text-red-500 font-medium"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/About"
              onClick={toggleMenu}
              className="block text-black py-4 px-6 md:py-2 md:px-4 text-xl md:text-base mx-2 rounded-lg transition-colors duration-300 hover:bg-gray-200 hover:text-red-500 font-medium"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/Jobs"
              onClick={toggleMenu}
              className="block text-black py-4 px-6 md:py-2 md:px-4 text-xl md:text-base mx-2 rounded-lg transition-colors duration-300 hover:bg-gray-200 hover:text-red-500 font-medium"
            >
              Jobs
            </Link>
          </li>
          <li>
            <Link
              href="/Companies"
              onClick={toggleMenu}
              className="block text-black py-4 px-6 md:py-2 md:px-4 text-xl md:text-base mx-2 rounded-lg transition-colors duration-300 hover:bg-gray-200 hover:text-red-500 font-medium"
            >
              Companies
            </Link>
          </li>
          <li>
            <Link
              href="/Contact"
              onClick={toggleMenu}
              className="block text-black py-4 px-6 md:py-2 md:px-4 text-xl md:text-base mx-2 rounded-lg transition-colors duration-300 hover:bg-gray-200 hover:text-red-500 font-medium"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
