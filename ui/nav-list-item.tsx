"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { clsx } from "clsx";
import Button from "./button";

export default function NavListItem({
  label,
  href,
  htmlElement,
  onClick,
  className,
  isDesktop,
}: {
  label: string;
  href: string;
  htmlElement: string;
  onClick?: () => void;
  className?: string;
  isDesktop?: boolean;
}) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <li className={clsx("z-30", !isActive && className)}>
      {htmlElement === "button" ? (
        <Button
          label={label}
          onClick={onClick}
          className={clsx(
            "flex items-center justify-center font-semibold text-white rounded-full border-2 shadow-white shadow-md px-4 py-2 transition duration-200 ease-in-out ",
            isActive
              ? "pointer-events-none bg-black/80 shadow-white shadow-md border-white"
              : "",
          )}
          disabled={isActive}
          ariaLabel={label}
        />
      ) : (
        <Link
          href={href}
          className={clsx(
            "flex items-center justify-center gap-2 font-semibold text-white rounded-full border-2 border-transparent px-4 py-2 transition duration-200 ease-in-out shadow-white",
            isActive && isDesktop
              ? "pointer-events-none bg-black/80 shadow-md border-white"
              : "hover:border-white hover:shadow-lg",
          )}
          tabIndex={isActive && isDesktop ? -1 : 0}
          aria-disabled={isActive && isDesktop ? "true" : undefined}
          onClick={onClick}>
          <span className="text-outline leading-none translate-y-px">
            {label}
          </span>
        </Link>
      )}
    </li>
  );
}
