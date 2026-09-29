"use client";
// import from react
import { useState, useEffect } from "react";
// import actions
import {
  createCalendarEvent,
  updateCalendarEvent,
} from "../../actions/actions";
// import components
import FormInput from "../form-input";
import Button from "../button";
import Heading from "../heading";

interface CalendarEventFormProps {
  mode: "create" | "edit";
  eventId: string;
  initialTitle: string;
  initialDate: string;
  initialDayOfWeek: string;
  initialTime: string;
  initialCost: string;
  initialVenueName: string;
  initialVenueStreetAddress: string;
  initialVenueCity: string;
  initialVenueState: string;
  initialVenueZip: string;
  initialDescription?: string;
  initialImage?: string;
  initialTicketLink?: string;
  initialEventLink?: string;
  initialVenueLink?: string;
  initialMoreInfoLink?: string;
  onClose: () => void;
}

export default function CalendarEventForm({
  mode,
  eventId,
  initialTitle,
  initialDate,
  initialDayOfWeek,
  initialTime,
  initialCost,
  initialVenueName,
  initialVenueStreetAddress,
  initialVenueCity,
  initialVenueState,
  initialVenueZip,
  initialDescription,
  initialImage,
  initialTicketLink,
  initialEventLink,
  initialVenueLink,
  initialMoreInfoLink,
  onClose,
}: CalendarEventFormProps) {
  const [id, setId] = useState(1);

  // initialize state with initial props for editing, or empty/default for create ---
  const [eventTitle, setEventTitle] = useState(initialTitle || "");
  const [date, setDate] = useState(initialDate || "");
  const [dayOfWeek, setDayOfWeek] = useState(initialDayOfWeek || "");
  const [time, setTime] = useState(initialTime || "");
  const [cost, setCost] = useState(initialCost || "");
  const [venueName, setVenueName] = useState(initialVenueName || "");
  const [venueStreetAddress, setVenueStreetAddress] = useState(
    initialVenueStreetAddress || "",
  );
  const [venueCity, setVenueCity] = useState(initialVenueCity || "");
  const [venueState, setVenueState] = useState(initialVenueState || "");
  const [venueZip, setVenueZip] = useState(initialVenueZip || "");
  const [description, setDescription] = useState(initialDescription || "");
  const [image, setImage] = useState(initialImage || "");
  const [ticketLink, setTicketLink] = useState(initialTicketLink || "");
  const [eventLink, setEventLink] = useState(initialEventLink || "");
  const [venueLink, setVenueLink] = useState(initialVenueLink || "");
  const [moreInfoLink, setMoreInfoLink] = useState(initialMoreInfoLink || "");
  const [dateTouched, setDateTouched] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // update state if initial props change (for editing different events)
  useEffect(() => {
    setEventTitle(initialTitle || "");
    setDate(initialDate || "");
    setDayOfWeek(initialDayOfWeek || "");
    // setEndDate(initialEndDate || "");
    setTime(initialTime || "");
    // setEndTime(initialEndTime || "");
    // setAllDay(initialAllDay || false);
    setCost(initialCost || "");
    setVenueName(initialVenueName || "");
    setVenueStreetAddress(initialVenueStreetAddress || "");
    setVenueCity(initialVenueCity || "");
    setVenueState(initialVenueState || "");
    setVenueZip(initialVenueZip || "");
    setDescription(initialDescription || "");
    setImage(initialImage || "");
    setTicketLink(initialTicketLink || "");
    setEventLink(initialEventLink || "");
    setVenueLink(initialVenueLink || "");
    setMoreInfoLink(initialMoreInfoLink || "");
  }, [
    initialTitle,
    initialDate,
    initialDayOfWeek,
    // initialEndDate,
    initialTime,
    // initialEndTime,
    // initialAllDay,
    initialCost,
    initialVenueName,
    initialVenueStreetAddress,
    initialVenueCity,
    initialVenueState,
    initialVenueZip,
    initialDescription,
    initialImage,
    initialTicketLink,
    initialEventLink,
    initialVenueLink,
    initialMoreInfoLink,
  ]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    setStateVariable: React.Dispatch<React.SetStateAction<string>>,
  ) => {
    const value = e.target.value;
    setStateVariable(value);
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!eventTitle) newErrors.eventTitle = "Event title is required";
    if (!date) newErrors.date = "Date is required";
    if (!time) newErrors.time = "Time is required";
    // if (!cost) newErrors.cost = "Cost is required";
    if (!venueName) newErrors.venueName = "Venue name is required";
    if (!venueStreetAddress)
      newErrors.venueStreetAddress = "Street address is required";
    if (!venueCity) newErrors.venueCity = "City is required";
    if (!venueState) newErrors.venueState = "State is required";
    if (!venueZip) newErrors.venueZip = "Zip code is required";
    return newErrors;
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      // Optionally, scroll to first error or focus
      setDateTouched(true);
      return;
    }

    try {
      if (mode === "edit") {
        await updateCalendarEvent({
          id: eventId,
          title: eventTitle,
          date: new Date(date),
          dayOfWeek,
          time: time,
          cost: cost,
          venueName,
          venueStreetAddress,
          venueCity,
          venueState,
          venueZip,
          description,
          ticketLink,
          eventLink,
          venueLink,
          moreInfoLink,
          image: image,
        });
        alert("Event updated successfully!");
        onClose();
      } else {
        await createCalendarEvent({
          title: eventTitle,
          date: new Date(date),
          dayOfWeek,
          time: time,
          cost: cost,
          venueName,
          venueStreetAddress,
          venueCity,
          venueState,
          venueZip,
          description,
          ticketLink,
          eventLink,
          venueLink,
          moreInfoLink,
          image: image,
          id: 0,
          createdAt: new Date(),
        });
        setEventTitle("");
        setDate("");
        setTime("");
        setCost("");
        setVenueName("");
        setVenueStreetAddress("");
        setVenueCity("");
        setVenueState("");
        setVenueZip("");
        setDescription("");
        setImage("");
        setTicketLink("");
        setEventLink("");
        setVenueLink("");
        setMoreInfoLink("");
        setErrors({});
        setDateTouched(false);
        alert("Event created successfully!");
      }
    } catch (err) {
      console.error("Error saving calendar event:", err);
      alert(
        "An error occurred while saving the event. Please try again later.",
      );
    }
  };

  return (
    <div className="flex flex-col space-y-4 w-full">
      <Heading
        headingLevel={2}
        className="text-center text-2xl font-bold"
        text={mode === "edit" ? "Edit event" : "Add a new event"}
      />
      <form onSubmit={handleFormSubmit}>
        <FormInput
          label="Event Title"
          name="eventTitle"
          inputType="input"
          type="text"
          placeholder=""
          value={eventTitle}
          required={true}
          autoComplete="off"
          errorMessage={errors.eventTitle || ""}
          handleChange={(e) => handleChange(e, setEventTitle)}
          setStateVariable={setEventTitle}
        />
        <div className="flex flex-col justify-start w-full">
          <label className="m-2 text-left text-base" htmlFor="date">
            Date*
            <span className="text-xs"> (required)</span>
          </label>
          <input
            type="date"
            id="date"
            name="date"
            required
            className="shadow-md shadow-white border-2 border-slate-400 p-2 max-w-xs w-full text-black placeholder-neutral-800 rounded-3xl bg-neutral-100 tracking-wide h-10"
            value={date}
            autoComplete="off"
            onChange={(e) => setDate(e.target.value)}
            onBlur={() => setDateTouched(true)}
          />
          <p
            className="text-red-200 text-xs mt-1 ml-2 min-h-5 transition-opacity duration-300"
            style={{
              visibility:
                (dateTouched && !date) || errors.date ? "visible" : "hidden",
              opacity: (dateTouched && !date) || errors.date ? 1 : 0,
            }}>
            {(dateTouched && !date) || errors.date
              ? errors.date || "Date is required"
              : " "}
          </p>
        </div>

        <FormInput
          label="Time"
          name="time"
          inputType="input"
          type="text"
          placeholder=""
          value={time}
          required={true}
          autoComplete="off"
          errorMessage={errors.time || ""}
          handleChange={(e) => handleChange(e, setTime)}
          setStateVariable={setTime}
        />
        <FormInput
          label="Cost"
          name="cost"
          inputType="input"
          type="text"
          placeholder=""
          value={cost}
          required={true}
          autoComplete="off"
          errorMessage={errors.cost || ""}
          handleChange={(e) => handleChange(e, setCost)}
          setStateVariable={setCost}
        />
        <FormInput
          label="Venue Name"
          name="venueName"
          inputType="input"
          type="text"
          placeholder=""
          value={venueName}
          required={true}
          autoComplete="off"
          errorMessage={errors.venueName || ""}
          handleChange={(e) => handleChange(e, setVenueName)}
          setStateVariable={setVenueName}
        />
        <FormInput
          label="Venue Street Address"
          name="venueStreetAddress"
          inputType="input"
          type="text"
          placeholder=""
          value={venueStreetAddress}
          required={true}
          autoComplete="off"
          errorMessage={errors.venueStreetAddress || ""}
          handleChange={(e) => handleChange(e, setVenueStreetAddress)}
          setStateVariable={setVenueStreetAddress}
        />
        <FormInput
          label="City"
          name="venueCity"
          inputType="input"
          type="text"
          placeholder=""
          value={venueCity}
          required={true}
          autoComplete="off"
          errorMessage={errors.venueCity || ""}
          handleChange={(e) => handleChange(e, setVenueCity)}
          setStateVariable={setVenueCity}
        />
        <FormInput
          label="State"
          name="venueState"
          inputType="input"
          type="text"
          placeholder=""
          value={venueState}
          required={true}
          autoComplete="off"
          errorMessage={errors.venueState || ""}
          handleChange={(e) => handleChange(e, setVenueState)}
          setStateVariable={setVenueState}
        />
        <FormInput
          label="Zip Code"
          name="venueZip"
          inputType="input"
          type="text"
          placeholder=""
          value={venueZip}
          required={true}
          autoComplete="off"
          errorMessage={errors.venueZip || ""}
          handleChange={(e) => handleChange(e, setVenueZip)}
          setStateVariable={setVenueZip}
        />
        <FormInput
          label="Description"
          name="description"
          inputType="textarea"
          type="text"
          placeholder=""
          value={description}
          required={false}
          autoComplete="off"
          errorMessage=""
          handleChange={(e) => handleChange(e, setDescription)}
          setStateVariable={setDescription}
        />
        <FormInput
          label="Image"
          name="image"
          inputType="input"
          type="text"
          placeholder=""
          value={image}
          required={false}
          autoComplete="off"
          errorMessage=""
          handleChange={(e) => handleChange(e, setImage)}
          setStateVariable={setImage}
        />
        <FormInput
          label="Ticket Link"
          name="ticketLink"
          inputType="input"
          type="text"
          placeholder=""
          value={ticketLink}
          required={false}
          autoComplete="off"
          errorMessage=""
          handleChange={(e) => handleChange(e, setTicketLink)}
          setStateVariable={setTicketLink}
        />
        <FormInput
          label="More Info Link"
          name="moreInfoLink"
          inputType="input"
          type="text"
          placeholder=""
          value={moreInfoLink}
          required={false}
          autoComplete="off"
          errorMessage=""
          handleChange={(e) => handleChange(e, setMoreInfoLink)}
          setStateVariable={setMoreInfoLink}
        />
        <FormInput
          label="Event Link"
          name="eventLink"
          inputType="input"
          type="text"
          placeholder=""
          value={eventLink}
          required={false}
          autoComplete="off"
          errorMessage=""
          handleChange={(e) => handleChange(e, setEventLink)}
          setStateVariable={setEventLink}
        />
        <FormInput
          label="Venue Link"
          name="venueLink"
          inputType="input"
          type="text"
          placeholder=""
          value={venueLink}
          required={false}
          autoComplete="off"
          errorMessage=""
          handleChange={(e) => handleChange(e, setVenueLink)}
          setStateVariable={setVenueLink}
        />
        <div className="flex justify-center mt-4">
          <Button
            label={mode === "edit" ? "Edit Event" : "Create Event"}
            onClick={handleFormSubmit}
            ariaLabel={mode === "edit" ? "Edit Event" : "Create Event"}
            className="bg-customBlue text-black rounded-full px-4 py-2 transition duration-200"
          />
          <Button
            label="Cancel"
            onClick={onClose}
            ariaLabel="Cancel"
            className="ml-2 bg-gray-400 text-black rounded-full px-4 py-2 transition duration-200"
            type="button"
          />
        </div>
      </form>
    </div>
  );
}
