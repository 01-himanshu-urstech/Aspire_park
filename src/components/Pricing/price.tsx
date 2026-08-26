import React from "react";
import PriceList from "./priceLits";
import BasicSalePrice from "./salesprice";
import MandatoryCharges from "./mandatryCharges";
import PaymentPlan from "./payment";
const price = () => {
  return (
    <div id="pricing">
      <div className="mx-3 mt-9 shadow-md">
        <PriceList />
        <BasicSalePrice />
        <MandatoryCharges />
        <PaymentPlan />
      </div>
    </div>
  );
};

export default price;
