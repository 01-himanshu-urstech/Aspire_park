import React from "react";

const FutureWorldComponent = () => {
  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center">
      <div className="w-full max-w-screen-xl p-4 lg:p-8">
        {/* Left Section */}
        <div className="flex flex-col lg:flex-row">
          {/* Left Column */}
          <div className="flex flex-col items-center justify-center lg:w-1/2 text-center p-8">
            <img
              src="/path/to/left-image.png"
              alt="Future World Logo"
              className="mb-4 w-32 h-32 object-contain"
            />
            <h1 className="text-4xl font-bold mb-4 tracking-widest">FW</h1>
            <h2 className="text-lg tracking-wide mb-4">FUTURE WORLD</h2>
            <p className="text-sm leading-relaxed text-gray-400 max-w-lg">
              RERA Registration No.<br />
              TOWER B:UPRERAPRJ7321 | TOWER C:UPRERAPRJ7347 |<br />
              TOWER WING-H:UPRERAPRJ7369 | TOWER WING-G:UPRERAPRJ7386 |<br />
              TOWER A:UPRERAPRJ7371<br />
              Website of UP RERA: www.up-rera.in
            </p>
            <p className="text-xs mt-4">
              Site Office: Plot No. GH16E, Sector-01, Greater Noida West, UP<br />
              Mob: 9891 439 439 | E: info@futureworld.com | W: www.futureworld.com
            </p>
          </div>

          {/* Right Column */}
          <div className="relative lg:w-1/2 flex items-center justify-center p-8 ">
            <div className="relative rounded-full bg-red-700 border-4 border-gold p-8">
              <img
                src="/future_estate1.png"
                alt="Future Estate Logo"
                className="absolute inset-0 w-full h-full object-cover rounded-full opacity-20"
              />
              <h1 className="text-5xl font-bold mb-2">FE</h1>
              <h2 className="text-lg">FUTURE ESTATE</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FutureWorldComponent;
