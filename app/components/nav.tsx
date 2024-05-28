"use client";
// import from next
import Link from 'next/link';
import { usePathname } from 'next/navigation'
// import from react
import { useState } from "react";
// import { Bars4Icon } from "@heroicons/react/24/outline";
// import { FiMenu } from "react-icons/fi";

export default function Nav() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Music", href: "/music" },
    { name: "Shows", href: "/shows" },
    { name: "Merch", href: "/merch" },
    { name: "Blog", href: "/blog" },
  ];
  const activeLink = navLinks.find((link) => link.href === pathname)?.name;
  return (
    <nav className="text-xl lg:text-2xl flex justify-between items-center p-2 lg:p-6">
      <ul
        className={`flex ${
          isMobileMenuOpen ? "" : "hidden lg:flex"
        } w-full space-x-20`}>
        {navLinks.map((link) => (
          <li 
          className={`cursor-pointer hover:text-blue-500 transition duration-300 ease-in-out ${link.name === activeLink ? 'text-3xl' : 'font-mono'}`}
          key={link.href} 
         
          >
            <Link href={link.href}>{link.name}</Link>
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-between lg:hidden w-full ">
        {/* <FiMenu className="h-6 w-6" /> */}
        <h2>Menu</h2>
      </div>
    </nav>
  );
}
