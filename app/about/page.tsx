// import from next
import Image from "next/image";
// import data
import { getPage } from "../lib/data";
// import components
import BandBio from "../components/band-bio";
// export metadata
export const metadata  = {
  title: "About",
  description: "About The Long Emergency",
};


export default async function AboutPage() {
  const aboutPageData = await getPage("about");
  return (
    <div className="flex flex-col items-center">
      <h2 className="expand-on-load text-center text-2xl lg:text-4xl">
        {aboutPageData.page_title}
      </h2>
      <div className="expand-on-load pt-6 xl:px-36 2xl:px-52 3xl:px-96">
      <BandBio />
      </div>
      
    </div>
  );
}
