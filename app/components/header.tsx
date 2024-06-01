"use client";
import Nav from "./nav";

// import from react
import { usePathname } from "next/navigation";

export const Header = () => {
  const currentPath = usePathname();
  return (
    <header className="z-10 p-4">
      <div className="flex flex-col items-center w-full justify-center">
        {/* <h1 className={`text-4xl lg:text-6xl ${currentPath === "/" ? "hidden" : ""}`}> */}
        <h1 className={` expand-on-load text-3xl 4xl:text-6xl m-2 ${currentPath === "/" ? "hidden" : "hidden sm:flex"}`}>
          The Long Emergency
        </h1>
        <Nav />
        <h1 className={`sm:hidden expand-on-load text-3xl 4xl:text-6xl m-2  ${currentPath === "/" ? "hidden" : ""}`}>
          The Long Emergency
        </h1>
      </div>
    </header>
  );
};