"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import {
  X,
  ArrowRight,
  Phone,
  Mail,
  User,
  Sparkles,
} from "lucide-react";
// import "react-toastify/dist/ReactToastify.css";

const POPUP_SUBMITTED_KEY = "aspire_enquiry_submitted";
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}
const PopUpModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onOpen,
}) => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasSubmittedSuccessfully, setHasSubmittedSuccessfully] =
    useState(false);

  /* ========================================================= */
  /* AUTO OPEN                                                 */
  /* ========================================================= */

  useEffect(() => {
    const hasSubmittedInSession =
      sessionStorage.getItem(POPUP_SUBMITTED_KEY) === "true";

    if (hasSubmittedInSession) {
      return;
    }

    const timer = setTimeout(() => {
      const submitted =
        sessionStorage.getItem(POPUP_SUBMITTED_KEY) === "true";

      if (!isOpen && !submitted && !hasSubmittedSuccessfully) {
        onOpen();
      }
    }, 7000);

    return () => clearTimeout(timer);
  }, [isOpen, onOpen, hasSubmittedSuccessfully]);
  /* ========================================================= */
  /* LOCK BODY SCROLL                                          */
  /* ========================================================= */

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  /* ========================================================= */
  /* HANDLE INPUT                                              */
  /* ========================================================= */

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setFormErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  /* ========================================================= */
  /* VALIDATION                                                */
  /* ========================================================= */

  const validateForm = (): boolean => {
    const errors: {
      name?: string;
      phone?: string;
      email?: string;
    } = {};

    const phoneRegex = /^[0-9]{10}$/;

    if (!formData.name.trim()) {
      errors.name = "Please enter your name.";
    }

    if (!formData.phone) {
      errors.phone = "Phone number is required.";
    } else if (!phoneRegex.test(formData.phone)) {
      errors.phone = "Enter a valid 10-digit phone number.";
    }

    if (
      formData.email &&
      !/\S+@\S+\.\S+/.test(formData.email)
    ) {
      errors.email = "Enter a valid email address.";
    }

    setFormErrors({
      name: errors.name || "",
      phone: errors.phone || "",
      email: errors.email || "",
    });

    return Object.keys(errors).length === 0;
  };

  /* ========================================================= */
  /* SUBMIT                                                    */
  /* ========================================================= */

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await axios.post(
        "/api/sendEmail",
        formData
      );

      console.log(
        "Email sent successfully:",
        response.data
      );

      toast.success(
        "Thank you. Our team will contact you shortly."
      );

      setFormData({
        name: "",
        phone: "",
        email: "",
      });

      setHasSubmittedSuccessfully(true);

      // Remember successful enquiry for this browser session
      sessionStorage.setItem(POPUP_SUBMITTED_KEY, "true");

      onClose();
      router.push("/thank_you");
    } catch (error) {
      console.error("Error sending email:", error);

      toast.error(
        "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <ToastContainer
        position="top-center"
        // autoClose={3000}
        hideProgressBar
        theme="dark"
      />

      {/* ===================================================== */}
      {/* BACKDROP                                              */}
      {/* ===================================================== */}

      <div
        className="
        fixed
        inset-0
        z-[100]
        flex
        items-center
        justify-center
        overflow-y-auto
        bg-[#071f1c]/80
        px-3
        py-4
        sm:px-5
        sm:py-6
        backdrop-blur-md
      "
      >
        {/* =================================================== */}
        {/* MODAL                                               */}
        {/* =================================================== */}

        <div
          className="
            relative
            w-full
            max-w-[460px]
            border
            border-[#d8c38f]/35
            bg-[#0c3b35]
            text-[#f7f0e5]
            shadow-[0_25px_80px_rgba(0,0,0,0.55)]
            animate-[modalScaleIn_400ms_ease-out]
          "
        >
          {/*============================================ */}
          {/* DECORATIVE GLOW                                   */}
          {/* ================================================= */}

          <div
            className="
              pointer-events-none
              absolute
              -right-24
              -top-24
              h-56
              w-56
              rounded-full
              bg-[#d8c38f]/10
              blur-[70px]
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              -bottom-28
              -left-20
              h-52
              w-52
              rounded-full
              bg-[#d8c38f]/5
              blur-[60px]
            "
          />

          {/* ================================================= */}
          {/* TOP GOLD LINE                                     */}
          {/* ================================================= */}

          <div className="h-1 w-full bg-[#d8c38f]" />

          {/* ================================================= */}
          {/* CLOSE BUTTON                                      */}
          {/* ================================================= */}

          <button
            type="button"
            onClick={onClose}
            aria-label="Close enquiry form"
            className="
              absolute
              right-4
              top-4
              z-20
              flex
              h-8
              w-8
              items-center
              justify-center
              border
              border-[#d8c38f]/30
              bg-[#071f1c]/60
              text-[#d8c38f]
              transition-all
              duration-300
              hover:border-[#d8c38f]
              hover:bg-[#d8c38f]
              hover:text-[#171714]
              sm:right-5
              sm:top-5
            "
          >
            <X
              className="h-4 w-4"
              strokeWidth={1.5}
            />
          </button>

          {/* ================================================= */}
          {/* CONTENT                                           */}
          {/* ================================================= */}

          <div
            className="
              relative
              px-5
              pt-4
              pb-2
              sm:px-7
              sm:pt-5
              sm:pb-2
              md:px-8
            "
          >
            {/* ================================================= */}
            {/* EYEBROW                                           */}
            {/* ================================================= */}

            <div className="flex items-center gap-3 pr-10">
              <span className="h-px w-7 bg-[#d8c38f]" />

              <span
                className="
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.3em]
                  text-[#d8c38f]
                  sm:text-[10px]
                "
              >
                Aspire Centurian Park
              </span>

              <span className="h-px flex-1 bg-[#d8c38f]/20" />
            </div>

            {/* ================================================= */}
            {/* HEADING                                           */}
            {/* ================================================= */}

            <h2
              className="
                mt-4
                max-w-md
                font-display
                text-[32px]
                leading-[0.95]
                text-[#f7f0e5]
                sm:mt-5
                sm:text-[40px]
                md:text-[44px]
              "
            >
              Your Dream Home &
              <br />
              <span className="text-[#d8c38f]">
                Investment Awaits.
              </span>
            </h2>

            <p
              className="
                mt-3
                max-w-lg
                text-[13px]
                leading-5
                text-[#f7f0e5]/60
                sm:mt-4
                sm:text-sm
                sm:leading-6
              "
            >
              Register your interest for the ultra-luxury
              3 & 4 BHK residences at Aspire Centurian Park,
              Greater Noida (W).
            </p>

            {/* ================================================= */}
            {/* OFFER STRIP                                       */}
            {/* ================================================= */}

            {/* <div
              className="
                mt-4
                flex
                items-center
                gap-3
                border-y
                border-[#d8c38f]/20
                py-3
                sm:mt-5
                sm:py-3.5
              "
            >
              <Sparkles
                className="
                  h-4
                  w-4
                  shrink-0
                  text-[#d8c38f]
                "
                strokeWidth={1.3}
              />

              <div>
                <p
                  className="
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    text-[#d8c38f]
                    sm:text-[10px]
                  "
                >
                  Exclusive Opportunity
                </p>

                <p
                  className="
                    mt-0.5
                    text-[12px]
                    text-[#f7f0e5]/70
                    sm:text-[13px]
                  "
                >
                  30:70 Payment Plan · Starting ₹2.57 Cr*
                </p>
              </div>
            </div> */}

            {/* ================================================= */}
            {/* FORM                                              */}
            {/* ================================================= */}

            <form
              onSubmit={onSubmit}
              className="
                mt-5
                space-y-3.5
                sm:mt-6
                sm:space-y-4
              "
            >
              {/* ================================================= */}
              {/* NAME                                               */}
              {/* ================================================= */}

              <div>
                <label
                  htmlFor="name"
                  className="
                    mb-1.5
                    block
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.2em]
                    text-[#d8c38f]
                    sm:text-[10px]
                  "
                >
                  Full Name
                </label>

                <div className="relative">
                  <User
                    className="
                      absolute
                      left-3.5
                      top-1/2
                      h-4
                      w-4
                      -translate-y-1/2
                      text-[#d8c38f]/60
                    "
                    strokeWidth={1.5}
                  />

                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    className="
                      h-11
                      w-full
                      border
                      border-[#d8c38f]/20
                      bg-[#071f1c]/60
                      pl-10
                      pr-4
                      text-[14px]
                      text-[#f7f0e5]
                      outline-none
                      placeholder:text-[#f7f0e5]/30
                      transition-all
                      duration-300
                      focus:border-[#d8c38f]
                      focus:bg-[#071f1c]/80
                      sm:h-12
                      sm:text-[15px]
                    "
                  />
                </div>

                {formErrors.name && (
                  <p className="mt-1 text-[10px] text-red-300">
                    {formErrors.name}
                  </p>
                )}
              </div>

              {/* ================================================= */}
              {/* PHONE                                              */}
              {/* ================================================= */}

              <div>
                <label
                  htmlFor="phone"
                  className="
                    mb-1.5
                    block
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.2em]
                    text-[#d8c38f]
                    sm:text-[10px]
                  "
                >
                  Phone Number
                </label>

                <div className="relative">
                  <Phone
                    className="
                      absolute
                      left-3.5
                      top-1/2
                      h-4
                      w-4
                      -translate-y-1/2
                      text-[#d8c38f]/60
                    "
                    strokeWidth={1.5}
                  />

                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    inputMode="numeric"
                    placeholder="10-digit mobile number"
                    value={formData.phone}
                    onChange={(e) => {
                      const newPhone =
                        e.target.value
                          .replace(/[^0-9]/g, "")
                          .slice(0, 10);

                      setFormData((prev) => ({
                        ...prev,
                        phone: newPhone,
                      }));

                      setFormErrors((prev) => ({
                        ...prev,
                        phone: "",
                      }));
                    }}
                    className="
                      h-11
                      w-full
                      border
                      border-[#d8c38f]/20
                      bg-[#071f1c]/60
                      pl-10
                      pr-4
                      text-[14px]
                      text-[#f7f0e5]
                      outline-none
                      placeholder:text-[#f7f0e5]/30
                      transition-all
                      duration-300
                      focus:border-[#d8c38f]
                      focus:bg-[#071f1c]/80
                      sm:h-12
                      sm:text-[15px]
                    "
                  />
                </div>

                {formErrors.phone && (
                  <p className="mt-1 text-[10px] text-red-300">
                    {formErrors.phone}
                  </p>
                )}
              </div>

              {/* ================================================= */}
              {/* EMAIL                                              */}
              {/* ================================================= */}

              <div>
                <label
                  htmlFor="email"
                  className="
                    mb-1.5
                    block
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.2em]
                    text-[#d8c38f]
                    sm:text-[10px]
                  "
                >
                  Email Address

                  <span className="ml-2 text-[#f7f0e5]/35">
                    Optional
                  </span>
                </label>

                <div className="relative">
                  <Mail
                    className="
                      absolute
                      left-3.5
                      top-1/2
                      h-4
                      w-4
                      -translate-y-1/2
                      text-[#d8c38f]/60
                    "
                    strokeWidth={1.5}
                  />

                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    className="
                      h-11
                      w-full
                      border
                      border-[#d8c38f]/20
                      bg-[#071f1c]/60
                      pl-10
                      pr-4
                      text-[14px]
                      text-[#f7f0e5]
                      outline-none
                      placeholder:text-[#f7f0e5]/30
                      transition-all
                      duration-300
                      focus:border-[#d8c38f]
                      focus:bg-[#071f1c]/80
                      sm:h-12
                      sm:text-[15px]
                    "
                  />
                </div>

                {formErrors.email && (
                  <p className="mt-1 text-[10px] text-red-300">
                    {formErrors.email}
                  </p>
                )}
              </div>

              {/* ================================================= */}
              {/* SUBMIT BUTTON                                      */}
              {/* ================================================= */}

              <button
                type="submit"
                disabled={isSubmitting}
                className="
                  group
                  relative
                  mt-1
                  flex
                  h-11
                  w-full
                  items-center
                  justify-center
                  gap-3
                  overflow-hidden
                  bg-[#d8c38f]
                  px-5
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.22em]
                  text-[#171714]
                  transition-all
                  duration-300
                  disabled:cursor-not-allowed
                  disabled:opacity-60
                  sm:h-12
                  sm:text-[11px]
                "
              >
                <span className="relative z-10">
                  {isSubmitting
                    ? "Submitting..."
                    : "Request a Callback"}
                </span>

                {!isSubmitting && (
                  <ArrowRight
                    className="
                      relative
                      z-10
                      h-4
                      w-4
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
            {/* DISCLAIMER                                        */}
            {/* ================================================= */}

            <p
              className="
                mt-3
                text-center
                text-[8px]
                leading-4
                tracking-[0.08em]
                text-[#f7f0e5]/30
                sm:text-[9px]
                sm:leading-4
              "
            >
              By submitting this form, you agree to be contacted
              regarding Aspire Centurian Park.
              <br />
              *Terms & Conditions Apply.
            </p>
          </div>

          {/* ================================================= */}
          {/* BOTTOM BRAND STRIP                                */}
          {/* ================================================= */}

          <div
            className="
              border-t
              border-[#d8c38f]/15
              bg-[#071f1c]/50
              px-5
              py-2.5
              text-center
              sm:px-8
              sm:py-3
            "
          >
            <span
              className="
                text-[8px]
                font-semibold
                uppercase
                tracking-[0.22em]
                text-[#d8c38f]/60
                sm:text-[9px]
              "
            >
              Aspire Centurian Park · Greater Noida (W)
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopUpModal;