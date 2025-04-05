// import from lib
import { getPage } from "./lib/data";

export default async function Home() {
  const pageData = await getPage("home");

  return (
    <section className="flex flex-col items-center justify-content">
      <div className="flex flex-col justify-center items-center">
        <h1 className="p-4 expand-on-load text-5xl md:text-6xl lg:text-6xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl font-emergency text-center text-outline">
          {pageData.page_title}
        </h1>
        {/* <h2 className="expand-on-load  p-4 md:text-xl text-outline">The Long Emergency is coming...</h2> */}
      </div>
    </section>
  );
}