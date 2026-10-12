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
import CloudinaryImage from "@/ui/cloudinary-image";
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

  const calendarEventOgImgUrl = event.image ? event.image : "/images/open-graph/calendar-event-og.png";

  return {
    title: `${event.title} | The Long Emergency | St. Louis, Missouri`,
    description: event.description,
    alternates: {
      canonical: `/calendar/events/${id}`,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: `https://www.thelongemergency.com/calendar/events/${id}`,
      siteName: "The Long Emergency | St. Louis, Missouri",
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

  console.log("event:", event);
  if (!event) {
    return <div>Event not found</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center w-full text-center text-outline">
      {/* <div className="flex justify-center items-center flex-col "> */}
      <Heading
        text={event.title}
        headingLevel={3}
        className="font-emergency text-outline text-center text-2xl md:text-3xl lg:text-3xl p-6"
      />
      <div>
        <p className="text-xl font-medium">{event.dayOfWeek}</p>
        <p className="text-xl font-medium">
          {typeof event.date === "string"
            ? formatDate(event.date)
            : formatDate(event.date?.toISOString().slice(0, 10))}
        </p>
        <p className="text-xl font-medium">{formatTime(event.time)}</p>
      </div>
      <div className="mt-6">
        <p className="text-2xl font-semibold">
          {event.cost ? `${event.cost}` : "Free Event"}
        </p>
      </div>

      {event.image && (
        <CloudinaryImage
          src={event.image}
          alt={event.title}
          width={300}
          height={425}
          className="border-2 border-slate-400 rounded-3xl shadow-md shadow-white my-6"
        />
      )}

      <div className="w-full flex flex-col justify-center items-center mb-2">
        {event.venueLink ? (
          <a
            href={event.venueLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl font-semibold hover:underline hover:decoration-hoverBlue">
            {event.venueName}
          </a>
        ) : (
          <p className="text-2xl font-semibold mb-1">{event.venueName}</p>
        )}
      </div>
      <div className="w-full flex flex-col justify-center items-center">
        <GoogleMapsLink
          addressLineOne={event.venueStreetAddress}
          city={event.venueCity}
          state={event.venueState}
          zipCode={event.venueZip}
          className="hover:underline hover:decoration-hoverBlue text-lg text-center"
        />
      </div>

      <div className="w-full flex flex-col justify-center items-center mt-6">
        <p className="text-lg">{event.description}</p>
      </div>

      <div className="mt-6">
        <a
          href={`/api/shows/${id}/calendar`}
          className="inline-block underline hover:decoration-hoverBlue">
          Add to calendar
        </a>
      </div>

      <div className="md:w-1/2 p-12">
        <Image
          src="/images/dark-stage.png"
          alt={event.title}
          width={1680}
          height={1120}
          className="border-2 border-slate-400 rounded-3xl shadow-md shadow-white"
        />
      </div>
    </div>
  );
}
