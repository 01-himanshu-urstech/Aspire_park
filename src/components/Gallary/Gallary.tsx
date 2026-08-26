"use client"; 
import React, { useState } from "react";
import Image from "next/image";

const Gallery = () => {
  const images = [
    "/gallary/gallery1.webp",
    "/gallary/gallery2.webp",
    "/gallary/gallery3.webp",
    "/gallary/gallery4.webp",
    "/gallary/gallery5.webp",
    "/gallary/gallery6.webp",
    "/gallary/gallery7.webp",
    "/gallary/gallery8.webp",
  ];

  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
  };

  const handleNext = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prevIndex) => {
        if (prevIndex === null) return 0; // Safeguard in case it's null
        return prevIndex === images.length - 1 ? 0 : prevIndex + 1;
      });
    }
  };

  const handlePrevious = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prevIndex) => {
        if (prevIndex === null) return 0; // Safeguard in case it's null
        return prevIndex === 0 ? images.length - 1 : prevIndex - 1;
      });
    }
  };

  return (
    <div id="gallery" className="py-8 mb-4 md:mx-20">
     <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">
  A Glimpse of the Luxury
</h2>
{/* <h3 className="text-lg text-center text-gray-700">
  Have a glimpse at these new pictures of the masterpiece offered by the one and only Abhinandan Ventures Vrindavan, reflecting the charm of its considerate landscapes fully.
</h3> */}


      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 mt-6">
        {images.map((image, index) => (
          <div key={index} className="relative overflow-hidden rounded-xl shadow-lg">
            <Image
              src={image}
              alt={`Gallery image ${index + 1}`}
              width={400}
              height={300}
              className="w-full h-56 object-cover rounded-xl cursor-pointer transition-transform duration-300 hover:scale-105"
              onClick={() => handleImageClick(index)}
            />
          </div>
        ))}
      </div>

      {/* Image Modal */}
      {selectedImageIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative">
            <Image
              src={images[selectedImageIndex]}
              alt="Selected"
              width={900}
              height={900}
              className="max-w-[90vw] max-h-[90vh] rounded-xl shadow-lg"
            />

            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 bg-gray-900 text-white p-3 rounded-full shadow-md hover:bg-gray-700"
            >
              ✕
            </button>

            {/* Previous Button */}
            <button
              onClick={handlePrevious}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-900 text-white p-4 rounded-full shadow-md hover:bg-gray-700"
            >
              ◀
            </button>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-900 text-white p-4 rounded-full shadow-md hover:bg-gray-700"
            >
              ▶
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
