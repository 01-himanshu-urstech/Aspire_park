import React from "react";
import { Phone, MapPin, FileDown } from "lucide-react";

const Header: React.FC = () => {
  return (
    <header className="bg-[rgb(62,117,165)] text-white">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6 py-3 md:px-36">
        {/* Left: Location */}
        <div className="flex items-center space-x-2">
          <MapPin className="w-5 h-5 text-red-500" aria-hidden="true" />
          <span className="text-sm">Noida</span>
        </div>

        {/* Middle: Download Brochure */}
        {/* <div className="flex items-center space-x-2 mt-3 md:mt-0">
          <FileDown className="w-5 h-5" aria-hidden="true" />
          <a
            href="/dummy.pdf"
            download
            className="text-sm hover:underline focus:outline-none"
          >
            Download Brochure
          </a>
        </div> */}

        {/* Right: Phone Number */}
        <div className="flex items-center space-x-2 mt-3 md:mt-0">
          <Phone className="w-5 h-5" aria-hidden="true" />
          <a
            href="tel:+9971888485"
            className="text-sm hover:underline focus:outline-none"
          >
            +91-9971888485
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
