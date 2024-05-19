// import from next
import Link from "next/link";
import Image from "next/image";

import { getPage } from "./lib/data";

export default async function Home() {
  const pageData = await getPage("home");
  console.log(pageData);

  return (
    <main className="flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold text-center ">
        {pageData.h1}
      </h1>
     
      <div className="w-full h-auto">
        
        <Image
          className="dark:drop-shadow-[0_0_0.3rem_#ffffff70]  w-full h-auto"
          src="/images/masks-no-text.png"
          alt="paper mache masks"
          width={960}
          height={638}
          priority
        />
      </div>
      {/* <div className="">
        <Link href="/login">Admin Login</Link>
      </div> */}
    </main>
  );
}
