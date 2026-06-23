"use client";
// import from vercel
import { track } from "@vercel/analytics";
import React from "react";

export default function IconLink({ href, icon, label, name, title }: { href: string, icon: React.ReactElement, label: string, name: string, title: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} title={title} onClick={() => {
      track(`${name} clicked`);
    }}>
      {icon}
    </a>
  );
}