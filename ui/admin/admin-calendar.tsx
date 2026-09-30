"use client";
// import from react
import { useState } from "react";
// import icons
// import { IoIosCopy } from "react-icons/io";
// import components
import Button from "../button";
// import CalendarEventDisplay from "../calendar-event-display";
import CalendarEventForm from "./calendar-event-form";
import CalendarClientContainer from "../calendar-client-container";
import ShowDisplay from "../show-display";

interface AdminCalendarProps {
  calendarEventRows: any[];
}

export default function AdminCalendar({
  calendarEventRows,
}: AdminCalendarProps) {
  const [view, setView] = useState<"viewEvents" | "addEvent">("viewEvents");
  const upComingEvents = calendarEventRows.filter((event) => {
    const eventDate = new Date(event.start_date);
    const currentDate = new Date();
    return eventDate >= currentDate;
  });
  const pastEvents = calendarEventRows.filter((event) => {
    const eventDate = new Date(event.start_date);
    const currentDate = new Date();
    return eventDate < currentDate;
  });
  if (view === "viewEvents") {
    return (
      <div className="w-full flex flex-col space-y-6 items-center">
        <div className="flex gap-4">
          <Button
            label="View Events"
            onClick={() => setView("viewEvents")}
            ariaLabel="View Events"
            className="rounded-full px-4 py-2 border-2 shadow-md shadow-white border-slate-400 bg-customBlue text-black pointer-events-none transition duration-400"
          />
          <Button
            label="Add Event"
            onClick={() => setView("addEvent")}
            ariaLabel="Add Event"
            className="rounded-full px-4 py-2 border-2 border-slate-400 bg-gray-200 text-gray-800 hover:shadow-md hover:shadow-white hover:bg-customBlue transition duration-400 active:scale-95"
          />
        </div>
        <div className="px-8">
          <CalendarClientContainer
            upComingEvents={upComingEvents}
            pastEvents={pastEvents}
          />
        </div>
        {/* <ShowDisplay
      
        /> */}
      </div>
    );
  } else if (view === "addEvent") {
    return (
      <div className="w-full flex flex-col space-y-6 items-center">
        <div className="flex gap-4">
          <Button
            label="View Events"
            onClick={() => setView("viewEvents")}
            ariaLabel="View Events"
            className="rounded-full px-4 py-2 border-2 border-slate-400 bg-gray-200 text-gray-800 hover:shadow-md hover:shadow-white hover:bg-customBlue transition duration-400 active:scale-95"
          />
          <Button
            label="Add Event"
            onClick={() => setView("addEvent")}
            ariaLabel="Add Event"
            className="rounded-full px-4 py-2 border-2 shadow-md shadow-white border-slate-400 bg-customBlue text-black pointer-events-none transition duration-400"
          />
        </div>
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
    );
  } else {
    return null;
  }
}
