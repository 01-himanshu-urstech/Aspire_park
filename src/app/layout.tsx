import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aspire Centurian Park by Gaurs",
  description:
    "Aspire Centurian Park by Gaurs offers grand luxury residences in Greater Noida (W) with 3 & 4 BHK apartments, premium amenities, and a 30:70 payment plan.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
