"use client";
// import from next
import Link from "next/link";
import { usePathname } from "next/navigation";
// import from react
import { useState } from "react";
// import icons
import { FiX } from "react-icons/fi";
import { FiMenu } from "react-icons/fi";
// import components
import SignOutButton from "./sign-out-button";
import MorePopover from "./more-popover";

type NavItem = {
  label: string;
  href: string;
  htmlElement: string;
  category?: string;
  onClick?: () => void;
};

interface MobileNavProps {
  navListItems: NavItem[];
  isAuthenticated: boolean;
}

export default function MobileNav({
  navListItems,
  isAuthenticated,
}: MobileNavProps) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const openMenu = () => setMenuOpen(true);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div className="absolute top-4 right-4 md:hidden">
        <button onClick={openMenu} aria-label="Open Menu">
          <FiMenu className="z-50 expand-on-load text-2xl" />
        </button>
      </div>

      {menuOpen && (
        <div className="flex flex-col fixed inset-0 bg-black z-50 justify-center items-center h-full min-h-screen bg-cover bg-center bg-no-repeat bg-[url('/images/background-images/masks-no-text-4800x3190-gaps-filled.png')]">
          <div className="flex justify-end">
            <button
              className="top-4 right-4 absolute"
              onClick={closeMenu}
              aria-label="Close Menu">
              <FiX className="text-2xl" />
            </button>
          </div>

          <nav id="mobile-nav-link-container" className="font-bold relative">
            <Link href="/">
              <h1
                className="font-emergency text-center text-2xl m-6"
                onClick={closeMenu}>
                The Long Emergency
              </h1>
            </Link>

            <ul className="text-xl">
              {navListItems.map((link) => (
                <li
                  key={link.label}
                  className={`font-bold text-center w-full py-6 ${
                    pathname === link.href ? "hidden" : ""
                  }`}>
                  {link.label === "Support" ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center justify-center"
                      onClick={closeMenu}>
                      <span>{link.label}</span>
                    </a>
                  ) : (
                    <Link href={link.href}>
                      <div
                        className="flex flex-col items-center justify-center"
                        onClick={closeMenu}>
                        <span>{link.label}</span>
                      </div>
                    </Link>
                  )}
                </li>
              ))}

              <li className="hover:scale-110 transition duration-300 ease-in-out">
                <MorePopover onAnyAction={closeMenu} anchor="top" />
              </li>

              {isAuthenticated && (
                <li className="px-8 md:px-8 lg:px-14 xl:px-20 lg:py-8 flex hover:scale-110 transition duration-300 ease-in-out">
                  <SignOutButton />
                </li>
              )}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}