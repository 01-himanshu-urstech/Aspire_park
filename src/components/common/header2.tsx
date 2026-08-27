"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import PopUpModal from "@/components/PopUpModal/PopUpModal";
import Image from "next/image";

const navLinks = [
  { label: "About", href: "#about" },
  // { label: "Highlights", href: "#highlights" },
  { label: "Residences", href: "#residences" },
  { label: "Amenities", href: "#amenities" },
  { label: "Pricing", href: "#pricing" },
  { label: "Location", href: "#location" },
];

const Header2: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleClose = () => setIsModalOpen(false);
  const handleOpen = () => setIsModalOpen(true);

  const toggleMenu = () => {
    setIsMenuOpen((open) => !open);
  };

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={`
          fixed inset-x-0 top-0 z-[100] w-full
          transition-all duration-500 ease-out
          ${
            isScrolled
              ? "border-b border-[#c7a96b]/30 bg-[#0c3b35]/95 shadow-[0_8px_30px_rgba(0,0,0,0.12)] backdrop-blur-xl"
              : "border-b border-white/10 bg-[#0c3b35]/55 backdrop-blur-md"
          }
        `}
      >
        {/* Top luxury strip */}
{/* ========================================================= */}
{/* TOP INFORMATION STRIP                                    */}
{/* ========================================================= */}

<div className="hidden border-b border-[#c7a96b]/20 bg-[#171714]/40 lg:block">
  <div className="flex h-8 w-full items-center">

    {/* LEFT — STATIC */}
    <div className="flex shrink-0 items-center px-6 xl:px-10">
      <span className="mr-3 h-1 w-1 rounded-full bg-[#c7a96b]" />

      <span className="whitespace-nowrap text-[9px] font-medium uppercase tracking-[0.28em] text-[#f7f0e5]/70">
        Aspire Centurian Park
      </span>

      <span className="mx-3 text-[#c7a96b]/50">|</span>

      <span className="whitespace-nowrap text-[9px] uppercase tracking-[0.22em] text-[#d8c38f]">
        Grand Luxury Residences
      </span>
    </div>

    {/* RIGHT — MOVING */}
    <div className="relative min-w-0 flex-1 overflow-hidden border-l border-[#c7a96b]/20">

      <div className="flex w-max animate-marquee-right">

        {/* FIRST SET */}
        <div className="flex shrink-0 items-center">

          <div className="flex items-center px-8">
            <span className="mr-3 h-1.5 w-1.5 rounded-full bg-[#c7a96b]" />
            <span className="whitespace-nowrap text-[9px] uppercase tracking-[0.2em] text-[#f7f0e5]/65">
              Techzone-4, Greater Noida (W)
            </span>
          </div>

          <span className="h-4 w-px bg-[#c7a96b]/20" />

          <div className="flex items-center px-8">
            <span className="mr-3 h-1.5 w-1.5 rounded-full bg-[#c7a96b]" />
            <span className="whitespace-nowrap text-[9px] uppercase tracking-[0.2em] text-[#d8c38f]">
              RERA Registered Project
            </span>
          </div>

          <span className="h-4 w-px bg-[#c7a96b]/20" />

          <div className="flex items-center px-8">
            <span className="mr-3 h-1.5 w-1.5 rounded-full bg-[#c7a96b]" />
            <span className="whitespace-nowrap text-[9px] uppercase tracking-[0.2em] text-[#f7f0e5]/65">
              Supreme Court Monitored Project
            </span>
          </div>

          <span className="mx-4 h-4 w-px bg-[#c7a96b]/20" />
        </div>


        {/* DUPLICATE — FOR SEAMLESS LOOP */}
        <div className="flex shrink-0 items-center">

          <div className="flex items-center px-8">
            <span className="mr-3 h-1.5 w-1.5 rounded-full bg-[#c7a96b]" />
            <span className="whitespace-nowrap text-[9px] uppercase tracking-[0.2em] text-[#f7f0e5]/65">
              Techzone-4, Greater Noida (W)
            </span>
          </div>

          <span className="h-4 w-px bg-[#c7a96b]/20" />

          <div className="flex items-center px-8">
            <span className="mr-3 h-1.5 w-1.5 rounded-full bg-[#c7a96b]" />
            <span className="whitespace-nowrap text-[9px] uppercase tracking-[0.2em] text-[#d8c38f]">
              RERA Registered Project
            </span>
          </div>

          <span className="h-4 w-px bg-[#c7a96b]/20" />

          <div className="flex items-center px-8">
            <span className="mr-3 h-1.5 w-1.5 rounded-full bg-[#c7a96b]" />
            <span className="whitespace-nowrap text-[9px] uppercase tracking-[0.2em] text-[#f7f0e5]/65">
              Supreme Court Monitored Project
            </span>
          </div>

          <span className="mx-4 h-4 w-px bg-[#c7a96b]/20" />
        </div>

      </div>
    </div>
  </div>
