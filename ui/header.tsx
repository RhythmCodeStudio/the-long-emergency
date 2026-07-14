"use client";
// import components
// import DesktopNav from "./desktop-nav";
// import MobileNav from "./mobile-nav";
// // import from next
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useEffect, useState } from "react";
// // import data
// import { navListItems } from "@/lib/nav-list-items";

// type NavItem = {
//   label: string;
//   href: string;
//   htmlElement: string;
//   category?: string;
//   onClick?: () => void;
// };

// export const Header = () => {
//   const currentPath = usePathname();
//   const [isSmUp, setIsSmUp] = useState<boolean | null>(null);
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   useEffect(() => {
//     const mediaQuery = window.matchMedia("(min-width: 640px)");

//     const update = () => {
//       setIsSmUp(mediaQuery.matches);
//     };

//     update();
//     mediaQuery.addEventListener("change", update);
//     return () => mediaQuery.removeEventListener("change", update);
//   }, []);

//   useEffect(() => {
//     let mounted = true;

//     async function fetchSession() {
//       const response = await fetch("/api/session", {
//         method: "GET",
//         credentials: "same-origin",
//         cache: "no-store",
//       });
//       if (!response.ok || !mounted) return;
//       const data = await response.json();
//       setIsAuthenticated(Boolean(data?.isAuthenticated));
//     }

//     function handleAuthChanged() {
//       void fetchSession();
//     }

//     void fetchSession();
//     window.addEventListener("auth-changed", handleAuthChanged);

//     return () => {
//       mounted = false;
//       window.removeEventListener("auth-changed", handleAuthChanged);
//     };
//   }, [currentPath]); // rerun when route changes
//   const isHomePage = currentPath === "/";

//   return (
//     <header className="p-4 z-30">
//       <div className="flex flex-col items-center w-full justify-center">
//         {!isHomePage && isSmUp === true && (
//           <div className="flex flex-col items-center justify-center m-4 p-6 pb-0">
//             <h1 className="font-emergency text-outline expand-on-load text-4xl xl:text-5xl 2xl:text-6xl">
//               <Link href="/">The Long Emergency</Link>
//             </h1>
//             <h2 className="expand-on-load p-4 md:text-xl text-outline">
//               St. Louis, Missouri
//             </h2>
//           </div>
//         )}

//         {isHomePage && isSmUp === true && (
//           <div className="flex flex-col items-center justify-center m-4 p-6 pb-0">
//             <h1 className="font-emergency text-outline expand-on-load text-4xl xl:text-5xl 2xl:text-6xl">
//               <Link href="/">The Long Emergency</Link>
//             </h1>
//             <h2 className="expand-on-load p-4 md:text-xl text-outline">
//               St. Louis, Missouri
//             </h2>
//           </div>
//         )}

//         <div className="relative flex items-center w-full">
//           {!isHomePage && isSmUp === false && (
//             <h1
//               id="main-heading-most-pages"
//               className="-mt-1 font-emergency text-outline expand-on-load text-xl">
//               <Link href="/">The Long Emergency</Link>
//             </h1>
//           )}

//           {isHomePage && isSmUp === false && (
//             <div className="flex-col">
//               <h1
//                 id="main-heading-most-pages"
//                 className="-mt-1 font-emergency text-outline expand-on-load text-xl">
//                 The Long Emergency
//               </h1>
//               <h2 className="expand-on-load text-sm text-outline">
//                 St. Louis, Missouri
//               </h2>
//             </div>
//           )}

//           <div className="sm:flex sm:justify-center sm:w-full">
//             <div className="flex justify-center items-center text-center text-outline w-full">
//               <DesktopNav
//                 navListItems={navListItems as NavItem[]}
//                 isAuthenticated={isAuthenticated}
//               />
//               <MobileNav
//                 navListItems={navListItems as NavItem[]}
//                 isAuthenticated={isAuthenticated}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

import DesktopNav from "./desktop-nav";
import MobileNav from "./mobile-nav";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navListItems } from "@/lib/nav-list-items";

type NavItem = {
  label: string;
  href: string;
  htmlElement: string;
  category?: string;
  onClick?: () => void;
};

function SkeletonBox({ className }: { className?: string }) {
  return (
    <div
      className={"animate-pulse rounded bg-gray-300/30 " + (className ?? "")}
    />
  );
}

function HeaderLoading() {
  return (
    <header className="p-4 z-30">
      <div className="flex flex-col items-center w-full justify-center">
        <div className="flex flex-col items-center justify-center m-4 p-6 pb-0">
          <SkeletonBox className="h-10 w-72 xl:h-12 xl:w-xl rounded-xl" />
          <SkeletonBox className="mt-4 h-6 w-52 rounded-lg" />
        </div>
        <div className="relative flex items-center w-full">
          <div className="flex-col sm:hidden">
            <SkeletonBox className="h-6 w-44 rounded-md" />
            <SkeletonBox className="mt-2 h-4 w-32 rounded-md" />
          </div>

          <div className="sm:flex sm:justify-center sm:w-full">
            <div className="w-full hidden sm:flex items-center justify-center gap-4 md:gap-12">
              <SkeletonBox className="h-9 w-24 rounded-full" />
              <SkeletonBox className="h-9 w-24 rounded-full" />
              <SkeletonBox className="h-9 w-24 rounded-full" />
              <SkeletonBox className="h-9 w-28 rounded-full" />
              <SkeletonBox className="h-9 w-24 rounded-full" />
            </div>

            <div className="absolute right-0 top-4 -translate-y-1/2 sm:hidden">
              <SkeletonBox className="h-9 w-9 rounded-md" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
export const Header = () => {
  const currentPath = usePathname();
  const [hasHydrated, setHasHydrated] = useState(false);
  const [isSmUp, setIsSmUp] = useState<boolean | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 640px)");
    const update = () => {
      setIsSmUp(mediaQuery.matches);
    };

    update();
    setHasHydrated(true);

    mediaQuery.addEventListener("change", update);
    return () => mediaQuery.removeEventListener("change", update);
  }, []);

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
  }, [currentPath]);

  if (!hasHydrated || isSmUp === null) {
    return <HeaderLoading />;
  }

  const isHomePage = currentPath === "/";
  const showDesktopHeading = isSmUp === true;
  const showMobileHeading = isSmUp === false;

  return (
    <header className="p-4 z-30">
      <div className="flex flex-col items-center w-full justify-center">
        {showDesktopHeading && (
          <div className="flex flex-col items-center justify-center m-4 p-6 pb-0">
            <h1 className="font-emergency text-outline expand-on-load text-4xl xl:text-5xl 2xl:text-6xl">
              <Link href="/">The Long Emergency</Link>
            </h1>
            <h2 className="expand-on-load p-4 md:text-xl text-outline">
              St. Louis, Missouri
            </h2>
          </div>
        )}
        <div className="relative flex items-center w-full">
          {!isHomePage && showMobileHeading && (
            <h1
              id="main-heading-most-pages"
              className="-mt-1 font-emergency text-outline expand-on-load text-xl">
              <Link href="/">The Long Emergency</Link>
            </h1>
          )}

          {isHomePage && showMobileHeading && (
            <div className="flex-col">
              <h1
                id="main-heading-most-pages"
                className="-mt-1 font-emergency text-outline expand-on-load text-xl">
                The Long Emergency
              </h1>
              <h2 className="expand-on-load text-sm text-outline">
                St. Louis, Missouri
              </h2>
            </div>
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
