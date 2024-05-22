import Image from 'next/image';

export const Footer = () => {
  return (
    <footer className="z-10 flex w-full  justify-center mb-6">
      <a
        className="flex flex-col items-center "
        href="https://rhythmcodestudio.tech"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/logos/rcs-logo.png"
          alt="Rhythm Code Studio Logo"
          className="invert w-10 h-auto"
          width={796}
          height={816}
          priority
        />
        <span className="text-sm mt-2">Rhythm Code Studio</span>
      </a>
    </footer>
  );
}