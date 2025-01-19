// import from next
import Image from "../../components/image";
// import data
import { getPage } from "../lib/data";
import ShowDisplay from "@/components/show-display";
// export metadata
export const metadata = {
  title: "Shows",
  description: "Shows by The Long Emergency",
};

export default async function ShowsPage() {

  const showsPageData = await getPage("shows");
  
  return (
    <div className="bg-[rgba(0,0,0,0.5)] md:bg-transparent">
      <div className="relative flex flex-col justify-center items-center">
        <div className="expand-on-load">
          <h2 className="font-emergency text-2xl lg:text-3xl xl:text-4xl text-outline mt-4">
            {showsPageData.page_title}
          </h2>
        </div>
        <h3 className="expand-on-load  pt-2 text-outline">
          The Long Emergency is coming...
        </h3>
        <ShowDisplay gigs={[]} />
        <div className="lg:m-12 expand-on-load w-full h-auto px-8 flex justify-center">
          <Image
            priority
            src="/images/banner.png"
            alt="Kevin Long playing guitar and singing into a microphone"
            width={870}
            height={320}
            className="shadow-2xl shadow-blue-300/50 border-2 border-slate-400 mb-12 xl:mb-0"
          />
        </div>
      </div>
    </div>
  );
}
