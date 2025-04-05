// import from next
import Link from "next/link";
import Image from "../../components/image";
// import data
import { getPage } from "../lib/data";
import ShowDisplay from "@/components/show-display";
// export metadata
export const metadata = {
  title: "Shows",
  description: "Shows by The Long Emergency",
  alternates: {
    canonical: "/shows",
  },
};

export default async function ShowsPage() {

  const showsPageData = await getPage("shows");
  
  return (
    <div className="bg-[rgba(0,0,0,0.5)] md:bg-transparent">
      <div className="relative flex flex-col justify-center items-center">
        <div className="expand-on-load">
          <h2 className="font-emergency text-2xl lg:text-3xl xl:text-4xl text-outline mt-8 mb-4">
            {showsPageData.page_title}
          </h2>
        </div>
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
        <h3 className="text-lg">&quot;I spent all my money on a habit&quot;</h3>
        <Link href="/music">
          <Image
            className="shadow-2xl shadow-blue-300/50 border-2 border-slate-400 m-2"
            width={213}
            height={211}
            src="/music/habit/album-art/front-cover.png"
            alt="I spent all my money on a habit album cover"
          />
          <h6 className="text-center text-xl text-blue-300 hover:text-blue-400 underline">
            Available Now
          </h6>
        </Link>
      </div>
    </div>
  );
}