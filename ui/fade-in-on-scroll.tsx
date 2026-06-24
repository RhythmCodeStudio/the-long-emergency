"use client";
import { useEffect, useRef, useState, ReactNode, JSX } from "react";

interface FadeInOnScrollProps {
  children: ReactNode;
  className?: string;
  triggerOnce?: boolean;
  durationClass?: string;
}

export default function FadeInOnScroll({
  children,
  className = "",
  triggerOnce = true,
  durationClass = "duration-2000",
}: FadeInOnScrollProps): JSX.Element {
  const [isVisible, setIsVisible] = useState<boolean>(false);
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
      {
        threshold: 0.1,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [triggerOnce]);

  return (
    <div
      ref={elementRef}
      className={`w-full flex flex-col items-center ${className} ${
        isVisible ? `animate-in fade-in  ${durationClass}` : "opacity-0"
      }`}>
      {children}
    </div>
  );
}
