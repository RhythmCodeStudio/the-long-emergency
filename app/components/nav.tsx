"use client";
// import from react
import { useState } from "react";
import { Bars4Icon } from "@heroicons/react/24/outline";

export default function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Music", href: "/music" },
    { name: "Shows", href: "/shows" },
    { name: "Merch", href: "/merch" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <nav className="text-xl flex justify-between items-center p-2 lg:p-6">
      <div
        className={`flex ${
          isMobileMenuOpen ? "" : "hidden lg:flex"
        } font-mono w-full space-x-20`}>
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.name}
          </a>
        ))}
      </div>
      <div className="flex items-center justify-between lg:hidden w-full ">
        {/* <span className="text-2xl">The Long Emergency</span> */}
        <Bars4Icon className="h-6 w-6" />
      </div>
    </nav>
  );
}
