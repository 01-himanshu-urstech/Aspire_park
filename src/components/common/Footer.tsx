import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  Instagram,
  Facebook,
  Linkedin,
  MapPin,
  Phone,
  MessageCircle,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";


const Footer: React.FC = () => {
  return (
    <footer className="relative overflow-hidden bg-[#0b2421] text-[#f7f0e5]">
      {/* ========================================================= */}
      {/* Decorative background                                     */}
      {/* ========================================================= */}

      <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#d8c38f]/[0.06] blur-[100px]" />

      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-[#d8c38f]/[0.04] blur-[100px]" />

      {/* ========================================================= */}
      {/* Main CTA                                                   */}
      {/* ========================================================= */}

      <div className="relative border-b border-[#d8c38f]/15">
        <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="grid items-end gap-10 lg:grid-cols-[1fr_auto]">
            <div>
              <div className="flex items-center gap-4">
                <span className="h-px w-10 bg-[#d8c38f]" />

                <span className="text-[9px] font-semibold uppercase tracking-[0.35em] text-[#d8c38f]">
                  Aspire Centurian Park
                </span>
              </div>

              <h2 className="mt-7 max-w-4xl font-display text-5xl leading-[0.92] tracking-[-0.02em] text-[#f7f0e5] sm:text-6xl lg:text-8xl">
                Your Signature
                <br />
                <span className="text-[#d8c38f]">
                  Address Awaits.
                </span>
              </h2>

              <p className="mt-7 max-w-xl text-sm leading-7 text-[#f7f0e5]/55">
                Discover grand luxury residences crafted for an elevated
                lifestyle in Greater Noida (W).
              </p>
            </div>

            <Link
              href="#contact"
              className="
                group inline-flex w-fit items-center gap-4
                border border-[#d8c38f]/50
                bg-[#d8c38f]
                px-7 py-4
                text-[9px] font-bold uppercase
                tracking-[0.25em] text-[#171714]
                transition-all duration-300
                hover:bg-[#ead9ae]
              "
            >
              Enquire Now

              <ArrowUpRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* Main footer                                               */}
      {/* ========================================================= */}

      <div className="relative mx-auto max-w-[1400px] px-5 py-6 sm:px-8 lg:px-12 lg:py-8">
        <div className="grid gap-14 lg:grid-cols-[1.25fr_0.75fr_0.75fr]">
          {/* ===================================================== */}
          {/* Brand                                                  */}
          {/* ===================================================== */}

          <div>
            <div className="flex items-center">
              <div className="relative h-[70px] w-[170px] sm:h-[76px] sm:w-[185px]">
                <Image
                  src="/acplogo.png"
                  alt="Aspire Centurian Park"
                  fill
                  priority
                  sizes="185px"
                  className="
                    object-contain
                    object-left
                    transition-transform
                    duration-500
                    hover:scale-[1.03]
                  "
                />
              </div>
            </div>

            <div className="mt-7 h-px w-20 bg-[#d8c38f]" />

            <p className="mt-6 max-w-sm text-sm leading-7 text-[#f7f0e5]/50">
              Grand Luxury Residences by Gaurs, thoughtfully designed for
              refined living in Greater Noida (W).
            </p>

            <div className="mt-7 flex items-start gap-3 text-sm text-[#f7f0e5]/65">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#d8c38f]" />

              <div>
                <span className="block">
                  Techzone-4,
                  <br />
                  Greater Noida (W)
                </span>

                {/* RERA Number */}
                <span className="mt-3 block text-[10px] uppercase tracking-[0.16em] text-[#d8c38f]/80">
                  RERA No. UPRERAPRJ11256
                </span>
              </div>
            </div>
          </div>

          {/* ===================================================== */}
          {/* Explore                                                */}
          {/* ===================================================== */}

          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#d8c38f]">
              Explore
            </p>

            <nav className="mt-6 space-y-4">
              {[
                ["About Aspire", "#about"],
                ["Residences", "#residences"],
                ["Amenities", "#amenities"],
                ["Pricing", "#pricing"],
                ["Location", "#location"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <Link
                  key={label}
                  href={href}
                  className="
                    group flex items-center gap-2
                    text-sm text-[#f7f0e5]/60
                    transition-colors duration-200
                    hover:text-[#d8c38f]
                  "
                >
                  <span className="h-px w-0 bg-[#d8c38f] transition-all duration-300 group-hover:w-4" />

                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* ===================================================== */}
          {/* Contact                                                */}
          {/* ===================================================== */}

          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#d8c38f]">
              Connect
            </p>

            <div className="mt-6 space-y-5">
              <a
                href="tel:+91 70544 42848"
                className="group flex items-center gap-3 text-sm text-[#f7f0e5]/65 transition hover:text-[#d8c38f]"
              >
                <span className="flex h-9 w-9 items-center justify-center border border-[#d8c38f]/20 transition group-hover:border-[#d8c38f]/60">
                  <Phone className="h-3.5 w-3.5 text-[#d8c38f]" />
                </span>

                +91 70544 42848, +91 84471 71933
              </a>

              <a
                href="https://wa.me/917054442848"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 text-sm text-[#f7f0e5]/65 transition hover:text-[#d8c38f]"
              >
                <span className="flex h-9 w-9 items-center justify-center border border-[#d8c38f]/20 transition group-hover:border-[#d8c38f]/60">
                  <FaWhatsapp   className="h-4 w-4 text-[#25D366]"
                  />  
                </span>

                WhatsApp
              </a>
            </div>

            {/* Socials */}
            {/* <div className="mt-8">
              <p className="text-[8px] uppercase tracking-[0.25em] text-[#f7f0e5]/30">
                Follow
              </p>

              <div className="mt-4 flex gap-2">
                <a
                  href="#"
                  aria-label="Instagram"
                  className="flex h-9 w-9 items-center justify-center border border-[#d8c38f]/20 text-[#f7f0e5]/60 transition hover:border-[#d8c38f] hover:text-[#d8c38f]"
                >
                  <Instagram className="h-4 w-4" />
                </a>

                <a
                  href="#"
                  aria-label="Facebook"
                  className="flex h-9 w-9 items-center justify-center border border-[#d8c38f]/20 text-[#f7f0e5]/60 transition hover:border-[#d8c38f] hover:text-[#d8c38f]"
                >
                  <Facebook className="h-4 w-4" />
                </a>

                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="flex h-9 w-9 items-center justify-center border border-[#d8c38f]/20 text-[#f7f0e5]/60 transition hover:border-[#d8c38f] hover:text-[#d8c38f]"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </div> */}
          </div>
        </div>

        {/* ======================================================= */}
        {/* Gold divider                                             */}
        {/* ======================================================= */}

        <div className="mt-16 h-px bg-gradient-to-r from-transparent via-[#d8c38f]/30 to-transparent" />

        {/* ======================================================= */}
        {/* Bottom                                                   */}
        {/* ======================================================= */}

        <div className="mt-7 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-[9px] uppercase tracking-[0.18em] text-[#f7f0e5]/35">
            <Link
              href="/term-conditions"
              className="transition hover:text-[#d8c38f]"
            >
              Terms & Conditions
            </Link>

            {/* <Link
              href="/privacy-policy"
              className="transition hover:text-[#d8c38f]"
            >
              Privacy Policy
            </Link>

            <Link
              href="#contact"
              className="transition hover:text-[#d8c38f]"
            >
              Contact
            </Link> */}
          </div>

          <div className="text-[9px] uppercase tracking-[0.18em] text-[#f7f0e5]/30">
            Gaurs — Your Own World
          </div>
        </div>

        <div className="mt-7 flex flex-col gap-3 border-t border-[#d8c38f]/10 pt-6 text-[8px] uppercase tracking-[0.16em] text-[#f7f0e5]/25 sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {new Date().getFullYear()} Aspire Centurian Park by Gaurs.
            All rights reserved.
          </span>

          <span>*T&C Apply</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;