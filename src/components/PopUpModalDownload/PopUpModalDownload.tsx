import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}

const PopUpModalDownload: React.FC<ModalProps> = ({ isOpen, onClose, onOpen }) => {
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

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Validate form
  const validateForm = (): boolean => {
    const errors: any = {};
    const phoneRegex = /^[0-9]{10}$/; // Regex for phone number validation

    if (!formData.phone) {
      errors.phone = "Phone number is required.";
    } else if (!phoneRegex.test(formData.phone)) {
      errors.phone = "Phone number must be a valid 10-digit number.";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0; // Return true if there are no errors
  };

  // Form submit handler
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!validateForm()) {
      setIsSubmitting(false); // Stop submitting if there are errors
      return;
    }

    try {
      // Send form data to the backend
      const response = await axios.post("/api/sendEmail", formData);
      console.log("Email sent successfully:", response.data);

      // Trigger the download of the PDF after successful form submission
      downloadPDF();

      onClose(); // Close the modal after submission
      router.push("/thank_you");
    } catch (error) {
      console.error("Error sending email:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Function to download the PDF
  const downloadPDF = () => {
    // Use window.location to trigger the download of the PDF from the server
    const pdfUrl = "/brochure.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Aspire-Centurian-Park-Brochure.pdf";
    link.click(); // Trigger the download
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex justify-center items-center mx-4 mt-4"
      onClick={onClose}
    >
      {/* Full popup yellow background */}
      <div
        className="relative bg-[#a57d40] p-6 rounded-lg shadow-lg w-full max-w-md"
        onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking inside
      >
        {/* Close Button (X) */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white hover:text-red-800"
        >
          ✕
        </button>

        <h2 className="text-xl font-bold mb-4 text-white">Fill The Form To Download Brochure</h2>
        <form onSubmit={onSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-white">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-white">
              Phone
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              placeholder="Enter Phone"
              value={formData.phone}
              onChange={(e) => {
                // Ensure that only numeric characters are allowed, and limit to 10 digits
                const newPhone = e.target.value.replace(/[^0-9]/g, "").slice(0, 10);
                setFormData((prev) => ({ ...prev, phone: newPhone }));
              }}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
            {formErrors.phone && (
              <p className="text-sm text-red-500">{formErrors.phone}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-white">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
            />
            {formErrors.email && (
              <p className="text-sm text-red-500">{formErrors.email}</p>
            )}
          </div>
          <button
            type="submit"
            className="bg-[#f7e8d5] text-black px-4 py-2 rounded-md"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PopUpModalDownload;
