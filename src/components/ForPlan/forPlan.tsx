"use client";
import React, { useState } from "react";
import Image from "next/image";
import PopUpModal from "@/components/PopUpModal/PopUpModal";

const floorPlans = [
  { title: "3 BHK", image: "/plan1.webp" },
  { title: "3 BHK", image: "/plan1.webp" },
  { title: "3 BHK + Servant", image: "/plan1.webp" },
  { title: "3 BHK + Servant", image: "/plan1.webp" },
  { title: "4 BHK", image: "/plan1.webp" },
  { title: "4 BHK", image: "/plan1.webp" },
];

export default function FloorPlans() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // ✅ 1) Open modal without passing any new prop
  const handleOpen = () => {
    setIsModalOpen(true);
  };

  // ✅ 2) Close modal
  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-white py-6 px-6">
      <h2 className="text-center text-3xl font-semibold text-black mb-8">
        Floor Plans
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {floorPlans.map((plan, index) => (
          <div
            key={index}
            onClick={handleOpen}
            className="cursor-pointer bg-[#002D74] p-3 shadow-lg border border-gray-300 hover:scale-105 transition-transform duration-300"
          >
            <div className="relative w-full h-48 bg-gray-200 overflow-hidden">
              <Image
                src={plan.image}
                alt={plan.title}
                layout="fill"
                objectFit="cover"
                className="rounded-sm transition duration-500 ease-in-out blur-sm hover:blur-0"
              />
            </div>

            <div className="bg-[#f5e7d8] text-center py-3 font-medium text-[#002D74] text-lg">
              {plan.title}
            </div>
          </div>
        ))}
      </div>

      {/* ✅ Use existing popup modal as is */}
      {isModalOpen && (
        <PopUpModal
          isOpen={isModalOpen}
          onClose={handleClose}
          onOpen={() => setIsModalOpen(true)}
        />
      )}
    </div>
  );
}
