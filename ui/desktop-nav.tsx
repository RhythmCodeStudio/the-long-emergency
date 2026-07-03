"use client";
// import from next
import Link from "next/link";
import { usePathname } from "next/navigation";
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

interface DesktopNavProps {
  navListItems: NavItem[];
  isAuthenticated: boolean;
}

export default function DesktopNav({
  navListItems,
  isAuthenticated,
}: DesktopNavProps) {
  const pathname = usePathname();
  const activeLink = navListItems.find((link) => link.href === pathname)?.label;

  return (
    <nav className="my-6">
      <ul className="expand-on-load w-full hidden md:flex items-center justify-center space-x-12 xl:space-x-18 text-lg xl:text-xl">
        {navListItems.map((link) => (
          <li
            className={`flex hover:scale-110 transition duration-300 ease-in-out ${
              link.label === activeLink ? "hidden" : ""
            }`}
            key={link.href}>
            {link.label === "Support" ? (
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center">
                <span>{link.label}</span>
              </a>
            ) : (
              <Link href={link.href}>{link.label}</Link>
            )}
          </li>
        ))}
        <li className="flex hover:scale-110 transition duration-300 ease-in-out">
          <MorePopover />
        </li>
        {isAuthenticated && (
          <li className="px-8 flex hover:scale-110 transition duration-300 ease-in-out">
            <SignOutButton />
          </li>
        )}
      </ul>
    </nav>
  );
}
