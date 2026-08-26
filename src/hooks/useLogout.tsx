"use client";

import { useRouter } from "next/navigation";

const useLogout = () => {
  const router = useRouter();

  const logout = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch("/api/auth/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        // Clear localStorage or any client-side token storage
        localStorage.removeItem("token");

        // Redirect to the login page
        router.push("/en/admin/login");
      } else {
        console.error("Failed to logout");
      }
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return logout;
};

export default useLogout;
