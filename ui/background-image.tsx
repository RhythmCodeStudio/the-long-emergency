// "use client";

// import { usePathname } from "next/navigation";

export default function BackgroundImage() {
  // const pathname = usePathname();
  // const isHome = pathname === "/";

  // if (!isHome) return null;

  return (
    <div
      aria-hidden="true"
      className="z-0 pointer-events-none fixed inset-0 z-0 bg-cover bg-center bg-[url('/images/background-images/768x1156.png')] xl:bg-[url('/images/background-images/masks-no-text-4800x3190-gaps-filled-horizontal.png')] "
    />
  );
}