// import from next
import Link from "next/link";
import Image from "../../../components/image";

// export metadata
export const metadata = {
  title: "The Long Emergency | Album Release Show",
  description:
    "The Long Emergency album release show at Greenfinch Theater & Dive in St. Louis, Missouri. January 17th, 2025",
  alternates: {
    canonical: "/shows/greenfinch-stlouis-1-17-2025",
  },
};

export default async function AlbumReleaseShow() {
  return (
    <div className="bg-[rgba(0,0,0,0.5)] md:bg-transparent">
      <div className="relative flex flex-col justify-center items-center text-outline text-center">
        <h2 className="font-emergency text-2xl lg:text-3xl xl:text-4xl m-4 text-center">
          Celebrating 12 Years of Being Alcohol Free
        </h2>
        <h3 className="text-outline lg:text-base m-2">
          Thursday, May 28th, 2026 <br /> LB <br />
          St. Louis, MO
        </h3>
        <div className="mt-6 relative flex flex-col justify-center items-center  text-center">
          <h4 className="text-3xl mb-2">Tonight&apos;s Bands</h4>
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
          <h6 className="mb-12 -mt-4 text-lg text-blue-300 hover:text-blue-400 underline">
            www.thelongemergency.net
          </h6>
        </Link>
      </div>
    </div>
  );
}