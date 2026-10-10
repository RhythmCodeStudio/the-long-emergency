"use client";
// import from react
import { useState } from "react";
// import from next
import { usePathname } from "next/navigation";
// import Link from "next/link";
// import defintions
import type { CalendarEvent } from "@/definitions/definitions";
// import components
import CalendarEventDisplay from "../calendar-event-display";
import Button from "../button";
// import clsx
import clsx from "clsx";

interface CalendarClientContainerProps {
  upComingEvents: CalendarEvent[];
  pastEvents?: CalendarEvent[];
  numberOfEventsToShow?: number;
  showViewToggle?: boolean;
}

export default function CalendarClientContainer({
  upComingEvents,
  pastEvents = [],
  numberOfEventsToShow,
  showViewToggle = true,
}: CalendarClientContainerProps) {
  const [view, setView] = useState<"future" | "past">("future");
  const pathname = usePathname();
  const isAdminPath = pathname.startsWith("/admin");

  console.log("Current view:", view);
  console.log("Upcoming events:", upComingEvents);
  console.log("Past events:", pastEvents);

  return (
    <section
      className={clsx(
  "w-full flex flex-col items-center",
  showViewToggle ? "rounded-4xl p-6" : !isAdminPath && "p-8",
)}>
      {showViewToggle && (
        <div className="flex flex-row justify-center items-center pb-6 w-full gap-4">
          <Button
            label="Past"
            title="past events"
            onClick={() => setView("past")}
            className={clsx(
              "inline-flex h-9 w-24 items-center justify-center rounded-full text-black border-2 border-slate-400 shadow-md transition ease-in-out duration-400",
              view === "past"
                ? "pointer-events-none shadow-white duration-200 bg-customBlue"
                : "bg-white hover:bg-customBlue hover:shadow-white",
            )}
          />
          <Button
            label="Future"
            title="future events"
            onClick={() => setView("future")}
            className={clsx(
              "inline-flex h-9 w-24 items-center justify-center rounded-full text-black border-2 border-slate-400 shadow-md transition ease-in-out duration-400",
              view === "future"
                ? "pointer-events-none shadow-white duration-200 bg-customBlue"
                : "bg-white hover:bg-customBlue hover:shadow-white",
            )}
          />
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 w-full">
        {view === "future" ? (
          upComingEvents.length > 0 ? (
            upComingEvents
              .slice(0, numberOfEventsToShow)
              .map((event) => (
                <CalendarEventDisplay
                  id={String(event.id)}
                  key={event.id}
                  title={event.title}
                  date={
                    typeof event.date === "string"
                      ? event.date
                      : event.date?.toISOString().slice(0, 10)
                  }
                  dayOfWeek={event.dayOfWeek}
                  time={event.time}
                  cost={event.cost ?? ""}
                  venueName={event.venueName}
                  venueStreetAddress={event.venueStreetAddress}
                  venueCity={event.venueCity}
                  venueState={event.venueState}
                  venueZip={event.venueZip}
                  description={event.description}
                  image={event.image}
                  ticketLink={event.ticketLink}
                  moreInfoLink={event.moreInfoLink}
                  venueLink={event.venueLink}
                  eventLink={event.eventLink}
                />
              ))
          ) : (
            // no upcoming events
            <div className="col-span-full text-center ">
              <p>No upcoming shows are currently scheduled. </p>
              <p>
                For booking please email{" "}
                <a
                  href="mailto:booking@thelongemergency.com"
                  className="text-customBlue hover:text-hoverBlue underline">
                  booking@thelongemergency.com
                </a>
              </p>
            </div>
          )
        ) : null}
        {view === "past"
          ? pastEvents.map((event) => (
              <CalendarEventDisplay
                id={String(event.id)}
                key={event.id}
                title={event.title}
                date={
                  typeof event.date === "string"
                    ? event.date
                    : event.date?.toISOString().slice(0, 10)
                }
                dayOfWeek={event.dayOfWeek}
                time={event.time}
                cost={event.cost ?? ""}
                venueName={event.venueName}
                venueStreetAddress={event.venueStreetAddress}
                venueCity={event.venueCity}
                venueState={event.venueState}
                venueZip={event.venueZip}
                description={event.description}
                image={event.image}
                ticketLink={event.ticketLink}
                moreInfoLink={event.moreInfoLink}
                venueLink={event.venueLink}
                eventLink={event.eventLink}
              />
            ))
          : null}
      </div>
    </section>
  );
}
