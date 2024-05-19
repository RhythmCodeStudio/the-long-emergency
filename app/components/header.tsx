import Nav from "./nav";

export const Header = () => {
  return (
    <header >
      <div className="flex flex-col items-center w-full justify-center border-b pb-8 pt-12 ">
        <span className="mb-4 text-2xl">The Long Emergency</span>
        <Nav />
      </div>
    </header>
  );
};