// import from next
import Link from "next/link";
import Image from "next/image";
// import from lib
import { getPage } from "./lib/data";
// import components
import BannerImage from "./components/banner-image";

export default async function Home() {
  const pageData = await getPage("home");

  return (
    <section className="flex flex-col items-center justify-content m-2 p-2">
      <div className="flex flex-col justify-center items-center">
        {/* pageData.h1 needs to be pageData.page_title after re-seeding */}
        <h2 className="text-3xl md:text-6xl lg:text-8xl font-bold text-center z-10">
          {pageData.h1}
        </h2>
      </div>
    </section>
  );
}
