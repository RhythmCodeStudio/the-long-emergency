"use client";
//import components
import Nav from "./nav";
import ScrollingBanner from "./scrolling-banner";
//import from next
import Link from "next/link";
// import from react
import { usePathname } from "next/navigation";

export const Header = () => {
  const currentPath = usePathname();
  return (
    <header className="z-10 p-4">
      <div className="flex flex-col items-center w-full justify-center">
        {/* <h1 className={`text-4xl lg:text-6xl ${currentPath === "/" ? "hidden" : ""}`}> */}
        <h1
          className={` 
            text-outline expand-on-load text-4xl xl:text-5xl 2xl:text-6xl m-2 p-2 
          ${currentPath === "/" ? "hidden" : "hidden sm:flex"}
        `}>
          <Link href="/">
            The Long Emergency
          </Link>
        </h1>
        <Nav />
        
        <h1
          className={`text-outline mt-12 sm:hidden expand-on-load text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl ${
            currentPath === "/" ? "hidden" : ""
          }`}>
          <Link href="/">
            The Long Emergency
          </Link>
        </h1>
      </div>
      <div className="expand-on-load">
        <ScrollingBanner />
      </div>
    </header>
  );
};
