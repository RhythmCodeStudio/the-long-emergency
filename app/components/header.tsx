import Nav from "./nav";

export const Header = () => {
  return (
    <header className="font-mono">
      <div className="flex flex-col items-center w-full justify-center border-b pb-8 pt-12 dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit">
        <span className="mb-4">The Long Emergency</span>
        <Nav />
      </div>
    </header>
  );
};