// import from next
import Image from "next/image";
import Link from "next/link";

export default function ShowDisplay({ gigs }: { gigs: any[] }) {
  return (
    <div className="p-6 text-outline">
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
        <ul className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-9 lg:gap-20 xl:gap-28 p-2 md:text-lg md:text-xl">
          {gigs.map((gig, index) => (
            <li key={index} className="expand-on-load border">
              <div className="p-8 bg-black opacity-80">
                <div className="flex justify-center items-center">
                  <Image
                    src={gig.poster}
                    alt="show poster"
                    width={300}
                    height={425}
                    className="shadow-2xl shadow-blue-300/50 border-2 border-slate-400"
                  />
                </div>
                <p className="font-mono text-center mt-6">{gig.date}</p>
                <p className="font-mono text-center">{gig.venue}</p>
                <p className="font-mono text-center">
                  {gig.city}, {gig.state}
                </p>
                <p className="font-mono text-center">{gig.cost}</p>
                <p className="font-mono text-center">{gig.other_info}</p>
                <div className="flex justify-center">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={gig.ticket_url}
                    className="inline-block bg-blue-500 hover:bg-blue-700 py-2 px-4 rounded-full mt-2 border-2 border-black">
                    <p>Tickets</p>
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