</div>

        {/* Main navbar */}
        <div className="mx-auto flex h-[76px] max-w-[1500px] items-center justify-between px-5 sm:px-7 lg:h-[82px] lg:px-10 xl:px-14">
          {/* Logo / Brand */}
          {/* <Link
            href="/"
            aria-label="Aspire Centurian Park home"
            className="group flex shrink-0 items-center gap-3"
          >
            <div className="relative flex h-11 w-11 items-center justify-center">
              <div className="absolute inset-0 rounded-full border border-[#c7a96b]/70 transition-all duration-500 group-hover:rotate-45 group-hover:border-[#d8c38f]" />

              <div className="absolute inset-[4px] rounded-full border border-[#d8c38f]/25" />

              <span className="relative font-serif text-xl text-[#d8c38f]">
                A
              </span>
            </div>

            <div className="flex flex-col">
              <span className="font-serif text-[24px] leading-[0.9] tracking-[0.06em] text-[#f7f0e5] sm:text-[26px]">
                Aspire
              </span>

              <div className="mt-1 flex items-center gap-2">
                <span className="h-px w-5 bg-[#c7a96b]" />

                <span className="text-[8px] font-medium uppercase tracking-[0.28em] text-[#d8c38f]">
                  Centurian Park
                </span>
              </div>
            </div>
          </Link> */}
          {/* Logo / Brand */}
          <Link
            href="/"
            aria-label="Aspire Centurian Park home"
            className="group flex h-full shrink-0 items-center"
          >
            <div className="relative h-[70px] w-[155px] sm:h-[74px] sm:w-[165px]">
              <Image
                src="/acplogo.png"
                alt="Aspire Centurian Park"
                fill
                priority
                sizes="165px"
                className="
                  object-contain
                  object-left
                  transition-transform
                  duration-500
                  group-hover:scale-[1.03]
                "
              />
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 xl:flex">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="
                  group relative px-4 py-3
                  text-[10px] font-medium uppercase
                  tracking-[0.2em] text-[#f7f0e5]/75
                  transition-colors duration-300
                  hover:text-[#d8c38f]
                "
              >
                {item.label}

                {/* Animated underline */}
                <span
                  className="
                    absolute bottom-1 left-1/2 h-px w-0
                    -translate-x-1/2 bg-[#c7a96b]
                    transition-all duration-300
                    group-hover:w-[calc(100%-32px)]
                  "
                />
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden items-center gap-4 lg:flex">
            {/* Phone */}
            <a
              href="tel:+91 70544 42848"
              className="
                group flex items-center gap-2.5
                border-r border-[#c7a96b]/20
                pr-5
              "
            >
              <span
                className="
                  flex h-8 w-8 items-center justify-center
                  rounded-full border border-[#c7a96b]/40
                  transition-all duration-300
                  group-hover:border-[#d8c38f]
                  group-hover:bg-[#c7a96b]/10
                "
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-3.5 w-3.5 text-[#d8c38f]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5.5 4.5h3l1.5 4-2 1.5a13 13 0 0 0 6 6l1.5-2 4 1.5v3c0 .83-.67 1.5-1.5 1.5C11.37 20 4 12.63 4 3.5 4 2.67 4.67 2 5.5 2z"
                  />
                </svg>
              </span>

              <span className="flex flex-col">
                <span className="text-[8px] uppercase tracking-[0.18em] text-[#f7f0e5]/45">
                  Call us
                </span>

                <span className="mt-0.5 text-[10px] tracking-[0.08em] text-[#f7f0e5]/90">
                  +91 70544 42848, +91 84471 71933
                </span>
              </span>
            </a>

            {/* Brochure CTA */}
            <button
              onClick={() => window.dispatchEvent(new Event("open-brochure"))}
              className="
                rounded-full border border-[#d8c38f]/70
                bg-transparent px-5 py-3
                text-[10px] font-semibold uppercase
                tracking-[0.2em] text-[#f7f0e5]
                transition-all duration-300
                hover:border-[#d8c38f]
                hover:bg-[#c7a96b]/15
              "
            >
              Download Brochure
            </button>

            {/* Enquire CTA */}
            <button
              onClick={handleOpen}
              className="
                group relative overflow-hidden
                rounded-full
                border border-[#d8c38f]
                bg-[#c7a96b]
                px-6 py-3
                text-[10px] font-semibold uppercase
                tracking-[0.2em] text-[#171714]
                transition-all duration-300
                hover:bg-[#d8c38f]
                hover:shadow-[0_8px_30px_rgba(199,169,107,0.2)]
              "
            >
              <span className="relative z-10">Enquire Now</span>

              <span
                className="
                  absolute inset-0
                  -translate-x-full
                  bg-[#f7f0e5]/25
                  transition-transform duration-500
                  group-hover:translate-x-0
                "
              />
            </button>
          </div>

          {/* Tablet CTA */}
          <div className="hidden items-center gap-3 md:flex lg:hidden">
            <button
              onClick={() => window.dispatchEvent(new Event("open-brochure"))}
              className="
                rounded-full border border-[#d8c38f]/70
                bg-transparent px-4 py-2.5
                text-[9px] font-semibold uppercase
                tracking-[0.15em] text-[#f7f0e5]
              "
            >
              Brochure
            </button>

            <button
              onClick={handleOpen}
              className="
                rounded-full border border-[#c7a96b]
                bg-[#c7a96b] px-5 py-2.5
                text-[9px] font-semibold uppercase
                tracking-[0.18em] text-[#171714]
              "
            >
              Enquire
            </button>

            <button
              onClick={toggleMenu}
              className="
                flex h-10 w-10 items-center justify-center
                rounded-full border border-[#d8c38f]/50
              "
              aria-label="Toggle menu"
            >
              <MenuIcon isOpen={isMenuOpen} />
            </button>
          </div>

          {/* Mobile actions */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href="tel:+91 70544 42848"
              aria-label="Call Aspire Centurian Park"
              className="
                flex h-10 w-10 items-center justify-center
                rounded-full border border-[#c7a96b]/50
              "
            >
              <PhoneIcon />
            </a>

            <button
              onClick={toggleMenu}
              className="
                flex h-10 w-10 items-center justify-center
                rounded-full border border-[#d8c38f]/50
              "
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <MenuIcon isOpen={isMenuOpen} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`
            overflow-hidden border-t border-[#c7a96b]/20
            bg-[#0c3b35]/98 backdrop-blur-xl
            transition-all duration-500 md:hidden
            ${
              isMenuOpen
                ? "max-h-[calc(100vh-76px)] opacity-100"
                : "max-h-0 opacity-0"
            }
          `}
        >
          <div className="px-5 pb-7 pt-6">
            {/* Mobile menu heading */}
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="font-serif text-lg text-[#f7f0e5]">
                  Aspire Centurian Park
                </p>

                <p className="mt-1 text-[8px] uppercase tracking-[0.25em] text-[#c7a96b]">
                  Greater Noida (W)
                </p>
              </div>

              <span className="text-[8px] uppercase tracking-[0.18em] text-[#f7f0e5]/40">
                Menu
              </span>
            </div>

            {/* Links */}
            <nav className="border-t border-[#c7a96b]/15">
              {navLinks.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="
                    group flex items-center justify-between
                    border-b border-[#c7a96b]/10
                    py-4
                    text-[11px] font-medium uppercase
                    tracking-[0.2em] text-[#f7f0e5]/85
                    transition-colors hover:text-[#d8c38f]
                  "
                >
                  <span className="flex items-center gap-4">
                    <span className="text-[8px] text-[#c7a96b]/60">
                      0{index + 1}
                    </span>

                    {item.label}
                  </span>

                  <svg
                    viewBox="0 0 24 24"
                    className="
                      h-4 w-4 text-[#c7a96b]/50
                      transition-transform duration-300
                      group-hover:translate-x-1
                    "
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 12h14M13 6l6 6-6 6"
                    />
                  </svg>
                </a>
              ))}
            </nav>

            {/* Mobile CTA */}
            <button
              onClick={() => {
                setIsMenuOpen(false);
                handleOpen();
              }}
              className="
                mt-6 w-full rounded-full
                border border-[#d8c38f]
                bg-[#c7a96b]
                px-5 py-3.5
                text-[10px] font-semibold uppercase
                tracking-[0.22em] text-[#171714]
              "
            >
              Enquire About Residences
            </button>

            <button
              onClick={() => {
                setIsMenuOpen(false);
                window.dispatchEvent(new Event("open-brochure"));
              }}
              className="
                mt-3 w-full rounded-full
                border border-[#d8c38f]/70
                bg-transparent px-5 py-3.5
                text-[10px] font-semibold uppercase
                tracking-[0.22em] text-[#f7f0e5]
              "
            >
              Download Brochure
            </button>

            {/* Mobile trust */}
            <div className="mt-6 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#c7a96b]/30" />

              <span className="text-[8px] uppercase tracking-[0.16em] text-[#f7f0e5]/40">
                Grand Luxury Residences
              </span>

              <span className="h-px w-8 bg-[#c7a96b]/30" />
            </div>
          </div>
        </div>
      </header>

      {/* Enquiry Modal */}
      {/* <PopUpModal
        isOpen={isModalOpen}
        onClose={handleClose}
        onOpen={handleOpen}
      /> */}
    </>
  );
};

/* ----------------------------- */
/* Icons                         */
/* ----------------------------- */

const PhoneIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-4 w-4 text-[#d8c38f]"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5.5 4.5h3l1.5 4-2 1.5a13 13 0 0 0 6 6l1.5-2 4 1.5v3c0 .83-.67 1.5-1.5 1.5C11.37 20 4 12.63 4 3.5 4 2.67 4.67 2 5.5 2z"
    />
  </svg>
);

const MenuIcon = ({ isOpen }: { isOpen: boolean }) => (
  <svg
    viewBox="0 0 24 24"
    className="h-5 w-5 text-[#f7f0e5]"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    {isOpen ? (
      <>
        <path
          strokeLinecap="round"
          d="M6 6l12 12"
        />
        <path
          strokeLinecap="round"
          d="M18 6L6 18"
        />
      </>
    ) : (
      <>
        <path
          strokeLinecap="round"
          d="M4 7h16"
        />
        <path
          strokeLinecap="round"
          d="M4 12h16"
        />
        <path
          strokeLinecap="round"
          d="M4 17h16"
        />
      </>
    )}
  </svg>
);

export default Header2;