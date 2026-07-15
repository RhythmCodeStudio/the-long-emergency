"use client";
// import from next
import Link from "next/link";
import { usePathname } from "next/navigation";
// import components
import SignOutButton from "./sign-out-button";
import MorePopover from "./more-popover";
import NavListItem from "./nav-list-item";

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
    <nav className="text-lg md:text-xl lg:text-xl">
      <ul className="w-full hidden sm:flex items-center justify-center space-x-6 lg:space-x-12 font-medium">
        {navListItems.map((link) => (
          <NavListItem
            key={link.href}
            label={link.label}
            href={link.href}
            htmlElement={link.htmlElement}
            onClick={link.onClick}
            className={link.label === activeLink ? "pointer-events-none" : ""}
          />
        ))}
        <li className="flex transition duration-300 ease-in-out">
          <MorePopover isAuthenticated={isAuthenticated} />
        </li>
      </ul>
    </nav>
  );
}
