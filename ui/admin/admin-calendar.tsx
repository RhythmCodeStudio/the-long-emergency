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
  const [view, setView] = useState<"events" | "addEvent">("events");
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
  if (view === "events") {
    return (
      <div className="w-full flex flex-col space-y-6 items-center">
        <div className="flex gap-4">
          <Button
            label="View Events"
            onClick={() => setView("events")}
            ariaLabel="View Events"
            className="bg-customBlue text-black pointer-events-none rounded-full px-4 py-2 transition duration-200"
          />
          <Button
            label="Add Event"
            onClick={() => setView("addEvent")}
            ariaLabel="Add Event"
            className="bg-gray-200 text-gray-800 rounded-full px-4 py-2 transition duration-200"
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
            onClick={() => setView("events")}
            ariaLabel="view events"
            className="bg-gray-200 text-gray-800 rounded-full px-4 py-2 transition duration-200"
          />
          <Button
            label="Add Event"
            onClick={() => setView("addEvent")}
            ariaLabel="Add Event"
            className="bg-customBlue pointer-events-none rounded-full px-4 py-2 transition duration-200"
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
          onClose={() => setView("events")}
        />
      </div>
    );
  } else {
    return null;
  }
}
