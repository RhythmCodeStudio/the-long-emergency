"use client";
//import components
import Nav from "./nav";
// import ScrollingBanner from "./scrolling-banner";
//import from next
import Link from "next/link";
import { usePathname } from "next/navigation";


export const Header = () => {
  const currentPath = usePathname();
  return (
    <header 
      // className={`p-4 ${currentPath!=="/" ? "bg-[url('/images/background-images/masks-no-text-4800x3190-gaps-filled-horizontal-25per.png')] bg-no-repeat bg-cover bg-center xl:bg-none" : " "}`}
      className={`p-4 ${currentPath!=="/" ? "bg-[rgb(0,0,0,0.5)] bg-no-repeat bg-cover bg-center md:bg-transparent" : " "}`}
    >
      <div className="flex flex-col items-center w-full justify-center">
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
        className={`px-2 text-outline expand-on-load text-xl xs:text-2xl   ${
          currentPath === "/" ? "hidden" : "sm:hidden"
        }`}>
        <Link href="/">The Long Emergency</Link>
        </h1>
        <div className="sm:flex sm:justify-center sm:w-full">
        <Nav />
        </div>
      </div>
      </div>
      <div>
      {/* <ScrollingBanner /> */}
      </div>
    </header>
  );
};
