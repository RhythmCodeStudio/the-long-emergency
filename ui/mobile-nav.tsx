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
// import SignOutButton from "./sign-out-button";
import MorePopover from "./more-popover";
import NavListItem from "./nav-list-item";

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
  // const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const openMenu = () => setMenuOpen(true);
  const closeMenu = () => setMenuOpen(false);


  const filteredNavListItems = !isAuthenticated
    ? navListItems.filter((item) => item.label !== "Admin")
    : navListItems;

  return (
    <>
      <div className="absolute right-0 top-4 -translate-y-1/2 sm:hidden">
        <button onClick={openMenu} aria-label="Open Menu">
          <FiMenu className="z-50  text-2xl" />
        </button>
      </div>

      {menuOpen && (
        <div className="flex flex-col fixed inset-0 bg-black z-50 justify-center items-center h-full min-h-screen bg-cover bg-center bg-no-repeat bg-[url('/images/background-images/masks-no-text-4800x3190-gaps-filled.png')]">
          <div className="flex justify-end">
            <button
              className="top-4 right-4 absolute z-50"
              onClick={closeMenu}
              aria-label="Close Menu">
              <FiX className="text-2xl" />
            </button>
          </div>

          <nav
            id="mobile-nav-link-container"
            className="font-bold flex flex-col items-center justify-center bg-zinc-950/80 fixed inset-0 space-y-12"
          >
            <ul className="text-xl mx-auto space-y-12">
              <li
                className="font-emergency text-center text-2xl"
                onClick={closeMenu}>
                <Link href="/">The Long Emergency</Link>
              </li>
              {filteredNavListItems.map((item) => (
                <NavListItem
                  key={item.label}
                  label={item.label}
                  href={item.href}
                  htmlElement={item.htmlElement}
                  onClick={closeMenu}
                />
              ))}
              <li className="flex justify-center">
                <MorePopover
                  isAuthenticated={isAuthenticated}
                  onAnyAction={closeMenu}
                  anchor="top"
                />
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}
