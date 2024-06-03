// import from next

// import from lib
import { getPage } from "./lib/data";
// import components
import BannerImage from "./components/banner-image";

export default async function Home() {
  const pageData = await getPage("home");

  return (
    <section className="flex flex-col items-center justify-content m-2 p-2">
      <div className="flex flex-col justify-center items-center">
        {/* <h2 className="hidden sm:flex text-3xl md:text-6xl lg:text-8xl font-bold text-center z-10"> */}
        <h1 className="expand-on-load text-6xl md:text-6xl lg:text-6xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl font-bold text-center">
          {pageData.page_title}
        </h1>
      </div>
    </section>
  );
}
