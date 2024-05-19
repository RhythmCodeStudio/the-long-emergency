import Image from 'next/image';

export const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 flex w-full  items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black  ">
    <a
      className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
      href="https://rhythmcodestudio.tech"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        src="/logos/rcs-logo.png"
        alt="Vercel Logo"
        className="dark:invert w-16 h-auto"
        width={796}
        height={816}
        priority
      />
    </a>
  </footer>
  );
}