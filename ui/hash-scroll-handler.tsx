"use client";

import { useEffect } from "react";

export default function HashScrollHandler() {
  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash.slice(1);
      
      if (!hash) return;

      // Multiple RAF + timeout for better DOM readiness
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          } else {
            // If still not found, try again after a short delay
            setTimeout(() => {
              const retryElement = document.getElementById(hash);
              if (retryElement) {
                retryElement.scrollIntoView({ behavior: "smooth", block: "start" });
              }
            }, 100);
          }
        });
      });
    };

    scrollToHash();
    window.addEventListener("hashchange", scrollToHash);
    return () => window.removeEventListener("hashchange", scrollToHash);
  }, []);

  return null;
}