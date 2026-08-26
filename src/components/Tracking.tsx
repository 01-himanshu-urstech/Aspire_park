"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

const Tracking = () => {
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = {
        utm_source: searchParams.get("utm_source"),
        utm_campaign: searchParams.get("utm_campaign"),
        utm_medium: searchParams.get("utm_medium"),
        gclid: searchParams.get("gclid"),
      };

      // Store in localStorage
      Object.entries(params).forEach(([key, value]) => {
        if (value) localStorage.setItem(key, value);
      });
    }
  }, [searchParams]);

  return null;
};

export default Tracking;
