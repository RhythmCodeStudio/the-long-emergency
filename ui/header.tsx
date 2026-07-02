"use client";
//import components
import Nav from "./nav";
//import from next
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface HeaderProps {
  isAuthenticated: boolean;
}

export const Header = ({ isAuthenticated }: HeaderProps) => {
  const currentPath = usePathname();
  const [isSmUp, setIsSmUp] = useState<boolean | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 640px)");

    const update = () => {
      setIsSmUp(mediaQuery.matches);
    };

    update();
    mediaQuery.addEventListener("change", update);
    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  return (
    <header
      // className={`p-4 ${currentPath!=="/" ? "bg-[url('/images/background-images/masks-no-text-4800x3190-gaps-filled-horizontal-25per.png')] bg-no-repeat bg-cover bg-center xl:bg-none" : " "}`}
      className={`p-4 ${
        currentPath !== "/" && currentPath !== "/admin"
          ? "bg-[rgb(0,0,0,0.5)] bg-no-repeat bg-cover bg-center md:bg-transparent"
          : " "
      }`}>
      <div className="flex flex-col items-center w-full justify-center">
        {currentPath !== "/" && currentPath !== "/admin" && isSmUp === true && (
          <h1 className="font-emergency text-outline expand-on-load text-4xl xl:text-5xl 2xl:text-6xl m-2 p-2">
            <Link href="/">The Long Emergency</Link>
          </h1>
        )}

        <div className="flex items-center w-full">
          {currentPath !== "/" && isSmUp === false && (
            <h1
              id="main-heading-most-pages"
              className="font-emergency px-2 text-outline expand-on-load text-xl xs:text-2xl">
              <Link href="/">The Long Emergency</Link>
            </h1>
          )}

          <div className="sm:flex sm:justify-center sm:w-full">
            <Nav isAuthenticated={isAuthenticated} />
          </div>
        </div>
      </div>
    </header>
  );
};
