// import from next
import Image from "next/image";
// import data
import { getPage } from "../lib/data";
// export metadata
export const meta = {
  title: "Shows",
  description: "Shows by The Long Emergency",
};

export default async function ShowsPage() {
  const showsPageData = await getPage("shows");
  return (
    <div className="flex justify-center items-center flex-col">
      <h2>{showsPageData.page_title}</h2>
      <div className="w-full h-auto">
        <Image
          priority
          src="/images/banner.png"
          alt="guitar mask mound"
          width={870}
          height={320}
        />
      </div>
    </div>
  );
}
