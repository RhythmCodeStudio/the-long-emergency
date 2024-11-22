// import from next
import Image from "next/image";
import Link from "next/link";
// import data
import { getPage } from "../lib/data";
import ShowDisplay from "@/components/show-display";
// export metadata
export const metadata = {
  title: "Shows",
  description: "Shows by The Long Emergency",
};

export default async function ShowsPage() {
  const gigs: any[] = [
    {
      date: "1/17/2025",
      venue: "Greenfinch Theater & Dive",
      city: "St. Louis",
      state: "MO",
      country: "USA",
      other_info: "with Leaving Missouri and Random Fog",
      cost: "$5",
      ticket_url: "https://www.purplepass.com/events/304686-the-long-emergency-%7C-album-release-show---featurin-jan-17th-2025",
      poster: "/images/show-posters/masks.png",
    },
    // {
    //   date: "1/13/1992",
    //   venue: "Mississippi Nights",
    //   city: "St. Louis",
    //   state: "MO",
    //   country: "USA",
    //   other_info: "with Uncle Tupelo",
    //   cost: "$5",
    //   ticket_link: "https://www.offbroadwaystl.com/",
    // },
    // {
    //   date: "2/13/1992",
    //   venue: "The Blue Note",
    //   city: "Columbia",
    //   state: "MO",
    //   other_info: "with Uncle Tupelo",
    //   cost: "$5",
    //   ticket_link: "https://www.offbroadwaystl.com/",
    // },
    // {
    //   date: "3/13/1992",
    //   venue: "Off Broadway",
    //   city: "St. Louis",
    //   state: "MO",
    //   other_info: "with Uncle Tupelo",
    //   cost: "$5",
    //   ticket_link: "https://www.offbroadwaystl.com/",
    // },
  ];

  const showsPageData = await getPage("shows");
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="expand-on-load">
        <h2 className="m text-3xl lg:text-4xl text-outline">
          {showsPageData.page_title}
        </h2>
      </div>
      <h3 className="expand-on-load text-xl font-mono p-6 text-outline">
        The Long Emergency is coming...
      </h3>
      <ShowDisplay gigs={gigs} />
      
      <div className="expand-on-load w-full h-auto px-6">
        <Image
          priority
          src="/images/banner.png"
          alt="Kevin Long playing guitar and singing into a microphone"
          width={870}
          height={320}
          className="shadow-2xl shadow-blue-300/50 border-2 border-slate-400"
        />
      </div>
    </div>
  );
}
