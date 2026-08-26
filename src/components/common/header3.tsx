"use client"; // Add this line at the top to mark the component as a client-side component
import PopUpModal from "@/components/PopUpModal/PopUpModal";
import PopUpModalDownload from "../PopUpModalDownload/PopUpModalDownload";
import React, { useState } from "react";
import Link from "next/link";

const Header3: React.FC = () => {
   // State to toggle the mobile menu visibility
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalOpenDownload, setIsModalOpenDownload] = useState(false);
  
    const handleClose = () => {
      setIsModalOpen(false);
    };
  
    const handleOpen = () => {
      setIsModalOpen(true);
    };
  
    const handleCloseDownload = () => {
      setIsModalOpenDownload(false);
    };
  
    const handleOpenDownload = () => {
      setIsModalOpenDownload(true);
    };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6 py-4 md:px-10 md:py-7">
        {/* Logo and Tagline */}
        <div className="flex items-center space-x-2">
         <Link href="/" passHref>
            <img
              src="/logo.webp" // Replace with the logo path
              alt="Lodha Logo"
              className="h-10 w-auto cursor-pointer"
            />
          </Link>
        
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex space-x-6 text-sm">
          {[
            "About",
            "Highlights",
            "Gallery",
            // "Pricing",
            "Contact",
          ].map((item, index) => (
            <a
              key={index}
              href="/"
              className="text-gray-800 font-medium hover:text-blue-600"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Enquiry Button (Desktop Only) */}
        <div className="hidden md:block">
        <button
            onClick={handleOpenDownload}
            className="bg-yellow-950 text-white text-sm px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300 relative overflow-hidden mx-2"
          >
            Download Brochure 
            {/* Animated Dots */}
            {/* <span className="absolute top-7 left-0 w-3 h-3 bg-white rounded-full animate-ping"></span>
            <span className="absolute top-0 right-0 w-3 h-3 bg-white rounded-full animate-ping"></span> */}
          </button>

          <button
            onClick={handleOpen}
            className="bg-[rgb(62,117,165)] text-white text-sm px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300 relative overflow-hidden"
          >
            Enquiry Now
            {/* Animated Dots */}
            <span className="absolute top-7 left-0 w-3 h-3 bg-white rounded-full animate-ping"></span>
            <span className="absolute top-0 right-0 w-3 h-3 bg-white rounded-full animate-ping"></span>
          </button>
        </div>

        {/* Modal */}
        <PopUpModal isOpen={isModalOpen} onClose={handleClose} onOpen={handleOpen} />

          {/* Modal */}
          <PopUpModalDownload
          isOpen={isModalOpenDownload}
          onClose={handleCloseDownload}
          onOpen={handleOpenDownload}
        />


        {/* Mobile View - Hamburger Menu */}
        <button
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu - Show when isMenuOpen is true */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="px-6 py-4">
            {/* Mobile Navigation Links */}
            <nav className="space-y-4">
              {[
                "About",
                "Highlights",
                "Gallery",
                // "Pricing",
                "Contact",
              ].map((item, index) => (
                <a
                  key={index}
                  href="/"
                  className="text-gray-800 font-medium hover:text-blue-600 block"
                >
                  {item}
                </a>
              ))}
            </nav>

           {/* Enquiry Button (Mobile View) */}
           <div className="mt-4">
            <button
                onClick={handleOpenDownload}
                className="bg-white text-black font-semibold text-sm px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300 block w-full text-center"
              >
                Download Brochure 
              </button>
              <button
                onClick={handleOpen}
                className="bg-white text-black mt-4 font-semibold text-sm px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300 block w-full text-center"
              >
                Enquiry Now
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header3;
