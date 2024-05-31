"use client";
// import from next
import Link from "next/link";
import { usePathname } from "next/navigation";
// import from react
import { useState } from "react";
// import icons
import { FiX } from "react-icons/fi";
import { FiMenu } from "react-icons/fi";

export default function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const openMenu = () => setMenuOpen(true);
  const closeMenu = () => setMenuOpen(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Music", href: "/music" },
    { label: "Shows", href: "/shows" },
    { label: "Merch", href: "/merch" },
    { label: "Blog", href: "/blog" },
  ];

  const activeLink = navLinks.find((link) => link.href === pathname)?.label;

  return (
    <nav className="text-2xl flex justify-between items-center p-8">
      {/* mobile nav */}
      {/* <div className=" flex fixed inset-0 bg-black z-50 justify-center items-center h-full">
        <div className="flex justify-end">
          <button className="p-4 top-0 right-0 absolute" onClick={closeMenu} aria-label="Close Menu">
            <FiX className="text-xl" />
          </button>
        </div>
        <div id="mobile-nav-link-container"className="">
          <h1 className="text-center">The Long Emergency</h1>
          <ul className="space-y-4">
            {navLinks.map((link) => (
              <li
                key={link.label}
                className={`font-bold text-center w-full p-2 ${
                  pathname === link.href ? "hidden" : ""
                }`}>
                <Link href={link.href}>
                  <div
                    className="flex flex-col items-center justify-center"
                    onClick={() => setMenuOpen(false)}>
                    <span>{link.label}</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div> */}
      {/* desktop nav */}
      <ul className={`hidden md:flex w-full space-x-20`}>
        {navLinks.map((link) => (
          <li
            className={` hover:scale-110 transition transition-transform duration-300 ease-in-out ${
              link.label === activeLink ? "hidden" : "font-mono"
            }`}
            key={link.href}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
      <div className="p-4 absolute top-0 right-0 md:hidden">
        <button onClick={openMenu} aria-label="Open Menu">
          <FiMenu className="h-6 w-6" />
        </button>
      </div>
    </nav>
  );
};
