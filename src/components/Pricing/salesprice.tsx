import React from "react";

const BasicSalePrice = () => {
  const tableData = [
    {
      floor: "1st TO 4th",
      A1: "8547000",
      A2: "8701000",
      B1: "9009000",
      B2: "9548000",
      C1: "10279500",
      C2: "11044950",
      D: "11625000",
    },
    {
      floor: "5th TO 8th",
      A1: "8436000",
      A2: "8588000",
      B1: "8892000",
      B2: "9424000",
      C1: "10146000",
      C2: "10906000",
      D: "11475000",
    },
    {
      floor: "9th TO 12th",
      A1: "8325000",
      A2: "8475000",
      B1: "8775000",
      B2: "9300000",
      C1: "10012500",
      C2: "10762500",
      D: "11325000",
    },
    {
      floor: "13th TO 16th",
      A1: "8214000",
      A2: "8362000",
      B1: "8658000",
      B2: "9879000",
      C1: "9879000",
      C2: "10619000",
      D: "11175000",
    },
    {
      floor: "17th TO 20th",
      A1: "8103000",
      A2: "8249000",
      B1: "8541000",
      B2: "9052000",
      C1: "9745500",
      C2: "10475500",
      D: "11025000",
    },
    {
      floor: "21st & ABOVE",
      A1: "7992000",
      A2: "8136000",
      B1: "8424000",
      B2: "8928000",
      C1: "9612000",
      C2: "10320000",
      D: "10875000",
    },
  ];

  return (
    <div className="p-4 bg-[#f7e8d5] mt-4 rounded-lg">
      <h2 className="text-center text-2xl font-bold text-yellow-950 mb-4">
        BASIC SALE PRICE
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 text-left">
          {/* Header Section */}
          <thead className="bg-[#d2a869] text-white">
            <tr>
              <th className="px-4 py-2 border border-gray-300">FLOORS</th>
              <th className="px-4 py-2 border border-gray-300">A1 (1110)</th>
              <th className="px-4 py-2 border border-gray-300">A2 (1130)</th>
              <th className="px-4 py-2 border border-gray-300">B1 (1170)</th>
              <th className="px-4 py-2 border border-gray-300">B2 (1240)</th>
              <th className="px-4 py-2 border border-gray-300">C1 (1335)</th>
              <th className="px-4 py-2 border border-gray-300">C2 (1435)</th>
              <th className="px-4 py-2 border border-gray-300">D (1500)</th>
            </tr>
          </thead>
          {/* Table Body */}
          <tbody>
            {tableData.map((row, index) => (
              <tr key={index} className="text-gray-800">
                <td className="px-4 py-2 border border-gray-300 text-center">
                  {row.floor}
                </td>
                <td className="px-4 py-2 border border-gray-300 text-right">
                  {row.A1}
                </td>
                <td className="px-4 py-2 border border-gray-300 text-right">
                  {row.A2}
                </td>
                <td className="px-4 py-2 border border-gray-300 text-right">
                  {row.B1}
                </td>
                <td className="px-4 py-2 border border-gray-300 text-right">
                  {row.B2}
                </td>
                <td className="px-4 py-2 border border-gray-300 text-right">
                  {row.C1}
                </td>
                <td className="px-4 py-2 border border-gray-300 text-right">
                  {row.C2}
                </td>
                <td className="px-4 py-2 border border-gray-300 text-right">
                  {row.D}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-sm text-gray-600 mt-4">
        NOTE: * LIMITED-TIME INAUGURAL DISCOUNT OF RS. 2,50,000/- ON CLP PAYMENT
        PLAN
      </p>
    </div>
  );
};

export default BasicSalePrice;
