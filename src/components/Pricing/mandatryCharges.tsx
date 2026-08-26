import React from "react";

const MandatoryCharges = () => {
  const charges = [
    { no: 1, description: "Club Membership", price: "2,00,000/-" },
    { no: 2, description: "Lease Rent", price: "85/- per Sq. Ft." },
    { no: 3, description: "Interest Free Maintenance Security (IFMS)", price: "30/-" },
    { no: 4, description: "Park Facing", price: "150/-" },
    { no: 5, description: "Road Facing", price: "100/-" },
  ];

  return (
    <div className="p-6 bg-[#f7e8d5] mt-4 rounded-lg">
      <h2 className="text-center text-2xl font-bold text-gray-800 mb-4">
        MANDATORY CHARGES
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 text-left">
          {/* Header */}
          <thead className="bg-[#d2a869] text-white">
            <tr>
              <th className="px-4 py-2 border border-gray-300 text-center">S.NO</th>
              <th className="px-4 py-2 border border-gray-300">DESCRIPTION</th>
              <th className="px-4 py-2 border border-gray-300 text-center">PRICE</th>
            </tr>
          </thead>
          {/* Table Body */}
          <tbody>
            {charges.map((item, index) => (
              <tr key={index} className="text-gray-800">
                <td className="px-4 py-2 border border-gray-300 text-center">
                  {item.no}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {item.description}
                </td>
                <td className="px-4 py-2 border border-gray-300 text-center">
                  {item.price}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MandatoryCharges;
