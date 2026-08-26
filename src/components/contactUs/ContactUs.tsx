// "use client";

// import { useState } from "react";
// import { FaUser, FaPhone, FaEnvelope } from "react-icons/fa";

// export default function ContactUs() {
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     email: "",
//   });

//   const [errors, setErrors] = useState({
//     phone: "",
//   });

//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;

//     if (name === "phone") {
//       if (!/^\d*$/.test(value)) {
//         setErrors((prev) => ({ ...prev, phone: "Only numbers are allowed." }));
//         return;
//       }

//       if (value.length > 10) {
//         return;
//       }

//       setErrors((prev) => ({ ...prev, phone: "" }));
//     }

//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     if (formData.phone.length !== 10) {
//       setErrors((prev) => ({
//         ...prev,
//         phone: "Phone number must be exactly 10 digits.",
//       }));
//       return;
//     }

//     setLoading(true);

//     try {
//       const response = await fetch("/api/sendEmail", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       const result = await response.json();
//       console.log("Success:", result);

//       setFormData({ name: "", phone: "", email: "" });
//       setIsSubmitted(true);
//       setTimeout(() => setIsSubmitted(false), 3000);
//     } catch (error) {
//       console.error("Error:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div id="contact" className="w-full p-6 bg-white shadow-lg rounded-2xl">
//       {isSubmitted ? (
//         <div className="text-center transition-opacity duration-500 opacity-100">
//           <h2 className="text-2xl font-bold text-gray-800">
//             Thank you for contacting us!
//           </h2>
//           <p className="mt-2 text-gray-600">We will get back to you shortly.</p>
//         </div>
//       ) : (
//         <>
//           <h2 className="text-2xl font-bold mb-4 text-gray-800">Get A Quote</h2>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div className="relative">
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Enter your name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="pl-10 border rounded-lg px-4 py-2 w-full"
//               />
//               <FaUser className="absolute left-3 top-3 text-[rgb(62,117,165)]" />
//             </div>
//             <div className="relative">
//               <input
//                 type="tel"
//                 name="phone"
//                 placeholder="Enter phone number"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 className="pl-10 border rounded-lg px-4 py-2 w-full"
//                 required
//                 maxLength={10}
//               />
//               <FaPhone className="absolute left-3 top-3 text-[rgb(62,117,165)]" />
//               {errors.phone && (
//                 <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
//               )}
//             </div>
//             <div className="relative">
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Enter email address"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="pl-10 border rounded-lg px-4 py-2 w-full"
//               />
//               <FaEnvelope className="absolute left-3 top-3 text-[rgb(62,117,165)]" />
//             </div>
//             <button
//               type="submit"
//               className="w-full bg-[rgb(62,117,165)] text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300 disabled:opacity-60"
//               disabled={loading}
//             >
//               {loading ? "Submitting..." : "SUBMIT"}
//             </button>
//           </form>
//         </>
//       )}
//     </div>
//   );
// }


// "use client";

// import { useState } from "react";
// import { FaUser, FaPhone, FaEnvelope } from "react-icons/fa";

// export default function ContactUs() {
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     email: "",
//   });

//   const [errors, setErrors] = useState({
//     phone: "",
//   });

//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;

//     if (name === "phone") {
//       if (!/^\d*$/.test(value)) {
//         setErrors((prev) => ({ ...prev, phone: "Only numbers are allowed." }));
//         return;
//       }

//       if (value.length > 10) {
//         return;
//       }

//       setErrors((prev) => ({ ...prev, phone: "" }));
//     }

//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     if (formData.phone.length !== 10) {
//       setErrors((prev) => ({
//         ...prev,
//         phone: "Phone number must be exactly 10 digits.",
//       }));
//       return;
//     }

//     setLoading(true);

//     try {
//       const response = await fetch("/api/sendEmail", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       const result = await response.json();
//       console.log("Success:", result);

//       // Show success message immediately
//       setIsSubmitted(true);

//       // Reset form after showing success message
//       setTimeout(() => {
//         setFormData({ name: "", phone: "", email: "" });
//         setErrors({ phone: "" });
//         setIsSubmitted(false);
//       }, 3000);
//     } catch (error) {
//       console.error("Error:", error);
//       setLoading(false);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div id="contact" className="w-full p-6 bg-white shadow-lg rounded-2xl">
//       {isSubmitted ? (
//         <div className="text-center py-8 transition-all duration-500 ease-in-out opacity-100 animate-fade-in">
//           <div className="mb-4">
//             {/* Success Checkmark Animation */}
//             <div className="mx-auto w-16 h-16 bg-green-500 rounded-full flex items-center justify-center animate-bounce">
//               <svg
//                 className="w-10 h-10 text-white"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={3}
//                   d="M5 13l4 4L19 7"
//                 />
//               </svg>
//             </div>
//           </div>
//           <h2 className="text-2xl font-bold text-gray-800 mb-2">
//             Thank you for contacting us!
//           </h2>
//           <p className="text-gray-600">We will get back to you shortly.</p>
//         </div>
//       ) : (
//         <div className="transition-all duration-500 ease-in-out opacity-100">
//           <h2 className="text-2xl font-bold mb-4 text-gray-800">Get A Quote</h2>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div className="relative">
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Enter your name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="pl-10 border rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
//                 required
//               />
//               <FaUser className="absolute left-3 top-3 text-[rgb(62,117,165)]" />
//             </div>

