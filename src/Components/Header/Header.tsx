// Header.tsx
"use client"
import React from 'react';
import NavbarToggle from './Toggle'; // Adjust the path as needed

const Header: React.FC = () => {
  return (
    <header className='py-4 border-b border-white/15'>
      <div className='container flex justify-between items-center'>
        <a href='/' className='logo flex items-left'>
          <img src="/assets/img/rsb-logo.png" alt="Logo" className='max-w-[150px]' />
        </a>
        <div className='hidden md:flex items-center'>
            <nav className='flex gap-16 text-white/70 hover:text-white transition'>
            <a href='#' className=' text-white/70 hover:text-white transition'>Home</a>
            <a href='#' className=' text-white/70 hover:text-white transition'>About</a>
            <a href='#' className=' text-white/70 hover:text-white transition'>Services</a>
            <a href='#' className=' text-white/70 hover:text-white transition'>Carrier</a>
            <a href='#' className=' text-white/70 hover:text-white transition'>Blog</a>
            </nav>
        </div>
        <div className="hidden md:flex flex-col sm:flex-row items-center gap-4 ">
          <button className="relative w-24 h-12 text-sm bg-custom-black border-4 border-transparent rounded-full overflow-hidden transition-transform duration-300 ease-in-out hover:bg-transparent hover:scale-110 hover:border-none">
            <span className="absolute inset-0 border-4 border-transparent rounded-full animate-rainbowBorder"></span>
            <span className="relative z-10 font-serif">Contact ►</span>
          </button>
        </div>
        <div className='md:hidden'>
        <NavbarToggle/>
        </div>
      </div>
    </header>
  );
};

export default Header;
