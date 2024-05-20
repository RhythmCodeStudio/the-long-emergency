import Nav from "./nav";

export const Header = () => {
  return (
    <header className="z-10">
      <div className="flex flex-col items-center w-full justify-center pb-8 pt-12 ">
        <span className=" text-2xl ">The Long Emergency</span>
        <Nav />
      </div>
    </header>
  );
};