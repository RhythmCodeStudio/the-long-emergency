"use client";
import Nav from "./nav";

// import from react
import { usePathname } from "next/navigation";

export const Header = () => {
  const currentPath = usePathname();
  return (
    <header className="z-10">
      <div className="flex flex-col items-center w-full justify-center pb-8 pt-12 ">
        {/* <h1 className={`text-4xl lg:text-6xl ${currentPath === "/" ? "hidden" : ""}`}> */}
        <h1 className={`text-4xl 4xl:text-6xl`}>
          The Long Emergency
        </h1>
        <Nav />
      </div>
    </header>
  );
};