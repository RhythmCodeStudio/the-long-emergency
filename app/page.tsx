
// import from lib
import { getPage } from "./lib/data";


export default async function Home() {
  const pageData = await getPage("home");

  return (
    <section className="flex flex-col items-center justify-content">
      <div className="flex flex-col justify-center items-center ">
        {/* <h2 className="hidden sm:flex text-3xl md:text-6xl lg:text-8xl font-bold text-center z-10"> */}
        {/* <span className="expand-on-load text-2xl font-mono">Welcome to</span> */}
        <h1 className="expand-on-load text-4xl md:text-6xl lg:text-6xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl font-bold text-center ">
          {pageData.page_title}
        </h1>
      </div>
    </section>
  );
}