//             <div className="relative">
//               <input
//                 type="tel"
//                 name="phone"
//                 placeholder="Enter phone number"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 className="pl-10 border rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
//                 required
//                 maxLength={10}
//               />
//               <FaPhone className="absolute left-3 top-3 text-[rgb(62,117,165)]" />
//               {errors.phone && (
//                 <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
//               )}
//             </div>

//             <div className="relative">
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Enter email address"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="pl-10 border rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
//                 required
//               />
//               <FaEnvelope className="absolute left-3 top-3 text-[rgb(62,117,165)]" />
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-[rgb(62,117,165)] text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed active:scale-95"
//               disabled={loading}
//             >
//               {loading ? (
//                 <span className="flex items-center justify-center gap-2">
//                   <svg
//                     className="animate-spin h-5 w-5 text-white"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                   >
//                     <circle
//                       className="opacity-25"
//                       cx="12"
//                       cy="12"
//                       r="10"
//                       stroke="currentColor"
//                       strokeWidth="4"
//                     ></circle>
//                     <path
//                       className="opacity-75"
//                       fill="currentColor"
//                       d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//                     ></path>
//                   </svg>
//                   Submitting...
//                 </span>
//               ) : (
//                 "SUBMIT"
//               )}
//             </button>
//           </form>
//         </div>
//       )}

//       {/* Add custom animations */}
//       <style jsx>{`
//         @keyframes fade-in {
//           from {
//             opacity: 0;
//             transform: translateY(10px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         .animate-fade-in {
//           animation: fade-in 0.5s ease-in-out;
//         }
//       `}</style>
//     </div>
//   );
// }


"use client";

import { useState } from "react";
import { FaUser, FaPhone, FaEnvelope } from "react-icons/fa";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [errors, setErrors] = useState({
    phone: "",
    general: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "phone") {
      if (!/^\d*$/.test(value)) {
        setErrors((prev) => ({ ...prev, phone: "Only numbers are allowed." }));
        return;
      }

      if (value.length > 10) {
        return;
      }

      setErrors((prev) => ({ ...prev, phone: "" }));
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.phone.length !== 10) {
      setErrors((prev) => ({
        ...prev,
        phone: "Phone number must be exactly 10 digits.",
      }));
      return;
    }

    setLoading(true);
    setErrors((prev) => ({ ...prev, general: "" }));

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // Check if response is OK before parsing
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Check if response has content
      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        throw new Error("Server did not return JSON");
      }

      const result = await response.json();
      console.log("Success:", result);

      if (result.success) {
        // Show success message immediately
        setIsSubmitted(true);

        // Reset form after showing success message
        setTimeout(() => {
          setFormData({ name: "", phone: "", email: "" });
          setErrors({ phone: "", general: "" });
          setIsSubmitted(false);
        }, 3000);
      } else {
        setErrors((prev) => ({
          ...prev,
          general: result.error || "Failed to submit form",
        }));
      }
    } catch (error: any) {
      console.error("Error:", error);
      setErrors((prev) => ({
        ...prev,
        general: "Failed to send your enquiry. Please try again later.",
      }));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="contact" className="w-full p-6 bg-white shadow-lg rounded-2xl">
      {isSubmitted ? (
        <div className="text-center py-8 transition-all duration-500 ease-in-out opacity-100 animate-fade-in">
          <div className="mb-4">
            <div className="mx-auto w-16 h-16 bg-green-500 rounded-full flex items-center justify-center animate-bounce">
              <svg
                className="w-10 h-10 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Thank you for contacting us!
          </h2>
          <p className="text-gray-600">We will get back to you shortly.</p>
        </div>
      ) : (
        <div className="transition-all duration-500 ease-in-out opacity-100">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Get A Quote</h2>

          {/* Show general error message */}
          {errors.general && (
            <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg">
              {errors.general}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                className="pl-10 border rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                required
              />
              <FaUser className="absolute left-3 top-3 text-[rgb(62,117,165)]" />
            </div>

            <div className="relative">
              <input
                type="tel"
                name="phone"
                placeholder="Enter phone number"
                value={formData.phone}
                onChange={handleChange}
                className="pl-10 border rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                required
                maxLength={10}
              />
              <FaPhone className="absolute left-3 top-3 text-[rgb(62,117,165)]" />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
            </div>

            <div className="relative">
              <input
                type="email"
                name="email"
                placeholder="Enter email address"
                value={formData.email}
                onChange={handleChange}
                className="pl-10 border rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                required
              />
              <FaEnvelope className="absolute left-3 top-3 text-[rgb(62,117,165)]" />
            </div>

            <button
              type="submit"
              className="w-full bg-[rgb(62,117,165)] text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed active:scale-95"
              disabled={loading}
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Submitting...
                </span>
              ) : (
                "SUBMIT"
              )}
            </button>
          </form>
        </div>
      )}

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.5s ease-in-out;
        }
      `}</style>
    </div>
  );
}
