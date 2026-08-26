"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowLeft,
  FileText,
  ShieldCheck,
  AlertCircle,
  Scale,
} from "lucide-react";

const TermsAndConditions = () => {
  const terms = [
    {
      title: "Pricing",
      content:
        "Prices are subject to change without notice, subject to management discretion and applicable project terms.",
    },
    {
      title: "Price List & Planning",
      content:
        "The official price list and planning schedule may vary by tower, configuration and date of booking.",
    },
    {
      title: "Payment Plans",
      content:
        "Payment plans are subject to the applicable schedule as communicated at the time of booking and may include promotional or construction-linked plans.",
    },
    {
      title: "Additional Charges",
      content:
        "Additional charges for parking, club membership, power backup, maintenance, lease rent and government levies are applicable as per the latest price list.",
    },
    {
      title: "Payment Instructions",
      content:
        "All payments are to be made as per the project-approved instructions and official booking documents.",
    },
    {
      title: "Booking Confirmation",
      content:
        "Booking will be confirmed only after realization of the booking amount and submission of the complete application form with KYC documents including PAN Card, Aadhaar Card and Address Proof.",
    },
    {
      title: "Possession Charges",
      content:
        "Maintenance charges, club membership fees, advance maintenance, electricity load & meter charges, gas connection (PNG), water & sewage charges will be charged extra at the time of possession.",
    },
    {
      title: "Payment Delay",
      content:
        "In case of payment delay beyond 60 days from the due date, interest @ 18% per annum will be charged. Booking is liable for cancellation and forfeiture of 10% booking amount after 90 days delay.",
    },
    {
      title: "Plan & Specifications",
      content:
        "Plan, layout, specifications, amenities, and facilities are subject to change or modification as may be decided by the Company, Architect, or any competent authority without prior notice.",
    },
    {
      title: "TDS Requirement",
      content:
        "The buyer is required to deduct 1% TDS (or the applicable rate) on properties valued at ₹50 lakhs or more and submit Form 16B to the developer as per Income Tax Act, 1961.",
    },
    {
      title: "RERA & Possession",
      content:
        "All bookings are subject to RERA registration (UP-RERA) and compliance with applicable laws. Possession will be offered as per RERA timeline, subject to force majeure conditions.",
    },
    {
      title: "Cancellation",
      content:
        "Cancellation by buyer: Refund shall be as per UP-RERA guidelines after deduction of applicable cancellation charges (5-10% of booking amount) and TDS as per Income Tax Act.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#f7f0e5] text-[#172c29]">
      {/* ===================================================== */}
      {/* HEADER                                                */}
      {/* ===================================================== */}

      <header className="border-b border-[#c7a96b]/20 bg-[#0c3b35] text-[#f7f0e5]">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
          <Link
            href="/"
            className="group flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#f7f0e5]/70 transition hover:text-[#d8c38f]"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Aspire
          </Link>

          <div className="hidden text-right sm:block">
            <p className="font-display text-xl text-[#f7f0e5]">
              Aspire
            </p>
            <p className="text-[7px] uppercase tracking-[0.3em] text-[#d8c38f]">
              Centurian Park
            </p>
          </div>
        </div>
      </header>

      {/* ===================================================== */}
      {/* HERO                                                  */}
      {/* ===================================================== */}

      <section className="relative overflow-hidden bg-[#0c3b35] pb-20 pt-16 text-[#f7f0e5] sm:pb-24 sm:pt-20 lg:pb-28">
        {/* Decorative glow */}
        <div className="pointer-events-none absolute -right-32 -top-32 h-[450px] w-[450px] rounded-full bg-[#d8c38f]/10 blur-[120px]" />

        <div className="relative mx-auto max-w-[1000px] px-5 text-center sm:px-8">
          <div className="flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-[#d8c38f]" />

            <span className="text-[8px] font-semibold uppercase tracking-[0.35em] text-[#d8c38f]">
              Legal Information
            </span>

            <span className="h-px w-10 bg-[#d8c38f]" />
          </div>

          <h1 className="mt-7 font-display text-5xl leading-none sm:text-6xl lg:text-7xl">
            Terms &
            <br />
            <span className="text-[#d8c38f]">Conditions</span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-[#f7f0e5]/55">
            Please review the following terms, conditions and project
            disclaimers applicable to Aspire Centurian Park by Gaurs.
          </p>
        </div>
      </section>

      {/* ===================================================== */}
      {/* CONTENT                                                */}
      {/* ===================================================== */}

      <section className="relative py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1050px] px-5 sm:px-8">
          {/* Intro */}
          <div className="mb-12 flex gap-5 border-b border-[#c7a96b]/25 pb-10">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#c7a96b]/30 bg-[#d8c38f]/10">
              <FileText className="h-5 w-5 text-[#0c3b35]" />
            </div>

            <div>
              <h2 className="font-display text-2xl text-[#0c3b35] sm:text-3xl">
                Terms of Purchase & Booking
              </h2>

              <p className="mt-2 text-sm leading-6 text-[#172c29]/55">
                The following terms apply to the booking and purchase of
                residences at Aspire Centurian Park.
              </p>
            </div>
          </div>

          {/* Terms */}
          <div className="divide-y divide-[#c7a96b]/20 border-y border-[#c7a96b]/20">
            {terms.map((term, index) => (
              <article
                key={term.title}
                className="group py-7 sm:py-8"
              >
                <div className="flex gap-5 sm:gap-8">
                  {/* Number */}
                  <div className="shrink-0">
                    <span className="text-[9px] font-semibold tracking-[0.15em] text-[#c7a96b]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-[#0c3b35]">
                      {term.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[#172c29]/65">
                      {term.content}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* ================================================= */}
          {/* DISCLAIMER                                        */}
          {/* ================================================= */}

          <div className="mt-14 border border-[#c7a96b]/30 bg-[#0c3b35] p-7 text-[#f7f0e5] sm:p-9 lg:p-10">
            <div className="flex items-start gap-5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#d8c38f]/30 bg-[#d8c38f]/10">
                <AlertCircle className="h-5 w-5 text-[#d8c38f]" />
              </div>

              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#d8c38f]">
                  Important Disclaimer
                </p>

                <h2 className="mt-3 font-display text-3xl text-[#f7f0e5]">
                  Please Read Carefully
                </h2>
              </div>
            </div>

            <div className="mt-7 space-y-5 border-t border-[#d8c38f]/15 pt-7">
              <p className="text-sm leading-7 text-[#f7f0e5]/65">
                Government charges like Registration (1%), Stamp Duty (7%),
                GST @5%, External Development Charges (EDC), Internal
                Development Charges (IDC), or any other government levy shall
                be charged extra as applicable.
              </p>

              <p className="text-sm leading-7 text-[#f7f0e5]/65">
                All images, renders, specifications and amenities shown are
                for representational purposes only. Actual specifications,
                layouts, finishes, features and amenities may vary.
              </p>

              <p className="text-sm leading-7 text-[#f7f0e5]/65">
                Please refer to the official UP-RERA registered documents and
                project-approved documentation for accurate and final project
                details.
              </p>
            </div>

            {/* RERA */}
            <div className="mt-8 flex flex-col gap-4 border-t border-[#d8c38f]/15 pt-7 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-4 w-4 text-[#d8c38f]" />

                <span className="text-[9px] uppercase tracking-[0.2em] text-[#f7f0e5]/45">
                  RERA Registration
                </span>
              </div>

              <span className="font-mono text-xs text-[#d8c38f]">
                UPRERAPRJ22-15884
              </span>
            </div>
          </div>

          {/* ================================================= */}
          {/* LEGAL NOTE                                        */}
          {/* ================================================= */}

          <div className="mt-10 flex gap-4 border-l-2 border-[#c7a96b] pl-5">
            <Scale className="mt-1 h-4 w-4 shrink-0 text-[#c7a96b]" />

            <p className="text-xs leading-6 text-[#172c29]/50">
              The information contained on this page is provided for
              reference. In case of any discrepancy, the terms contained in
              the official project documentation, applicable agreements and
              registered regulatory documents shall prevail.
            </p>
          </div>
        </div>
      </section>

      {/* ===================================================== */}
      {/* BOTTOM CTA                                            */}
      {/* ===================================================== */}

      <section className="border-t border-[#c7a96b]/20 bg-[#eee7d9] py-12">
        <div className="mx-auto max-w-[900px] px-5 text-center sm:px-8">
          <p className="font-display text-2xl text-[#0c3b35] sm:text-3xl">
            Aspire Centurian Park
          </p>

          <p className="mt-2 text-[8px] uppercase tracking-[0.3em] text-[#c7a96b]">
            Grand Luxury Residences · Greater Noida (W)
          </p>

          <Link
            href="/"
            className="
              mt-7
              inline-flex
              items-center
              gap-3
              bg-[#0c3b35]
              px-6
              py-3.5
              text-[8px]
              font-semibold
              uppercase
              tracking-[0.25em]
              text-[#d8c38f]
              transition-all
              hover:bg-[#123f39]
            "
          >
            Return to Website
          </Link>
        </div>
      </section>
    </main>
  );
};

export default TermsAndConditions;