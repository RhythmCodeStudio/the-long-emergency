// import from next
import Link from "next/link";
import Image from "next/image";
// import from lib
import { getPage } from "./lib/data";
// import components
import BannerImage from "./components/banner-image";

export default async function Home() {
  const pageData = await getPage("home");

  return (
    <>
      <div className="">
        {/* <BannerImage
          src="/images/masks-no-text-4800x3190.png"
          // src="/images/guitar-mask-mound-4800x3755.png"
          alt="paper mache masks"
          width={4800}
          height={3190}
          className="absolute inset-0 z-0"
        /> */}
        <div className="absolute inset-0 flex items-center justify-center">
          {/* pageData.h1 needs to be pageData.page_title after re-seeding */}
          <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold text-center  z-10">
            {pageData.h1} 
          </h2>
        </div>
        {/* <div className="">
          <Link href="/login">Admin Login</Link>
        </div> */}
      </div>
    </>
  );
}
