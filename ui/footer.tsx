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
      className={
        currentPath === "/"
          ? " p-4 hidden  flex-col items-center justify-center"
          : " p-4 flex flex-col items-center justify-center"
      }>
      <div className="flex flex-col items-center justify-center">
        <p className="text-sm flex items-center justify-center text-center text-outline">
          <span className="text-lg">©</span> 2026
        </p>
        <a
          className="flex flex-col items-center justify-center text-center"
          href="https://rhythmcodestudio.tech"
          target="_blank"
          rel="noopener noreferrer">
          <span className="text-sm text-outline">
            Website by Rhythm Code Studio LLC
          </span>
        </a>
      </div>
    </footer>
  );
};

{
  /* <div className="flex flex-col items-center justify-center">
        <div>
          <ContactLinks size={18} />
        </div>
      </div> */
}
