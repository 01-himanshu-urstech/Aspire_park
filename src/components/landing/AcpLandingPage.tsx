"use client";

import { projectData } from "@/data/project";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { FaWhatsapp } from "react-icons/fa";
import {
  Mail,
  User,
  ArrowDown,
  ArrowRight,
  Phone,
  Building2,
  Check,
  ChevronRight,
  Dumbbell,
  Flower2,
  Gamepad2,
  Gem,
  Home,
  Library,
  MapPin,
  Waves,
  ShieldCheck,
  Sparkles,
  Trees,
  Users,
  Utensils,
  Volleyball,
  WashingMachine,
  Wind,
  X,
  Zap,
} from "lucide-react";

type AmenityTab = "club" | "nature" | "sports";
const amenityCards = {
  club: [
    {
      name: "Swimming Pool",
      image: "/acp_assets/amenities/12.webp",
    },
    {
      name: "Jacuzzi & Fountain",
      image: "/acp_assets/amenities/jacuzzi.jpg",
    },
    {
      name: "Gazebo & Lily Pond",
      image: "/acp_assets/amenities/Gazebo & Lily Pond.jpg",
    },
  ],

  nature: [
    {
      name: "Jogging Track",
      image: "/acp_assets/amenities/Jogging Track.jpg",
    },
    {
      name: "Yoga & Zumba",
      image: "/acp_assets/amenities/yoga.jpg",
    },
    {
      name: "Lush Greens",
      image: "/acp_assets/amenities/nature-walk.jpg",
    },
    {
      name: "Flower Garden",
      image: "/acp_assets/amenities/flower-garden.webp",
    },
    {
      name: "Lily Pond",
      image: "/acp_assets/amenities/lily-pond.webp",
    },
  ],

  sports: [
    {
      name: "Badminton Court",
      image: "/acp_assets/amenities/badminton.jpg",
    },
    {
      name: "Lawn Tennis",
      image: "/acp_assets/amenities/lawn-tennis.jpg",
    },
    {
      name: "Open Gym",
      image: "/acp_assets/amenities/open-gym.jpg",
    },

    {
      name: "Billiards",
      image: "/acp_assets/amenities/billiards.webp",
    },
  ],
};

export default function AcpLandingPage() {
  const [activeTab, setActiveTab] = useState<AmenityTab>("club");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBrochureRequest, setIsBrochureRequest] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  useEffect(() => {
    const openBrochure = () => {
      setIsBrochureRequest(true);
      setIsModalOpen(true);
    };

    window.addEventListener("open-brochure", openBrochure);

    return () => window.removeEventListener("open-brochure", openBrochure);
  }, []);

const activeAmenityCards = amenityCards[activeTab];
const [heroForm, setHeroForm] = useState({
  name: "",
  phone: "",
  email: "",
});

const [heroFormErrors, setHeroFormErrors] = useState({
  name: "",
  phone: "",
  email: "",
});

const [isHeroSubmitting, setIsHeroSubmitting] = useState(false);
const [contactForm, setContactForm] = useState({
  name: "",
  phone: "",
  email: "",
  configuration: "3 BHK",
});
const [isContactSubmitting, setIsContactSubmitting] = useState(false);
const [enquiryForm, setEnquiryForm] = useState({
  name: "",
  phone: "",
  email: "",
  configuration: "3 BHK",
});
const [isEnquirySubmitting, setIsEnquirySubmitting] = useState(false);

const handleHeroFormChange = (
  e: React.ChangeEvent<HTMLInputElement>
) => {
  const { name, value } = e.target;

  setHeroForm((prev) => ({
    ...prev,
    [name]: value,
  }));

  setHeroFormErrors((prev) => ({
    ...prev,
    [name]: "",
  }));
};

const submitHeroForm = async (e: React.FormEvent) => {
  e.preventDefault();

  const errors = {
    name: "",
    phone: "",
    email: "",
  };

  if (!heroForm.name.trim()) {
    errors.name = "Name is required.";
  }

  if (!heroForm.phone) {
    errors.phone = "Phone number is required.";
  } else if (!/^[0-9]{10}$/.test(heroForm.phone)) {
    errors.phone = "Enter a valid 10-digit number.";
  }

  if (
    heroForm.email &&
    !/\S+@\S+\.\S+/.test(heroForm.email)
  ) {
    errors.email = "Enter a valid email.";
  }

  setHeroFormErrors(errors);

  if (errors.name || errors.phone || errors.email) {
    return;
  }

  try {
    setIsHeroSubmitting(true);

    await axios.post("/api/sendEmail", heroForm);

    toast.success(
      "Thank you. Our team will contact you shortly."
    );

    setHeroForm({
      name: "",
      phone: "",
      email: "",
    });
  } catch (error) {
    console.error(error);

    toast.error(
      "Something went wrong. Please try again."
    );
  } finally {
    setIsHeroSubmitting(false);
  }
};

const updateLeadField = (
  setter: React.Dispatch<React.SetStateAction<typeof contactForm>>,
  name: string,
  value: string
) => {
  setter((prev) => ({ ...prev, [name]: value }));
};

