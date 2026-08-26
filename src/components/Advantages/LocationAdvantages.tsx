import React from "react";

const LocationAdvantages: React.FC = () => {
  const advantagesLeft = [
    "30 minutes from IGI Airport.",
    "Surrounded by the Aravalli foothills.",
    "Hospitals like IGD Primary Healthcare Center, VPS Rockland Hospital, etc. are in close proximity.",
    "Educational Institutions like L.S. Convent School, Navyug Little Pride, UCSKM Public School, Ryan International School, The Plenum School, etc. are nearby.",
  ];

  const advantagesRight = [
    "Next to huge commercial hubs.",
    "Upcoming ISBT is nearby (Kherki Daula).",
    "Easy and smooth connectivity from NH-8, SPR Road, Dwarka Expressway & KMP Expressway.",
  ];

  return (
    <div className="bg-gray-800 text-white p-8 rounded-lg">
      <h2 className="text-3xl font-bold mb-4">Location Advantages</h2>
      <h3 className="text-2xl font-semibold mb-6">
        M3M Golf Hills Sector 79 Gurgaon
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left column */}
        <ul className="space-y-4">
          {advantagesLeft.map((advantage, index) => (
            <li key={index} className="flex items-start">
              <span className="text-red-500 font-bold mr-3">✔</span>
              <p>{advantage}</p>
            </li>
          ))}
        </ul>
        {/* Right column */}
        <ul className="space-y-4">
          {advantagesRight.map((advantage, index) => (
            <li key={index} className="flex items-start">
              <span className="text-red-500 font-bold mr-3">✔</span>
              <p>{advantage}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LocationAdvantages;
