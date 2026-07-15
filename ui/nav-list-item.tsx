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
}: {
  label: string;
  href: string;
  htmlElement: string;
  onClick?: () => void;
  className?: string;
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
            "flex items-center justify-center font-semibold text-white rounded-full border-2 border-transparent px-4 py-1 transition duration-200 ease-in-out shadow-white",
            isActive
              ? "pointer-events-none bg-black/80 shadow-md border-white"
              : "hover:border-white hover:shadow-lg",
          )}
          tabIndex={isActive ? -1 : 0}
          aria-disabled={isActive ? "true" : undefined}
          onClick={onClick}>
          <span className="-mb-1">
            {label}
          </span>
        </Link>
      )}
    </li>
  );
}