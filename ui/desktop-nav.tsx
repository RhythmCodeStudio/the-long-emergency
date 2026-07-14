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
    <nav className="text-lg md:text-xl lg:text-2xl">
      <ul className="expand-on-load w-full hidden sm:flex items-center justify-center space-x-6 md:space-12 lg:space-x-12  font-medium">
        {navListItems.map((link) => (
          // <li
          //   className={`text-lg md:text-xl lg:text-2xl inline-flex justify-center items-center px-3 py-1 border-2 border-transparent rounded-full hover:border-white ${
          //     link.label === activeLink
          //       ? "bg-black/80 shadow-white shadow-md border-white pointer-events-none"
          //       : ""
          //   }`}
          //   key={link.href}>
          //   <Link href={link.href} className="flex items-center">
          //     {link.label}
          //   </Link>
          // </li>
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
