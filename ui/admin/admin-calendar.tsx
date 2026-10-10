"use client";
// import from react
import { useState } from "react";
// import icons
// import { IoIosCopy } from "react-icons/io";
// import components
import Button from "../button";
// import CalendarEventDisplay from "../calendar-event-display";
import CalendarEventForm from "./calendar-event-form";
import CalendarClientContainer from "./calendar-client-container";
// import ShowDisplay from "../show-display";

interface AdminCalendarProps {
  calendarEventRows: any[];
}

export default function AdminCalendar({
  calendarEventRows,
}: AdminCalendarProps) {
  const [view, setView] = useState<"viewEvents" | "addEvent">("viewEvents");
  const upComingEvents = calendarEventRows.filter((event) => {
    const eventDate = new Date(event.date);
    const currentDate = new Date();
    return eventDate >= currentDate;
  });
  const pastEvents = calendarEventRows.filter((event) => {
    const eventDate = new Date(event.date);
    const currentDate = new Date();
    return eventDate < currentDate;
  });
  const activeClass =
  "rounded-full px-4 py-2 border-2 shadow-md shadow-white border-slate-400 bg-customBlue text-black pointer-events-none transition duration-400 ease-in-out w-34";
const inactiveClass =
  "rounded-full px-4 py-2 border-2 border-slate-400 bg-gray-200 text-gray-800 hover:shadow-md hover:shadow-white hover:bg-customBlue transition duration-400 active:scale-95 w-34";

  return (
  <div className="w-full flex flex-col items-center">
    <div className="mt-4 flex justify-center gap-4">
      <Button
        label="View Events"
        ariaLabel="View Events"
        onClick={() => setView("viewEvents")}
        className={view === "viewEvents" ? activeClass : inactiveClass}
      />
      <Button
        label="Add Event"
        ariaLabel="Add Event"
        onClick={() => setView("addEvent")}
        className={view === "addEvent" ? activeClass : inactiveClass}
      />
    </div>

    {view === "viewEvents" ? (
      <div className="w-full">
        <CalendarClientContainer
          upComingEvents={upComingEvents}
          pastEvents={pastEvents}
        />
      </div>
    ) : (
      <div className="w-full mt-6">
        <CalendarEventForm
          mode="create"
          eventId=""
          initialTitle=""
          initialDate=""
          initialDayOfWeek=""
          initialTime=""
          initialCost=""
          initialVenueName=""
          initialVenueStreetAddress=""
          initialVenueCity=""
          initialVenueState=""
          initialVenueZip=""
          initialDescription=""
          initialImage=""
          initialTicketLink=""
          initialMoreInfoLink=""
          onClose={() => setView("viewEvents")}
        />
      </div>
    )}
  </div>
);
}