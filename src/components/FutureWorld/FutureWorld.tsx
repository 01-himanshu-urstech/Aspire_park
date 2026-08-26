import React from "react";

const FutureWorldComponent = () => {
  return (
    <div
      className="flex space-x-4 p-6 bg-cover bg-center h-[500px]" // Increased height for the entire container
      style={{ backgroundImage: "url('/future_estate1.png')" }}
    >
      {/* First column with no background but text white */}
      <div className="flex-1 p-4 text-white">
        <h2 className="text-xl font-semibold">Column 1</h2>
        <p>This is the content for the first column.</p>
      </div>

      {/* Second column with background image from public folder */}
      <div className="flex-1 p-4 bg-cover bg-center text-white">
        <h2 className="text-xl font-semibold">Column 2</h2>
        <p>This is the content for the second column.</p>
      </div>
    </div>
  );
};

export default FutureWorldComponent;
