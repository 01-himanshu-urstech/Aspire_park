import React from "react";

const PriceList = () => {
  const data = [
    { no: 1, unitType: "Type - A1", apartmentType: "2 BHK + 2 TOILETS", area: "1110" },
    { no: 2, unitType: "Type - A2", apartmentType: "2 BHK + 2 TOILETS", area: "1130" },
    { no: 3, unitType: "Type - B1", apartmentType: "2 BHK + 2 TOILETS", area: "1170" },
    { no: 4, unitType: "Type - B2", apartmentType: "2 BHK + 2 TOILETS", area: "1240" },
    { no: 5, unitType: "Type - C1", apartmentType: "2 BHK + 2 TOILETS + STUDY", area: "1335" },
    { no: 6, unitType: "Type - C2", apartmentType: "2 BHK + 2 TOILETS + FAMILY LOUNGE", area: "1435" },
    { no: 7, unitType: "Type - D", apartmentType: "3 BHK + 2 TOILETS", area: "1500" },
  ];

  return (
    <div className="p-4 bg-[#f7e8d5] rounded-lg">
      <h2 className="text-center text-2xl font-bold text-yellow-950 mb-4">PRICE LIST</h2>
      <p className="text-center text-sm text-gray-600 mb-6">wtf. 1<sup>st</sup> NOVEMBER, 2024</p>
      <div className="bg-[#f7e8d5]">
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 text-left">
          <thead className="bg-[#d2a869] text-white">
            <tr>
              <th className="px-4 py-2 border border-gray-300">S. NO.</th>
              <th className="px-4 py-2 border border-gray-300">UNIT TYPE</th>
              <th className="px-4 py-2 border border-gray-300">TYPE OF APARTMENT</th>
              <th className="px-4 py-2 border border-gray-300">SUPER AREA (SQ.FT.)</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.no} className="text-gray-800">
                <td className="px-4 py-2 border border-gray-300 text-center">{item.no}</td>
                <td className="px-4 py-2 border border-gray-300">{item.unitType}</td>
                <td className="px-4 py-2 border border-gray-300">{item.apartmentType}</td>
                <td className="px-4 py-2 border border-gray-300 text-center">{item.area}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
    </div>
  );
};

export default PriceList;
