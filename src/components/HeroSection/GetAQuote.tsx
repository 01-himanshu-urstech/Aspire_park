"use client";

import { FC, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Slider from "react-slick";
import axios from "axios";
import { FaWhatsapp, FaPhone } from "react-icons/fa";

interface FormData {
  name: string;
  phone: string;
  email: string;
}

const GetAQuote: FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [formErrors, setFormErrors] = useState<{ phone?: string }>({});
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newPhoneValue = e.target.value.replace(/[^0-9]/g, "");
    if (newPhoneValue.length > 10) {
      newPhoneValue = newPhoneValue.slice(0, 10);
    }
    setFormData((prev) => ({ ...prev, phone: newPhoneValue }));
  };

  const validateForm = (): boolean => {
    const errors: { phone?: string } = {};
    const phoneRegex = /^[0-9]{10}$/;

    if (!formData.phone) {
      errors.phone = "Phone number is required";
    } else if (!phoneRegex.test(formData.phone)) {
      errors.phone = "Invalid phone number";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");

    if (!validateForm()) {
      setIsLoading(false);
      return;
    }

    try {
      const response = await axios.post("/api/sendEmail", formData);
      if (response.status === 200) {
        setMessage("Thank you for contacting us!");
        setFormData({ name: "", phone: "", email: "" });
        router.push("/thank_you");
      }
    } catch (error) {
      setMessage("Failed to send your enquiry. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dotsClass: "slick-dots custom-dots",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 640,
        settings: {
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  const images = [
    {
      desktop: "/1.png",
      mobile: "/1.png",
    },
    {
      desktop: "/2.png",
      mobile: "/2.png",
    },
  ];

  const phoneNumber = "+919971888485";
  const defaultMessage = encodeURIComponent(
    "I am interested in Experion 151, please connect and share the details."
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  return (
    <div className="relative w-full overflow-hidden">
      {/* Image Slider - Responsive Heights */}
      <Slider
        {...sliderSettings}
        className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px]"
      >
        {images.map((img, index) => (
          <div
            key={index}
            className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] w-full relative"
          >
            {/* Mobile Image (visible on small screens only) */}
            <div className="block md:hidden w-full h-full relative">
              <Image
                src={img.mobile}
                alt={`Experion 151 Mobile Slide ${index + 1}`}
                fill
                className="object-cover object-center"
                priority={index === 0}
                sizes="100vw"
              />
            </div>

            {/* Desktop Image (visible on medium screens and above) */}
            <div className="hidden md:block w-full h-full relative">
              <Image
                src={img.desktop}
                alt={`Experion 151 Desktop Slide ${index + 1}`}
                fill
                className="object-cover object-center"
                priority={index === 0}
                sizes="100vw"
              />
            </div>
          </div>
        ))}
      </Slider>

      {/* Floating Action Buttons - Responsive Positioning */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 flex flex-col space-y-3 sm:space-y-4 z-50">
        {/* WhatsApp Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white p-2.5 sm:p-3 md:p-3.5 rounded-full shadow-lg hover:bg-green-600 active:scale-95 transition-all duration-300 flex items-center justify-center relative group"
          aria-label="Chat on WhatsApp"
        >
          {/* Ping Animation */}
          <span className="absolute inset-0 w-full h-full bg-green-300 rounded-full animate-ping opacity-75"></span>
          
          {/* Icon */}
          <FaWhatsapp className="relative text-[#25D366] z-10 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
          
          {/* Tooltip */}
          <span className="absolute right-full mr-3 px-3 py-1.5 bg-gray-900 text-white text-xs sm:text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
            Chat with us
          </span>
        </a>

        {/* Phone Call Button */}
        <a
          href="tel:+919971888485"
          className="bg-blue-500 text-white p-2.5 sm:p-3 md:p-3.5 rounded-full shadow-lg hover:bg-blue-600 active:scale-95 transition-all duration-300 flex items-center justify-center relative group"
          aria-label="Call Us"
        >
          <FaPhone className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
          
          {/* Tooltip */}
          <span className="absolute right-full mr-3 px-3 py-1.5 bg-gray-900 text-white text-xs sm:text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
            Call us now
          </span>
        </a>
      </div>

      {/* Custom Styles for Slider Dots */}
      <style jsx global>{`
        .custom-dots {
          bottom: 10px !important;
        }

        .custom-dots li button:before {
          font-size: 8px !important;
          color: white !important;
          opacity: 0.5 !important;
        }

        .custom-dots li.slick-active button:before {
          opacity: 1 !important;
          color: white !important;
        }

        @media (min-width: 640px) {
          .custom-dots {
            bottom: 20px !important;
          }
          
          .custom-dots li button:before {
            font-size: 10px !important;
          }
        }

        @media (min-width: 768px) {
          .custom-dots {
            bottom: 25px !important;
          }
          
          .custom-dots li button:before {
            font-size: 12px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default GetAQuote;
