import React from "react";

const Legends: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 bg-[#f7e8d5] mt-9 mx-4 rounded-lg">
      {/* First Column (Legends List - First Half) */}
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-4">LEGENDS</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* First Column (1–14) */}
          <ul className="list-decimal pl-6 space-y-2">
            <li>Strategic Heritage Location</li>
            <li>Pilgrim‑Driven Demand</li>
            <li>Upcoming Airport Access</li>
            <li>Expressway Connectivity</li>
            <li>RERA‑Approved Plots</li>
            <li>Freehold Ownership</li>
            <li>Clear Legal Title</li>
            <li>Digitally Bookable</li>
            <li>NRI‑Friendly Framework</li>
            <li>Limited Inventory</li>
            <li>Appreciation Potential</li>
            <li>Infrastructure‑Backed Growth</li>
            <li>Braj 2041 Masterplan</li>
            <li>Faith‑Tourism Economy</li>
          </ul>

          {/* Second Column (15–27) */}
          <ul className="md:pl-5 space-y-2 custom-counter">
            <li>Spiritual Circuit Hub</li>
            <li>Yamuna River Vicinity</li>
            <li>Legacy Investment Asset</li>
            <li>Virtual Consultation Enabled</li>
            <li>Resale Liquidity Option</li>
            <li>Emotional Capital Value</li>
            <li>Wellness Retreat Opportunity</li>
            <li>Branded‑Land Assurance</li>
            <li>Heritage Zone Regulation</li>
            <li>Visitor‑Experience Focus</li>
            <li>Global Spiritual Appeal</li>
            <li>Domestic Tourist Magnet</li>
            <li>Culture Meets Convenience</li>
          </ul>
        </div>
      </div>

      {/* Second Column (Background Image with Layout Map - Responsive Fix) */}
      <div
        className="p-6 rounded-lg bg-cover bg-center bg-no-repeat w-full h-64 sm:h-80 md:h-[450px] lg:h-[500px]"
        style={{
          backgroundImage: "url('/legends.webp')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      />
    </div>
  );
};

export default Legends;
