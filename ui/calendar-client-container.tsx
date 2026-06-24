"use client";
// import from react
import { useState } from "react";
// import from next
import { usePathname } from "next/navigation";
import Link from "next/link";
// import components
import CalendarEventDisplay from "./calendar-event-display";
import Button from "./button";
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

  return (
    <section
      className={
        isAdminPath && !showViewToggle
          ? "w-full flex flex-col items-center"
          : !isAdminPath && !showViewToggle
            ? "w-full flex flex-col items-center p-8"
            : "bg-black/50 rounded-(--container-radius) shadow-lg shadow-white border-2 border-border-default w-full flex flex-col items-center p-(--container-padding) my-8 [--container-radius:var(--radius-4xl)] [--container-padding:--spacing(8)]"
      }>
      {showViewToggle && (
        <div className="flex flex-row gap-4 mb-8 justify-center">
          <Button
            label="past"
            title="past events"
            onClick={() => setView("past")}
            className={clsx(
              "w-22 text-white rounded-full border-border-default border-2 shadow-white shadow-md px-4 py-1 active:scale-95 transition duration-200 ease-in-out rainbow-gradient-hover",
              view === "past"
                ? "rainbow-gradient pointer-events-none"
                : "bg-black/50 hover:shadow-lg",
            )}
            labelClassName="text-shadow-black-background-black"
          />
          <Button
            label="future"
            title="future events"
            onClick={() => setView("future")}
            className={clsx(
              "w-22 text-white rounded-full border-border-default border-2 shadow-white shadow-md px-4 py-1 active:scale-95 transition duration-200 ease-in-out rainbow-gradient-hover",
              view === "future"
                ? "rainbow-gradient pointer-events-none"
                : "bg-black/50 hover:shadow-lg",
            )}
            labelClassName="text-shadow-black-background-black"
          />
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 w-full z-50">
        {view === "future" ? (
          upComingEvents.length > 0 ? (
            upComingEvents
              .slice(0, numberOfEventsToShow)
              .map((event) => (
                <CalendarEventDisplay
                  id={event.id}
                  key={event.id}
                  title={event.title}
                  startDate={
                    typeof event.start_date === "string"
                      ? event.start_date
                      : event.start_date?.toISOString().slice(0, 10)
                  }
                  endDate={
                    event.end_date
                      ? typeof event.end_date === "string"
                        ? event.end_date
                        : event.end_date?.toISOString().slice(0, 10)
                      : undefined
                  }
                  startTime={event.start_time}
                  endTime={event.end_time}
                  allDay={event.all_day}
                  cost={event.cost}
                  locationName={event.location_name}
                  locationStreetAddress={event.location_street_address}
                  locationCity={event.location_city}
                  locationState={event.location_state}
                  locationZip={event.location_zip}
                  description={event.description}
                  imageUrl={event.image}
                  ticketLink={event.ticket_link}
                  moreInfoLink={event.more_info_link}
                  venueLink={event.venue_link}
                  eventLink={event.event_link}
                />
              ))
          ) : (
            // no upcoming events
            <div className="col-span-full text-center text-shadow-black-background-black">
              <p>
                No events currently scheduled. Please{" "}
                <Link href="/contact">
                  <span className="underline">contact</span>
                </Link>{" "}
                for booking.
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
                startDate={
                  typeof event.start_date === "string"
                    ? event.start_date
                    : event.start_date?.toISOString().slice(0, 10)
                }
                endDate={
                  event.end_date
                    ? typeof event.end_date === "string"
                      ? event.end_date
                      : event.end_date?.toISOString().slice(0, 10)
                    : undefined
                }
                startTime={event.start_time}
                endTime={event.end_time}
                allDay={event.all_day}
                cost={event.cost}
                locationName={event.location_name}
                locationStreetAddress={event.location_street_address}
                locationCity={event.location_city}
                locationState={event.location_state}
                locationZip={event.location_zip}
                description={event.description}
                imageUrl={event.image}
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
