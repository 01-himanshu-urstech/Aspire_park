"use client";

import React from "react";
import Link from "next/link";
import {
  Download,
  Phone,
  Clock,
  Calendar,
  Home,
  Sparkles,
  Building,
  Check,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const ThankYouContent: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-[#0c3b35] pt-28 pb-20 text-[#f7f0e5] md:pt-36 md:pb-28">
      {/* Decorative ambient gradients */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#c7a96b]/15 blur-[120px]" />
      <div className="pointer-events-none absolute top-1/3 -right-40 h-[600px] w-[600px] rounded-full bg-[#d8c38f]/10 blur-[140px]" />
      <div className="pointer-events-none absolute -bottom-40 left-1/3 h-[500px] w-[500px] rounded-full bg-[#0b2421] blur-[100px]" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Main Status Container */}
        <div className="rounded-3xl border border-[#c7a96b]/30 bg-[#092c28]/80 p-6 shadow-2xl backdrop-blur-xl sm:p-10 md:p-14">

          {/* Animated Gold Checkmark */}
          <div className="flex justify-center">
            <div className="relative flex h-24 w-24 items-center justify-center">
              {/* Outer pulsing ring */}
              <div className="absolute inset-0 animate-ping rounded-full bg-[#c7a96b]/20 duration-1000" />
              {/* Radial glow background */}
              <div className="absolute inset-1 rounded-full bg-gradient-to-tr from-[#9d7b3f] via-[#c7a96b] to-[#f7e4be] opacity-90 shadow-[0_0_40px_rgba(199,169,107,0.5)]" />
              {/* Inner check icon */}
              <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-[#0c3b35]">
                <Check className="h-10 w-10 text-[#d8c38f] stroke-[2.5]" />
              </div>
            </div>
          </div>

          {/* Heading and badge */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#c7a96b]/40 bg-[#c7a96b]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-[#d8c38f]">
              <Sparkles className="h-3.5 w-3.5 text-[#c7a96b]" />
              Enquiry Received Successfully
            </div>

            <h1 className="mt-6 font-display text-4xl font-normal tracking-tight text-[#f7f0e5] sm:text-5xl md:text-6xl">
              Thank You For Choosing <br className="hidden sm:inline" />
              <span className="text-[#d8c38f]">Aspire Centurian Park</span>
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#f7f0e5]/80 sm:text-base md:text-lg">
              We have received your request. Our dedicated luxury property specialist will reach out to you within <span className="font-semibold text-[#d8c38f]">30 minutes</span> with detailed floor plans, inventory availability, and bespoke payment options.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="mt-10 flex flex-col flex-wrap items-center justify-center gap-4 sm:flex-row">
            {/* <a
              href="/brochure.pdf"
              download="Aspire-Centurian-Park-Brochure.pdf"
              className="group inline-flex w-full items-center justify-center gap-3 rounded-full border border-[#c7a96b] bg-[#c7a96b] px-7 py-3.5 text-xs font-bold uppercase tracking-[0.18em] text-[#0c3b35] transition-all duration-300 hover:bg-[#d8c38f] hover:shadow-[0_10px_25px_rgba(199,169,107,0.3)] sm:w-auto"
            >
              <Download className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
              <span>Download Project Brochure</span>
            </a> */}

            <a
              href="https://api.whatsapp.com/send?phone=7054442848&text=Hi,%20I%20have%20submitted%20an%20enquiry%20for%20Aspire%20Centurian%20Park.%20Please%20share%20the%20details."
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-full items-center justify-center gap-3 rounded-full border border-[#25D366]/40 bg-[#25D366]/15 px-7 py-3.5 text-xs font-bold uppercase tracking-[0.18em] text-[#e8faed] transition-all duration-300 hover:bg-[#25D366] hover:text-[#0b2421] sm:w-auto"
            >
              <FaWhatsapp className="h-4 w-4 text-[#25D366] transition-colors duration-300 group-hover:text-[#0b2421]" />

              <span>Chat on WhatsApp</span>
            </a>

            <Link
              href="/"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#f7f0e5] transition-all duration-300 hover:border-[#c7a96b]/60 hover:bg-white/10 sm:w-auto"
            >
              <Home className="h-4 w-4 text-[#d8c38f]" />
              <span>Explore Homepage</span>
            </Link>
          </div>

          {/* Timeline / Next Steps */}
          <div className="mt-14 border-t border-[#c7a96b]/20 pt-10">
            <h2 className="text-center font-display text-2xl text-[#f7f0e5] sm:text-3xl">
              What to Expect Next
            </h2>
            <p className="mt-1 text-center text-xs tracking-wider uppercase text-[#d8c38f]/80">
              Seamless 3-Step Experience
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {/* Step 1 */}
              <div className="relative rounded-2xl border border-[#c7a96b]/20 bg-[#0c3b35]/60 p-6 text-center transition-all hover:border-[#c7a96b]/40">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#c7a96b]/15 text-[#d8c38f]">
                  <Clock className="h-6 w-6" />
                </div>
                <div className="mt-3 text-xs font-bold uppercase tracking-widest text-[#d8c38f]">
                  Step 01
                </div>
                <h3 className="mt-1 text-base font-semibold text-[#f7f0e5]">
                  Instant Callback
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#f7f0e5]/70">
                  Our certified real estate advisor will call you to understand your specific preferences and answer questions.
                </p>
              </div>

              {/* Step 2 */}
              <div className="relative rounded-2xl border border-[#c7a96b]/20 bg-[#0c3b35]/60 p-6 text-center transition-all hover:border-[#c7a96b]/40">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#c7a96b]/15 text-[#d8c38f]">
                  <Building className="h-6 w-6" />
                </div>
                <div className="mt-3 text-xs font-bold uppercase tracking-widest text-[#d8c38f]">
                  Step 02
                </div>
                <h3 className="mt-1 text-base font-semibold text-[#f7f0e5]">
                  Floor Plans & Pricing
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#f7f0e5]/70">
                  Receive personalized 3 & 4 BHK layouts, unit availability charts, and flexible 30:70 payment plan breakdowns.
                </p>
              </div>

              {/* Step 3 */}
              <div className="relative rounded-2xl border border-[#c7a96b]/20 bg-[#0c3b35]/60 p-6 text-center transition-all hover:border-[#c7a96b]/40">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#c7a96b]/15 text-[#d8c38f]">
                  <Calendar className="h-6 w-6" />
                </div>
                <div className="mt-3 text-xs font-bold uppercase tracking-widest text-[#d8c38f]">
                  Step 03
                </div>
                <h3 className="mt-1 text-base font-semibold text-[#f7f0e5]">
                  Private Site Visit
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#f7f0e5]/70">
                  Enjoy a complimentary private tour of our Techzone-4 site, experience center, and grand sample apartment.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Project Summary Strip */}
          <div className="mt-12 rounded-2xl border border-[#d8c38f]/20 bg-gradient-to-r from-[#0b2421] to-[#0c3b35] p-6">
            <div className="grid grid-cols-2 gap-4 text-center sm:grid-cols-4">
              <div className="border-r border-white/10 last:border-none">
                <div className="text-xs uppercase tracking-wider text-[#d8c38f]">
                  Typology
                </div>
                <div className="mt-1 font-display text-xl font-bold text-[#f7f0e5] sm:text-2xl">
                  3 & 4 BHK
                </div>
                <div className="text-[11px] text-[#f7f0e5]/60">Ultra-Luxury Flats</div>
              </div>

              <div className="border-r border-white/10 last:border-none">
                <div className="text-xs uppercase tracking-wider text-[#d8c38f]">
                  Location
                </div>
                <div className="mt-1 font-display text-xl font-bold text-[#f7f0e5] sm:text-2xl">
                  Techzone-4
                </div>
                <div className="text-[11px] text-[#f7f0e5]/60">Greater Noida (W)</div>
              </div>

              <div className="border-r border-white/10 last:border-none">
                <div className="text-xs uppercase tracking-wider text-[#d8c38f]">
                  Payment Plan
                </div>
                <div className="mt-1 font-display text-xl font-bold text-[#d8c38f] sm:text-2xl">
                  30:70
                </div>
                <div className="text-[11px] text-[#f7f0e5]/60">Flexible Scheme</div>
              </div>

              <div>
                <div className="text-xs uppercase tracking-wider text-[#d8c38f]">
                  Amenities
                </div>
                <div className="mt-1 font-display text-xl font-bold text-[#f7f0e5] sm:text-2xl">
                  50+
                </div>
                <div className="text-[11px] text-[#f7f0e5]/60">Resort Amenities</div>
              </div>
            </div>
          </div>

          {/* Need Immediate Assistance Card */}
          <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-2xl border border-[#c7a96b]/30 bg-[#082420] p-6 text-center sm:flex-row sm:text-left">
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-[#d8c38f]">
                Urgent Consultation Required?
              </div>
              <p className="mt-1 text-sm text-[#f7f0e5]/80">
                Directly connect with our Senior Relationship Executive now:
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="tel:+918851462433"
                className="inline-flex items-center gap-2 rounded-full border border-[#c7a96b] bg-[#c7a96b]/10 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#d8c38f] transition hover:bg-[#c7a96b] hover:text-[#0c3b35]"
              >
                <Phone className="h-3.5 w-3.5" />
                +91 88514 62433
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=7054442848&text=Hi,%20I%20have%20submitted%20an%20enquiry%20for%20Aspire%20Centurian%20Park.%20Please%20share%20the%20details."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#25D366]/50 bg-[#25D366]/20 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#98e9ad] transition hover:bg-[#25D366] hover:text-[#0b2421]"
              >
                <FaWhatsapp className="h-3.5 w-3.5" />
                WhatsApp
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ThankYouContent;
