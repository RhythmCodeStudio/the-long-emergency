"use client";
// import from next
import Link from "next/link";
import { usePathname } from "next/navigation";
// import from react
import { useState } from "react";
// import icons
import { FiX } from "react-icons/fi";
import { FiMenu } from "react-icons/fi";
import ContactLinks from "./contact-links";
import MusicLinks from "./music-links";

export default function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const openMenu = () => setMenuOpen(true);
  const closeMenu = () => setMenuOpen(false);

  const navLinks = [
    // { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Music", href: "/music" },
    { label: "Contact", href: "/contact" },
    { label: "Shows", href: "/shows" },
    // { label: "Support", href: "https://www.patreon.com/profile/creators?u=132202553" },
    // { label: "Merch", href: "/merch" },
    // { label: "Blog", href: "/blog" },
  ];

  const activeLink = navLinks.find((link) => link.href === pathname)?.label;

  return (
    <nav className="text-2xl 3xl:text-3xl flex justify-center items-center text-center text-outline">
      {/* mobile nav */}
      {menuOpen && (
        <div
          className="invert flex fixed inset-0 bg-black z-50 justify-center items-center h-full"
          style={{
            backgroundImage: "url('/images/masks-no-text-2048-rotate.png')",
            backgroundPosition: "center center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
          }}>
          <div className="flex justify-end">
            <button
              className="top-4 right-4 absolute"
              onClick={closeMenu}
              aria-label="Close Menu">
              <FiX className="text-2xl" />
            </button>
          </div>
          <div id="mobile-nav-link-container" className="font-bold relative">
            <Link href="/">
              <h1
                className="text-center text-2xl m-6"
                onClick={() => setMenuOpen(false)}>
                The Long Emergency
              </h1>
            </Link>
            <ul className="p-8 text-xl">
              {navLinks.map((link) => (
                <li
                  key={link.label}
                  className={`font-bold text-center w-full py-8 ${
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
            <ContactLinks size={20} />
            <MusicLinks size={20} />
          </div>
        </div>
      )}
      {/* desktop nav */}
      <ul
        className={`expand-on-load w-full hidden md:flex items-center justify-between mt-6 lg:mt-0`}>
        {navLinks.map((link) => (
          <li
            className={`px-8 md:px-8 lg:px-14 xl:px-20 lg:py-8 flex hover:scale-110 transition transition-transform duration-300 ease-in-out ${
              link.label === activeLink ? "hidden" : "font-mono"
            }`}
            key={link.href}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
      <div className="absolute top-4 right-4 md:hidden">
        <button onClick={openMenu} aria-label="Open Menu">
          <FiMenu className=" expand-on-load h-5 w-5" />
        </button>
      </div>
    </nav>
  );
}
