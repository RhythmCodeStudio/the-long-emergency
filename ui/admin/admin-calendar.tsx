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
            label="view events"
            onClick={() => setView("events")}
            ariaLabel="View Events"
            className="bg-blue-600 text-white pointer-events-none rounded-full px-4 py-2 transition duration-200"
          />
          <Button
            label="add event"
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
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full justify-items-center px-4">  
          {calendarEventRows.map((event: any) => (
            <CalendarEventDisplay
              key={event.id}
              id={event.id}
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
            />
          ))}
        </div> */}
      </div>
    );
  } else if (view === "addEvent") {
    return (
      <div className="w-full flex flex-col space-y-6 items-center">
        <div className="flex gap-4">
          <Button
            label="view events"
            onClick={() => setView("events")}
            ariaLabel="view events"
            className="bg-gray-200 text-gray-800 rounded-full px-4 py-2 transition duration-200"
          />
          <Button
            label="add event"
            onClick={() => setView("addEvent")}
            ariaLabel="add event"
            className="bg-blue-600 text-white pointer-events-none rounded-full px-4 py-2 transition duration-200"
          />
        </div>
        <CalendarEventForm
          mode="create"
          eventId=""
          initialTitle=""
          initialStartDate=""
          initialEndDate=""
          initialStartTime=""
          initialEndTime=""
          initialAllDay={false}
          initialCost=""
          initialLocationName=""
          initialLocationStreetAddress=""
          initialLocationCity=""
          initialLocationState=""
          initialLocationZip=""
          initialDescription=""
          initialImageUrl=""
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
