"use client";

import { useState, useEffect } from "react";
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";

export default function ScrollToTopButton() {
  const [scrollToTopButtonVisible, setScrollToTopButtonVisible] = useState<boolean>(false);
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const toggleButtonVisibility = () => {
      const shouldShowButton = window.scrollY > 300;
      setScrollToTopButtonVisible(shouldShowButton);

      if (shouldShowButton && !isHovering) {
        if (timeoutId) clearTimeout(timeoutId);
        const newTimeoutId = setTimeout(() => {
          if (!isHovering) {
            setScrollToTopButtonVisible(false);
          }
        }, 2000);
        setTimeoutId(newTimeoutId);
      }
    };

    window.addEventListener("scroll", toggleButtonVisibility);

    return () => {
      window.removeEventListener("scroll", toggleButtonVisibility);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [timeoutId, isHovering]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    // Reset the visibility state after a delay to accommodate smooth scroll
    setTimeout(() => {
      // This assumes smooth scroll takes less than 500ms. Adjust as needed.
      if (window.scrollY <= 300) {
        setScrollToTopButtonVisible(false);
        if (timeoutId) clearTimeout(timeoutId);
      }
    }, 500);
  };

  return (
    <div className="flex ml-auto z-50 text-outline">
      <button
        aria-label="scroll to top button"
        name="scroll to top button"
        className={`z-80 text-black hover:text-white bg-slate-500 scroll-to-top-button fixed bottom-4 right-4 rounded-full bg-black p-2 w-12 hover:bg-slate-800 hover:transform hover:scale-110 transition-all duration-300 ease-in-out ${
          scrollToTopButtonVisible ? "opacity-85" : "opacity-0 pointer-events-none"
        }`}
        onClick={scrollToTop}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <MdOutlineKeyboardDoubleArrowUp size={24} className="h-8 w-8 text-outline" />
      </button>
    </div>
  );
}