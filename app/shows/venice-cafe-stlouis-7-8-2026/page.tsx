// import from next
import Link from "next/link";
import Image from "next/image";

// export metadata
export const metadata = {
  title: "The Long Emergency | July 7, 2026 - Venice Cafe - St. Louis, MO",
  description:
    "The Long Emergency plays at Venice Cafe in St. Louis, MO on July 7th, 2026 with Rob Abels, Leech, and Ignoramous. Pay what you can.",
  alternates: {
    canonical: "/shows/venice-cafe-stlouis-7-8-2026",
  },
};

export default async function VeniceCafeShowPage() {
  return (
    <div>
      <div className="relative flex flex-col justify-center items-center text-outline text-center">
        <h2 className="font-emergency text-2xl lg:text-3xl xl:text-4xl m-4 text-center">
          Tuesday, July 7th, 2026
        </h2>
        <h3 className="text-outline m-2 text-xl lg:text-2xl xl:text-3xl">Venice Cafe</h3>
        <h4 className="text-outline m-2 text-lg lg:text-xl xl:text-2xl">
          St. Louis, MO
        </h4>
        {/* <Image
          src="/images/show-posters/7-7-2026-venice-cafe.jpg"
          alt="show poster"
          width={300}
          height={425}
          className="shadow-2xl shadow-blue-300/50 border-2 border-slate-400 expand-on-load "
        /> */}
        <h5 className="text-outline m-2 text-lg lg:text-xl xl:text-2xl">$5</h5>
        <div className="mt-6 relative flex flex-col justify-center items-center  text-center">
          <div className="m-4">
            <h6 className="text-2xl">Jeremey Reidy</h6>
            <a
              href="https://www.instagram.com/jreidy909/"
              target="_blank"
              rel="noreferrer noopener"
              className="text-2xl text-blue-300 hover:text-blue-400 underline">
              <h6 className="text-xl">Instagram</h6>
            </a>
          </div>
          <div className="m-4">
            <h6 className="text-2xl">The Long Emergency</h6>
            <Link
              href="/"
              target="_blank"
              rel="noreferrer noopener"
              className="text-2xl text-blue-300 hover:text-blue-400 underline">
              <h6 className="text-xl">Website</h6>
            </Link>
    
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