// import from next
import Image from "next/image";
// import data
import { getPage } from "../lib/data";
// import components
import BandBio from "../../components/band-bio";
// export metadata
export const metadata  = {
  title: "About",
  description: "About The Long Emergency",
};

export default async function AboutPage() {
  const aboutPageData = await getPage("about");
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-outline expand-on-load text-center text-2xl lg:text-3xl xl:text-4xl">
        {aboutPageData.page_title}
      </h2>
      <div className="pt-2 expand-on-load">
      <BandBio />
      </div>
    </div>
  );
}
