"use client";
// import from next
import Image from "./image";
import { usePathname } from "next/navigation";
// import components
import ContactLinks from "./contact-links";
import MusicLinks from "./music-links";

export const Footer = () => {
  const currentPath = usePathname();
  return (
    <footer 
      // className=" flex flex-col items-center justify-center w-full mb-4" 

      // className={`flex flex-col items-center justify-center w-full ${currentPath!=="/" ? "bg-[url('/images/background-images/masks-no-text-4800x3190-gaps-filled-horizontal-25per.png')] bg-no-repeat bg-cover bg-bottom xl:bg-none" : " "}`}
      className={`flex flex-col items-center justify-center w-full ${currentPath!=="/" ? "bg-[rgba(0,0,0,0.5)] md:bg-transparent" : " "}`}
     
    >
      <div className="m-2 expand-on-load">
        <div className={`block sm:hidden`}>
          <ContactLinks size={18} />
        </div>
        <div className={`hidden sm:block lg:hidden`}>
          <ContactLinks size={22} />
        </div>
        <div className={`hidden lg:block`}>
          <ContactLinks size={28} />
        </div>
        <div className={`block sm:hidden`}>
          <MusicLinks size={18} />
        </div>
        <div className={`hidden sm:block lg:hidden`}>
          <MusicLinks size={22} />
        </div>
        <div className={`hidden lg:block`}>
          <MusicLinks size={28} />
        </div>
      </div>
      <span className="expand-on-load text-sm p-2 text-center text-outline">
        <span className="font-mono">©</span> 2024 The Long Emergency
      </span>
      <a
        className="flex flex-col items-center justify-center text-center "
        href="https://rhythmcodestudio.tech"
        target="_blank"
        rel="noopener noreferrer">
        <span className="expand-on-load text-sm p-2 text-outline font-mono ">
          Website by Rhythm Code Studio LLC
        </span>
        <Image
          src="/logos/rcs-mark-only-light.png"
          alt="Rhythm Code Studio Logo"
          className="expand-on-load w-8 h-auto mb-2 invert md:hover:transform hover:scale-110 transition-transform"
          width={796}
          height={816}
        />
      </a>
    </footer>
  );
};
