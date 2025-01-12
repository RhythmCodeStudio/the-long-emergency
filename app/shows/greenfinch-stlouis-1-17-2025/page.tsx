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
      <div className="relative flex flex-col justify-center items-center text-outline">
        <h2 className="font-emergency text-2xl lg:text-3xl xl:text-4xl mt-4 text-center">
          Album Release Show
          <br />
          and
          <br />
          Kevin&apos;s Birthday
        </h2>
        <h3 className="text-outline text-sm m-2">
          Friday January 17th, 2025 <br /> Greenfinch Theater & Dive <br />
          St. Louis, MO
        </h3>
        <h4 className="text-outline mt-4">
          The Long Emergency presents the new album:
        </h4>
        <h5>"I spent all my money on a habit"</h5>
        <Link href="/music">
          <Image
            className="shadow-2xl shadow-blue-300/50 border-2 border-slate-400 m-2"
            width={213}
            height={211}
            src="/images/music/habit/front-cover.png"
            alt="Album Cover"
          />
          <h6 className="text-center">Available Now</h6>
        </Link>
        <div className="m-6 relative flex flex-col justify-center items-center text-outline text-center">
          <p>
            In celebration of my 50th birthday please consider supporting
            <br />
            <span className="text-2xl">HOPE CREATES</span>, <br />a St Louis nonprofit that uses art to help folks get sober and stay sober.
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
          <h4 className="text-3xl mb-2">The Bands</h4>
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
              href="https://open.spotify.com/artist/6ccBaxBBCefMLqkUEmosdt"
              target="_blank"
              rel="noreferrer noopener"
              className="text-2xl text-blue-300 hover:text-blue-400 underline">
              <h6 className="text-xl">Spotify</h6>
            </a>
            <a
              href="https://www.instagram.com/leavingmissouri/"
              target="_blank"
              rel="noreferrer noopener"
              className="text-2xl text-blue-300 hover:text-blue-400 underline">
              <h6 className="text-xl">Instagram</h6>
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
              href="https://open.spotify.com/artist/1ZhBqLOcchDBuvBOqWoA8w"
              target="_blank"
              rel="noreferrer noopener"
              className="text-2xl text-blue-300 hover:text-blue-400 underline">
              <h6 className="text-xl">Spotify</h6>
            </a>
            <a
              href="https://www.instagram.com/randomfogband/"
              target="_blank"
              rel="noreferrer noopener"
              className="text-2xl text-blue-300 hover:text-blue-400 underline">
              <h6 className="text-xl">Instagram</h6>
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
              href="https://open.spotify.com/artist/337ssIYmyo5p8gCv8v5X1z"
              target="_blank"
              rel="noreferrer noopener"
              className="text-2xl text-blue-300 hover:text-blue-400 underline">
              <h6 className="text-xl">Spotify</h6>
            </a>
            <a
              href="https://www.instagram.com/longemergency/"
              target="_blank"
              rel="noreferrer noopener"
              className="text-2xl text-blue-300 hover:text-blue-400 underline">
              <h6 className="text-xl">Instagram</h6>
            </a>
          </div>
        </div>
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
