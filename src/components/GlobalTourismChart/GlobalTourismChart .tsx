"use client";

import React from "react";
import Image from "next/image";

const GlobalTourismChart: React.FC = () => {
  return (
    <div className="py-10 px-4 bg-white text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-[#a57d40] mb-6">
        The Sacred Land To Global Tourist Destination
      </h2>
      <div className="flex justify-center">
        <div className="w-[1200px] max-w-full">
          <Image
            src="/turism.png"
            alt="The Sacred Land To Global Tourist Destination"
            width={1200}
            height={220} // 🔽 reduced height
            className="rounded-lg shadow-lg border w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default GlobalTourismChart;
