"use client";
// import from react
import { useState } from "react";
// import from next
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
// import actions
import { deleteCalendarEvent } from "@/actions/actions";
// import components
import Heading from "./heading";
import GoogleMapsLink from "./google-maps-link";
import Button from "./button";
import CalendarEventForm from "./admin/calendar-event-form";
// import from utils
import { formatDate, formatTime } from "../utils/utils";
// import definitions
import { CalendarEvent } from "@/definitions/definitions";
// import from react icons
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { MdOutlineContentCopy } from "react-icons/md";

interface CalendarEventProps {
  id: string;
  title: string;
  date: string;
  dayOfWeek: string;
  time: string;
  cost: string;
  venueName: string;
  venueStreetAddress: string;
  venueCity: string;
  venueState: string;
  venueZip: string;
  image?: string;
  description?: string;
  ticketLink?: string;
  venueLink?: string;
  eventLink?: string;
  moreInfoLink?: string;
}

export default function CalendarEventDisplay({
  id,
  title,
  date,
  dayOfWeek,
  time,
  cost,
  venueName,
  venueStreetAddress,
  venueCity,
  venueState,
  venueZip,
  description,
  image,
  ticketLink,
  venueLink,
  eventLink,
  moreInfoLink,
}: CalendarEventProps) {
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [duplicateModalOpen, setDuplicateModalOpen] = useState(false);
  const formattedDate = formatDate(date);
  // const formattedEndDate = endDate ? formatDate(endDate) : undefined;
  const formattedTime = formatTime(time);

  const pathname = usePathname();
  const isAdminPath = pathname.startsWith("/admin");
  // console.log("image", image);
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
      <section className="border-2 border-slate-400 bg-[rgba(0,0,0,0.6)] rounded-3xl shadow-md shadow-white flex flex-col justify-center items-center p-8 text-lg">
        <Image
          src={`${image}`}
          alt="Show poster"
          width={300}
          height={425}
          className="shadow-md shadow-white rounded-3xl border-2 border-slate-400"
        />
        <div className="mt-8 space-y-2 text-center">
          <div className="w-full flex flex-col items-center">
            <p>{dayOfWeek}</p>
            <p>{formattedDate}</p>
            <p>{formattedTime}</p>
          </div>
          <div className="w-full">
            <Link href={`/shows/${id}`} title={`View details for ${title}`}>
              <Heading
                text={title}
                headingLevel={3}
                className="text-xl md:text-2xl font-bold hover:underline hover:decoration-hoverBlue wrap-break-word whitespace-normal min-w-[16rem] max-w-[16rem]"
              />
            </Link>
          </div>

          <p className="w-full text-lg md:text-xl">
            {venueLink ? (
              <a
                href={venueLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline hover:decoration-hoverBlue">
                {venueName}
              </a>
            ) : (
              venueName
            )}
          </p>

          <p className="text-xl">
            {cost && cost.toLowerCase() !== "free" ? `${cost}` : "Free"}
          </p>
          <GoogleMapsLink
            addressLineOne={venueStreetAddress}
            addressLineTwo={""}
            city={venueCity}
            state={venueState}
            zipCode={venueZip}
            className="hover:underline hover:decoration-hoverBlue"
          />
          <div className="flex flex-col items-center space-y-2">
            {ticketLink && (
              <a
                href={ticketLink}
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:underline hover:decoration-hoverBlue">
                Tickets
              </a>
            )}
            {moreInfoLink && (
              <a
                href={moreInfoLink}
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:underline hover:decoration-hoverBlue">
                More Info
              </a>
            )}
          </div>

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
          {!isAdminPath && (
            <a
              href={`/api/shows/${id}/calendar`}
              className="inline-block underline hover:decoration-hoverBlue">
              Add to calendar
            </a>
          )}
         
        </div>
      </section>
      {editModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 px-8 md:px-0">
          <div className=" rounded-3xl shadow-2xl p-6 max-w-lg w-full relative max-h-[90vh] overflow-y-auto">
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
              initialDate={date}
              initialDayOfWeek={dayOfWeek}
              initialTime={time}
              initialCost={cost}
              initialVenueName={venueName}
              initialVenueStreetAddress={venueStreetAddress}
              initialVenueCity={venueCity}
              initialVenueState={venueState}
              initialVenueZip={venueZip}
              initialDescription={description}
              initialImage={image}
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
          <div className=" rounded-3xl shadow-2xl p-6 max-w-lg w-full relative max-h-[90vh] overflow-y-auto">
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
              initialDate={date}
              initialDayOfWeek={dayOfWeek}
              initialTime={time}
              initialCost={cost}
              initialVenueName={venueName}
              initialVenueStreetAddress={venueStreetAddress}
              initialVenueCity={venueCity}
              initialVenueState={venueState}
              initialVenueZip={venueZip}
              initialDescription={description}
              initialImage={image}
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
