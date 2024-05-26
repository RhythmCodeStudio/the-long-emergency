// import from next
import Image from "next/image";
// import components
import SocialMediaLinks from "./socialMediaLinks";

export const Footer = () => {
  return (
    <footer className="z-10 flex flex-col items-center justify-center w-full mb-6">
      <SocialMediaLinks size={30} />
      <span className="text-sm m-2 p-2 text-center">
        © 2024 The Long Emergency
      </span>
      <a
        className="flex flex-col items-center justify-center text-center md:hover:transform hover:scale-110 transition-transform"
        href="https://rhythmcodestudio.tech"
        target="_blank"
        rel="noopener noreferrer">
        <span className="text-sm m-2 p-2">Website by Rhythm Code Studio</span>
        <Image
          src="/logos/rcs-mark-only-light.png"
          alt="Rhythm Code Studio Logo"
          className="invert w-8 h-auto"
          width={796}
          height={816}
          priority
        />
      </a>
    </footer>
  );
};
