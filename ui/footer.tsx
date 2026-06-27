"use client";
// import from next
// import Image from "next/image";
import { usePathname } from "next/navigation";
// import components
import ContactLinks from "./contact-links";
// import MusicLinks from "./music-links";

export const Footer = () => {
  const currentPath = usePathname();
  return (
    <footer
      className={`flex flex-col space-y-2 items-center justify-center w-full pt-2 pb-1 ${
        currentPath !== "/" ? "bg-[rgba(0,0,0,0.5)] md:bg-transparent" : " "
      }`}>
      <div className="expand-on-load">
        <div className={`block sm:hidden`}>
          <ContactLinks size={18} />
        </div>
        <div className={`hidden sm:block lg:hidden`}>
          <ContactLinks size={22} />
        </div>
        <div className={`hidden lg:block`}>
          <ContactLinks size={28} />
        </div>
      </div>
      <p className="expand-on-load text-sm text-center text-outline pt-1">
        <span className="">©</span> 2026
      </p>
      <a
        className="flex flex-col items-center justify-center text-center "
        href="https://rhythmcodestudio.tech"
        target="_blank"
        rel="noopener noreferrer">
        <span className="expand-on-load text-sm text-outline">
          Website by Rhythm Code Studio LLC
        </span>
      </a>
    </footer>
  );
};
