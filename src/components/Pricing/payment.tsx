import React from "react";

// Define the structure for each row in the payment plan
interface PaymentPlanRow {
  stage: string;
  amount: string;
}

const PaymentPlan = () => {
  const downPaymentPlan: PaymentPlanRow[] = [
    { stage: "AT THE TIME OF BOOKING", amount: "10% OF BASIC SALES PRICE" },
    { stage: "WITHIN 30 DAYS OF BOOKING", amount: "85% OF BASIC SALES PRICE" },
    {
      stage: "ON OFFER OF POSSESSION",
      amount: "5% OF BASIC SALES PRICE + OTHER CHARGES",
    },
  ];

  const clpPaymentPlan: PaymentPlanRow[] = [
    { stage: "AT THE TIME OF BOOKING", amount: "10%" },
    { stage: "WITHIN 60 DAYS OF DATE OF BOOKING", amount: "50%" },
    { stage: "ON 16TH FLOOR", amount: "10%" },
    { stage: "ON 20TH FLOOR", amount: "10%" },
    { stage: "ON SUPER STRUCTURE", amount: "10%" },
    { stage: "START OF LIFT INSTALLATION", amount: "5%" },
    { stage: "ON OFFER OF POSSESSION", amount: "5%" },
  ];

  const flexiPaymentPlan: PaymentPlanRow[] = [
    { stage: "AT THE TIME OF BOOKING", amount: "10% OF BASIC SALES PRICE" },
    { stage: "WITHIN 30 DAYS OF BOOKING", amount: "10% OF BASIC SALES PRICE" },
    { stage: "WITHIN 45 DAYS OF BOOKING", amount: "10% OF BASIC SALES PRICE" },
    {
      stage: "OFFER OF POSSESSION",
      amount: "60% OF BASIC SALES PRICE + OTHER CHARGES",
    },
    { stage: "AT THE TIME OF POSSESSION", amount: "10% OF BASIC SALES PRICE" },
  ];

  // Define renderTable with an explicit parameter type
  const renderTable = (plan: PaymentPlanRow[]) => (
    <table className="w-full border border-gray-300 text-left">
      <tbody>
        {plan.map((row, index) => (
          <tr key={index} className="text-gray-800">
            <td className="px-4 py-2 border border-gray-300">{row.stage}</td>
            <td className="px-4 py-2 border border-gray-300">{row.amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  return (
    <div className="p-6 bg-[#f7e8d5] mt-4 rounded-lg">
      <h2 className="text-center text-2xl font-bold text-gray-800 mb-2">
        PAYMENT PLAN
      </h2>
      <p className="text-center text-sm text-gray-600 mb-6">
        wtf. 1<sup>st</sup> NOVEMBER, 2024
      </p>

      {/* Down Payment Plan */}
      <h3 className="text-lg font-bold text-gray-800 mb-3">DOWN PAYMENT PLAN</h3>
      <div className="mb-6">{renderTable(downPaymentPlan)}</div>

      {/* CLP Payment Plan */}
      <h3 className="text-lg font-bold text-gray-800 mb-3">CLP PAYMENT PLAN</h3>
      <div className="mb-6">{renderTable(clpPaymentPlan)}</div>

      {/* Flexi Payment Plan */}
      <h3 className="text-lg font-bold text-gray-800 mb-3">FLEXI PAYMENT PLAN</h3>
      <div className="mb-6">{renderTable(flexiPaymentPlan)}</div>
    </div>
  );
};

export default PaymentPlan;
