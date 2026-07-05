// import from next
import Link from "next/link";
import Image from "next/image";

// export metadata
export const metadata = {
  title: "The Long Emergency | May 28, 2026 - LB - St. Louis, MO",
  description:
    "The Long Emergency plays at LB in St. Louis, MO on May 28th, 2026 with Rob Abels, Leech, and Ignoramous. Pay what you can.",
  alternates: {
    canonical: "/shows/lb-stlouis-5-28-2026",
  },
};

export default async function LBShowPage() {
  return (
    <div className="bg-[rgba(0,0,0,0.5)] md:bg-transparent">
      <div className="relative flex flex-col justify-center items-center text-outline text-center">
        <h2 className="font-emergency text-2xl lg:text-3xl xl:text-4xl m-4 text-center">
          Thursday, May 28th, 2026
        </h2>
        <h3 className="text-outline m-2 text-xl lg:text-2xl xl:text-3xl">LB</h3>
        <h4 className="text-outline m-2 text-lg lg:text-xl xl:text-2xl">
          Dutchtown - St. Louis, MO
        </h4>
        <Image
          src="/images/show-posters/5-28-2026-lb.jpg"
          alt="show poster"
          width={300}
          height={425}
          className="shadow-2xl shadow-blue-300/50 border-2 border-slate-400 expand-on-load "
        />
        <div className="mt-6 relative flex flex-col justify-center items-center  text-center">
          <div className="m-4">
            <h5 className="text-2xl">Rob Abels</h5>
            <a
              href="https://www.instagram.com/robcannonthunderbolt/"
              target="_blank"
              rel="noreferrer noopener"
              className="text-2xl text-blue-300 hover:text-blue-400 underline">
              <h6 className="text-xl">Instagram</h6>
            </a>
          </div>
          <div className="m-4">
            <h5 className="text-2xl">Leech</h5>
            <a
              href="https://linktr.ee/leechbandstl"
              target="_blank"
              rel="noreferrer noopener"
              className="text-2xl text-blue-300 hover:text-blue-400 underline">
              <h6 className="text-xl">Website</h6>
            </a>
            <a
              href="https://leechbandstl.bandcamp.com/"
              target="_blank"
              rel="noreferrer noopener"
              className="text-2xl text-blue-300 hover:text-blue-400 underline">
              <h6 className="text-xl">Bandcamp</h6>
            </a>

            <a
              href="https://www.instagram.com/leechbandstl/"
              target="_blank"
              rel="noreferrer noopener"
              className="text-2xl text-blue-300 hover:text-blue-400 underline">
              <h6 className="text-xl">Instagram</h6>
            </a>
            <a
              href="https://open.spotify.com/artist/2vccfLFGRVbZRXFV4GpAyc"
              target="_blank"
              rel="noreferrer noopener"
              className="text-2xl text-blue-300 hover:text-blue-400 underline">
              <h6 className="text-xl">Spotify</h6>
            </a>
          </div>
          <div className="m-4">
            <h5 className="text-2xl">Ignoramous</h5>
            <a
              href="https://linktr.ee/ignoramusband"
              target="_blank"
              rel="noreferrer noopener"
              className="text-2xl text-blue-300 hover:text-blue-400 underline">
              <h6 className="text-xl">Website</h6>
            </a>
            <a
              href="https://ignoramus.bandcamp.com/album/ignoramus"
              target="_blank"
              rel="noreferrer noopener"
              className="text-2xl text-blue-300 hover:text-blue-400 underline">
              <h6 className="text-xl">Bandcamp</h6>
            </a>

            <a
              href="https://www.instagram.com/ignoramus_band/"
              target="_blank"
              rel="noreferrer noopener"
              className="text-2xl text-blue-300 hover:text-blue-400 underline">
              <h6 className="text-xl">Instagram</h6>
            </a>
            <a
              href="https://open.spotify.com/artist/1ZhBqLOcchDBuvBOqWoA8w"
              target="_blank"
              rel="noreferrer noopener"
              className="text-2xl text-blue-300 hover:text-blue-400 underline">
              <h6 className="text-xl">Spotify</h6>
            </a>
          </div>
          <div className="m-4">
            <h5 className="text-2xl">The Long Emergency</h5>
            <Link
              href="/"
              target="_blank"
              rel="noreferrer noopener"
              className="text-2xl text-blue-300 hover:text-blue-400 underline">
              <h6 className="text-xl">Website</h6>
            </Link>
            <a
              href="https://www.instagram.com/longemergency/"
              target="_blank"
              rel="noreferrer noopener"
              className="text-2xl text-blue-300 hover:text-blue-400 underline">
              <h6 className="text-xl">Instagram</h6>
            </a>
          </div>
        </div>
        <div className="lg:m-12 w-full h-auto px-8 flex justify-center">
          <Image
            priority
            src="/images/banner.png"
            alt="Kevin Long playing guitar and singing into a microphone"
            width={870}
            height={320}
            className="shadow-2xl shadow-blue-300/50 border-2 border-slate-400 mb-12 xl:mb-0"
          />
        </div>
        <Link href="/">
          <span className="mb-12 -mt-4 text-lg text-blue-300 hover:text-blue-400 underline">
            www.thelongemergency.net
          </span>
        </Link>
      </div>
    </div>
  );
}
