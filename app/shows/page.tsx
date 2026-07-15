// import from next
import Link from "next/link";
import Image from "next/image";
// import data
import { getPage } from "@/actions/actions";
import ShowDisplay from "@/ui/show-display";
import Toaster from "@/ui/toaster";
import InstallAppButton from "@/ui/install-app-button";
// export metadata
export const metadata = {
  title: "Shows",
  description: "Shows by The Long Emergency",
  alternates: {
    canonical: "/shows",
  },
};

type ShowsPageSearchParams = {
  view?: string | string[];
};

export default async function ShowsPage({
  searchParams,
}: {
  searchParams: Promise<ShowsPageSearchParams>;
}) {
  const showsPageData = await getPage("shows");

  const resolvedSearchParams = await searchParams;
  const rawView = resolvedSearchParams?.view;
  const requestedView = Array.isArray(rawView) ? rawView[0] : rawView;
  const gigView = requestedView === "past" ? "past" : "upcoming";

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="relative flex flex-col justify-center items-center">
        {/* <div className="">
          <h2 className="font-emergency text-2xl lg:text-3xl xl:text-4xl text-outline mt-8 mb-4">
            {showsPageData?.page_title}
          </h2>
        </div> */}
        <div className="py-12">
          <ShowDisplay gigView={gigView} />
        </div>
        <div className="lg:m-12  w-full h-auto px-8 flex justify-center">
          <Image
            priority
            src="/images/banner.png"
            alt="Kevin Long playing guitar and singing into a microphone"
            width={870}
            height={320}
            className="shadow-md shadow-white rounded-2xl border-2 border-slate-400 mb-12 xl:mb-0"
          />
        </div>
        <h3 className="text-lg text-outline">
          &quot;I spent all my money on a habit&quot;
        </h3>
        <Link href="/music">
          <Image
            className="shadow-md shadow-white rounded-2xl border-2 border-slate-400 m-2"
            width={213}
            height={211}
            src="/music/habit/album-art/front-cover.png"
            alt="I spent all my money on a habit album cover"
          />
          <h4 className="text-center text-xl text-outline text-blue-300 hover:text-blue-400 underline">
            Available Now
          </h4>
        </Link>
      </div>
      {/* <Toaster toastId="default" /> */}
      <Toaster
        toastId="install-app-toast"
        message="Install thelongemergency.com"
        component={<InstallAppButton />}
      />
    </div>
  );
}
