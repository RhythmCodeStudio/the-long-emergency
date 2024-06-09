// import from next
import Image from "next/image";
// import data
import { getPage } from "../lib/data";
// import components
import BandBio from "../components/band-bio";


export default async function AboutPage() {
  const aboutPageData = await getPage("about");
  return (
    
    <div className="flex flex-col  items-center">
      <h2 className="text-center text-2xl lg:text-4xl">
        {aboutPageData.page_title}
      </h2>
      <BandBio />
      <div className="px-6 lg:p-0">
        <Image
          src="/images/kev-16-9.jpg"
          alt="Kevin Long performing with The Long Emergency"
          width={545}
          height={308}
        />
      </div>
    </div>
   
  );
}
