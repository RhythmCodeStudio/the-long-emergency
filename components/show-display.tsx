"use client";
//import from react
import { useState } from "react";
// import from next
import Image from "./image";
import Link from "next/link";

export default function ShowDisplay({}: { gigs: any[] }) {
  const [gigState, setGigState] = useState("upcoming");
  const gigs: any[] = [
    {
      date: "01/17/2025",
      venue: "Greenfinch Theater & Dive",
      venue_url: "https://www.greenfinchstl.com/",
      city: "St. Louis",
      state: "MO",
      country: "USA",
      street_address: "2525 S Jefferson Ave",
      zip_code: "63104",
      google_maps_url: "https://maps.app.goo.gl/5AfvwCu6JxsyWoQo7",
      gig_info: "Album Release Show",
      other_acts: "with Leaving Missouri and Random Fog",
      cost: "$5",
      ticket_url:
        "https://www.purplepass.com/events/304686-the-long-emergency-%7C-album-release-show---featurin-jan-17th-2025",
      poster: "/images/show-posters/masks.png",
      show_page: "/shows/greenfinch-stlouis-1-17-2025",
    },
    {
      date: "05/11/2013",
      venue: "The Nomad World Pub",
      city: "Minneapolis",
      state: "MN",
      country: "USA",
      street_address: "501 Cedar Avenue",
      zip_code: "55454",
      google_maps_url: "https://maps.app.goo.gl/6RedkN9gJfoGYSR26",
      gig_info: "Starting Over Album Release Show",
      other_acts: "with The Drug Budget and Kingfisher",
      cost: "Free",
      ticket_url: "",
      poster: "/images/show-posters/starting-over-release-show-5-11-2013.jpg",
      show_page: "",
    },
    // {
    //   date: "1/13/1992",
    //   venue: "Mississippi Nights",
    //   city: "St. Louis",
    //   state: "MO",
    //   country: "USA",
    //   gig_info: "Dream Show",
    //   other_acts: "with Uncle Tupelo and Blind Melon",
    //   cost: "$5",
    //   ticket_url:
    //     "https://www.purplepass.com/events/304686-the-long-emergency-%7C-album-release-show---featurin-jan-17th-2025",
    //   poster: "/images/show-posters/masks.png",
    // },
    // {
    //   date: "2/13/1992",
    //   venue: "The Blue Note",
    //   city: "Columbia",
    //   state: "MO",
    //   country: "USA",
    //   gig_info: "Dream Show",
    //   other_acts: "with Uncle Tupelo and Blind Melon",
    //   cost: "$5",
    //   ticket_url:
    //     "https://www.purplepass.com/events/304686-the-long-emergency-%7C-album-release-show---featurin-jan-17th-2025",
    //   poster: "/images/show-posters/masks.png",
    // },
    // {
    //   date: "3/13/1992",
    //   venue: "Off Broadway",
    //   city: "St. Louis",
    //   state: "MO",
    //   country: "USA",
    //   gig_info: "Dream Show",
    //   other_acts: "with Uncle Tupelo and Blind Melon",
    //   cost: "$5",
    //   ticket_url:
    //     "https://www.purplepass.com/events/304686-the-long-emergency-%7C-album-release-show---featurin-jan-17th-2025",
    //   poster: "/images/show-posters/yellow.png",
    // },
  ];
  const today = new Date();

  const pastGigs = gigs.filter((gig) => {
    const gigDate = new Date(gig.date);
    return gigDate < today;
  });
  console.log("past", pastGigs);

  const upcomingGigs = gigs.filter((gig) => {
    const gigDate = new Date(gig.date);
    return gigDate >= today;
  });
  console.log("future", upcomingGigs);

  const filteredGigs = gigState === "upcoming" ? upcomingGigs : pastGigs;
  console.log("filtered", filteredGigs);
  return (
    <>
      <div className="flex justify-center items-center">
        <button
          onClick={() => setGigState("upcoming")}
          className={`${
            gigState === "upcoming" ? "bg-blue-300 text-lg" : "bg-white"
          } hover:scale-110 transition transition-transform duration-300 ease-in-out hover:bg-blue-500 hover:text-white p-2 m-2 rounded-full border-2 border-black shadow-blue-300/50 text-black`}>
          Future
        </button>
        <button
          onClick={() => setGigState("past")}
          className={`${
            gigState === "past" ? "bg-blue-300 text-lg" : "bg-white"
          } hover:scale-110 transition transition-transform duration-300 ease-in-out hover:bg-blue-500 hover:text-white p-2 px-5 m-2 rounded-full border-2 border-black shadow-blue-300/50 text-black`}>
          Past
        </button>
      </div>
      <div className="p-6 text-outline">
        {filteredGigs.length === 0 ? (
          <div className="p-6">
            <p className="text-center  text-lg md:text-xl text-balance">
              No upcoming shows currently scheduled.
              <br /> Please{" "}
              <span className="text-blue-300 hover:text-blue-400 underline">
                <Link href="/contact">contact</Link>
              </span>{" "}
              for booking.
            </p>
          </div>
        ) : (
          <>
            {gigState === "upcoming" && (
              <h3 className="expand-on-load pt-2 text-outline text-center">
                The Long Emergency is coming...
              </h3>
            )}
            <ul
              className={`grid ${
                gigs.length === 1
                  ? "justify-center"
                  : "grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-9 lg:gap-20 xl:gap-28"
              } p-2 md:text-lg md:text-xl`}>
              {gigs.map((gig, index) => (
                <li
                  key={index}
                  className="expand-on-load border-2 border-slate-400 bg-[rgba(0,0,0,0.6)]">
                  <div className="p-8">
                    <div className="flex justify-center items-center">
                      {gig.show_page ? (
                        <Link href={gig.show_page} passHref>
                          <Image
                            src={gig.poster}
                            alt="show poster"
                            width={300}
                            height={425}
                            className="shadow-2xl shadow-blue-300/50 border-2 border-slate-400 expand-on-load hover:scale-105 transform transition-transform duration-500 ease-in-out"
                          />
                        </Link>
                      ) : (
                        <Image
                          src={gig.poster}
                          alt="show poster"
                          width={300}
                          height={425}
                          className="shadow-2xl shadow-blue-300/50 border-2 border-slate-400 expand-on-load "
                        />
                      )}
                    </div>
                    <div className="z-50">
                      <p className=" text-center mt-6 z-50">{gig.date}</p>
                      <a
                        href={gig.venue_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline z-10">
                        <p className=" text-center">{gig.venue}</p>
                      </a>
                      <a
                        href={gig.google_maps_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline">
                        <p className=" text-center">{gig.street_address}</p>
                      </a>
                      <p className=" text-center">
                        {gig.city}, {gig.state}
                      </p>
                      <p className=" text-center">{gig.cost}</p>
                      <p className=" text-center">{gig.gig_info}</p>
                      <p className=" text-center">{gig.other_acts}</p>
                      {gigState === "upcoming" && (
                        <div className="flex justify-center expand-on-load">
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={gig.ticket_url}
                            className="inline-block bg-blue-500 hover:bg-blue-700 py-2 px-4 rounded-full mt-2 border-2 border-black">
                            <p className="text-outline">Tickets</p>
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </>
  );
}
