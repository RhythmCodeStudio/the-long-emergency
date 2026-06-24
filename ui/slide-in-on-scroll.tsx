"use client";

import { useEffect, useRef, useState } from "react";

interface SlideInOnScrollProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number; // 0 to 1, how much of element must be visible
  triggerOnce?: boolean; // Only animate once
}

export default function SlideInOnScroll({
  children,
  className = "",
  threshold = 0.1,
  triggerOnce = true,
}: SlideInOnScrollProps) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce && elementRef.current) {
            observer.unobserve(elementRef.current);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold },
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [threshold, triggerOnce]);

  return (
    <div
      ref={elementRef}
      className={`${className} ${isVisible ? "animate-slide-in" : "opacity-0"}`}>
      {children}
    </div>
  );
}
