"use client";
// import from react
import { useState, useEffect } from "react";
// import actions
import {
  createCalendarEvent,
  updateCalendarEvent,
} from "../../actions/actions";
// import components
import ContactFormInput from "../form-input";
import Button from "../button";
import Heading from "../heading";

interface CalendarEventFormProps {
  mode: "create" | "edit";
  eventId: string;
  initialTitle: string;
  initialStartDate: string;
  initialEndDate?: string;
  initialStartTime: string;
  initialEndTime?: string;
  initialAllDay: boolean;
  initialCost: string;
  initialLocationName: string;
  initialLocationStreetAddress: string;
  initialLocationCity: string;
  initialLocationState: string;
  initialLocationZip: string;
  initialDescription?: string;
  initialImageUrl?: string;
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
  initialStartDate,
  initialEndDate,
  initialStartTime,
  initialEndTime,
  initialAllDay,
  initialCost,
  initialLocationName,
  initialLocationStreetAddress,
  initialLocationCity,
  initialLocationState,
  initialLocationZip,
  initialDescription,
  initialImageUrl,
  initialTicketLink,
  initialEventLink,
  initialVenueLink,
  initialMoreInfoLink,
  onClose,
}: CalendarEventFormProps) {
  const [id, setId] = useState(1);

  // initialize state with initial props for editing, or empty/default for create ---
  const [eventTitle, setEventTitle] = useState(initialTitle || "");
  const [date, setDate] = useState(initialStartDate || "");
  const [endDate, setEndDate] = useState(initialEndDate || "");
  const [time, setTime] = useState(initialStartTime || "");
  const [endTime, setEndTime] = useState(initialEndTime || "");
  const [allDay, setAllDay] = useState(initialAllDay || false);
  const [cost, setCost] = useState(initialCost || "");
  const [locationName, setLocationName] = useState(initialLocationName || "");
  const [locationStreetAddress, setLocationStreetAddress] = useState(
    initialLocationStreetAddress || "",
  );
  const [locationCity, setLocationCity] = useState(initialLocationCity || "");
  const [locationState, setLocationState] = useState(
    initialLocationState || "",
  );
  const [locationZip, setLocationZip] = useState(initialLocationZip || "");
  const [description, setDescription] = useState(initialDescription || "");
  const [imageUrl, setImageUrl] = useState(initialImageUrl || "");
  const [ticketLink, setTicketLink] = useState(initialTicketLink || "");
  const [eventLink, setEventLink] = useState(initialEventLink || "");
  const [venueLink, setVenueLink] = useState(initialVenueLink || "");
  const [moreInfoLink, setMoreInfoLink] = useState(initialMoreInfoLink || "");
  const [dateTouched, setDateTouched] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // --- CHANGED: update state if initial props change (for editing different events) ---
  useEffect(() => {
    setEventTitle(initialTitle || "");
    setDate(initialStartDate || "");
    setEndDate(initialEndDate || "");
    setTime(initialStartTime || "");
    setEndTime(initialEndTime || "");
    setAllDay(initialAllDay || false);
    setCost(initialCost || "");
    setLocationName(initialLocationName || "");
    setLocationStreetAddress(initialLocationStreetAddress || "");
    setLocationCity(initialLocationCity || "");
    setLocationState(initialLocationState || "");
    setLocationZip(initialLocationZip || "");
    setDescription(initialDescription || "");
    setImageUrl(initialImageUrl || "");
    setTicketLink(initialTicketLink || "");
    setEventLink(initialEventLink || "");
    setVenueLink(initialVenueLink || "");
    setMoreInfoLink(initialMoreInfoLink || "");
  }, [
    initialTitle,
    initialStartDate,
    initialEndDate,
    initialStartTime,
    initialEndTime,
    initialAllDay,
    initialCost,
    initialLocationName,
    initialLocationStreetAddress,
    initialLocationCity,
    initialLocationState,
    initialLocationZip,
    initialDescription,
    initialImageUrl,
    initialTicketLink,
    initialEventLink,
    initialVenueLink,
    initialMoreInfoLink,
  ]);
  // --- END CHANGES ---

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
    if (!locationName) newErrors.locationName = "Location name is required";
    if (!locationStreetAddress)
      newErrors.locationStreetAddress = "Street address is required";
    if (!locationCity) newErrors.locationCity = "City is required";
    if (!locationState) newErrors.locationState = "State is required";
    if (!locationZip) newErrors.locationZip = "Zip code is required";
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
          startDate: new Date(date),
          endDate: endDate ? new Date(endDate) : undefined,
          startTime: time,
          endTime: endTime ? endTime : undefined,
          allDay: allDay,
          cost: cost,
          locationName,
          locationStreetAddress,
          locationCity,
          locationState,
          locationZip,
          description,
          ticketLink,
          eventLink,
          venueLink,
          moreInfoLink,
          image: imageUrl,
        });
        alert("Event updated successfully!");
        onClose();
      } else {
        await createCalendarEvent({
          title: eventTitle,
          startDate: new Date(date),
          endDate: endDate ? new Date(endDate) : undefined,
          startTime: time,
          endTime: endTime ? endTime : undefined,
          allDay: allDay,
          cost: cost,
          locationName,
          locationStreetAddress,
          locationCity,
          locationState,
          locationZip,
          description,
          ticketLink,
          eventLink,
          venueLink,
          moreInfoLink,
          image: imageUrl,
        });
        setEventTitle("");
        setDate("");
        setEndDate("");
        setTime("");
        setEndTime("");
        setAllDay(false);
        setCost("");
        setLocationName("");
        setLocationStreetAddress("");
        setLocationCity("");
        setLocationState("");
        setLocationZip("");
        setDescription("");
        setImageUrl("");
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
        text={mode === "edit" ? "edit event" : "add a new event"}
      />
      <form onSubmit={handleFormSubmit}>
        <ContactFormInput
          label="event title"
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
            date*
            <span className="text-xs"> (required)</span>
          </label>
          <input
            type="date"
            id="date"
            name="date"
            required
            className="shadow-md shadow-green-500/50 border-2 border-green-500 p-2 max-w-xs w-full text-black placeholder-neutral-800 rounded-2xl bg-neutral-100 tracking-wide h-10"
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
        <div className="flex flex-col justify-start w-full mb-4">
          <label className="m-2 text-left text-base" htmlFor="endDate">
            end date
          </label>
          <input
            type="date"
            id="endDate"
            name="endDate"
            className="shadow-md shadow-green-500/50 border-2 border-green-500 p-2 text-black placeholder-neutral-800 rounded-2xl bg-neutral-100 tracking-wide h-10 w-full"
            value={endDate}
            autoComplete="off"
            onChange={(e) => setDate(e.target.value)}
            // onBlur={() => setDateTouched(true)}
          />
          {/* <p
            className="text-red-200 text-xs mt-1 ml-2 min-h-[1.25rem] transition-opacity duration-300"
            style={{
              visibility: (dateTouched && !date) || errors.date ? "visible" : "hidden",
              opacity: (dateTouched && !date) || errors.date ? 1 : 0,
            }}>
            {(dateTouched && !date) || errors.date ? (errors.date || "Date is required") : " "}
          </p> */}
        </div>
        <ContactFormInput
          label="time"
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
        <ContactFormInput
          label="end time"
          name="endTime"
          inputType="input"
          type="text"
          placeholder=""
          value={endTime}
          required={false}
          autoComplete="off"
          errorMessage=""
          handleChange={(e) => handleChange(e, setEndTime)}
          setStateVariable={setEndTime}
        />
        <input
          type="checkbox"
          checked={allDay}
          onChange={() => setAllDay(!allDay)}
          className="ml-2 mt-4 mb-6"
        />
        <label htmlFor="allDay" className="ml-4">
          all day event
        </label>
        <ContactFormInput
          label="cost"
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
        <ContactFormInput
          label="location name"
          name="locationName"
          inputType="input"
          type="text"
          placeholder=""
          value={locationName}
          required={true}
          autoComplete="off"
          errorMessage={errors.locationName || ""}
          handleChange={(e) => handleChange(e, setLocationName)}
          setStateVariable={setLocationName}
        />
        <ContactFormInput
          label="location street address"
          name="locationStreetAddress"
          inputType="input"
          type="text"
          placeholder=""
          value={locationStreetAddress}
          required={true}
          autoComplete="off"
          errorMessage={errors.locationStreetAddress || ""}
          handleChange={(e) => handleChange(e, setLocationStreetAddress)}
          setStateVariable={setLocationStreetAddress}
        />
        <ContactFormInput
          label="city"
          name="locationCity"
          inputType="input"
          type="text"
          placeholder=""
          value={locationCity}
          required={true}
          autoComplete="off"
          errorMessage={errors.locationCity || ""}
          handleChange={(e) => handleChange(e, setLocationCity)}
          setStateVariable={setLocationCity}
        />
        <ContactFormInput
          label="state"
          name="locationState"
          inputType="input"
          type="text"
          placeholder=""
          value={locationState}
          required={true}
          autoComplete="off"
          errorMessage={errors.locationState || ""}
          handleChange={(e) => handleChange(e, setLocationState)}
          setStateVariable={setLocationState}
        />
        <ContactFormInput
          label="zip code"
          name="locationZip"
          inputType="input"
          type="text"
          placeholder=""
          value={locationZip}
          required={true}
          autoComplete="off"
          errorMessage={errors.locationZip || ""}
          handleChange={(e) => handleChange(e, setLocationZip)}
          setStateVariable={setLocationZip}
        />
        <ContactFormInput
          label="description"
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
        <ContactFormInput
          label="image url"
          name="imageUrl"
          inputType="input"
          type="text"
          placeholder=""
          value={imageUrl}
          required={false}
          autoComplete="off"
          errorMessage=""
          handleChange={(e) => handleChange(e, setImageUrl)}
          setStateVariable={setImageUrl}
        />
        <ContactFormInput
          label="ticket link"
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
        <ContactFormInput
          label="more info link"
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
        <ContactFormInput
          label="event link"
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
        <ContactFormInput
          label="venue link"
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
            label={mode === "edit" ? "edit event" : "create event"}
            onClick={handleFormSubmit}
            ariaLabel={mode === "edit" ? "edit event" : "create event"}
            className="bg-blue-600 text-white rounded-full font-semibold px-4 py-2 transition duration-200"
          />
          <Button
            label="cancel"
            onClick={onClose}
            ariaLabel="cancel"
            className="ml-2 bg-gray-400 text-white rounded-full font-semibold px-4 py-2 transition duration-200"
            type="button"
          />
        </div>
      </form>
    </div>
  );
}
