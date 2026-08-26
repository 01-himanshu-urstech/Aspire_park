// "use client"; // Ensure client-side rendering

// import React from "react";
// import {
//   FaSwimmingPool,
//   FaDumbbell,
//   FaWifi,
//   FaCar,
//   FaBook,
//   FaBed,
//   FaHome,
//   FaChild,
// } from "react-icons/fa";

// interface Amenity {
//   id: number;
//   name: string;
//   icon: React.ReactNode;
//   description: string;
// }

// const amenities: Amenity[] = [
//   {
//     id: 1,
//     name: "Swimming Pool",
//     icon: <FaSwimmingPool size={30} />,
//     description: "Relax and unwind in our crystal clear swimming pool.",
//   },
//   {
//     id: 2,
//     name: "Gym",
//     icon: <FaDumbbell size={30} />,
//     description: "State-of-the-art gym with all the equipment you need.",
//   },
//   {
//     id: 3,
//     name: "Wi-Fi",
//     icon: <FaWifi size={30} />,
//     description: "High-speed internet available throughout the building.",
//   },
//   {
//     id: 4,
//     name: "Parking",
//     icon: <FaCar size={30} />,
//     description: "Convenient parking spaces available for residents.",
//   },
//   {
//     id: 5,
//     name: "Library Area",
//     icon: <FaBook size={30} />,
//     description: "A peaceful library area for reading and relaxation.",
//   },
//   {
//     id: 6,
//     name: "King Size Beds",
//     icon: <FaBed size={30} />,
//     description: "Spacious king-size beds for your comfort.",
//   },
//   {
//     id: 7,
//     name: "Smart Homes",
//     icon: <FaHome size={30} />,
//     description: "Smart home features for enhanced living.",
//   },
//   {
//     id: 8,
//     name: "Playgrounds",
//     icon: <FaChild size={30} />,
//     description: "Fun playgrounds for children to enjoy.",
//   },
// ];

// const BuildingAmenities: React.FC = () => {
//   return (
//     <div id="amenities" className="mt-8 shadow-lg">
//         <div className="py-6 bg-gray-200">
//       <h3 className="text-center text-2xl mb-2 text-[#a57d40]">
//         Our Aminities
//       </h3>
//       <h2 className="text-center text-3xl font-bold mb-6">
//         Building Amenities
//       </h2>
//       <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4 sm:px-6 md:px-24 mx-auto">
//         {amenities.map((amenity) => (
//           <div
//             key={amenity.id}
//             className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center hover:bg-[#a57d40] hover:text-white group"
//           >
//             {/* Icon with a circular background */}
//             <div className="mb-4 p-4 bg-[#a57d40] text-white rounded-full group-hover:bg-white group-hover:text-[#a57d40]">
//               {amenity.icon}
//             </div>
//             <h3 className="text-xl font-semibold mb-2">{amenity.name}</h3>
//           </div>
//         ))}
//       </div>
//     </div>
//     </div>
//   );
// };

// export default BuildingAmenities;

"use client";

import React from "react";
import {
  FaSwimmingPool,
  FaDumbbell,
  FaChild,
  FaRunning,
  FaBicycle,
  FaHeartbeat,
  FaTableTennis,
} from "react-icons/fa";
import { GiTennisRacket } from "react-icons/gi";

interface Amenity {
  id: number;
  name: string;
  icon: React.ReactNode;
  description: string;
}

const amenities: Amenity[] = [
  {
    id: 1,
    name: "Children Play Area",
    icon: <FaChild size={30} />,
    description: "Fun playgrounds for children to enjoy.",
  },
  {
    id: 2,
    name: "Swimming pool",
    icon: <FaSwimmingPool size={30} />,
    description: "Relax and unwind in our crystal clear swimming pool.",
  },
  {
    id: 3,
    name: "Gymnasium",
    icon: <FaDumbbell size={30} />,
    description: "State-of-the-art gym with all the equipment you need.",
  },
  {
    id: 4,
    name: "Badminton court",
    icon: <GiTennisRacket size={30} />,
    description: "Indoor badminton court for sports enthusiasts.",
  },
  {
    id: 5,
    name: "Jogging",
    icon: <FaRunning size={30} />,
    description: "Dedicated jogging track for your daily exercise.",
  },
  {
    id: 6,
    name: "Cycling track",
    icon: <FaBicycle size={30} />,
    description: "Safe cycling track within the premises.",
  },
  {
    id: 7,
    name: "Healthcare amenities",
    icon: <FaHeartbeat size={30} />,
    description: "On-site healthcare facilities for residents.",
  },
  {
    id: 8,
    name: "Cricket Net",
    icon: <FaTableTennis size={30} />,
    description: "Cricket practice nets for sports lovers.",
  },
];

const BuildingAmenities: React.FC = () => {
  return (
    <div id="amenities" className="mt-8 shadow-lg">
      <div className="py-6 bg-gray-200">
        <h3 className="text-center text-2xl mb-2 text-[rgb(62,117,165)]">
          Our Amenities
        </h3>
        <h2 className="text-center text-3xl font-bold mb-6">
          Building Amenities
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4 sm:px-6 md:px-24 mx-auto">
          {amenities.map((amenity) => (
            <div
              key={amenity.id}
              className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center hover:bg-[rgb(62,117,165)] hover:text-white group"
            >
              {/* Icon with a circular background */}
              <div className="mb-4 p-4 bg-[rgb(62,117,165)] text-white rounded-full group-hover:bg-white group-hover:text-[rgb(62,117,165)]">
                {amenity.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{amenity.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BuildingAmenities;
