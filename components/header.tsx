"use client";
//import components
import Nav from "./nav";
import ScrollingBanner from "./scrolling-banner";
import ContactLinks from "./contact-links";
//import from next
import Link from "next/link";
// import from react
import { usePathname } from "next/navigation";
import MusicLinks from "./music-links";

export const Header = () => {
  const currentPath = usePathname();
  return (
    <header className="p-4">
      <div className="flex flex-col items-center w-full justify-center">
        {/* <h1 className={`text-4xl lg:text-6xl ${currentPath === "/" ? "hidden" : ""}`}> */}
        <h1
          className={` 
            text-outline expand-on-load text-4xl xl:text-5xl 2xl:text-6xl m-2 p-2 
          ${currentPath === "/" ? "hidden" : "hidden sm:flex"}
        `}>
          <Link href="/">The Long Emergency</Link>
        </h1>
        <div className="flex items-center w-full">
          <h1
            id="main-heading-most-pages"
            className={`px-2 text-outline expand-on-load text-xl md:text-3xl xl:text-4xl 2xl:text-5xl ${
              currentPath === "/" ? "hidden" : "sm:hidden"
            }`}>
            <Link href="/">The Long Emergency</Link>
          </h1>
          <div className="sm:flex sm:justify-center sm:w-full">
            <Nav />
          </div>
        </div>
      </div>
      <div className={`${currentPath === "/" ? "hidden" : ""}`}>
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
      <div>
        <ScrollingBanner />
      </div>
    </header>
  );
};
