import "../globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: "Aspire Centurian Park by Gaurs | 3 & 4 BHK Luxury Residences in Greater Noida West",
  description:
    "Discover Aspire Centurian Park by Gaurs in Techzone-4, Greater Noida (W). Ultra luxury 3 & 4 BHK residences, premium amenities, 30:70 payment plan, and grand luxury living by Gaurs.",
  keywords: [
    "Aspire Centurian Park",
    "Aspire Centurian Park by Gaurs",
    "Gaurs Greater Noida West",
    "3 BHK Greater Noida West",
    "4 BHK Greater Noida West",
    "luxury apartments Greater Noida West",
    "Techzone 4 Greater Noida",
    "Aspire Centurian Park price",
    "Aspire Centurian Park payment plan",
    "30:70 payment plan",
  ],
  openGraph: {
    title: "Aspire Centurian Park by Gaurs",
    description:
      "Grand Luxury Residences in Greater Noida (W) with ultra luxury 3 & 4 BHK apartments and premium amenities.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
