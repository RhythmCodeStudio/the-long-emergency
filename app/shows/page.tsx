// import from next
import Image from "next/image";
import Link from "next/link";
// import data
import { getPage } from "../lib/data";
// export metadata
export const meta = {
  title: "Shows",
  description: "Shows by The Long Emergency",
};

export default async function ShowsPage() {
  const gigs: any[] = [
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
        <h2 className="text-2xl lg:text-4xl">{showsPageData.page_title}</h2>
        </div>
      <h3 className="expand-on-load text-xl font-mono p-6">The Long Emergency is coming...</h3>
     
      <div className="expand-on-load w-full h-auto p-6">
        <Image
          priority
          src="/images/banner.png"
          alt="guitar mask mound"
          width={870}
          height={320}
        />
      </div>
      <div className="p-6">
        <p className="expand-on-load text-center font-mono text-xl">Upcoming Shows:</p>
        {gigs.length === 0 ? (
          <div className="p-6 expand-on-load">
            <p className="text-center font-mono text-lg md:text-xl">
              No shows currently scheduled. Please{" "}
              <span className="underline font-bold">
                <Link href="/contact">contact</Link>
              </span>{" "}
              for booking.
            </p>
          </div>
        ) : (
          gigs.map((gig) => (
            <ul key={gig.index} className="p-2 text-lg md:text-xl">
                <li className="py-2 expand-on-load ">
                <p className="font-mono text-center">{gig.date}</p>
                <p className="font-mono text-center">{gig.venue}</p>
                <p className="font-mono text-center">
                  {gig.city}, {gig.state}
                </p>
                <p className="font-mono text-center">{gig.cost}</p>
                <p className="font-mono text-center">{gig.other_info}</p>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={gig.ticket_link}
                  className="font-mono text-center underline">
                  <p>Tickets</p>
                </a>
              </li>
            </ul>
          ))
        )}
      </div>
    </div>
  );
}
