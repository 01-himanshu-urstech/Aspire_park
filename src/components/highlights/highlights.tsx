// import React from "react";

// const ProjectHighlights: React.FC = () => {
//   const highlightsLeft: string[] = [
//     "RERA Approved – Complete Peace of Mind",
//     "Premium 100-Acre Godrej Township Address",
//     "High Footfall Zone – Ideal for Brands, Boutiques, Cafés & More",
//     "Designed for Modern Business, Retail & Investment Success",
//     "Strategic Location Connecting Noida & Greater Noida",
//   ];

//   const highlightsRight: string[] = [
//     "Surrounded by Thriving Residential & Commercial Neighborhoods",
//     "Excellent Connectivity via Metro, Expressways & Highways",
//     "Flexible Space Configurations for Diverse Business Needs",
//     "State-of-the-Art Infrastructure with Power Backup & Security",
//     "Backed by Trusted Godrej Legacy & Quality Assurance",
//   ];

//   return (
//     <div
//       id="highlights"
//       className="relative bg-gray-800 text-white p-8 bg-cover bg-center bg-no-repeat mt-4 shadow-lg"
//       style={{ backgroundImage: "url('/highligh.jpg')" }}
//     >
//       {/* Overlay for transparency */}
//       <div className="absolute inset-0 bg-black bg-opacity-60"></div>

//       {/* Content */}
//       <div className="relative">
//         <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">
//           Project Highlights
//         </h2>
//         {/* <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-6">
//           The House of Abhinandan Lodha in Vrindavan
//         </h3> */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {/* Left column */}
//           <ul className="space-y-4">
//             {highlightsLeft.map((highlight, index) => (
//               <li key={index} className="flex items-start">
//                 <span className="flex items-center justify-center text-gray-800 font-bold w-8 h-8 min-w-8 min-h-8 rounded-full bg-white">
//                   ✔
//                 </span>
//                 <p className="ml-2">{highlight}</p>
//               </li>
//             ))}
//           </ul>

//           {/* Right column */}
//           <ul className="space-y-4">
//             {highlightsRight.map((highlight, index) => (
//               <li key={index} className="flex items-start">
//                 <span className="flex items-center justify-center text-gray-800 font-bold w-8 h-8 min-w-8 min-h-8 rounded-full bg-white">
//                   ✔
//                 </span>
//                 <p className="ml-2">{highlight}</p>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProjectHighlights;


import React from "react";

const ProjectHighlights: React.FC = () => {
  const highlightsLeft: string[] = [
    "Iconic 2-Side Corner Land Parcel with Expansive Views",
    "5 Acres of 100% Paid-Up Land Allotted by Noida Authority",
    "3 Standalone Towers Rising S+35 to 38 Floors",
    "Dedicated 4BHK Tower for Exclusive Living",
    "4 Residences Per Core – Low Density Excellence",
    "Grand 50,000 Sq.ft Clubhouse with Premium Amenities",
  ];

  const highlightsRight: string[] = [
    "Expansive Balconies with Stunning Skyline Views",
    "Grade A Construction Partner for Superior Quality",
    "100% FDI Singapore-Based Real Estate Developer",
    "Strategic Location on Noida-Greater Noida Expressway",
    "Low Dense Sector with Clean Land Parcels & No Issues",
    "Flexible Payment Plan: 25*4 or 20*5 Construction Linked",
  ];

  return (
    <div
      id="highlights"
      className="relative bg-gray-800 text-white p-8 bg-cover bg-center bg-no-repeat mt-4 shadow-lg"
      style={{ backgroundImage: "url('/highlight.webp')" }}
    >
      {/* Overlay for transparency */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content */}
      <div className="relative">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">
          Project Highlights
        </h2>
        <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-6">
          Experion 151 – The New Landmark of Luxury Living
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left column */}
          <ul className="space-y-4">
            {highlightsLeft.map((highlight, index) => (
              <li key={index} className="flex items-start">
                <span className="flex items-center justify-center text-gray-800 font-bold w-8 h-8 min-w-8 min-h-8 rounded-full bg-white">
                  ✔
                </span>
                <p className="ml-2">{highlight}</p>
              </li>
            ))}
          </ul>

          {/* Right column */}
          <ul className="space-y-4">
            {highlightsRight.map((highlight, index) => (
              <li key={index} className="flex items-start">
                <span className="flex items-center justify-center text-gray-800 font-bold w-8 h-8 min-w-8 min-h-8 rounded-full bg-white">
                  ✔
                </span>
                <p className="ml-2">{highlight}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Additional Info Section */}
        <div className="mt-8 pt-6 border-t border-gray-600">
          <h4 className="text-lg md:text-xl font-semibold mb-4">
            🏡 Residences & Pricing
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm md:text-base">
            <div className="bg-white bg-opacity-10 p-4 rounded-lg">
              <p className="font-semibold">3 BHK</p>
              <p>2100-2200 Sq.ft</p>
            </div>
            <div className="bg-white bg-opacity-10 p-4 rounded-lg">
              <p className="font-semibold">3 BHK + Servant</p>
              <p>2500-2600 Sq.ft</p>
            </div>
            <div className="bg-white bg-opacity-10 p-4 rounded-lg">
              <p className="font-semibold">4 BHK</p>
              <p>3100-3200 Sq.ft</p>
            </div>
          </div>
          {/* <p className="mt-4 text-lg font-semibold">
            💰 Price: ₹16,000/sq.ft + PLC & Other Charges
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default ProjectHighlights;
