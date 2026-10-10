// import data
import { getCalendarEvents, getCalendarEventById } from "@/actions/actions";
// import from next
import Image from "next/image";
// import definitions
// import { CalendarEvent } from "@/lib/definitions";
// import components
// import CalendarEventDisplay from "@/ui/calendar-event-display";
import Heading from "@/ui/heading";
import GoogleMapsLink from "@/ui/google-maps-link";
// import from utils
import { formatDate, formatTime } from "@/utils/utils";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const events = await getCalendarEvents();
  const event = events.find((event: any) => event.id === Number(id));

  if (!event) {
    return {};
  }

  const calendarEventOgImgUrl =
    "https://www.pomiamusic.com/images/open-graph/calendar-event-og.png";

  return {
    title: `${event.title} | The Long Emergency | St. Louis, Missouri`,
    description: event.description,
    alternates: {
      canonical: `/calendar/events/${id}`,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: `https://www.pomiamusic.com/calendar/events/${id}`,
      siteName: "Po Mia: St. Louis Musician",
      title: `${event.title} | The Long Emergency | St. Louis, Missouri`,
      description: event.description,
      images: [
        {
          url: calendarEventOgImgUrl,
          width: 1200,
          height: 630,
          alt: `${event.title} | The Long Emergency | St. Louis, Missouri`,
        },
      ],
    },
  };
}

export default async function ShowPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const event = await getCalendarEventById(id);

  // console.log("event:", event);
  if (!event) {
    return <div>Event not found</div>;
  }

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <Heading
        text={event.title}
        headingLevel={2}
        className="text-4xl font-bold text-shadow-black-background-black"
      />
      <div className="px-8 w-full mx-auto flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center p-8 gap-4 bg-black/50 rounded-3xl shadow-md shadow-white border-2 border-border-default w-full max-w-xl my-8">
          <div className="text-lg w-full max-w-4xl flex flex-col justify-center items-center">
            <p className="text-shadow-black-background-black text-xl font-medium">
              {event.dayOfWeek}
            </p>
            <p className="text-shadow-black-background-black text-xl font-medium">
              {typeof event.date === "string"
                ? formatDate(event.date)
                : formatDate(event.date?.toISOString().slice(0, 10))}
            </p>
            <p className="text-shadow-black-background-black text-xl font-medium">
              {formatTime(event.time)}
            </p>
          </div>

          <div className="w-full flex flex-col justify-center items-center">
            {event.venueLink ? (
              <a
                href={event.venueLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-shadow-black-background-black text-3xl font-semibold mb-1 hover:underline hover:decoration-hoverBlue">
                {event.venueName}
              </a>
            ) : (
              <p className="text-shadow-black-background-black text-3xl font-semibold mb-1">
                {event.venueName}
              </p>
            )}
            <GoogleMapsLink
              addressLineOne={event.venueStreetAddress}
              city={event.venueCity}
              state={event.venueState}
              zipCode={event.venueZip}
              className="text-shadow-black-background-black hover:underline hover:decoration-hoverBlue text-lg"
            />
          </div>
          <div className="w-full flex flex-col justify-center items-center">
            <p className="text-shadow-black-background-black text-xl font-semibold">
              {event.cost ? `Cost: ${event.cost}` : "Free Event"}
            </p>
          </div>
          <div className="w-full flex flex-col justify-center items-center">
            <p className="text-shadow-black-background-black text-lg">
              {event.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
