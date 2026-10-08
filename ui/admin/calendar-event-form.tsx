"use client";
// import from react
import { useState, useEffect } from "react";
// import from next
import Image from "next/image";
// import actions
import { createCalendarEvent, updateCalendarEvent } from "@/actions/actions";
import { getCloudinaryUploadSignature } from "@/actions/cloudinary";
import { removeCalendarEventImage } from "@/actions/cloudinary";
// import components
import FormInput from "@/ui/form-input";
import FormDateInput from "@/ui/form-date-input";
import StateAutoComplete from "@/ui/state-auto-complete";
import Button from "@/ui/button";
import Heading from "@/ui/heading";
// import from cloudinary
import { CldUploadWidget } from "next-cloudinary";

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
  initialImagePublicId?: string;
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
  initialImagePublicId,
  initialTicketLink,
  initialEventLink,
  initialVenueLink,
  initialMoreInfoLink,
  onClose,
}: CalendarEventFormProps) {
  const [id, setId] = useState(1);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [imageUploadError, setImageUploadError] = useState("");
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
  const [venueStateErrorMessage, setVenueStateErrorMessage] = useState("");
  const [venueZip, setVenueZip] = useState(initialVenueZip || "");
  const [description, setDescription] = useState(initialDescription || "");
  const [image, setImage] = useState(initialImage || "");
  const [imagePublicId, setImagePublicId] = useState(
    initialImagePublicId || "",
  );
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
    setImagePublicId(initialImagePublicId || "");
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
    initialImagePublicId,
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

  // const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const file = e.target.files?.[0];
  //   if (!file) return;

  //   if (!["image/jpeg", "image/png", "image/webp"].includes(file.type)) {
  //     setImageUploadError("Please choose a JPG, PNG, or WebP image.");
  //     return;
  //   }
  //   if (file.size > 10 * 1024 * 1024) {
  //     setImageUploadError("Image must be under 10 MB.");
  //     return;
  //   }

  //   setUploadingImage(true);
  //   setImageUploadError("");

  //   try {
  //     const {
  //       signature,
  //       timestamp,
  //       folder,
  //       allowedFormats,
  //       apiKey,
  //       cloudName,
  //     } = await getCloudinaryUploadSignature();

  //     const formData = new FormData();
  //     formData.append("file", file);
  //     formData.append("api_key", apiKey);
  //     formData.append("timestamp", String(timestamp));
  //     formData.append("signature", signature);
  //     formData.append("folder", folder);
  //     formData.append("allowed_formats", allowedFormats);

  //     const res = await fetch(
  //       `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
  //       { method: "POST", body: formData },
  //     );
  //     const data = await res.json();

  //     if (!res.ok) {
  //       throw new Error(data?.error?.message ?? "Upload failed");
  //     }

  //     setImage(data.secure_url);
  //   } catch (err) {
  //     console.error("Image upload failed:", err);
  //     setImageUploadError("Image upload failed. Please try again.");
  //   } finally {
  //     setUploadingImage(false);
  //     e.target.value = "";
  //   }
  // };

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
          imagePublicId: imagePublicId,
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
          imagePublicId: imagePublicId,
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
        setImagePublicId("");
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
        <FormDateInput
          label="Date"
          name="date"
          value={date}
          required={true}
          errorMessage={errors.date || ""}
          handleChange={(e) => handleChange(e, setDate)}
        />
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
        <StateAutoComplete
          value={venueState}
          errorMessage={venueStateErrorMessage}
          onChange={(nextValue) => {
            setVenueState(nextValue);
            setVenueStateErrorMessage("");
          }}
          onErrorMessageChange={setVenueStateErrorMessage}
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
        {/* <FormInput
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
        /> */}
        {/* <div className="flex flex-col gap-2 my-4">
          <label htmlFor="imageUpload" className="font-medium">
            Event Image
          </label>
          <input
            id="imageUpload"
            type="file"
            accept="image/jpeg,image/png,image/webp"
            onChange={handleImageUpload}
            disabled={uploadingImage}
            className="file:mr-4 file:rounded-full file:border-2 file:border-slate-400 file:bg-gray-200 file:px-4 file:py-1 file:text-gray-800 hover:file:bg-customBlue"
          />
          {uploadingImage && <p className="text-sm">Uploading…</p>}
          {imageUploadError && (
            <p className="text-sm text-red-500">{imageUploadError}</p>
          )}
          {image && (
            <div className="flex flex-col items-center gap-2">
              <Image
                src={image}
                alt="Event image preview"
                width={200}
                height={283}
                className="rounded-xl border-2 border-slate-400"
              />
              <button
                type="button"
                onClick={() => setImage("")}
                className="text-sm underline">
                Remove image
              </button>
            </div>
          )}
        </div> */}

        <CldUploadWidget
          signatureEndpoint="/api/cloudinary-signature"
          uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_CALENDAR_EVENT_IMAGE_UPLOAD_PRESET}
          options={{
            folder: "the-long-emergency/events",
            clientAllowedFormats: ["jpg", "jpeg", "png", "webp"],
            maxFileSize: 10 * 1024 * 1024,
            multiple: false,
          }}
          onSuccess={(result) => {
            if (result.info && typeof result.info !== "string") {
              setImage(result.info.secure_url);
              setImagePublicId(result.info.public_id);
              setImageUploadError("");
            }
          }}>
          {({ open }) => (
            <button
              type="button"
              onClick={() => open()}
              disabled={uploadingImage}>
              Upload event image
            </button>
          )}
        </CldUploadWidget>

        {imageUploadError && (
          <p className="text-sm text-red-500">{imageUploadError}</p>
        )}

        {image && (
          <div className="flex flex-col items-center gap-2">
            <Image
              src={image}
              alt="Event image preview"
              width={200}
              height={283}
            />
            <button
              type="button"
              disabled={uploadingImage}
              onClick={async () => {
                try {
                  await removeCalendarEventImage(
                    eventId,
                    imagePublicId,
                  );
                  setImage("");
                  setImagePublicId("");
                } catch (error) {
                  console.error("Image removal failed:", error);
                  setImageUploadError(
                    "Could not remove the image. Please try again.",
                  );
                }
              }}>
              Remove image
            </button>
          </div>
        )}

        {/* <input type="hidden" name="imagePublicId" value={imagePublicId} /> */}
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
        <div className="grid grid-cols-2 gap-6 mt-4 w-1/2 mx-auto">
          <Button
            label={mode === "edit" ? "Edit Event" : "Create Event"}
            onClick={handleFormSubmit}
            ariaLabel={mode === "edit" ? "Edit Event" : "Create Event"}
            className="font-medium rounded-full px-4 py-2 border-2 border-slate-400 bg-gray-200 text-gray-800 hover:shadow-md hover:shadow-white hover:bg-customBlue transition duration-400 active:scale-95"
          />
          <Button
            label="Cancel"
            onClick={onClose}
            ariaLabel="Cancel"
            className="font-medium rounded-full px-4 py-2 border-2 border-slate-400 bg-gray-200 text-gray-800 hover:shadow-md hover:shadow-white hover:bg-customBlue transition duration-400 active:scale-95"
            type="button"
          />
        </div>
      </form>
    </div>
  );
}
