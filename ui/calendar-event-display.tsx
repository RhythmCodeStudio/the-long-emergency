"use client";
// import from react
import { useState } from "react";
// import from next
import { usePathname } from "next/navigation";
import Link from "next/link";
// import Image from "next/image";
// import actions
import { deleteCalendarEvent } from "@/actions/actions";
// import components
import Heading from "./heading";
import GoogleMapsLink from "./google-maps-link";
import Button from "./button";
import CalendarEventForm from "./admin/calendar-event-form";
// import from utils
import { formatDate } from "../utils/utils";
// import from react icons
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { MdOutlineContentCopy } from "react-icons/md";

interface CalendarEventProps {
  id: string;
  title: string;
  startDate: string;
  endDate?: string;
  startTime: string;
  endTime?: string;
  allDay: boolean;
  cost: string;
  locationName: string;
  locationStreetAddress: string;
  locationCity: string;
  locationState: string;
  locationZip: string;
  imageUrl?: string;
  description?: string;
  ticketLink?: string;
  venueLink?: string;
  eventLink?: string;
  moreInfoLink?: string;
}

export default function CalendarEventDisplay({
  id,
  title,
  startDate,
  endDate,
  startTime,
  endTime,
  allDay,
  cost,
  locationName,
  locationStreetAddress,
  locationCity,
  locationState,
  locationZip,
  description,
  imageUrl,
  ticketLink,
  venueLink,
  eventLink,
  moreInfoLink,
}: CalendarEventProps) {
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [duplicateModalOpen, setDuplicateModalOpen] = useState(false);
  const formattedStartDate = formatDate(startDate);
  const formattedEndDate = endDate ? formatDate(endDate) : undefined;

  const pathname = usePathname();

  const handleDelete = async () => {
    if (confirm("Are you sure you want to delete this event?")) {
      await deleteCalendarEvent(id);
      // Option 1: Reload the page
      window.location.reload();
      // Option 2: Call a passed-in onDelete callback to update state in parent (preferred for SPA)
    }
  };

  const handleModalToggle = () => {
    setEditModalOpen(!editModalOpen);
  };

  const handleDuplicateModalToggle = () => {
    setDuplicateModalOpen(!duplicateModalOpen);
  };

  return (
    <>
      <section className="rainbow-gradient border-border-default border-2 shadow-white shadow-lg rounded-4xl w-full md:min-w-[20rem] text-center font-semibold">
        <div className="w-full bg-black/50 rounded-4xl p-4 shadow-md shadow-white min-h-full flex flex-col items-center gap-1">
          <div className="w-full">
            <p className="text-shadow-black-background-black">
              {formattedStartDate}{" "}
              {formattedEndDate ? `- ${formattedEndDate}` : ""}
            </p>
            <p className="text-shadow-black-background-black">
              {startTime} {endTime ? `- ${endTime}` : ""}
            </p>
          </div>
          <Link
            href={`/calendar/events/${id}`}
            title={`View details for ${title}`}>
            <Heading
              text={title}
              headingLevel={3}
              className="text-lg md:text-xl font-bold text-shadow-black-background-black underline decoration-[#ff0000] wrap-break-word whitespace-normal min-w-[16rem] max-w-[16rem]"
            />
          </Link>
          {/* <div className="w-full"> */}
          <p className="text-shadow-black-background-black md:text-lg">
            {venueLink ? (
              <a
                href={venueLink}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-[#ff7f00]">
                {locationName}
              </a>
            ) : (
              locationName
            )}
          </p>
          <p className="text-shadow-black-background-black">
            {cost && cost.toLowerCase() !== "free" ? `${cost}` : "Free"}
          </p>
          <GoogleMapsLink
            addressLineOne={locationStreetAddress}
            addressLineTwo={""}
            city={locationCity}
            state={locationState}
            zipCode={Number(locationZip)}
            className="text-shadow-black-background-black underline decoration-[#ffff00]"
          />
          {ticketLink && (
            <a
              href={ticketLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-shadow-black-background-black underline decoration-[#00ff00]">
              Tickets
            </a>
          )}
          {moreInfoLink && (
            <a
              href={moreInfoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-shadow-black-background-black underline decoration-[#8b00ff]">
              More Info
            </a>
          )}

          {/* if pathname includes "admin", show edit button and delete button */}
          {pathname.includes("admin") && (
            <div className="mt-4 flex justify-center gap-4">
              <Button
                label="edit"
                onClick={handleModalToggle}
                icon={<MdEdit size={20} />}
              />
              <Button
                label="duplicate"
                onClick={handleDuplicateModalToggle}
                icon={<MdOutlineContentCopy size={20} />}
              />
              <Button
                label="delete"
                onClick={handleDelete}
                icon={<MdDelete size={20} />}
              />
            </div>
          )}
          {/* </div> */}
        </div>
      </section>
      {editModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 px-8 md:px-0">
          <div className="rainbow-gradient rounded-2xl shadow-2xl p-6 max-w-lg w-full relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={handleModalToggle}
              className="absolute top-2 right-2 text-black hover:text-black text-4xl"
              aria-label="Close"
              type="button">
              &times;
            </button>
            <CalendarEventForm
              mode="edit"
              eventId={id}
              initialTitle={title}
              initialStartDate={startDate}
              initialEndDate={endDate}
              initialStartTime={startTime}
              initialEndTime={endTime}
              initialAllDay={allDay}
              initialCost={cost}
              initialLocationName={locationName}
              initialLocationStreetAddress={locationStreetAddress}
              initialLocationCity={locationCity}
              initialLocationState={locationState}
              initialLocationZip={locationZip}
              initialDescription={description}
              initialImageUrl={imageUrl}
              initialTicketLink={ticketLink}
              initialEventLink={eventLink}
              initialVenueLink={venueLink}
              initialMoreInfoLink={moreInfoLink}
              onClose={handleModalToggle}
            />
          </div>
        </div>
      )}
      {duplicateModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 px-8 md:px-0">
          <div className="rainbow-gradient rounded-2xl shadow-2xl p-6 max-w-lg w-full relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setDuplicateModalOpen(false)}
              className="absolute top-2 right-2 text-black hover:text-black text-4xl"
              aria-label="Close"
              type="button">
              &times;
            </button>
            <CalendarEventForm
              mode="create"
              eventId=""
              initialTitle={title}
              initialStartDate={startDate}
              initialEndDate={endDate}
              initialStartTime={startTime}
              initialEndTime={endTime}
              initialAllDay={allDay}
              initialCost={cost}
              initialLocationName={locationName}
              initialLocationStreetAddress={locationStreetAddress}
              initialLocationCity={locationCity}
              initialLocationState={locationState}
              initialLocationZip={locationZip}
              initialDescription={description}
              initialImageUrl={imageUrl}
              initialTicketLink={ticketLink}
              initialEventLink={eventLink}
              initialVenueLink={venueLink}
              initialMoreInfoLink={moreInfoLink}
              onClose={() => setDuplicateModalOpen(false)}
            />
          </div>
        </div>
      )}
    </>
  );
}
