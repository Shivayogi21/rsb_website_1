// NavbarToggle.tsx
"use client"
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const NavbarToggle: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleMenu}
        className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 text-white"
        aria-label="Toggle menu"
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {isOpen && (
        <div className="absolute top-12 left-0 w-full bg-gray-900 text-white rounded shadow-lg z-10">
          <nav className="flex flex-col p-4">
            {/* <a href="/" className="py-2 hover:bg-gray-700 rounded">Home</a>
            <a href="/about" className="py-2 hover:bg-gray-700 rounded">About</a>
            <a href="/services" className="py-2 hover:bg-gray-700 rounded">Services</a>
            <a href="/contact" className="py-2 hover:bg-gray-700 rounded">Contact</a> */}
          </nav>
        </div>
      )}
    </div>
  );
};

export default NavbarToggle;
