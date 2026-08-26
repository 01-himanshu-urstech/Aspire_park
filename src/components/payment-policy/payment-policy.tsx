import React from "react";

const PaymentPolicy = () => {
  return (
    <div>
        <h1 className="text-center text-yellow-950 mt-6 font-semibold text-3xl">Payment Policy</h1>
      <div className="bg-beige p-6 rounded-lg shadow-md bg-[#f7e8d5] mt-6 mx-3">
        <h2 className="text-xl font-semibold mb-4">Payment Policy</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li>
          Bank Transfer: Payments can be made via bank transfer to our designated account.
          </li>
          <li>
          Credit/Debit Cards: We accept payments via major credit and debit cards such as Visa, MasterCard, American Express, etc.
          </li>
          <li>
          Cheque: Payments via personal or business cheque are accepted, subject to clearing.
          </li>
          <li>
          Cash: In some cases, cash payments may be accepted for certain transaction types. Please confirm with our office.
          </li>
          <li>
          Sale Cancellations: If the sale is canceled by the buyer, any paid booking or down payments may be forfeited, unless otherwise agreed.
          </li>
          <li>
          Refunds Upon Cancellation: In cases of seller cancellation or failure to meet terms, the buyer may be entitled to a full refund of any paid amounts.
          </li>
          <li>
          Upon receipt of payment, a confirmation receipt will be issued. This may include a receipt via email or a printed receipt confirming the amount received and the balance due. Please retain this for your records.
          </li>
          <li>
          In case of any disputes regarding payment or charges, please contact us at [Insert Contact Information]. Disputes will be resolved within [X] business days. If the issue cannot be resolved, both parties may seek legal recourse as outlined in the property agreement.
          </li>
        </ul>
       
      </div>
    </div>
  );
};

export default PaymentPolicy;
