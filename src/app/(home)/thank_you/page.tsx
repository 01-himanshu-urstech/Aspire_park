import React from "react";
import type { Metadata } from "next";
import Header2 from "@/components/common/header2";
import Footer from "@/components/common/Footer";
import ThankYouContent from "@/components/thankYou/ThankYouContent";

export const metadata: Metadata = {
  title: "Thank You | Aspire Centurian Park by Gaurs",
  description:
    "Thank you for contacting Aspire Centurian Park by Gaurs. Our property advisor will get in touch with you shortly.",
  robots: {
    index: false,
    follow: false,
  },
};

const ThankYouPage = () => {
  return (
    <div className="min-h-screen bg-[#0c3b35] text-[#f7f0e5]">
      <Header2 />
      <main>
        <ThankYouContent />
      </main>
      <Footer />
    </div>
  );
};

export default ThankYouPage;
