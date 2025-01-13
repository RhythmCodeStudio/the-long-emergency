// import from next
import Link from "next/link";
import Image from "../../../components/image";

// export metadata
export const metadata = {
  title: "Album Release Show",
  description:
    "The Long Emergency Album Release Show at Greenfinch Theater & Dive in St. Louis, MO",
};

export default async function AlbumReleaseShow() {
  return (
    <div className="bg-[rgba(0,0,0,0.5)] md:bg-transparent ">
      <div className="relative flex flex-col justify-center items-center text-outline text-center">
        <h2 className="font-emergency text-2xl lg:text-3xl xl:text-4xl m-4 text-center">
          Album Release Show
          <br />
          <span className="text-lg">and</span>
          <br />
          Kevin&apos;s Birthday
        </h2>
        <h3 className="text-outline text-sm lg:text-base m-2">
          Friday January 17th, 2025 <br /> Greenfinch Theater & Dive <br />
          St. Louis, MO
        </h3>
        {/* <p className="p-2 m-2 text-center lg:text-lg">
          Thank you for choosing to spend your time with us this evening.
        </p> */}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.purplepass.com/events/304686-the-long-emergency-%7C-album-release-show---featurin-jan-17th-2025"
          className="bg-blue-500 hover:bg-blue-700 py-2 px-4 rounded-full mt-2 border-2 border-black">
          <p className="text-outline">Tickets</p>
        </a>
        <h4 className="text-outline mt-4 text-lg lg:text-2xl p-2">
          The Long Emergency proudly presents the new album:
        </h4>
        <h5 className="text-xl">&quot;I spent all my money on a habit&quot;</h5>
        <Link href="/music">
          <Image
            className="shadow-2xl shadow-blue-300/50 border-2 border-slate-400 m-2"
            width={213}
            height={211}
            src="/music/habit/album-art/front-cover.png"
            alt="I spent all my money on a habit album cover"
          />
          <h6 className="text-center text-2xl text-blue-300 hover:text-blue-400 underline">
            Available Now
          </h6>
        </Link>
        <div className="shadow-2xl shadow-blue-300/50 border-2 border-slate-400 p-6 m-12 relative flex flex-col justify-center items-center text-outline text-center">
          <p className="text-lg">
            In celebration of my birthday please consider supporting
          </p>
          <span className="text-3xl mt-2">HOPE CREATES</span>
          <p className="text-lg">
            a St Louis nonprofit that uses art to help folks get sober and stay
            sober.
          </p>
          <div className="justify-center m-4">
            <a
              href="https://www.hopecreates.org/"
              target="_blank"
              rel="noreferrer noopener"
              className="text-2xl text-blue-300 hover:text-blue-400">
              <Image
                src="/images/hope-creates-logo.png"
                alt="Hope Creates Logo"
                width={200}
                height={163}
              />
            </a>
          </div>
          <div>
            <p className="mt-2">Support Hope Creates with a donation:</p>
            <a
              href="https://www.hopecreates.org/give-today"
              target="_blank"
              rel="noreferrer noopener"
              className="text-2xl text-blue-300 hover:text-blue-400 underline">
              DONATE TO HOPE CREATES
            </a>
          </div>
          <div>
            <p className="mt-2">
              Support Hope Creates by buying art from their gallery:
            </p>
            <a
              href="https://www.hopecreates.org/aart"
              target="_blank"
              rel="noreferrer noopener"
              className="text-2xl text-blue-300 hover:text-blue-400 underline">
              BUY ART FROM HOPE CREATES
            </a>
          </div>
        </div>
        <div className="mt-6 relative flex flex-col justify-center items-center  text-center">
          <h4 className="text-3xl mb-2">Tonight&apos;s Bands</h4>
          <div className="m-4">
            <h5 className="text-2xl">Leaving Missouri</h5>
            <a
              href="https://beacons.ai/leavingmissouri"
              target="_blank"
              rel="noreferrer noopener"
              className="text-2xl text-blue-300 hover:text-blue-400 underline">
              <h6 className="text-xl">Website</h6>
            </a>
            <a
              href="https://leavingmissouri.bandcamp.com"
              target="_blank"
              rel="noreferrer noopener"
              className="text-2xl text-blue-300 hover:text-blue-400 underline">
              <h6 className="text-xl">Bandcamp</h6>
            </a>
            <a
              href="https://www.instagram.com/leavingmissouri/"
              target="_blank"
              rel="noreferrer noopener"
              className="text-2xl text-blue-300 hover:text-blue-400 underline">
              <h6 className="text-xl">Instagram</h6>
            </a>
            <a
              href="https://open.spotify.com/artist/6ccBaxBBCefMLqkUEmosdt"
              target="_blank"
              rel="noreferrer noopener"
              className="text-2xl text-blue-300 hover:text-blue-400 underline">
              <h6 className="text-xl">Spotify</h6>
            </a>
          </div>
          <div className="m-4">
            <h5 className="text-2xl">Random Fog</h5>
            <a
              href="https://randomfog.com/"
              target="_blank"
              rel="noreferrer noopener"
              className="text-2xl text-blue-300 hover:text-blue-400 underline">
              <h6 className="text-xl">Website</h6>
            </a>
            <a
              href="https://randomfog.bandcamp.com/"
              target="_blank"
              rel="noreferrer noopener"
              className="text-2xl text-blue-300 hover:text-blue-400 underline">
              <h6 className="text-xl">Bandcamp</h6>
            </a>

            <a
              href="https://www.instagram.com/randomfogband/"
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
              href="https://thelongemergency.bandcamp.com/"
              target="_blank"
              rel="noreferrer noopener"
              className="text-2xl text-blue-300 hover:text-blue-400 underline">
              <h6 className="text-xl">Bandcamp</h6>
            </a>
            <a
              href="https://www.instagram.com/longemergency/"
              target="_blank"
              rel="noreferrer noopener"
              className="text-2xl text-blue-300 hover:text-blue-400 underline">
              <h6 className="text-xl">Instagram</h6>
            </a>
            <a
              href="https://open.spotify.com/artist/337ssIYmyo5p8gCv8v5X1z"
              target="_blank"
              rel="noreferrer noopener"
              className="text-2xl text-blue-300 hover:text-blue-400 underline">
              <h6 className="text-xl">Spotify</h6>
            </a>
          </div>
        </div>
        <Link href="/">
          <h6>www.thelongemergency.net</h6>
        </Link>
        <div className="lg:m-12 w-full h-auto p-8 flex justify-center">
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
