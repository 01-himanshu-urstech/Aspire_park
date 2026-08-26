import React from "react";

const Location: React.FC = () => {
  return (
    <div
      id="location"
      className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 bg-[#fef5ec] mt-10 mx-11 rounded-lg shadow-lg"
    >
      {/* Left Column - Location Advantages */}
      <div className="p-6">
        <h2 className="text-2xl font-bold text-[#8B5E3C] mb-4">
          Location Advantage
        </h2>
        <p className="text-gray-700 mb-4">
          Future Estate, located in Sector 1, Greater Noida West, offers several
          strategic location advantages, making it an attractive choice for
          residents and investors.
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>
            <strong>Proximity to Cities:</strong> World class reputed schools like DPS, The Shriram Universal, Ryan International, Pacific World School within 3-5 MIN Drive.
          </li>
          <li>
            <strong>Well-Developed Infrastructure:</strong> Wide roads, good
            water supply, and advanced sewage systems ensure future development.
          </li>
          {/* <li>
            <strong>Excellent Connectivity:</strong> Close to major highways
            like NH-24, Noida-Greater Noida Expressway, Noida-Greater Noida Link
            Road, and the FNG Expressway.
          </li> */}
          <li>
            <strong>Upcoming Metro Connectivity:</strong> Proposed Metro Station near the project at Gaur chowk.
          </li>
          <li>
            <strong>Educational Institutions:</strong> Nearby reputed schools
            like Ryan International and Delhi Public School, along with
            universities and colleges.
          </li>
          <li>
            <strong>Healthcare Facilities:</strong> Premium healthcare facilities like Yatharth & Numed in close range.
          </li>
          <li>
            <strong>Shopping and Entertainment:</strong> Close to malls,
            multiplexes, and entertainment hubs for a vibrant lifestyle.
          </li>
          <li>
            <strong>Green Spaces:</strong> Surrounded by parks and green areas,
            ensuring a serene and eco-friendly environment.
          </li>
        </ul>
      </div>

      {/* Right Column - Location Map */}
      <div className="mt-9">
        <h2 className="text-2xl font-bold text-[#8B5E3C] mb-4 ml-16">
          Location Map
        </h2>
        <ul className="list-none text-gray-700 grid grid-cols-2 gap-y-2">
          <li>
            <strong>FNG Expressway:</strong> 10 minutes
          </li>
          <li>
            <strong>Sector 76 Metro:</strong> 15 minutes
          </li>
          <li>
            <strong>Gaur City Mall:</strong> 8 minutes
          </li>
          <li>
            <strong>Yatharth Hospital:</strong> 5 minutes
          </li>
          <li>
            <strong>Pari Chowk:</strong> 25 minutes
          </li>
          <li>
            <strong>Noida City Center:</strong> 20 minutes
          </li>
          <li>
            <strong>Mall of India:</strong> 25 minutes
          </li>
          <li>
            <strong>Kailash Hospital:</strong> 20 minutes
          </li>
        </ul>

        <div
          className="p-6 rounded-lg bg-cover bg-center bg-no-repeat w-full h-64 sm:h-80 md:h-[450px] lg:h-[500px]"
          style={{
            backgroundImage: "url('/location.webp')",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        />
      </div>
    </div>
  );
};

export default Location;