const submitLeadForm = async (
  e: React.FormEvent<HTMLFormElement>,
  form: typeof contactForm,
  reset: React.Dispatch<React.SetStateAction<typeof contactForm>>,
  setSubmitting: React.Dispatch<React.SetStateAction<boolean>>,
  closeAfterSubmit = false,
  downloadAfterSubmit = false
) => {
  e.preventDefault();

  if (!form.name.trim() || !/^[0-9]{10}$/.test(form.phone)) {
    toast.error("Please enter your name and a valid 10-digit number.");
    return;
  }

  setSubmitting(true);

  try {
    const response = await axios.post("/api/sendEmail", form);

    if (!response.data.success) {
      throw new Error(response.data.error || "Unable to send enquiry");
    }

    toast.success("Thank you. Our team will contact you shortly.");
    reset({ name: "", phone: "", email: "", configuration: "3 BHK" });

    if (downloadAfterSubmit) {
      const brochureLink = document.createElement("a");
      brochureLink.href = "/brochure.pdf";
      brochureLink.download = "Aspire-Centurian-Park-Brochure.pdf";
      brochureLink.click();
    }

    if (closeAfterSubmit) {
      setIsModalOpen(false);
      setIsBrochureRequest(false);
    }
  } catch (error) {
    console.error("Lead submission failed:", error);
    toast.error("Something went wrong. Please try again.");
  } finally {
    setSubmitting(false);
  }
};

  const amenityImages = {
    club: "/acp_assets/amenities/clubhouse.webp",
    nature: "/acp_assets/amenities/nature.webp",
    sports: "/acp_assets/amenities/sports.webp",
  };
  return (
    <main className="overflow-x-hidden bg-[#f7f0e5] text-[#171714]">
      <ToastContainer position="top-center" autoClose={3000} hideProgressBar theme="dark" />
{/* ========================================================= */}
{/* HERO                                                      */}
{/* ========================================================= */}

<section className="relative min-h-[100svh] overflow-hidden bg-[#0c3b35] text-[#f7f0e5]">

  {/* ======================================================= */}
  {/* RESPONSIVE HERO IMAGES                                  */}
  {/* ======================================================= */}

  {/* Desktop */}
  <div
    className="
      absolute inset-0
      hidden
      bg-cover
      bg-center
      md:block
    "
    style={{
      backgroundImage:
        "url('/hero/hero-desktop (2).jpg')",
    }}
  />

  {/* Mobile */}
  <div
    className="
      absolute inset-0
      block
      bg-cover
      bg-center
      md:hidden
    "
    style={{
      backgroundImage:
        "url('/acp_assets/hero/hero-mobile.webp')",
    }}
  />

  {/* ======================================================= */}
  {/* LUXURY OVERLAYS                                          */}
  {/* ======================================================= */}

  <div
    className="
      absolute inset-0
      bg-gradient-to-r
      from-[#071f1c]/95
      via-[#0c3b35]/75
      to-[#0c3b35]/35
    "
  />

  <div
    className="
      absolute inset-0
      bg-gradient-to-t
      from-[#071f1c]
      via-[#071f1c]/20
      to-[#071f1c]/25
    "
  />

  {/* Right gold glow */}
  <div
    className="
      absolute
      -right-40
      top-20
      h-[550px]
      w-[550px]
      rounded-full
      bg-[#d8c38f]/10
      blur-[130px]
    "
  />

  {/* ======================================================= */}
  {/* HERO CONTENT                                             */}
  {/* ======================================================= */}

  <div
    className="
      relative
      z-10
      mx-auto
      flex
      min-h-[100svh]
      max-w-[1500px]
      items-center
      px-5
      pb-16
      pt-28
      sm:px-8
      sm:pb-20
      lg:px-12
      lg:pt-28
      xl:px-14
    "
  >

    <div
      className="
        grid
        w-full
        items-center
        gap-12
        lg:grid-cols-[1.08fr_0.92fr]
        lg:gap-10
        xl:gap-14
      "
    >

      {/* =================================================== */}
      {/* LEFT CONTENT                                        */}
      {/* =================================================== */}

      <div className="max-w-3xl">

        {/* Eyebrow */}
        <div className="mb-6 flex items-center gap-4 sm:mb-7">
          <span className="h-px w-10 bg-[#d8c38f] sm:w-12" />

          <p
            className="
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.35em]
              text-[#d8c38f]
              sm:text-[10px]
            "
          >
            {projectData.hero.eyebrow}
          </p>
        </div>

        {/* Main heading */}
        <h1
          className="
            font-display
            text-[52px]
            leading-[0.88]
            tracking-[-0.035em]
            text-[#f7f0e5]
            sm:text-[70px]
            md:text-[82px]
            lg:text-[88px]
            xl:text-[100px]
          "
        >
          {projectData.hero.heading}
        </h1>

        {/* Subtitle */}
        <div
          className="
            mt-6
            flex
            flex-wrap
            items-end
            gap-x-5
            gap-y-2
            sm:mt-7
          "
        >
          <span
            className="
              font-display
              text-[38px]
              leading-none
              text-[#d8c38f]
              sm:text-[50px]
              md:text-[56px]
            "
          >
            {projectData.hero.subtitle}
          </span>

          <span
            className="
              mb-1
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.3em]
              text-[#f7f0e5]/75
              sm:text-xs
            "
          >
            {projectData.hero.support}
          </span>
        </div>

        {/* Location */}
        <div className="mt-6 flex items-center gap-3 sm:mt-8">
          <MapPin className="h-4 w-4 text-[#d8c38f]" />

          <span
            className="
              text-[13px]
              tracking-[0.06em]
              text-[#f7f0e5]/85
              sm:text-sm
            "
          >
            {projectData.hero.locationHint}
          </span>
        </div>

        {/* Campaign */}
        <div
          className="
            mt-6
            max-w-2xl
            border-y
            border-[#d8c38f]/30
            py-4
            sm:mt-8
            sm:py-5
          "
        >

          <div
            className="
              flex
              flex-wrap
              items-center
              gap-x-5
              gap-y-3
            "
          >
            <span
              className="
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.25em]
                text-[#d8c38f]
                sm:text-[10px]
              "
            >
              {projectData.hero.campaign}
            </span>

            <span className="hidden h-4 w-px bg-[#d8c38f]/40 sm:block" />

            <span
              className="
                font-display
                text-2xl
                text-[#f7f0e5]
                sm:text-3xl
                md:text-4xl
              "
            >
              {projectData.hero.price}
            </span>
          </div>

          <div className="mt-3 flex flex-wrap gap-2 sm:mt-4">
            {projectData.hero.payment.map((item) => (
              <span
                key={item}
                className="
                  border
                  border-[#d8c38f]/35
                  bg-[#071f1c]/45
                  px-2.5
                  py-2
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.16em]
                  text-[#f7f0e5]/90
                  backdrop-blur-md
                  sm:px-3
                  sm:text-[9px]
                "
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row">

          <button
            onClick={() => setIsModalOpen(true)}
            className="
              group
              relative
              flex
              items-center
              gap-3
              overflow-hidden
              bg-[#d8c38f]
              px-6
              py-3.5
              text-[9px]
              font-bold
              uppercase
              tracking-[0.22em]
              text-[#171714]
              transition-all
              duration-300
              hover:bg-[#ead9ae]
              sm:px-7
              sm:py-4
              sm:text-[10px]
            "
          >
            <span className="relative z-10">
              Enquire Now
            </span>

            <ArrowRight
              className="
                relative
                z-10
                h-3.5
                w-3.5
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </button>

          <a
            href="#residences"
            className="
              flex
              items-center
              gap-3
              border
              border-[#f7f0e5]/40
              bg-white/5
              px-6
              py-3.5
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.22em]
              text-[#f7f0e5]
              backdrop-blur-md
              transition-all
              duration-300
              hover:border-[#d8c38f]
              hover:bg-[#d8c38f]/10
              sm:px-7
              sm:py-4
              sm:text-[10px]
            "
          >
            Explore Residences
          </a>

        </div>

      </div>

{/* =================================================== */}
{/* RIGHT SIDE                                          */}
{/* PERMANENT ENQUIRY FORM                              */}
{/* =================================================== */}

<div
  className="
    flex
    w-full
    items-center
    justify-center
    lg:justify-end
  "
>
  <div
    className="
      w-full
      max-w-[420px]
      border
      border-[#d8c38f]/35
      // bg-[#071f1c]/85
      bg-white
      p-5
      shadow-[0_25px_70px_rgba(0,0,0,0.35)]
      backdrop-blur-xl
      sm:p-6
      lg:max-w-[390px]
      xl:max-w-[420px]
    "
  >

    {/* ================================================= */}
    {/* FORM HEADER                                       */}
    {/* ================================================= */}

    <div className="mb-5">

      <div className="flex items-center gap-3">
        <span className="h-px w-8 bg-[#d8c38f]" />

        <span
          className="
            text-[9px]
            font-semibold
            uppercase
            tracking-[0.28em]
            text-[#d8c38f]
          "
        >
          Register Your Interest
        </span>
      </div>

      <h3
        className="
          mt-4
          font-display
          text-3xl
          leading-[1.05]
          text-[#0c3b35]
          sm:text-4xl
        "
      >
        Your Dream Home & 
        <br />
        <span className="text-[#d8c38f]">
          Investment Awaits.
        </span>
      </h3>

      <p
        className="
          mt-3
          max-w-sm
          text-[12px]
          leading-5
          text-[#0c3b35]/65
        "
      >
        Get complete project details, pricing,
        floor plans and payment plan information.
      </p>

    </div>


    {/* ================================================= */}
    {/* FORM                                               */}
    {/* ================================================= */}

    <form
      onSubmit={submitHeroForm}
      className="space-y-3"
    >

{/* ================================================= */}
{/* NAME */}
{/* ================================================= */}

<div>
  <div className="group relative">

    <User
      className="
        absolute
        left-3
        top-1/2
        z-10
        h-4
        w-4
        -translate-y-1/2
        text-[#d8c38f]

      "
      strokeWidth={1.6}
    />

    <input
      type="text"
      name="name"
      placeholder="Full Name"
      value={heroForm.name}
      onChange={handleHeroFormChange}
      className="
        h-12
        w-full
        border
        border-[#d8c38f]/30
        bg-[#0c3b35]
        pl-10
        pr-3
        text-[14px]
        font-medium
        text-white
        outline-none

        placeholder:text-white/55

        transition-all
        duration-300

        hover:border-[#d8c38f]/50

        focus:border-[#d8c38f]
        focus:bg-[#0a332e]
        focus:ring-1
        focus:ring-[#d8c38f]/20
      "
    />

  </div>

  {heroFormErrors.name && (
    <p className="mt-1 text-[10px] text-red-400">
      {heroFormErrors.name}
    </p>
  )}
</div>


{/* ================================================= */}
{/* PHONE */}
{/* ================================================= */}

<div>
  <div className="group relative">

    <Phone
      className="
        absolute
        left-3
        top-1/2
        z-10
        h-4
        w-4
        -translate-y-1/2
        text-[#d8c38f]
        transition-colors
        duration-200
      "
      strokeWidth={1.6}
    />

    <input
      type="tel"
      name="phone"
      inputMode="numeric"
      placeholder="10-digit Mobile Number"
      value={heroForm.phone}
      onChange={(e) => {
        const value = e.target.value
          .replace(/[^0-9]/g, "")
          .slice(0, 10);

        setHeroForm((prev) => ({
          ...prev,
          phone: value,
        }));

        setHeroFormErrors((prev) => ({
          ...prev,
          phone: "",
        }));
      }}
      className="
        h-12
        w-full
        border
        border-[#d8c38f]/30
        bg-[#0c3b35]
        pl-10
        pr-3
        text-[14px]
        font-medium
        text-white
        outline-none

        placeholder:text-white/55

        transition-all
        duration-300

        hover:border-[#d8c38f]/50

        focus:border-[#d8c38f]
        focus:bg-[#0a332e]
        focus:ring-1
        focus:ring-[#d8c38f]/20
      "
    />

  </div>

  {heroFormErrors.phone && (
    <p className="mt-1 text-[10px] text-red-400">
      {heroFormErrors.phone}
    </p>
  )}
</div>


{/* ================================================= */}
{/* EMAIL */}
{/* ================================================= */}

<div>
  <div className="group relative">

    <Mail
      className="
        absolute
        left-3
        top-1/2
        z-10
        h-4
        w-4
        -translate-y-1/2
        text-[#d8c38f]
        transition-colors
        duration-200
      "
      strokeWidth={1.6}
    />

    <input
      type="email"
      name="email"
      placeholder="Email Address (Optional)"
      value={heroForm.email}
      onChange={handleHeroFormChange}
      className="
        h-12
        w-full
        border
        border-[#d8c38f]/30
        bg-[#0c3b35]
        pl-10
        pr-3
        text-[14px]
        font-medium
        text-white
        outline-none

        placeholder:text-white/55

        transition-all
        duration-300

        hover:border-[#d8c38f]/50

        focus:border-[#d8c38f]
        focus:bg-[#0a332e]
        focus:ring-1
        focus:ring-[#d8c38f]/20
      "
    />

  </div>

  {heroFormErrors.email && (
    <p className="mt-1 text-[10px] text-red-400">
      {heroFormErrors.email}
    </p>
  )}
</div>

      {/* SUBMIT BUTTON */}
      <button
        type="submit"
        disabled={isHeroSubmitting}
        className="
          group
          relative
          mt-2
          flex
          h-12
          w-full
          items-center
          justify-center
          gap-3
          overflow-hidden
          bg-[#d8c38f]
          px-5
          text-[9px]
          font-bold
          uppercase
          tracking-[0.23em]
          text-[#171714]
          transition-all
          duration-300
          hover:bg-[#ead9ae]
          disabled:cursor-not-allowed
          disabled:opacity-60
        "
      >

        <span className="relative z-10">
          {isHeroSubmitting
            ? "Submitting..."
            : "Request a Callback"}
        </span>

        {!isHeroSubmitting && (
          <ArrowRight
            className="
              relative
              z-10
              h-3.5
              w-3.5
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
          />
        )}

        {/* Shine */}
        <span
          className="
            absolute
            inset-y-0
            -left-full
            w-1/3
            skew-x-[-20deg]
            bg-white/25
            transition-all
            duration-700
            group-hover:left-[130%]
          "
        />

      </button>

    </form>


    {/* ================================================= */}
    {/* FORM FOOTER                                       */}
    {/* ================================================= */}

    <div
      className="
        mt-5
        flex
        items-center
        justify-center
        gap-2
        border-t
        border-[#0c3b35]/15
        pt-4
      "
    >

      <span className="h-1 w-1 rounded-full bg-[#d8c38f]" />

      <span
        className="
          text-center
          text-[7px]
          uppercase
          tracking-[0.15em]
          text-black
          sm:text-[8px]
        "
      >
        3 & 4 BHK Ultra Luxury Residences
      </span>

      <span className="h-1 w-1 rounded-full bg-[#d8c38f]" />

    </div>

  </div>
</div>
    </div>
  </div>


  {/* ======================================================= */}
  {/* SCROLL INDICATOR                                        */}
  {/* ======================================================= */}

  <a
    href="#about"
    className="
      absolute
      bottom-5
      left-1/2
      z-10
      hidden
      -translate-x-1/2
      flex-col
      items-center
      gap-2
      md:flex
    "
  >
    <span
      className="
        text-[8px]
        uppercase
        tracking-[0.35em]
        text-[#f7f0e5]/50
      "
    >
      Explore
    </span>

    <ArrowDown
      className="
        h-4
        w-4
        animate-bounce
        text-[#d8c38f]
      "
    />
  </a>

</section>
        {/* ========================================================= */}
        {/* TRUST STRIP                                                */}
        {/* ========================================================= */}

        <section className="relative overflow-hidden border-b border-[#c7a96b]/25 bg-[#f7f0e5]">
        <div className="mx-auto max-w-[1500px] overflow-hidden">
            <div className="flex w-max animate-[trustScroll_20s_linear_infinite]">
            {/* Original items */}
            {projectData.stats.map((stat, index) => (
                <div
                key={`original-${stat.value}-${index}`}
                className={`
                    min-w-[180px] flex-1 px-8 py-8 text-center
                    ${
                    index !== projectData.stats.length - 1
                        ? "border-r border-[#c7a96b]/25"
                        : ""
                    }
                `}
                >
                <div className="font-display text-4xl text-[#0c3b35] md:text-5xl">
                    {stat.value}
                </div>

                <div className="mt-2 text-[9px] font-medium uppercase tracking-[0.25em] text-[#746f64]">
                    {stat.label}
                </div>
                </div>
            ))}

            {/* Duplicate items for seamless infinite loop */}
            {projectData.stats.map((stat, index) => (
                <div
                key={`duplicate-${stat.value}-${index}`}
                className={`
                    min-w-[180px] flex-1 px-8 py-8 text-center
                    ${
                    index !== projectData.stats.length - 1
                        ? "border-r border-[#c7a96b]/25"
                        : ""
                    }
                `}
                >
                <div className="font-display text-4xl text-[#0c3b35] md:text-5xl">
                    {stat.value}
                </div>

                <div className="mt-2 text-[9px] font-medium uppercase tracking-[0.25em] text-[#746f64]">
                    {stat.label}
                </div>
                </div>
            ))}
            </div>
        </div>
        </section>


      {/* ========================================================= */}
      {/* ABOUT                                                       */}
      {/* ========================================================= */}

      <section
        id="about"
        className="relative overflow-hidden bg-[#fbf7f0] py-24 lg:py-32"
      >
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="grid items-center gap-16 lg:grid-cols-[0.85fr_1.15fr]">
            {/* Copy */}
            <div>
              <div className="flex items-center gap-4">
                <span className="h-px w-10 bg-[#9d7b3f]" />

                <span className="text-[9px] font-semibold uppercase tracking-[0.35em] text-[#9d7b3f]">
                  About Aspire
                </span>
              </div>

              <h2 className="mt-7 max-w-xl font-display text-5xl leading-[0.95] text-[#0c3b35] sm:text-6xl lg:text-7xl">
                A Life
                <br />
                <span className="text-[#9d7b3f]">Beyond Ordinary.</span>
              </h2>

              <p className="mt-7 text-lg text-[#24231f]/75">
                Grand Luxury Residences in Greater Noida (W)
              </p>

              <p className="mt-7 max-w-xl text-[15px] leading-8 text-[#24231f]/65">
                Aspire Centurian Park by Gaurs is a grand luxury residential
                address crafted for discerning families seeking architectural
                elegance, expansive layouts, and elevated everyday living.
                Set in Techzone-4, Greater Noida (W), it brings together
                premium residences, landscaped green spaces, and an iconic
                skyline presence.
              </p>

              <div className="mt-10 grid grid-cols-3 border-y border-[#c7a96b]/30 py-5">
                <div className="border-r border-[#c7a96b]/25 pr-4">
                  <Building2 className="h-5 w-5 text-[#9d7b3f]" />
                  <p className="mt-3 text-[9px] font-semibold uppercase tracking-[0.15em] text-[#746f64]">
                    Modern
                    <br />
                    Architecture
                  </p>
                </div>

                <div className="border-r border-[#c7a96b]/25 px-4">
                  <Trees className="h-5 w-5 text-[#9d7b3f]" />
                  <p className="mt-3 text-[9px] font-semibold uppercase tracking-[0.15em] text-[#746f64]">
                    Landscaped
                    <br />
                    Greens
                  </p>
                </div>

                <div className="pl-4">
                  <ShieldCheck className="h-5 w-5 text-[#9d7b3f]" />
                  <p className="mt-3 text-[9px] font-semibold uppercase tracking-[0.15em] text-[#746f64]">
                    Trusted
                    <br />
                    Developer
                  </p>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="absolute -left-5 -top-5 h-24 w-24 border-l border-t border-[#c7a96b]" />

              <div className="relative overflow-hidden bg-[#0c3b35] p-3">
                <div
                  className="aspect-[4/5] bg-cover bg-center transition-transform duration-700 hover:scale-[1.025]"
                  style={{
                    backgroundImage:
                      "url('/acp_assets/architecture/project-exterior.png')",
                  }}
                />

                <div className="absolute bottom-7 left-7 bg-[#f7f0e5] px-6 py-4">
                  <div className="text-[8px] uppercase tracking-[0.3em] text-[#9d7b3f]">
                    Aspire
                  </div>

                  <div className="mt-1 font-display text-2xl text-[#0c3b35]">
                    Centurian Park
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-5 -right-5 h-24 w-24 border-b border-r border-[#c7a96b]" />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* DEVELOPER TRUST                                             */}
      {/* ========================================================= */}

        <section className="relative overflow-hidden bg-[#0c3b35] py-24 text-[#f7f0e5] lg:py-32">
        {/* Background glow */}
        <div className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_center,rgba(216,195,143,0.10),transparent_65%)]" />

        {/* Subtle animated gold glow */}
        <div className="absolute -right-32 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[#d8c38f]/5 blur-[100px] animate-[pulse_6s_ease-in-out_infinite]" />

        <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
            {/* Heading */}
            <div className="max-w-3xl animate-[fadeUp_700ms_ease-out_both]">
            <div className="flex items-center gap-4">
                <span className="h-px w-10 bg-[#d8c38f] transition-all duration-700 hover:w-20" />

                <span className="text-[9px] font-semibold uppercase tracking-[0.35em] text-[#d8c38f]">
                Developer Trust
                </span>
            </div>

            <h2 className="mt-7 font-display text-5xl leading-[0.95] sm:text-6xl lg:text-7xl">
                3 Decades of
                <br />
                <span className="text-[#d8c38f]">
                Trust & Triumphs.
                </span>
            </h2>
            </div>

            {/* Stats */}
            <div className="mt-16 grid gap-0 border-y border-[#d8c38f]/20 md:grid-cols-2 xl:grid-cols-3">
            {projectData.stats.map((item, index) => (
                <div
                key={item.value}
                className={`
                    group relative overflow-hidden
                    px-7 py-9
                    transition-all duration-500
                    hover:bg-[#d8c38f]/[0.035]
                    ${
                    index % 3 !== 2
                        ? "xl:border-r xl:border-[#d8c38f]/20"
                        : ""
                    }
                    ${
                    index % 2 !== 1
                        ? "md:border-r md:border-[#d8c38f]/20 xl:border-r"
                        : ""
                    }
                    border-b border-[#d8c38f]/20 last:border-b-0
                `}
                style={{
                    animation: `fadeUp 700ms ease-out ${index * 120}ms both`,
                }}
                >
                {/* Animated gold line */}
                <div
                    className="
                    absolute left-0 top-0
                    h-px w-0
                    bg-[#d8c38f]
                    transition-all duration-700
                    group-hover:w-full
                    "
                />

                {/* Number */}
                <div
                    className="
                    font-display text-5xl text-[#d8c38f]
                    transition-all duration-500
                    group-hover:translate-x-1
                    group-hover:text-[#ead9ae]
                    "
                >
                    {item.value}
                </div>

                {/* Label */}
                <div
                    className="
                    mt-3 text-[10px]
                    uppercase tracking-[0.22em]
                    text-[#f7f0e5]/55
                    transition-colors duration-500
                    group-hover:text-[#f7f0e5]/80
                    "
                >
                    {item.label}
                </div>

                {/* Small decorative dot */}
                <div
                    className="
                    absolute bottom-7 right-7
                    h-1.5 w-1.5 rounded-full
                    bg-[#d8c38f]/30
                    transition-all duration-500
                    group-hover:scale-[2]
                    group-hover:bg-[#d8c38f]
                    "
                />
                </div>
            ))}
            </div>
        </div>
        </section>


    {/* ========================================================= */}
    {/* ABOUT GAURS / DEVELOPER                                   */}
    {/* ========================================================= */}

    <section
    id="about"
    className="
        relative overflow-hidden
        bg-[#f7f0e5]
        py-12
        sm:py-18
        lg:py-20
    "
    >
    {/* ======================================================= */}
    {/* Subtle paper texture                                    */}
    {/* ======================================================= */}

    <div
        className="
        pointer-events-none
        absolute inset-0
        opacity-[0.035]
        mix-blend-multiply
        "
        style={{
        backgroundImage: `
            radial-gradient(#0c3b35 0.7px, transparent 0.7px)
        `,
        backgroundSize: "5px 5px",
        }}
    />

    {/* ======================================================= */}
    {/* Soft background glow                                    */}
    {/* ======================================================= */}

    <div
        className="
        pointer-events-none
        absolute
        left-1/2
        top-0
        h-[300px]
        w-[300px]
        -translate-x-1/2
        rounded-full
        bg-[#d8c38f]/10
        blur-[100px]
        sm:h-[400px]
        sm:w-[400px]
        lg:h-[500px]
        lg:w-[500px]
        "
    />

    {/* ======================================================= */}
    {/* Main container                                          */}
    {/* ======================================================= */}

    <div className="relative mx-auto max-w-[1150px] px-5 sm:px-8">

        {/* ===================================================== */}
        {/* SECTION LABEL                                         */}
        {/* ===================================================== */}

        <div className="text-center">

        {/* Gaursons */}
        <p
            className="
            font-display
            text-xl
            text-[#0c3b35]
            opacity-0
            animate-[gaursFadeUp_700ms_ease-out_forwards]
            sm:text-2xl
            "
        >
            Gaursons
        </p>

        {/* About divider */}
        <div
            className="
            mt-4
            flex
            items-center
            justify-center
            gap-4
            opacity-0
            animate-[gaursFadeUp_700ms_ease-out_150ms_forwards]
            "
        >
            <span className="h-px w-14 bg-[#c7a96b]/70 sm:w-20" />

            <span
            className="
                text-[8px]
                font-semibold
                uppercase
                tracking-[0.3em]
                text-[#c7a96b]
                sm:text-[9px]
            "
            >
            About
            </span>

            <span className="h-px w-14 bg-[#c7a96b]/70 sm:w-20" />
        </div>
        </div>

        {/* ===================================================== */}
        {/* GAURS LOGO                                            */}
        {/* ===================================================== */}

        <div
        className="
            mt-10
            flex
            justify-center
            opacity-0
            animate-[gaursLogoReveal_900ms_ease-out_300ms_forwards]
            sm:mt-14
        "
        >
        <div
            className="
            relative
            flex
            items-center
            justify-center
            "
        >
            {/* Soft logo glow */}
            <div
            className="
                pointer-events-none
                absolute
                inset-0
                rounded-full
                bg-[#d8c38f]/10
                blur-[50px]
            "
            />

            <img
            src="/Gaurslogo.png"
            alt="Gaurs - Your Own World"
            className="
                relative
                h-auto
                w-[180px]
                object-contain
                sm:w-[230px]
                md:w-[270px]
                lg:w-[300px]
            "
            />
        </div>
        </div>

        {/* ===================================================== */}
        {/* DESCRIPTION                                           */}
        {/* ===================================================== */}

        <div
        className="
            mx-auto
            mt-10
            max-w-[1050px]
            opacity-0
            animate-[gaursFadeUp_900ms_ease-out_500ms_forwards]
            sm:mt-12
        "
        >

        {/* Paragraph 1 */}
        <p
            className="
            text-center
            text-[12px]
            leading-7
            text-[#102c29]
            sm:text-sm
            sm:leading-7
            lg:text-[15px]
            lg:leading-8
            "
        >
            For over 25 years, Gaurs has established itself as a leading name in
            the real estate sector of the National Capital Region. With a legacy
            of excellence and more than 45 successful projects, the group has
            consistently delivered quality developments while maintaining a
            strong commitment to its customers.
        </p>

        {/* Paragraph 2 */}
        <p
            className="
            mt-5
            text-center
            text-[12px]
            leading-7
            text-[#102c29]
            sm:text-sm
            sm:leading-7
            lg:text-[15px]
            lg:leading-8
            "
        >
            Recognized for its construction quality, commitment and innovative
            approach, Gaurs has developed a strong presence across residential,
            commercial, retail, hospitality, healthcare and education sectors.
            Aspire Centurian Park carries forward this vision through grand
            luxury residences designed for elevated living in Greater Noida (W).
        </p>

        </div>

        {/* ===================================================== */}
        {/* DECORATIVE DIVIDER                                     */}
        {/* ===================================================== */}

        <div
        className="
            mx-auto
            mt-10
            flex
            items-center
            justify-center
            gap-3
            opacity-0
            animate-[gaursFadeUp_700ms_ease-out_750ms_forwards]
            sm:mt-14
        "
        >
        <span className="h-px w-14 bg-[#c7a96b]/40 sm:w-24" />

        <span
            className="
            text-[10px]
            text-[#c7a96b]
            sm:text-xs
            "
        >
            ◆
        </span>

        <span className="h-px w-14 bg-[#c7a96b]/40 sm:w-24" />
        </div>

        {/* ===================================================== */}
        {/* TRUST STATS                                           */}
        {/* ===================================================== */}

        <div
        className="
            mx-auto
            mt-10
            grid
            max-w-[850px]
            grid-cols-2
            border-y
            border-[#c7a96b]/25
            opacity-0
            animate-[gaursFadeUp_800ms_ease-out_900ms_forwards]
            sm:mt-12
            sm:grid-cols-4
        "
        >
        {[
            ["25+", "Years of Legacy"],
            ["45+", "Projects Delivered"],
            ["NCR", "Strong Presence"],
            ["1", "Signature Address"],
        ].map(([value, label], index) => (
            <div
            key={label}
            className={`
                px-4
                py-6
                text-center
                transition-all
                duration-500
                hover:bg-[#d8c38f]/5
                sm:py-8

                ${
                index < 2
                    ? "border-b border-[#c7a96b]/25 sm:border-b-0"
                    : ""
                }

                ${
                index % 2 === 0
                    ? "border-r border-[#c7a96b]/25"
                    : ""
                }

                ${
                index === 1
                    ? "sm:border-r"
                    : ""
                }

                ${
                index === 2
                    ? "sm:border-r"
                    : ""
                }
            `}
            >
            {/* Number */}
            <div
                className="
                font-display
                text-3xl
                leading-none
                text-[#0c3b35]
                sm:text-4xl
                "
            >
                {value}
            </div>

            {/* Label */}
            <div
                className="
                mt-2
                text-[7px]
                font-semibold
                uppercase
                tracking-[0.2em]
                text-[#746f64]
                sm:text-[8px]
                "
            >
                {label}
            </div>
            </div>
        ))}
        </div>

        {/* ===================================================== */}
        {/* TAGLINE                                               */}
        {/* ===================================================== */}

        <div
        className="
            mt-10
            text-center
            opacity-0
            animate-[gaursFadeUp_700ms_ease-out_1100ms_forwards]
            sm:mt-14
        "
        >
        <p
            className="
            font-display
            text-2xl
            italic
            text-[#0c3b35]
            sm:text-3xl
            "
        >
            Your Own World.
        </p>

        <p
            className="
            mt-2
            text-[7px]
            uppercase
            tracking-[0.35em]
            text-[#c7a96b]
            "
        >
            Gaurs
        </p>
        </div>

    </div>
    </section>

      {/* ========================================================= */}
      {/* LEGAL / PROJECT OVERVIEW                                    */}
      {/* ========================================================= */}

      <section className="bg-[#f7f0e5] py-24 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            {/* Legal */}
            <div className="relative overflow-hidden bg-[#171714] p-8 text-[#f7f0e5] sm:p-10">
              <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[#d8c38f]/10 blur-3xl" />

              <ShieldCheck className="relative h-8 w-8 text-[#d8c38f]" />

              <p className="relative mt-8 text-[9px] font-semibold uppercase tracking-[0.35em] text-[#d8c38f]">
                Trust & Legal
              </p>

              <h3 className="relative mt-5 font-display text-4xl leading-tight sm:text-5xl">
                {projectData.legal.title}
              </h3>

              <div className="my-8 h-px w-20 bg-[#d8c38f]" />

              <p className="text-sm uppercase leading-7 tracking-[0.1em] text-[#f7f0e5]/65">
                {projectData.legal.text}
              </p>

              <div className="mt-12 text-[8px] uppercase tracking-[0.2em] text-[#f7f0e5]/35">
                Aspire Centurian Park by Gaurs
              </div>
            </div>

            {/* Overview */}
            <div>
              <div className="mb-8">
                <span className="text-[9px] font-semibold uppercase tracking-[0.35em] text-[#9d7b3f]">
                  The Project
                </span>

                <h3 className="mt-4 font-display text-5xl text-[#0c3b35]">
                  Designed for
                  <br />
                  <span className="text-[#9d7b3f]">a grand lifestyle.</span>
                </h3>
              </div>

              <div className="grid border-l border-t border-[#c7a96b]/25 sm:grid-cols-2">
                {projectData.overview.map((stat) => (
                  <div
                    key={stat.value}
                    className="border-b border-r border-[#c7a96b]/25 p-7"
                  >
                    <div className="font-display text-4xl text-[#0c3b35]">
                      {stat.value}
                    </div>

                    <div className="mt-2 text-[9px] uppercase tracking-[0.22em] text-[#746f64]">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* RESIDENCES                                                  */}
      {/* ========================================================= */}

      <section
        id="residences"
        className="relative bg-[#fbf7f0] py-24 lg:py-32"
      >
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
            <div>
              <div className="flex items-center gap-4">
                <span className="h-px w-10 bg-[#9d7b3f]" />

                <span className="text-[9px] font-semibold uppercase tracking-[0.35em] text-[#9d7b3f]">
                  Residences
                </span>
              </div>

              <h2 className="mt-6 font-display text-5xl leading-[0.95] text-[#0c3b35] sm:text-6xl lg:text-7xl">
                Grand Luxury
                <br />
                <span className="text-[#9d7b3f]">Apartments.</span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-[#24231f]/60">
              Expansive residences designed around light, space, privacy and
              elevated everyday living.
            </p>
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-2">
            {projectData.configurations.map((unit, index) => (
              <article
                key={unit.name}
                className="group relative overflow-hidden border border-[#c7a96b]/30 bg-[#f7f0e5] transition-all duration-500 hover:border-[#9d7b3f]/60 hover:shadow-[0_25px_70px_rgba(12,59,53,0.08)]"
              >
                {/* Image */}
                {/* <div className="relative aspect-[16/9] overflow-hidden bg-[#0c3b35]">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{
                      backgroundImage: `url('/acp_assets/floor-plans/floorplan-${index + 1}.webp')`,
                    }}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#071f1c]/70 via-transparent to-transparent" />

                  <span className="absolute left-5 top-5 border border-[#d8c38f]/50 bg-[#071f1c]/60 px-3 py-2 text-[8px] font-semibold uppercase tracking-[0.25em] text-[#f7f0e5] backdrop-blur-md">
                    {unit.name}
                  </span>

                  <span className="absolute bottom-5 right-5 font-display text-3xl text-[#f7f0e5]">
                    {unit.area}
                  </span>
                </div> */}
                {/* Image */}
                <div className="relative aspect-[16/9] overflow-hidden bg-[#0c3b35]">

                  {/* Floor Plan Image */}
                  <div
                    className="
                      absolute
                      inset-0
                      bg-cover
                      bg-center
                      scale-105
                      blur-[4px]
                      transition-all
                      duration-700
                      group-hover:scale-110
                    "
                    style={{
                      backgroundImage: `url('/acp_assets/floor-plans/floorplan-${index + 1}.webp')`,
                    }}
                  />

                  {/* Dark / Luxury Overlay */}
                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-[#071f1c]/80
                      via-[#071f1c]/35
                      to-[#071f1c]/20
                    "
                  />

                  {/* Subtle Gold Overlay */}
                  <div
                    className="
                      absolute
                      inset-0
                      bg-[#d8c38f]/5
                      transition-all
                      duration-500
                      group-hover:bg-[#d8c38f]/10
                    "
                  />

                  {/* Unit Name */}
                  <span
                    className="
                      absolute
                      left-5
                      top-5
                      border
                      border-[#d8c38f]/50
                      bg-[#071f1c]/60
                      px-3
                      py-2
                      text-[8px]
                      font-semibold
                      uppercase
                      tracking-[0.25em]
                      text-[#f7f0e5]
                      backdrop-blur-md
                    "
                  >
                    {unit.name}
                  </span>

                  {/* Area */}
                  <span
                    className="
                      absolute
                      bottom-5
                      right-5
                      font-display
                      text-3xl
                      text-[#f7f0e5]
                    "
                  >
                    {unit.area}
                  </span>

                  {/* View Button */}
                  <div className="absolute inset-0 flex items-center justify-center">

                    <button
                      type="button"
                      onClick={() => setIsModalOpen(true)}
                      className="
                        group/view
                        relative
                        flex
                        items-center
                        gap-3
                        overflow-hidden
                        rounded-full
                        border
                        border-[#d8c38f]
                        bg-[#0c3b35]/80
                        px-7
                        py-3.5
                        text-[9px]
                        font-semibold
                        uppercase
                        tracking-[0.25em]
                        text-[#f7f0e5]

                      "
                    >
                      <span className="relative z-10">
                        View Floor Plan
                      </span>

                      <ArrowRight
                        className="
                          relative
                          z-10
                          h-3.5
                          w-3.5
                          transition-transform
                          duration-300
                          group-hover/view:translate-x-1
                        "
                      />

                      {/* Shine animation */}
                      <span
                        className="
                          absolute
                          inset-y-0
                          -left-full
                          w-1/2
                          skew-x-[-20deg]
                          bg-white/20
                          transition-all
                          duration-700
                          group-hover/view:left-[130%]
                        "
                      />
                    </button>

                  </div>
                </div>
                {/* Content */}
                <div className="p-7 sm:p-8">
                  <div className="flex items-start justify-between gap-5">
                    <h3 className="font-display text-3xl text-[#0c3b35] sm:text-4xl">
                      {unit.title}
                    </h3>

                    <ChevronRight className="mt-1 h-5 w-5 shrink-0 text-[#9d7b3f] transition-transform group-hover:translate-x-1" />
                  </div>

                  <div className="mt-7 grid grid-cols-2 gap-x-6 gap-y-4 border-y border-[#c7a96b]/25 py-6 text-[11px] text-[#24231f]/70">
                    <div>
                      <span className="block text-[8px] uppercase tracking-[0.18em] text-[#746f64]">
                        Carpet Area
                      </span>

                      <span className="mt-1 block font-semibold text-[#171714]">
                        {unit.carpet}
                      </span>
                    </div>

                    <div>
                      <span className="block text-[8px] uppercase tracking-[0.18em] text-[#746f64]">
                        Balcony Area
                      </span>

                      <span className="mt-1 block font-semibold text-[#171714]">
                        {unit.balcony}
                      </span>
                    </div>

                    <div>
                      <span className="block text-[8px] uppercase tracking-[0.18em] text-[#746f64]">
                        Built-up Area
                      </span>

                      <span className="mt-1 block font-semibold text-[#171714]">
                        {unit.builtUp}
                      </span>
                    </div>

                    <div>
                      <span className="block text-[8px] uppercase tracking-[0.18em] text-[#746f64]">
                        Super Built-up
                      </span>

                      <span className="mt-1 block font-semibold text-[#171714]">
                        {unit.superBuilt}
                      </span>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-[8px] uppercase tracking-[0.2em] text-[#746f64]">
                      {unit.note}
                    </span>

                    <button
                      type="button"
                      onClick={() => setIsModalOpen(true)}
                      className="
                        group/enquire
                        relative
                        flex
                        items-center
                        gap-2.5
                        overflow-hidden
                        rounded-full
                        border
                        border-[#0c3b35]
                        bg-[#0c3b35]
                        px-5
                        py-2.5
                        text-[8px]
                        font-bold
                        uppercase
                        tracking-[0.2em]
                        text-[#f7f0e5]
                        transition-all
                        duration-300
                        hover:border-[#9d7b3f]
                        hover:bg-[#9d7b3f]
                        hover:text-[#171714]
                        hover:shadow-[0_8px_25px_rgba(157,123,63,0.22)]
                      "
                    >
                      <span className="relative z-10">
                        Enquire
                      </span>

                      <ArrowRight
                        className="
                          relative
                          z-10
                          h-3.5
                          w-3.5
                          text-[#d8c38f]
                          transition-all
                          duration-300
                          group-hover/enquire:translate-x-1
                          group-hover/enquire:text-[#171714]
                        "
                      />

                      {/* Gold shine */}
                      <span
                        className="
                          absolute
                          inset-y-0
                          -left-full
                          w-1/2
                          skew-x-[-20deg]
                          bg-white/15
                          transition-all
                          duration-700
                          group-hover/enquire:left-[130%]
                        "
                      />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* ICONIC TOWER                                                */}
      {/* ========================================================= */}

      <section className="overflow-hidden bg-[#0c3b35] py-24 text-[#f7f0e5] lg:py-32">
        <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-14">
          <div className="grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="order-2 lg:order-1">
              <div className="flex items-center gap-4">
                <span className="h-px w-10 bg-[#d8c38f]" />

                <span className="text-[9px] font-semibold uppercase tracking-[0.35em] text-[#d8c38f]">
                  Iconic Tower
                </span>
              </div>

              <h2 className="mt-7 font-display text-6xl leading-[0.9] sm:text-7xl">
                {projectData.iconicTower.name}
              </h2>

              <h3 className="mt-5 font-display text-3xl text-[#d8c38f]">
                {projectData.iconicTower.title}
              </h3>

              <div className="mt-7 font-display text-5xl">
                {projectData.iconicTower.area}
              </div>

              <div className="mt-8 h-px w-full max-w-md bg-[#d8c38f]/20" />

              <ul className="mt-8 space-y-4">
                {projectData.iconicTower.info.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 text-sm text-[#f7f0e5]/70"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#d8c38f]" />

                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => setIsModalOpen(true)}
                className="mt-10 flex items-center gap-3 bg-[#d8c38f] px-7 py-4 text-[9px] font-bold uppercase tracking-[0.25em] text-[#171714] transition hover:bg-[#ead9ae]"
              >
                Explore Iconic Tower
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="absolute -inset-5 border border-[#d8c38f]/20" />

                <div className="relative overflow-hidden border border-[#d8c38f]/35 p-3">
                  <div
                    className="aspect-[4/5] bg-cover bg-center transition-transform duration-700 hover:scale-[1.02]"
                    style={{
                      backgroundImage:
                        "url('/acp_assets/architecture/iconic-tower.webp')",
                    }}
                  />
                </div>

                <div className="absolute -bottom-6 -left-5 bg-[#d8c38f] px-6 py-4 text-[#171714]">
                  <div className="font-display text-3xl">45</div>
                  <div className="text-[8px] font-bold uppercase tracking-[0.25em]">
                    Storeys
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    {/* ========================================================= */}
    {/* AMENITIES                                                   */}
    {/* ========================================================= */}

    <section
    id="amenities"
    className="relative overflow-hidden bg-[#171714] py-20 text-[#f7f0e5] sm:py-24 lg:py-32"
    >
    {/* Background glow */}
    <div
        className="
        pointer-events-none
        absolute
        -right-40
        top-0
        h-[500px]
        w-[500px]
        rounded-full
        bg-[#d8c38f]/[0.05]
        blur-[120px]
        "
    />

    <div
        className="
        pointer-events-none
        absolute
        -left-40
        bottom-0
        h-[400px]
        w-[400px]
        rounded-full
        bg-[#0c3b35]/30
        blur-[100px]
        "
    />

    <div className="relative mx-auto max-w-[1450px] px-5 sm:px-8 lg:px-12">

        {/* ===================================================== */}
        {/* HEADER                                                 */}
        {/* ===================================================== */}

        <div className="mx-auto max-w-3xl text-center">

        <div
            className="
            flex
            items-center
            justify-center
            gap-4
            "
        >
            <span className="h-px w-10 bg-[#d8c38f]" />

            <span className="text-[9px] font-semibold uppercase tracking-[0.35em] text-[#d8c38f]">
            Amenities
            </span>

            <span className="h-px w-10 bg-[#d8c38f]" />
        </div>

        <h2
            className="
            mt-6
            font-display
            text-5xl
            leading-[0.92]
            sm:text-6xl
            lg:text-7xl
            "
        >
            Luxury{" "}
            <span className="text-[#d8c38f]">
            Lifestyle.
            </span>
        </h2>

        <p
            className="
            mx-auto
            mt-6
            max-w-2xl
            text-sm
            leading-7
            text-[#f7f0e5]/50
            "
        >
            Thoughtfully curated spaces designed to elevate wellness,
            recreation, connection and everyday living.
        </p>

        </div>

        {/* ===================================================== */}
        {/* CATEGORY TABS                                         */}
        {/* ===================================================== */}

        <div className="mt-10 flex flex-wrap justify-center gap-2 sm:mt-12">

        {[
            ["club", "Clubhouse"],
            ["nature", "Nature & Wellness"],
            ["sports", "Sports"],
        ].map(([key, label]) => (

            <button
            key={key}
            onClick={() => setActiveTab(key as AmenityTab)}
            className={`
                border
                px-5
                py-3
                text-[8px]
                font-semibold
                uppercase
                tracking-[0.2em]
                transition-all
                duration-300

                ${
                activeTab === key
                    ? "border-[#d8c38f] bg-[#d8c38f] text-[#171714]"
                    : "border-[#d8c38f]/25 text-[#f7f0e5]/55 hover:border-[#d8c38f]/60 hover:text-[#d8c38f]"
                }
            `}
            >
            {label}
            </button>

        ))}

        </div>

        {/* ===================================================== */}
        {/* AMENITY IMAGE GRID                                    */}
        {/* ===================================================== */}

        <div
        className="
            mt-12
            grid
            grid-cols-1
            gap-4
            sm:grid-cols-2
            lg:grid-cols-3
            lg:gap-5
            sm:mt-14
        "
        >

        {activeAmenityCards.slice(0, 3).map((item, index) => (
        <div
            key={`${activeTab}-${item.name}`}
            className="
            group
            relative
            overflow-hidden
            border
            border-[#d8c38f]/15
            bg-[#0c3b35]
            opacity-0
            animate-[amenityCardReveal_600ms_ease-out_forwards]
            "
            style={{
            animationDelay: `${index * 80}ms`,
            }}
        >
            {/* IMAGE */}
            <div className="relative aspect-[16/10] overflow-hidden">

            <img
                src={item.image}
                alt={item.name}
                className="
                h-full
                w-full
                object-cover
                transition-transform
                duration-700
                ease-out
                group-hover:scale-110
                "
            />

            {/* Dark overlay */}
            <div
                className="
                absolute
                inset-0
                bg-gradient-to-t
                from-[#071f1c]
                via-[#071f1c]/20
                to-transparent
                opacity-80
                transition-opacity
                duration-500
                group-hover:opacity-90
                "
            />

            {/* Gold hover overlay */}
            <div
                className="
                absolute
                inset-0
                bg-[#d8c38f]/0
                transition-all
                duration-500
                group-hover:bg-[#d8c38f]/[0.06]
                "
            />

            {/* Number */}
            <div
                className="
                absolute
                left-5
                top-5
                text-[8px]
                font-semibold
                tracking-[0.2em]
                text-[#d8c38f]/70
                "
            >
                {String(index + 1).padStart(2, "0")}
            </div>

            {/* Top-right decoration */}
            <div
                className="
                absolute
                right-5
                top-5
                flex
                h-9
                w-9
                items-center
                justify-center
                border
                border-[#d8c38f]/30
                bg-[#171714]/30
                backdrop-blur-sm
                transition-all
                duration-500
                group-hover:border-[#d8c38f]
                group-hover:bg-[#d8c38f]
                "
            >
                <span
                className="
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-[#d8c38f]
                    transition-all
                    duration-500
                    group-hover:scale-[2]
                    group-hover:bg-[#171714]
                "
                />
            </div>

            {/* TEXT */}
            <div
                className="
                absolute
                bottom-0
                left-0
                right-0
                p-5
                sm:p-6
                "
            >
                <div
                className="
                    text-[8px]
                    font-semibold
                    uppercase
                    tracking-[0.25em]
                    text-[#d8c38f]
                "
                >
                {activeTab === "club"
                    ? "Clubhouse"
                    : activeTab === "nature"
                    ? "Nature & Wellness"
                    : "Sports"}
                </div>

                <h3
                className="
                    mt-2
                    font-display
                    text-2xl
                    leading-tight
                    text-[#f7f0e5]
                    transition-transform
                    duration-500
                    group-hover:translate-x-1
                    sm:text-3xl
                "
                >
                {item.name}
                </h3>

                {/* Gold line */}
                <div
                className="
                    mt-3
                    h-px
                    w-0
                    bg-[#d8c38f]
                    transition-all
                    duration-500
                    group-hover:w-12
                "
                />
            </div>
            </div>
        </div>
        ))}

        </div>

        {/* ===================================================== */}
        {/* BOTTOM NOTE                                           */}
        {/* ===================================================== */}

        <div
        className="
            mt-10
            flex
            items-center
            justify-center
            gap-3
            text-center
        "
        >
        <span className="h-px w-8 bg-[#d8c38f]/25" />

        <span
            className="
            text-[7px]
            uppercase
            tracking-[0.25em]
            text-[#f7f0e5]/30
            "
        >
            Designed for elevated living
        </span>

        <span className="h-px w-8 bg-[#d8c38f]/25" />
        </div>

    </div>
    </section>


      {/* ========================================================= */}
      {/* BENEFITS                                                    */}
      {/* ========================================================= */}

        <section className="relative overflow-hidden bg-[#d8c38f] py-16 sm:py-20 lg:py-24">
        {/* ======================================================= */}
        {/* Background decoration                                    */}
        {/* ======================================================= */}

        <div
            className="
            pointer-events-none absolute
            -right-32 -top-32
            h-[320px] w-[320px]
            rounded-full
            bg-[#f7f0e5]/10
            blur-[80px]
            sm:h-[450px] sm:w-[450px]
            lg:-right-40 lg:-top-40
            lg:h-[600px] lg:w-[600px]
            "
        />

        <div
            className="
            pointer-events-none absolute
            -bottom-32 -left-32
            h-[250px] w-[250px]
            rounded-full
            bg-[#0c3b35]/[0.06]
            blur-[70px]
            sm:h-[350px] sm:w-[350px]
            "
        />

        {/* Right dark panel */}
        <div
            className="
            pointer-events-none absolute
            inset-y-0 right-0
            hidden w-[28%]
            bg-[#0c3b35]
            lg:block
            "
        />

        {/* ======================================================= */}
        {/* Content                                                   */}
        {/* ======================================================= */}

        <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
            <div
            className="
                grid items-center
                gap-12
                lg:grid-cols-[1.05fr_0.95fr]
                lg:gap-16
                xl:grid-cols-[1.1fr_0.9fr]
            "
            >
            {/* =================================================== */}
            {/* LEFT CONTENT                                         */}
            {/* =================================================== */}

            <div className="relative z-10">
                {/* Eyebrow */}
                <div
                className="
                    flex items-center gap-3
                    opacity-0
                    animate-[benefitFadeUp_700ms_ease-out_100ms_forwards]
                    sm:gap-4
                "
                >
                <span className="h-px w-8 bg-[#0c3b35] sm:w-10" />

                <span
                    className="
                    text-[8px] font-bold uppercase
                    tracking-[0.28em] text-[#0c3b35]
                    sm:text-[9px] sm:tracking-[0.35em]
                    "
                >
                    Exclusive Benefits
                </span>
                </div>

                {/* Heading */}
                <h2
                className="
                    mt-5
                    max-w-3xl
                    font-display
                    text-[44px]
                    leading-[0.92]
                    tracking-[-0.025em]
                    text-[#0c3b35]
                    opacity-0
                    animate-[benefitFadeUp_800ms_ease-out_250ms_forwards]
                    sm:mt-6
                    sm:text-6xl
                    md:text-7xl
                    lg:mt-7
                    lg:text-8xl
                "
                >
                Benefits Beyond
                <br />
                <span className="text-[#f7f0e5]">Compare.</span>
                </h2>

                {/* Description */}
                <p
                className="
                    mt-5
                    text-[10px]
                    font-medium
                    uppercase
                    tracking-[0.12em]
                    text-[#0c3b35]/65
                    opacity-0
                    animate-[benefitFadeUp_700ms_ease-out_400ms_forwards]
                    sm:mt-7
                    sm:text-xs
                    sm:tracking-[0.15em]
                "
                >
                Exclusive benefits worth
                </p>

                {/* Price */}
                <div
                className="
                    mt-1
                    font-display
                    text-[44px]
                    leading-none
                    text-[#0c3b35]
                    opacity-0
                    animate-[benefitPriceReveal_900ms_ease-out_500ms_forwards]
                    sm:mt-2
                    sm:text-6xl
                    md:text-7xl
                "
                >
                ₹9 Lakhs*
                </div>

                {/* Supporting line */}
                <div
                className="
                    mt-7
                    flex items-center gap-3
                    opacity-0
                    animate-[benefitFadeUp_700ms_ease-out_650ms_forwards]
                    sm:mt-9
                "
                >
                <div className="h-px w-8 bg-[#0c3b35]/30 sm:w-12" />

                <span className="text-[8px] uppercase tracking-[0.2em] text-[#0c3b35]/50">
                    Premium ownership benefits
                </span>
                </div>
            </div>

            {/* =================================================== */}
            {/* RIGHT BENEFITS GRID                                  */}
            {/* =================================================== */}

            <div className="relative z-10">
                {/* Desktop decorative frame */}
                <div
                className="
                    pointer-events-none absolute
                    -inset-4
                    hidden
                    border border-[#0c3b35]/15
                    lg:block
                "
                />

                <div
                className="
                    grid
                    grid-cols-2
                    gap-px
                    bg-[#d8c38f]/30
                    shadow-[0_20px_70px_rgba(12,59,53,0.12)]
                "
                >
                {[
                    "4 ACs",
                    "1 LED TV",
                    "1 Washing Machine",
                    "1 Hob & Chimney",
                    "4 Geysers",
                    "And More",
                ].map((item, index) => (
                    <div
                    key={item}
                    className="
                        group relative
                        min-h-[130px]
                        overflow-hidden
                        bg-[#0c3b35]
                        p-5
                        text-[#f7f0e5]
                        opacity-0
                        transition-all
                        duration-500
                        hover:bg-[#123f39]
                        animate-[benefitCardReveal_650ms_ease-out_forwards]
                        sm:min-h-[155px]
                        sm:p-7
                        lg:min-h-[175px]
                        lg:p-8
                    "
                    style={{
                        animationDelay: `${650 + index * 100}ms`,
                    }}
                    >
                    {/* Gold hover sweep */}
                    <div
                        className="
                        pointer-events-none absolute
                        -right-10 -top-10
                        h-24 w-24
                        rounded-full
                        bg-[#d8c38f]/10
                        blur-2xl
                        transition-all
                        duration-700
                        group-hover:scale-[2.5]
                        "
                    />

                    {/* Number */}
                    <span
                        className="
                        relative z-10
                        text-[8px]
                        font-medium
                        tracking-[0.15em]
                        text-[#d8c38f]/55
                        sm:text-[9px]
                        "
                    >
                        {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* Icon-like decorative mark */}
                    <div
                        className="
                        relative z-10
                        mt-5
                        flex h-8 w-8
                        items-center justify-center
                        border border-[#d8c38f]/25
                        transition-all
                        duration-500
                        group-hover:border-[#d8c38f]
                        group-hover:bg-[#d8c38f]
                        sm:mt-7
                        sm:h-10 sm:w-10
                        "
                    >
                        <span
                        className="
                            h-1.5 w-1.5
                            rounded-full
                            bg-[#d8c38f]
                            transition-all
                            duration-500
                            group-hover:scale-[2]
                            group-hover:bg-[#0c3b35]
                        "
                        />
                    </div>

                    {/* Benefit */}
                    <div
                        className="
                        relative z-10
                        mt-5
                        font-display
                        text-[22px]
                        leading-tight
                        text-[#f7f0e5]
                        transition-transform
                        duration-500
                        group-hover:translate-x-1
                        sm:mt-6
                        sm:text-2xl
                        lg:text-3xl
                        "
                    >
                        {item}
                    </div>

                    {/* Bottom line */}
                    <div
                        className="
                        absolute bottom-0 left-0
                        h-[2px] w-0
                        bg-[#d8c38f]
                        transition-all duration-500
                        group-hover:w-full
                        "
                    />
                    </div>
                ))}
                </div>
            </div>
            </div>

            {/* ======================================================= */}
            {/* DISCLAIMER                                               */}
            {/* ======================================================= */}

            <p
            className="
                relative z-10
                mt-7
                text-[7px]
                uppercase
                tracking-[0.13em]
                text-[#0c3b35]/50
                opacity-0
                animate-[benefitFadeUp_700ms_ease-out_1300ms_forwards]
                sm:mt-8
                sm:text-[8px]
                sm:tracking-[0.15em]
            "
            >
            *Terms & Conditions Apply
            </p>
        </div>
        </section>

      {/* ========================================================= */}
      {/* PRICING                                                     */}
      {/* ========================================================= */}

      <section
        id="pricing"
        className="bg-[#f7f0e5] py-24 lg:py-32"
      >
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
          <div className="text-center">
            <span className="text-[9px] font-semibold uppercase tracking-[0.35em] text-[#9d7b3f]">
              Latest Price List
            </span>

            <h2 className="mt-5 font-display text-5xl text-[#0c3b35] sm:text-6xl">
              Current BSP
            </h2>

            <p className="mt-4 text-xs uppercase tracking-[0.2em] text-[#746f64]">
              W.E.F. 25th May '26
            </p>
          </div>

          <div className="mt-14 grid gap-px bg-[#c7a96b]/30 md:grid-cols-2">
            {projectData.pricing.current.map((price) => (
              <div
                key={price.label}
                className="group bg-[#fbf7f0] p-10 text-center transition-colors hover:bg-[#0c3b35]"
              >
                <div className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#9d7b3f] group-hover:text-[#d8c38f]">
                  {price.label}
                </div>

                <div className="mt-5 font-display text-5xl text-[#0c3b35] transition-colors group-hover:text-[#f7f0e5] sm:text-6xl">
                  {price.value}
                </div>

                <div className="mx-auto mt-6 h-px w-12 bg-[#c7a96b]/40" />

                <div className="mt-5 text-[8px] uppercase tracking-[0.25em] text-[#746f64] group-hover:text-[#f7f0e5]/50">
                  Basic Sale Price
                </div>
              </div>
            ))}
          </div>

          {/* Campaign pricing */}
          <div className="mt-14 border border-[#c7a96b]/30 bg-[#fbf7f0] p-7 sm:p-9">
            <div className="flex flex-col justify-between gap-4 border-b border-[#c7a96b]/25 pb-6 sm:flex-row sm:items-end">
              <div>
                <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#9d7b3f]">
                  Brochure Campaign
                </span>

                <h3 className="mt-2 font-display text-3xl text-[#0c3b35]">
                  EOI Pricing
                </h3>
              </div>

              <span className="text-[8px] uppercase tracking-[0.2em] text-[#746f64]">
                Campaign prices — clearly distinguished from current BSP
              </span>
            </div>

            <div className="mt-7 grid gap-px bg-[#c7a96b]/20 md:grid-cols-2 xl:grid-cols-4">
              {projectData.pricing.campaign.map((item) => (
                <div
                  key={`${item.tower}-${item.label}`}
                  className="bg-white p-6"
                >
                  <div className="text-[8px] uppercase tracking-[0.2em] text-[#746f64]">
                    {item.tower}
                  </div>

                  <div className="mt-3 text-[9px] uppercase tracking-[0.2em] text-[#9d7b3f]">
                    {item.label}
                  </div>

                  <div className="mt-4 font-display text-3xl text-[#0c3b35]">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 text-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-3 border border-[#0c3b35] px-6 py-3 text-[9px] font-semibold uppercase tracking-[0.22em] text-[#0c3b35] transition hover:bg-[#0c3b35] hover:text-[#f7f0e5]"
            >
              Get Detailed Price Structure
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* PAYMENT PLAN                                                */}
      {/* ========================================================= */}

        <section className="relative overflow-hidden bg-[#0c3b35] py-20 text-[#f7f0e5] sm:py-24 lg:py-32">
        {/* Background glow */}
        <div className="pointer-events-none absolute -left-40 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[#d8c38f]/[0.05] blur-[120px]" />

        <div className="pointer-events-none absolute -right-40 top-0 h-[450px] w-[450px] rounded-full bg-[#d8c38f]/[0.06] blur-[120px]" />

        <div className="relative mx-auto max-w-[1250px] px-5 sm:px-8">
            {/* ======================================================= */}
            {/* HEADER                                                   */}
            {/* ======================================================= */}

            <div className="text-center">
            <div className="flex items-center justify-center gap-4 opacity-0 animate-[paymentFadeUp_700ms_ease-out_forwards]">
                <span className="h-px w-8 bg-[#d8c38f] sm:w-12" />

                <span className="text-[8px] font-semibold uppercase tracking-[0.3em] text-[#d8c38f] sm:text-[9px] sm:tracking-[0.35em]">
                The Great Meloddy
                </span>

                <span className="h-px w-8 bg-[#d8c38f] sm:w-12" />
            </div>

            <h2
                className="
                mt-5
                font-display
                text-[58px]
                leading-none
                tracking-[-0.03em]
                text-[#d8c38f]
                opacity-0
                animate-[paymentScaleIn_800ms_ease-out_150ms_forwards]
                sm:text-7xl
                lg:text-8xl
                "
            >
                30:70
            </h2>

            <p
                className="
                mt-4
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.3em]
                text-[#f7f0e5]/60
                opacity-0
                animate-[paymentFadeUp_700ms_ease-out_350ms_forwards]
                sm:text-[10px]
                "
            >
                Payment Plan
            </p>

            <div
                className="
                mx-auto mt-6 h-px
                w-12 bg-[#d8c38f]
                opacity-0
                animate-[paymentLineReveal_800ms_ease-out_500ms_forwards]
                "
            />
            </div>

            {/* ======================================================= */}
            {/* PAYMENT TIMELINE                                         */}
            {/* ======================================================= */}

            <div className="relative mt-16 sm:mt-20">
            {/* Desktop connecting line */}
            <div
                className="
                absolute
                left-[10%]
                right-[10%]
                top-[56px]
                hidden
                h-px
                bg-[#d8c38f]/20
                md:block
                "
            />

            {/* Animated progress line */}
            <div
                className="
                absolute
                left-[10%]
                top-[56px]
                hidden
                h-px
                w-0
                bg-[#d8c38f]
                md:block
                animate-[paymentProgress_2s_ease-out_700ms_forwards]
                "
            />

            <div className="grid gap-0 md:grid-cols-5">
                {[
                ["10%", "On Booking"],
                ["10%", "Within 45 Days"],
                ["10%", "Within 100 Days"],
                ["60%", "On CC / Deemed CC"],
                ["10%", "On Offer of Possession"],
                ].map(([value, label], index) => (
                <div
                    key={label}
                    className={`
                    group relative
                    border-[#d8c38f]/15
                    px-4 py-7
                    text-center
                    opacity-0
                    animate-[paymentCardReveal_700ms_ease-out_forwards]
                    ${
                        index !== 4
                        ? "border-b md:border-b-0 md:border-r"
                        : ""
                    }
                    sm:px-6
                    md:py-4
                    `}
                    style={{
                    animationDelay: `${650 + index * 180}ms`,
                    }}
                >
                    {/* Number */}
                    <span
                    className="
                        absolute
                        left-4 top-4
                        text-[7px]
                        tracking-[0.15em]
                        text-[#d8c38f]/35
                        sm:left-5
                    "
                    >
                    0{index + 1}
                    </span>

                    {/* Timeline node */}
                    <div
                    className="
                        relative z-10
                        mx-auto
                        flex h-[72px] w-[72px]
                        items-center justify-center
                        rounded-full
                        border border-[#d8c38f]/30
                        bg-[#0c3b35]
                        transition-all
                        duration-500
                        group-hover:border-[#d8c38f]
                        group-hover:shadow-[0_0_35px_rgba(216,195,143,0.15)]
                    "
                    >
                    <div
                        className="
                        flex h-[54px] w-[54px]
                        items-center justify-center
                        rounded-full
                        border border-[#d8c38f]/15
                        transition-all duration-500
                        group-hover:bg-[#d8c38f]
                        "
                    >
                        <span
                        className="
                            font-display
                            text-2xl
                            text-[#d8c38f]
                            transition-colors
                            duration-500
                            group-hover:text-[#171714]
                        "
                        >
                        {value}
                        </span>
                    </div>
                    </div>

                    {/* Label */}
                    <div
                    className="
                        mx-auto mt-7
                        max-w-[145px]
                        text-[8px]
                        font-semibold
                        uppercase
                        leading-5
                        tracking-[0.18em]
                        text-[#f7f0e5]/55
                        transition-colors
                        duration-500
                        group-hover:text-[#f7f0e5]
                        sm:text-[9px]
                    "
                    >
                    {label}
                    </div>

                    {/* Hover underline */}
                    <div
                    className="
                        mx-auto mt-4
                        h-px
                        w-0
                        bg-[#d8c38f]
                        transition-all
                        duration-500
                        group-hover:w-10
                    "
                    />
                </div>
                ))}
            </div>
            </div>

            {/* ======================================================= */}
            {/* PAYMENT HIGHLIGHT                                        */}
            {/* ======================================================= */}

            <div
            className="
                mx-auto mt-12
                max-w-3xl
                border-y border-[#d8c38f]/15
                py-6
                text-center
                opacity-0
                animate-[paymentFadeUp_700ms_ease-out_1500ms_forwards]
                sm:mt-16
            "
            >
            <p className="text-[8px] uppercase tracking-[0.18em] text-[#f7f0e5]/35 sm:text-[9px]">
                Payment plan valid for a limited period
            </p>

            <p className="mt-2 text-[8px] uppercase tracking-[0.15em] text-[#d8c38f]/70 sm:text-[9px]">
                *Terms & Conditions Apply
            </p>
            </div>

            {/* ======================================================= */}
            {/* CTA                                                       */}
            {/* ======================================================= */}

            <div
            className="
                mt-9
                text-center
                opacity-0
                animate-[paymentFadeUp_700ms_ease-out_1700ms_forwards]
                sm:mt-10
            "
            >
            <button
                onClick={() => setIsModalOpen(true)}
                className="
                group
                inline-flex
                items-center
                justify-center
                gap-3
                border border-[#d8c38f]/50
                px-6 py-3.5
                text-[8px]
                font-semibold
                uppercase
                tracking-[0.22em]
                text-[#d8c38f]
                transition-all
                duration-300
                hover:border-[#d8c38f]
                hover:bg-[#d8c38f]
                hover:text-[#171714]
                sm:px-7
                sm:py-4
                sm:text-[9px]
                sm:tracking-[0.25em]
                "
            >
                Get Complete Payment Plan

                <ArrowRight
                className="
                    h-3.5 w-3.5
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                "
                />
            </button>
            </div>
        </div>
        </section>

      {/* ========================================================= */}
      {/* LOCATION                                                    */}
      {/* ========================================================= */}

      <section
        id="location"
        className="bg-[#fbf7f0] py-24 lg:py-32"
      >
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
            {/* Map */}
            <div className="order-2 lg:order-1">
              <div className="relative overflow-hidden border border-[#c7a96b]/30 bg-[#0c3b35] p-3">
                <div
                  className="aspect-[4/3] bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('/acp_assets/location/location-map.webp')",
                  }}
                />

                <div className="absolute bottom-7 left-7 flex items-center gap-3 bg-[#f7f0e5] px-5 py-3">
                  <MapPin className="h-4 w-4 text-[#9d7b3f]" />

                  <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#0c3b35]">
                    Aspire Centurian Park
                  </span>
                </div>
              </div>
            </div>

            {/* Copy */}
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-4">
                <span className="h-px w-10 bg-[#9d7b3f]" />

                <span className="text-[9px] font-semibold uppercase tracking-[0.35em] text-[#9d7b3f]">
                  Location
                </span>
              </div>

              <h2 className="mt-6 font-display text-5xl leading-[0.95] text-[#0c3b35] sm:text-6xl">
                A Location
                <br />
                <span className="text-[#9d7b3f]">
                  That Connects Everything.
                </span>
              </h2>

              <div className="mt-7 flex items-center gap-3">
                <MapPin className="h-5 w-5 text-[#9d7b3f]" />

                <span className="font-display text-2xl text-[#0c3b35]">
                  Techzone-4, Greater Noida (W)
                </span>
              </div>

              <p className="mt-3 text-sm text-[#24231f]/65">
                Just 2 Kms from Gaur Chowk
              </p>

              <div className="mt-9 border-t border-[#c7a96b]/25">
                {projectData.locationAdvantages.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between border-b border-[#c7a96b]/20 py-4"
                  >
                    <span className="text-xs text-[#24231f]/65">
                      {item.label}
                    </span>

                    <span className="text-xs font-semibold text-[#0c3b35]">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setIsModalOpen(true)}
                className="mt-9 flex items-center gap-3 bg-[#0c3b35] px-7 py-4 text-[9px] font-semibold uppercase tracking-[0.25em] text-[#f7f0e5] transition hover:bg-[#171714]"
              >
                Schedule a Site Visit
                <ArrowRight className="h-4 w-4 text-[#d8c38f]" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* CONTACT / CONVERSION                                       */}
      {/* ========================================================= */}

      <section
        id="contact"
        className="relative overflow-hidden bg-[#171714] py-24 text-[#f7f0e5] lg:py-32"
      >
        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-[#0c3b35] blur-[100px]" />

        <div className="relative mx-auto max-w-[1200px] px-5 sm:px-8">
          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
            {/* Contact copy */}
            <div>
              <div className="flex items-center gap-4">
                <span className="h-px w-10 bg-[#d8c38f]" />

                <span className="text-[9px] font-semibold uppercase tracking-[0.35em] text-[#d8c38f]">
                  Enquiry
                </span>
              </div>

              <h2 className="mt-7 font-display text-5xl leading-[0.95] sm:text-6xl">
                Your Signature
                <br />
                <span className="text-[#d8c38f]">Address Awaits.</span>
              </h2>

              <p className="mt-7 max-w-md text-sm leading-7 text-[#f7f0e5]/55">
                Speak with our team for project details, pricing, payment
                plans or to schedule a private site visit.
              </p>

              <div className="mt-10 space-y-5">
                <a
                  href="tel:+91 70544 42848"
                  className="flex items-center gap-4 text-sm transition hover:text-[#d8c38f]"
                >
                  <span className="flex h-10 w-10 items-center justify-center border border-[#d8c38f]/25">
                    <Phone className="h-4 w-4 text-[#d8c38f]" />
                  </span>

                  +91 70544 42848, +91 84471 71933
                </a>

                <a
                  href="https://wa.me/+917054442848"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 text-sm transition hover:text-[#d8c38f]"
                >
                  <span className="flex h-10 w-10 items-center justify-center border border-[#d8c38f]/25">
                    <FaWhatsapp className="h-4 w-4 text-[#25D366]" />
                  </span>

                  WhatsApp
                </a>

                <div className="flex items-center gap-4 text-sm text-[#f7f0e5]/65">
                  <span className="flex h-10 w-10 items-center justify-center border border-[#d8c38f]/25">
                    <MapPin className="h-4 w-4 text-[#d8c38f]" />
                  </span>

                  Techzone-4, Greater Noida (W)
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="border border-[#d8c38f]/20 bg-[#f7f0e5]/5 p-7 backdrop-blur-md sm:p-10">
              <div className="mb-8">
                <span className="text-[8px] uppercase tracking-[0.3em] text-[#d8c38f]">
                  Request Details
                </span>

                <h3 className="mt-3 font-display text-3xl">
                  Enquire About Aspire
                </h3>
              </div>

              <form
                className="space-y-5"
                onSubmit={(event) =>
                  submitLeadForm(
                    event,
                    contactForm,
                    setContactForm,
                    setIsContactSubmitting
                  )
                }
              >
                <div className="grid gap-5 md:grid-cols-2">
                  <LuxuryInput
                    label="Full Name"
                    placeholder="Your name"
                    name="name"
                    value={contactForm.name}
                    onChange={(event) =>
                      updateLeadField(setContactForm, "name", event.target.value)
                    }
                  />

                  <LuxuryInput
                    label="Mobile Number"
                    placeholder="10-digit number"
                    name="phone"
                    value={contactForm.phone}
                    onChange={(event) =>
                      updateLeadField(
                        setContactForm,
                        "phone",
                        event.target.value.replace(/[^0-9]/g, "").slice(0, 10)
                      )
                    }
                  />
                </div>

                <LuxuryInput
                  label="Email"
                  placeholder="you@example.com"
                  type="email"
                  name="email"
                  value={contactForm.email}
                  onChange={(event) =>
                    updateLeadField(setContactForm, "email", event.target.value)
                  }
                />

                <div>
                  <label className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#f7f0e5]/55">
                    Configuration
                  </label>

                  <select
                    name="configuration"
                    value={contactForm.configuration}
                    onChange={(event) =>
                      updateLeadField(
                        setContactForm,
                        "configuration",
                        event.target.value
                      )
                    }
                    className="
                      mt-2 w-full appearance-none
                      border border-[#d8c38f]/20
                      bg-[#f7f0e5] px-4 py-3.5
                      text-sm text-[#171714]
                      outline-none
                      transition focus:border-[#d8c38f]
                    "
                  >
                    <option>3 BHK</option>
                    <option>4 BHK</option>
                    <option>Iconic Tower</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={isContactSubmitting}
                  className="
                    group mt-3 flex w-full items-center
                    justify-center gap-3
                    bg-[#d8c38f] px-6 py-4
                    text-[9px] font-bold uppercase
                    tracking-[0.25em] text-[#171714]
                    transition hover:bg-[#ead9ae]
                  "
                >
                  {isContactSubmitting ? "Submitting..." : "Get Project Details"}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>

                <p className="text-center text-[8px] leading-5 text-[#f7f0e5]/30">
                  By submitting this form, you agree to be contacted regarding
                  Aspire Centurian Park by Gaurs.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* FOOTER                                                      */}
      {/* ========================================================= */}
{/* 
      <footer className="border-t border-[#d8c38f]/15 bg-[#171714] pb-28 pt-10 text-[#f7f0e5] md:pb-10">
        <div className="mx-auto flex max-w-[1400px] flex-col justify-between gap-7 px-5 sm:px-8 lg:flex-row lg:items-center lg:px-12">
          <div>
            <div className="font-display text-3xl text-[#f7f0e5]">
              Aspire
            </div>

            <div className="mt-1 text-[8px] uppercase tracking-[0.3em] text-[#d8c38f]">
              Centurian Park by Gaurs
            </div>
          </div>

          <div className="text-[8px] uppercase tracking-[0.2em] text-[#f7f0e5]/35">
            Grand Luxury Residences · Greater Noida (W)
          </div>

          <div className="text-[8px] uppercase tracking-[0.15em] text-[#f7f0e5]/25">
            *T&C Apply
          </div>
        </div>
      </footer> */}

      {/* ========================================================= */}
      {/* MOBILE STICKY CTA                                           */}
      {/* ========================================================= */}

      <div
        className={`
          fixed inset-x-0 bottom-0 z-[90]
          border-t border-[#d8c38f]/25
          bg-[#0c3b35]/95 p-2
          backdrop-blur-xl md:hidden
          transition-transform duration-300
          ${isScrolled ? "translate-y-0" : "translate-y-0"}
        `}
      >
        <div className="grid grid-cols-3 gap-2">
          <a
            href="tel:+91 70544 42848"
            className="flex flex-col items-center justify-center gap-1 bg-[#f7f0e5] py-2.5 text-[#171714]"
          >
            <Phone className="h-3.5 w-3.5" />

            <span className="text-[7px] font-bold uppercase tracking-[0.15em]">
              Call
            </span>
          </a>

          <a
            href="https://wa.me/+917054442848"
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center justify-center gap-1 bg-[#d8c38f] py-2.5 text-[#171714]"
          >
            <FaWhatsapp className="h-3.5 w-3.5 text-[#25D366]" />

            <span className="text-[7px] font-bold uppercase tracking-[0.15em]">
              WhatsApp
            </span>
          </a>

          <button
            onClick={() => setIsModalOpen(true)}
            className="flex flex-col items-center justify-center gap-1 bg-[#171714] py-2.5 text-[#f7f0e5]"
          >
            <Sparkles className="h-3.5 w-3.5 text-[#d8c38f]" />

            <span className="text-[7px] font-bold uppercase tracking-[0.15em]">
              Enquire
            </span>
          </button>
        </div>
      </div>

      {/* ========================================================= */}
      {/* ENQUIRY MODAL                                               */}
      {/* ========================================================= */}

      {isModalOpen && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-[#071f1c]/80 p-4 backdrop-blur-md"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setIsModalOpen(false);
            }
          }}
        >
          <div className="relative w-full max-w-lg overflow-hidden bg-[#f7f0e5] p-7 shadow-[0_30px_100px_rgba(0,0,0,0.4)] sm:p-10">
            {/* Decorative */}
            <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-[#d8c38f]/20 blur-3xl" />

            <button
              onClick={() => {
                setIsModalOpen(false);
                setIsBrochureRequest(false);
              }}
              className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center border border-[#c7a96b]/30 text-[#0c3b35] transition hover:bg-[#0c3b35] hover:text-[#f7f0e5]"
              aria-label="Close enquiry form"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="relative">
              <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#9d7b3f]">
                Aspire Centurian Park
              </span>

              <h3 className="mt-4 font-display text-4xl leading-tight text-[#0c3b35] sm:text-5xl">
                {isBrochureRequest ? "Download Brochure" : "Enquire"}
                <br />
                <span className="text-[#9d7b3f]">
                  {isBrochureRequest ? "Details." : "Now."}
                </span>
              </h3>

              <p className="mt-4 max-w-md text-sm leading-6 text-[#24231f]/60">
                I am interested in Aspire Centurian Park by Gaurs. Please share
                the project details, pricing and payment plan.
              </p>

              <form
                className="mt-7 space-y-4"
                onSubmit={(event) =>
                  submitLeadForm(
                    event,
                    enquiryForm,
                    setEnquiryForm,
                    setIsEnquirySubmitting,
                    true,
                    isBrochureRequest
                  )
                }
              >
                <input
                  name="name"
                  value={enquiryForm.name}
                  onChange={(event) =>
                    updateLeadField(setEnquiryForm, "name", event.target.value)
                  }
                  className="w-full border border-[#c7a96b]/30 bg-[#f7f0e5] px-4 py-3.5 text-sm text-[#171714] outline-none transition focus:border-[#9d7b3f] autofill:bg-[#f7f0e5] autofill:text-[#171714]"
                  placeholder="Full Name"
                />

                <input
                  name="phone"
                  value={enquiryForm.phone}
                  onChange={(event) =>
                    updateLeadField(
                      setEnquiryForm,
                      "phone",
                      event.target.value.replace(/[^0-9]/g, "").slice(0, 10)
                    )
                  }
                  className="w-full border border-[#c7a96b]/30 bg-[#f7f0e5] px-4 py-3.5 text-sm text-[#171714] outline-none transition focus:border-[#9d7b3f] autofill:bg-[#f7f0e5] autofill:text-[#171714]"
                  placeholder="Mobile Number"
                />

                <input
                  type="email"
                  name="email"
                  value={enquiryForm.email}
                  onChange={(event) =>
                    updateLeadField(setEnquiryForm, "email", event.target.value)
                  }
                  className="w-full border border-[#c7a96b]/30 bg-[#f7f0e5] px-4 py-3.5 text-sm text-[#171714] outline-none transition focus:border-[#9d7b3f] autofill:bg-[#f7f0e5] autofill:text-[#171714]"
                  placeholder="Email Address"
                />

                <select
                  name="configuration"
                  value={enquiryForm.configuration}
                  onChange={(event) =>
                    updateLeadField(
                      setEnquiryForm,
                      "configuration",
                      event.target.value
                    )
                  }
                  className="w-full border border-[#c7a96b]/30 bg-[#f7f0e5] px-4 py-3.5 text-sm text-[#171714] outline-none"
                >
                  <option>3 BHK</option>
                  <option>4 BHK</option>
                  <option>Iconic Tower</option>
                </select>

                <button
                  type="submit"
                  disabled={isEnquirySubmitting}
                  className="flex w-full items-center justify-center gap-3 bg-[#0c3b35] px-6 py-4 text-[9px] font-bold uppercase tracking-[0.25em] text-[#f7f0e5] transition hover:bg-[#171714]"
                >
                  {isEnquirySubmitting ? "Submitting..." : "Submit Enquiry"}
                  <ArrowRight className="h-4 w-4 text-[#d8c38f]" />
                </button>
              </form>

              <p className="mt-5 text-center text-[7px] uppercase tracking-[0.15em] text-[#746f64]">
                *Terms & Conditions Apply
              </p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

/* ============================================================= */
/* LUXURY INPUT                                                  */
/* ============================================================= */

function LuxuryInput({
  label,
  placeholder,
  type = "text",
  name,
  value,
  onChange,
}: {
  label: string;
  placeholder: string;
  type?: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div>
      <label className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#f7f0e5]/55">
        {label}
      </label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="
          mt-2 w-full
          border border-[#d8c38f]/20
          bg-[#f7f0e5]
          px-4 py-3.5
          text-sm text-[#171714]
          outline-none
          transition
          placeholder:text-[#746f64]/60
          focus:border-[#d8c38f]
        "
      />
    </div>
  );
}