import React from 'react';
import { FaFacebookF, FaInstagram, FaWhatsapp, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <div className="flex flex-col items-center justify-between p-4 bg-black text-white">
      <hr className="w-full border-gray-600" />
      <div className="flex w-full items-center justify-between mt-2">
        <span className="text-sm">2024 @rsb all right reserved</span>
        <div className="flex space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition">
            <FaFacebookF size={20} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition">
            <FaInstagram size={20} />
          </a>
          <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition">
            <FaWhatsapp size={20} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition">
            <FaTwitter size={20} />
          </a>
        </div>
      </div>
    </div>
  );
}
