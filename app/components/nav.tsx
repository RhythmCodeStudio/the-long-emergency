"use client";
// import from react
import { useState } from "react";
import { Bars4Icon } from "@heroicons/react/24/outline";

export default function Nav() {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about"},
    { name: "Contact", path: "/contact"},
    { name: "Music", path: "/music"},
    { name: "Shows", path: "/shows"},
    { name: "Merch", path: "/merch"},
    { name: "Blog", path: "/blog"},
  ];

  

  return (
    <nav className="font-mono flex justify-between items-center p-4">
      <div className="flex space-x-12">
        {navItems.map((item) => (
          <a key={item.path} href={item.path}>
            {item.name}
          </a>
        ))}
      </div>
    </nav>
  );
}