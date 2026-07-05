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
      <ul className="expand-on-load w-full hidden sm:flex items-center justify-center space-x-6 lg:space-x-12 text-lg lg:text-xl 3xl:text-2xl font-medium">
        {navListItems.map((link) => (
          <li
            className={`inline-flex justify-center px-3 py-1 border-2 border-transparent rounded-full hover:border-white ${
              link.label === activeLink ? "bg-black/80 shadow-white shadow-md  border-white pointer-events-none" : ""
            }`}
            key={link.href}>
            {link.label === "Support" ? (
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center">
                <span className="-mb-1">{link.label}</span>
              </a>
            ) : (
              <Link href={link.href} className="-mb-1">{link.label}</Link>
            )}
          </li>
        ))}
        <li className="flex transition duration-300 ease-in-out">
          <MorePopover isAuthenticated={isAuthenticated} />
        </li>
        {/* {isAuthenticated && (
          <li className="flex transition duration-300 ease-in-out">
            <SignOutButton />
          </li>
        )} */}
      </ul>
    </nav>
  );
}
