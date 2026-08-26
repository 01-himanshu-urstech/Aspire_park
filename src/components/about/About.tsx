"use client";

import React, { useState } from "react";
import Image from "next/image";
import PopUpModal from "@/components/PopUpModal/PopUpModal";
import { motion } from "framer-motion";

const About: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const handleOpen = () => {
    setIsModalOpen(true);
  };

  return (
    // <div
    //   id="about"
    //   className="flex flex-col md:flex-row items-center justify-between px-8 py-8 bg-white shadow-lg rounded-2xl"
    // >
    //   {/* Left Side - Image */}
    //   <div className="w-full md:w-1/2 flex justify-center">
    //     <div className="relative rounded-lg overflow-hidden shadow-md p-4 border w-[600px] h-[350px]">
    //       <video
    //         src="/Experion.mp4"
    //         className="rounded-xl w-full h-full border-2 border-red-500"
    //         autoPlay
    //         loop
    //         muted
    //         controls
    //       >
    //         Your browser does not support the video tag.
    //       </video>
    //     </div>
    //   </div>

    //   {/* <div className="w-full md:w-1/2 flex justify-center">
    //     <div className="relative rounded-lg overflow-hidden shadow-md p-4 border">
    //       <img
    //         src="/gallary/6.jpeg" // Replace with your actual image path
    //         width={500}
    //         height={300}
    //         className="rounded-xl w-full h-auto object-cover"
    //         alt="Godrej Avenue 9"
    //       />
    //     </div>
    //   </div> */}

    //   {/* Right Side - Text */}
    //   <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-12">
    //     <span className="px-4 py-1 text-sm font-semibold bg-red-100 text-[#a57d40] rounded-lg">
    //       About Us
    //     </span>
    //     <h2 className="text-2xl font-bold mt-2 text-gray-900">
    //       RERA RECEIVED |<span className="text-yellow-950"></span>
    //     </h2>
    //     <p className="font-semibold mt-4 leading-relaxed ">
    //       🌟 INTRODUCING GODREJ AVENUE 9 🌟
    //     </p>
    //     <p className="text-black mt-2">
    //       🚀 The Biggest Commercial Launch in Noida-Greater Noida
    //     </p>
    //     <p className="text-black mt-2">
    //       🌐 For the first time ever, Godrej Properties Limited unveils a G+3
    //       structured commercial masterpiece spread over 3.5 acres, as part of an
    //       iconic 100-acre integrated township.
    //     </p>
    //     <p className="text-black mt-2">
    //       🏞️ Facing a Massive 10-Acre Godrej Central Park
    //     </p>
    //     <p className="text-black mt-2">
    //       🛣️ Located on a 45-Metre Wide Road for Maximum Visibility
    //     </p>
    //     <p className="text-black mt-2">
    //       🏢 G+3 Structure | Retail | F&B | Offices | Lifestyle
    //     </p>
    //     <p className="text-black mt-2">
    //       Sizes:- Pocket Place:- 400sqft-600sqft EOI Amount Rs 5 Lacs Style
    //       Studio:- 601sqft- 1000sqft EOI Amount Rs 10 Lacs This isn't just
    //       another commercial – it’s a landmark in the making.
    //     </p>
    //     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 text-gray-700">
    //       {/* <div className="flex items-center space-x-3">
    //         <span className="text-red-500 text-1xl">🏞️</span>
    //         <span>Facing a Massive 10-Acre Godrej Central Park</span>
    //       </div>
    //       <div className="flex items-center space-x-3">
    //         <span className="text-red-500 text-1xl">🛣️</span>
    //         <span>Located on a 45-Metre Wide Road for Maximum Visibility</span>
    //       </div>
    //       <div className="flex items-center space-x-3">
    //         <span className="text-red-500 text-1xl">🏢</span>
    //         <span>🏢 G+3 Structure | Retail | F&B | Offices | Lifestyle</span>
    //       </div>
    //       <div className="flex items-center space-x-3">
    //         <span className="text-red-500 text-1xl"></span>
    //         <span>
    //           Sizes:- Pocket Place:- 400sqft-600sqft EOI Amount Rs 5 Lacs Style
    //           Studio:- 601sqft- 1000sqft EOI Amount Rs 10 Lacs This isn't just
    //           another commercial – it’s a landmark in the making.
    //         </span>
    //       </div> */}
    //       {/* <div className="flex items-center space-x-3">
    //         <span className="text-red-500 text-1xl">📈</span>
    //         <span>
    //           ₹32,000 Cr. Braj Masterplan unlocking massive appreciation &
    //           transformation
    //         </span>
    //       </div> */}
    //       {/* <div className="flex items-center space-x-3">
    //         <span className="text-red-500 text-1xl">💥</span>
    //         <span>Launch Opportunity – Limited Period Only</span>
    //       </div> */}
    //       {/* <div className="flex items-center space-x-3">
    //         <span className="text-red-500 text-1xl">✅</span>
    //         <span>
    //           Be among the first to own a piece of Vrindavan – land sizes and
    //           pricing will be revealed at launch. By submitting your Expression
    //           of Interest (EOI) of ₹99,000:
    //         </span>
    //       </div> */}
    //       {/* <div className="flex items-center space-x-3">
    //         <span className="text-red-500 text-1xl">✅</span>
    //         <span>
    //           You gain priority access to plot selection before public launch
    //         </span>
    //       </div> */}
    //       {/* <div className="flex items-center space-x-3">
    //         <span className="text-red-500 text-1xl">✅</span>
    //         <span>
    //           You receive early-mover advantage and the best inventory picks
    //         </span>
    //       </div> */}
    //       {/* <div className="flex items-center space-x-3">
    //         <span className="text-red-500 text-1xl">✅</span>
    //         <span>Your EOI is fully adjustable against the final booking</span>
    //       </div> */}
    //       {/* <div className="flex items-center space-x-3">
    //         <span className="text-red-500 text-1xl">📩</span>
    //         <span>Be among the first to invest in this rare karmic asset</span>
    //       </div> */}
    //     </div>
    //     <motion.button
    //       onClick={handleOpen}
    //       className="mt-6 px-6 py-3 bg-[#a57d40] text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
    //       initial={{ y: 0, rotateY: 0 }}
    //       animate={{
    //         y: [0, -9, -7],
    //         rotateY: [0, 20, -20, 0], // 3D rotation effect
    //       }}
    //       transition={{ repeat: Infinity, duration: 0.2, ease: "easeInOut" }}
    //     >
    //       🔑 Book Your Dream Home Today!
    //     </motion.button>
    //   </div>

    //   {/* Include PopUpModal */}
    //   {isModalOpen && (
    //     <PopUpModal
    //       isOpen={isModalOpen}
    //       onClose={handleClose}
    //       onOpen={handleOpen}
    //     />
    //   )}
    // </div>

    // <div
    //   id="about"
    //   className="flex flex-col md:flex-row items-center justify-between px-8 py-8 bg-white shadow-lg rounded-2xl gap-4 md:gap-6"
    // >
    //   {/* Left Side - Video */}
    //   <div className="w-full md:w-1/2 flex justify-center">
    //     <div className="relative rounded-lg overflow-hidden shadow-md border w-[600px] h-[350px]">
    //       <video
    //         src="/Experion.mp4"
    //         className="rounded-xl w-full h-full border-2 border-red-500 object-contain"
    //         autoPlay
    //         loop
    //         muted
    //         controls
    //       >
    //         Your browser does not support the video tag.
    //       </video>
    //     </div>
    //   </div>

    //   {/* Right Side - Text */}
    //   <div className="w-full md:w-1/2 mt-4 md:mt-0 md:pl-6">
    //     <span className="px-4 py-1 text-sm font-semibold bg-red-100 text-[#a57d40] rounded-lg">
    //       About Us
    //     </span>
    //     <h2 className="text-2xl font-bold mt-2 text-gray-900">
    //       RERA RECEIVED |<span className="text-yellow-950"></span>
    //     </h2>
    //     <p className="font-semibold mt-4 leading-relaxed ">
    //       🌟 INTRODUCING GODREJ AVENUE 9 🌟
    //     </p>
    //     <p className="text-black mt-2">
    //       🚀 The Biggest Commercial Launch in Noida-Greater Noida
    //     </p>
    //     <p className="text-black mt-2">
    //       🌐 For the first time ever, Godrej Properties Limited unveils a G+3
    //       structured commercial masterpiece spread over 3.5 acres, as part of an
    //       iconic 100-acre integrated township.
    //     </p>
    //     <p className="text-black mt-2">
    //       🏞️ Facing a Massive 10-Acre Godrej Central Park
    //     </p>
    //     <p className="text-black mt-2">
    //       🛣️ Located on a 45-Metre Wide Road for Maximum Visibility
    //     </p>
    //     <p className="text-black mt-2">
    //       🏢 G+3 Structure | Retail | F&B | Offices | Lifestyle
    //     </p>
    //     <p className="text-black mt-2">
    //       Sizes:- Pocket Place:- 400sqft-600sqft EOI Amount Rs 5 Lacs Style
    //       Studio:- 601sqft- 1000sqft EOI Amount Rs 10 Lacs This isn't just
    //       another commercial – it's a landmark in the making.
    //     </p>
    //     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 text-gray-700">
    //     </div>
    //     <motion.button
    //       onClick={handleOpen}
    //       className="mt-6 px-6 py-3 bg-[#a57d40] text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
    //       initial={{ y: 0, rotateY: 0 }}
    //       animate={{
    //         y: [0, -9, -7],
    //         rotateY: [0, 20, -20, 0],
    //       }}
    //       transition={{ repeat: Infinity, duration: 0.2, ease: "easeInOut" }}
    //     >
    //       🔑 Book Your Dream Home Today!
    //     </motion.button>
    //   </div>

    //   {/* Include PopUpModal */}
    //   {isModalOpen && (
    //     <PopUpModal
    //       isOpen={isModalOpen}
    //       onClose={handleClose}
    //       onOpen={handleOpen}
    //     />
    //   )}
    // </div>

    <div
  id="about"
  className="flex flex-col md:flex-row items-center justify-between px-8 py-8 bg-white shadow-lg rounded-2xl gap-4 md:gap-6"
>
  {/* Left Side - Video with Blurred Background */}
  <div className="w-full md:w-1/2 flex justify-center">
    <div className="relative rounded-lg overflow-hidden shadow-md border w-[600px] h-[350px] bg-gray-900">
      {/* Blurred background video */}
      <video
        src="/Experion.mp4"
        className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-60"
        autoPlay
        loop
        aria-hidden="true"
      />
      {/* Main video on top */}
      <video
        src="/Experion.mp4"
        className="relative rounded-xl w-full h-full object-contain z-10"
        autoPlay
        loop
        muted
        controls
      >
        Your browser does not support the video tag.
      </video>
    </div>
  </div>

  {/* Right Side - Text */}
  {/* <div className="w-full md:w-1/2 mt-4 md:mt-0 md:pl-6">
    <span className="px-4 py-1 text-sm font-semibold bg-red-100 text-[#a57d40] rounded-lg">
      About Us
    </span>
    <h2 className="text-2xl font-bold mt-2 text-gray-900">
      RERA RECEIVED |<span className="text-yellow-950"></span>
    </h2>
    <p className="font-semibold mt-4 leading-relaxed ">
      🌟 INTRODUCING GODREJ AVENUE 9 🌟
    </p>
    <p className="text-black mt-2">
      🚀 The Biggest Commercial Launch in Noida-Greater Noida
    </p>
    <p className="text-black mt-2">
      🌐 For the first time ever, Godrej Properties Limited unveils a G+3
      structured commercial masterpiece spread over 3.5 acres, as part of an
      iconic 100-acre integrated township.
    </p>
    <p className="text-black mt-2">
      🏞️ Facing a Massive 10-Acre Godrej Central Park
    </p>
    <p className="text-black mt-2">
      🛣️ Located on a 45-Metre Wide Road for Maximum Visibility
    </p>
    <p className="text-black mt-2">
      🏢 G+3 Structure | Retail | F&B | Offices | Lifestyle
    </p>
    <p className="text-black mt-2">
      Sizes:- Pocket Place:- 400sqft-600sqft EOI Amount Rs 5 Lacs Style
      Studio:- 601sqft- 1000sqft EOI Amount Rs 10 Lacs This isn't just
      another commercial – it's a landmark in the making.
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 text-gray-700">
    </div>
    <motion.button
      onClick={handleOpen}
      className="mt-6 px-6 py-3 bg-[#a57d40] text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
      initial={{ y: 0, rotateY: 0 }}
      animate={{
        y: [0, -9, -7],
        rotateY: [0, 20, -20, 0],
      }}
      transition={{ repeat: Infinity, duration: 0.2, ease: "easeInOut" }}
    >
      🔑 Book Your Dream Home Today!
    </motion.button>
  </div> */}

    <div className="w-full md:w-1/2 mt-4 md:mt-0 md:pl-6">
  <span className="px-4 py-1 text-sm font-semibold bg-gray-300 text-[rgb(62,117,165)] rounded-lg">
    About Us
  </span>
  <h2 className="text-2xl font-bold mt-2 text-gray-900">
    NEW LAUNCH | RERA APPROVED<span className="text-yellow-950"></span>
  </h2>
  <p className="font-semibold mt-4 leading-relaxed">
    🌟 INTRODUCING EXPERION 151 NOIDA 🌟
  </p>
  <p className="text-black mt-2">
    🏢 Ultra-Luxury 3 & 4 BHK Apartments on Noida Expressway
  </p>
  <p className="text-black mt-2">
    🌐 Experion Developers presents a premium residential masterpiece spread over 5 acres in Sector 151, featuring 425 luxury apartments with an investment of ₹1000 Crore.
  </p>
  <p className="text-black mt-2">
    🏞️ Located on Prime Noida-Greater Noida Expressway
  </p>
  <p className="text-black mt-2">
    ✈️ Excellent Connectivity to Upcoming Jewar International Airport
  </p>
  <p className="text-black mt-2">
    🏠 Smart Homes | Italian Marble | VRV AC | Home Automation
  </p>
  <p className="text-black mt-2">
    Sizes:- 3 BHK: 2100 sqft Starting ₹3.6 Cr* | 3 BHK + Utility: 2600 sqft | 4 BHK + Utility: 3200 sqft | Premium Amenities: Mini Theatre, Swimming Pool, Clubhouse, Gymnasium, Meditation Pod, Amphitheatre, Kids Play Area. This isn't just another apartment – it's a landmark in luxury living.
  </p>
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 text-gray-700">
  </div>
  <motion.button
    onClick={handleOpen}
    className="mt-6 px-6 py-3 bg-[rgb(62,117,165)] text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
    initial={{ y: 0, rotateY: 0 }}
    animate={{
      y: [0, -9, -7],
      rotateY: [0, 20, -20, 0],
    }}
    transition={{ repeat: Infinity, duration: 0.2, ease: "easeInOut" }}
  >
    🔑 Book Your Dream Home Today!
  </motion.button>
</div>

  {/* Include PopUpModal */}
  {isModalOpen && (
    <PopUpModal
      isOpen={isModalOpen}
      onClose={handleClose}
      onOpen={handleOpen}
    />
  )}
</div>

  );
};

export default About;
