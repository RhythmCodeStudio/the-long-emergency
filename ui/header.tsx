"use client";
// import components
import DesktopNav from "./desktop-nav";
import MobileNav from "./mobile-nav";
// import from next
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
// import data
import { navListItems } from "@/lib/nav-list-items";

type NavItem = {
  label: string;
  href: string;
  htmlElement: string;
  category?: string;
  onClick?: () => void;
};

export const Header = () => {
  const currentPath = usePathname();
  const [isSmUp, setIsSmUp] = useState<boolean | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 640px)");

    const update = () => {
      setIsSmUp(mediaQuery.matches);
    };

    update();
    mediaQuery.addEventListener("change", update);
    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  // useEffect(() => {
  //   let mounted = true;

  //   async function fetchSession() {
  //     try {
  //       const response = await fetch("/api/session", {
  //         method: "GET",
  //         credentials: "same-origin",
  //         cache: "no-store",
  //       });

  //       if (!response.ok) return;
  //       const data = await response.json();

  //       if (mounted) {
  //         setIsAuthenticated(Boolean(data?.isAuthenticated));
  //       }
  //     } catch {
  //       // Keep default false on failure
  //     }
  //   }

  //   fetchSession();

  //   return () => {
  //     mounted = false;
  //   };
  // }, []);

  // ui/header.tsx
  useEffect(() => {
    let mounted = true;

    async function fetchSession() {
      const response = await fetch("/api/session", {
        method: "GET",
        credentials: "same-origin",
        cache: "no-store",
      });
      if (!response.ok || !mounted) return;
      const data = await response.json();
      setIsAuthenticated(Boolean(data?.isAuthenticated));
    }

    function handleAuthChanged() {
      void fetchSession();
    }

    void fetchSession();
    window.addEventListener("auth-changed", handleAuthChanged);

    return () => {
      mounted = false;
      window.removeEventListener("auth-changed", handleAuthChanged);
    };
  }, [currentPath]); // rerun when route changes

  return (
    <header
      className={`p-4 px-6 pb-0 `}>
        {/* ${
          currentPath !== "/" && currentPath !== "/admin"
            ? "bg-[rgb(0,0,0,0.5)] bg-no-repeat bg-cover bg-center md:bg-transparent"
            : " "
        } */}
      
      <div className="flex flex-col items-center w-full justify-center">
        {currentPath !== "/" && isSmUp === true && (
          <h1 className="font-emergency text-outline expand-on-load text-4xl xl:text-5xl 2xl:text-6xl m-2 p-2 pb-6">
            <Link href="/">The Long Emergency</Link>
          </h1>
        )}

        <div className="relative flex items-center w-full">
          {currentPath !== "/" && isSmUp === false && (
            <h1
              id="main-heading-most-pages"
              className="font-emergency text-outline expand-on-load text-xl xs:text-2xl">
              <Link href="/">The Long Emergency</Link>
            </h1>
          )}

          <div className="sm:flex sm:justify-center sm:w-full">
            <div className="flex justify-center items-center text-center text-outline w-full">
              <DesktopNav
                navListItems={navListItems as NavItem[]}
                isAuthenticated={isAuthenticated}
              />
              <MobileNav
                navListItems={navListItems as NavItem[]}
                isAuthenticated={isAuthenticated}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
