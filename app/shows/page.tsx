// import from next
import Link from "next/link";
import Image from "next/image";
// import actions
import { getPage, getCalendarEvents } from "@/actions/actions";
import ShowDisplay from "@/ui/show-display";
import CalendarClientContainer from "@/ui/admin/calendar-client-container";
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
  const events = await getCalendarEvents();
  console.log("Calendar events:", events);
  const eventsInOrder = events.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateA.getTime() - dateB.getTime();
  });

  const currentDate = new Date();
  // filter out past events
  const upComingEvents = eventsInOrder.filter((event) => {
    const eventDate = new Date(event.date);
    return eventDate >= currentDate;
  });

  const pastEvents = eventsInOrder.filter((event) => {
    const eventDate = new Date(event.date);
    return eventDate < currentDate;
  });
  console.log("Upcoming events:", upComingEvents);
  console.log("Past events:", pastEvents);

  const resolvedSearchParams = await searchParams;
  const rawView = resolvedSearchParams?.view;
  const requestedView = Array.isArray(rawView) ? rawView[0] : rawView;
  const gigView = requestedView === "past" ? "past" : "upcoming";

  return (
    <div className="flex flex-col items-center w-full max-w-7xl mx-auto min-h-full">

      <h3 className="font-emergency text-outline text-center text-2xl md:text-3xl lg:text-3xl md:pt-6">
        {showsPageData?.page_title}
      </h3>

      <div className="w-full">
        <CalendarClientContainer
          upComingEvents={upComingEvents}
          pastEvents={pastEvents}
        />
      </div>

      {/* <div className="w-full max-w-600 sm:py-4">
        <ShowDisplay gigView={gigView} />
      </div> */}
      <div className="w-full h-auto px-8 py-8 flex justify-center">
        <Image
          priority
          src="/images/banner.png"
          alt="Kevin Long playing guitar and singing into a microphone"
          width={870}
          height={320}
          className="shadow-md shadow-white rounded-3xl border-2 border-slate-400"
        />
      </div>
      <div className="flex flex-col justify-center items-center p-6">
        <h3 className="text-lg text-outline">
          &quot;I spent all my money on a habit&quot;
        </h3>
        <Link href="/music">
          <Image
            className="shadow-md shadow-white rounded-3xl border-2 border-slate-400 m-2"
            width={213}
            height={211}
            src="/music/habit/album-art/front-cover.png"
            alt="I spent all my money on a habit album cover"
          />
          <h4 className="text-center text-xl text-outline text-customBlue hover:text-hoverBlue underline">
            Available Now
          </h4>
        </Link>
      </div>
      {/* </div> */}
      {/* <Toaster toastId="default" /> */}
      <Toaster
        toastId="install-app-toast"
        message="Install thelongemergency.com"
        component={<InstallAppButton />}
      />
    </div>
  );
}
