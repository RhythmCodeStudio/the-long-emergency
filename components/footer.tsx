// import from next
import Image from "next/image";
// import components
import ContactLinks from "./contact-links";

export const Footer = () => {
  return (
    <footer className=" flex flex-col items-center justify-center w-full mb-4">
      <div className="m-2 expand-on-load">
        <ContactLinks size={30} />
      </div>
      <span className="expand-on-load text-sm p-2 text-center text-outline">
        <span className="font-mono">©</span> 2024 The Long Emergency
      </span>
      <a
        className="flex flex-col items-center justify-center text-center md:hover:transform hover:scale-110 transition-transform"
        href="https://rhythmcodestudio.tech"
        target="_blank"
        rel="noopener noreferrer">
        <span className="expand-on-load text-sm p-2 text-outline">Website by Rhythm Code Studio LLC</span>
        <Image
          src="/logos/rcs-mark-only-light-outline-6.png"
          alt="Rhythm Code Studio Logo"
          className="expand-on-load w-8 h-auto"
          width={796}
          height={816}
        />
      </a>
    </footer>
  );
};
