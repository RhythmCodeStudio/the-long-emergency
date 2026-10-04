"use client";
// import from react
import { useState } from "react";
// import from next
import { usePathname } from "next/navigation";
import Link from "next/link";
// import components
import CalendarEventDisplay from "../calendar-event-display";
import Button from "../button";
// import clsx
import clsx from "clsx";

interface CalendarClientContainerProps {
  upComingEvents: any[];
  pastEvents?: any[];
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
      className={
        isAdminPath && !showViewToggle
          ? "w-full flex flex-col items-center"
          : !isAdminPath && !showViewToggle
            ? "w-full flex flex-col items-center p-8"
            : "rounded-(--container-radius) w-full flex flex-col items-center p-(--container-padding) [--container-radius:var(--radius-4xl)] [--container-padding:--spacing(8)]"
      }>
      {showViewToggle && (
        <div className="flex flex-row gap-4 mb-8 justify-center">
          <Button
            label="Past"
            title="past events"
            onClick={() => setView("past")}
            className={clsx(
              "inline-flex h-9 w-24 m-2 items-center justify-center rounded-full text-black border-2 border-slate-400 shadow-md transition ease-in-out duration-400",
              view === "past"
                ? "pointer-events-none shadow-white duration-200 bg-customBlue" : "bg-white hover:bg-customBlue hover:shadow-white"
            )}
            labelClassName=""
          />
          <Button
            label="Future"
            title="future events"
            onClick={() => setView("future")}
            className={clsx(
              "inline-flex h-9 w-24 m-2 items-center justify-center rounded-full text-black border-2 border-slate-400 shadow-md transition ease-in-out duration-400",
              view === "future"
                ? "pointer-events-none shadow-white duration-200 bg-customBlue" : "bg-white hover:bg-customBlue hover:shadow-white"
            )}
            labelClassName=""
          />
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 w-full z-50 p-6">
        {view === "future" ? (
          upComingEvents.length > 0 ? (
            upComingEvents
              .slice(0, numberOfEventsToShow)
              .map((event) => (
                <CalendarEventDisplay
                  id={event.id}
                  key={event.id}
                  title={event.title}
                  date={
                    typeof event.date === "string"
                      ? event.date
                      : event.date?.toISOString().slice(0, 10)
                  }
                  dayOfWeek={event}
                  time={event.time}
                  cost={event.cost}
                  venueName={event.venue_name}
                  venueStreetAddress={event.venue_street_address}
                  venueCity={event.venue_city}
                  venueState={event.venue_state}
                  venueZip={event.venue_zip}
                  description={event.description}
                  image={event.image}
                  ticketLink={event.ticket_link}
                  moreInfoLink={event.more_info_link}
                  venueLink={event.venue_link}
                  eventLink={event.event_link}
                />
              ))
          ) : (
            // no upcoming events
            <div className="col-span-full text-center ">
              <p>
                No upcoming shows are currently scheduled. </p>
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
                id={event.id}
                key={event.id}
                title={event.title}
                date={
                  typeof event.date === "string"
                    ? event.date
                    : event.date?.toISOString().slice(0, 10)
                }
                dayOfWeek={event.day_of_week}
                time={event.time}
                cost={event.cost}
                venueName={event.venue_name}
                venueStreetAddress={event.venue_street_address}
                venueCity={event.venue_city}
                venueState={event.venue_state}
                venueZip={event.venue_zip}
                description={event.description}
                image={event.image}
                ticketLink={event.ticket_link}
                moreInfoLink={event.more_info_link}
                venueLink={event.venue_link}
                eventLink={event.event_link}
              />
            ))
          : null}
      </div>
    </section>
  );
}
