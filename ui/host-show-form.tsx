// "use client";
// // import from vercel
// import { track } from "@vercel/analytics";
// // import from next
// import Image from "next/image";
// // import from react
// import { useState } from "react";
// // import from toastify
// import { Bounce, ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// // import from components
// import FormInput from "./form-input";
// import FormCheckbox from "./form-checkbox";
// import StateAutocomplete from "./state-auto-complete";
// // import from utils
// import {
//   validateEmail,
//   validateName,
//   validatePhone,
//   validateMessage,
//   validateCity,
//   validateState,
//   validateVenue,
//   validatePerformanceDate,
//   validatePlaceToCrash,
//   validateShowRequestForm,
// } from "@/utils/utils";
// // import actions
// import { submitShowRequest } from "@/actions/actions";
// import FormDateInput from "./form-date-input";

// export default function HostShowForm() {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [city, setCity] = useState("");
//   const [state, setState] = useState("");
//   const [placeToCrashDescription, setPlaceToCrashDescription] = useState("");
//   const [message, setMessage] = useState("");
//   const [mailingListChecked, setMailingListChecked] = useState(true);
//   const [locationChecked, setLocationChecked] = useState<
//     "stl-area" | "outside-stl-area" | undefined
//   >("stl-area");
//   const [venueChecked, setVenueChecked] = useState<boolean | undefined>(
//     undefined,
//   );
//   const [venueType, setVenueType] = useState<
//     "house" | "bar/club" | "other" | undefined
//   >(undefined);
//   const [venueName, setVenueName] = useState("");
//   const [venueWebsite, setVenueWebsite] = useState("");
//   const [venueAddress, setVenueAddress] = useState("");
//   const [arrangeVenueChecked, setArrangeVenueChecked] = useState<
//     boolean | undefined
//   >(undefined);
//   const [preferredDateFirstChoice, setPreferredDateFirstChoice] = useState("");
//   const [preferredDateSecondChoice, setPreferredDateSecondChoice] =
//     useState("");
//   const [preferredDateThirdChoice, setPreferredDateThirdChoice] = useState("");
//   const [placeToCrashChecked, setPlaceToCrashChecked] = useState<
//     boolean | undefined
//   >(undefined);
//   const [helpWithPlaceToCrash, setHelpWithPlaceToCrash] = useState<
//     boolean | undefined
//   >(undefined);
//   const [emailErrorMessage, setEmailErrorMessage] = useState("");
//   const [phoneErrorMessage, setPhoneErrorMessage] = useState("");
//   const [firstNameErrorMessage, setFirstNameErrorMessage] = useState("");
//   const [lastNameErrorMessage, setLastNameErrorMessage] = useState("");
//   const [messageErrorMessage, setMessageErrorMessage] = useState("");
//   const [locationErrorMessage, setLocationErrorMessage] = useState("");
//   const [cityErrorMessage, setCityErrorMessage] = useState("");
//   const [stateErrorMessage, setStateErrorMessage] = useState("");
//   const [venueNameErrorMessage, setVenueNameErrorMessage] = useState("");
//   const [venueWebsiteErrorMessage, setVenueWebsiteErrorMessage] = useState("");
//   const [venueAddressErrorMessage, setVenueAddressErrorMessage] = useState("");
//   const [arrangeVenueErrorMessage, setArrangeVenueErrorMessage] = useState("");
//   const [
//     preferredDateFirstChoiceErrorMessage,
//     setPreferredDateFirstChoiceErrorMessage,
//   ] = useState("");
//   const [
//     preferredDateSecondChoiceErrorMessage,
//     setPreferredDateSecondChoiceErrorMessage,
//   ] = useState("");
//   const [
//     preferredDateThirdChoiceErrorMessage,
//     setPreferredDateThirdChoiceErrorMessage,
//   ] = useState("");
//   const [placeToCrashErrorMessage, setPlaceToCrashErrorMessage] = useState("");
//   const [
//     placeToCrashDescriptionErrorMessage,
//     setPlaceToCrashDescriptionErrorMessage,
//   ] = useState("");
//   const [deliveryErrorMessage, setDeliveryErrorMessage] = useState("");
//   const [buttonSubmitted, setButtonSubmitted] = useState(false);

//   const notify = () =>
//     toast.info("Thank you for your show request! I will be in touch soon.", {
//       transition: Bounce,
//       position: "top-center",
//       icon: (
//         <Image
//           src="/logos/long-emergency/32x32.png"
//           alt="The Long Emergency icon"
//           width={32}
//           height={32}
//         />
//       ),
//       closeOnClick: true,
//       pauseOnHover: true,
//       className:
//         "border-2 border-slate-400 font-emergency text-outline-none text-black",
//     });

//   const handleMailingListCheckboxChange = (
//     e: React.ChangeEvent<HTMLInputElement>,
//   ) => {
//     setMailingListChecked(e.target.checked);
//   };

//   const handleLocationChoiceChange = (
//     e: React.ChangeEvent<HTMLInputElement>,
//   ) => {
//     const value = e.target.value as "stl-area" | "outside-stl-area";
//     setLocationChecked(value);
//     setLocationErrorMessage("");
//   };

//   const handleVenueChoiceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const isYes = e.target.value === "yes";
//     setVenueChecked(isYes);
//     if (!isYes) {
//       setVenueName("");
//       setVenueType(undefined);
//       setVenueNameErrorMessage("");
//     }
//   };

//   const handleVenueTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const value = e.target.value as "house" | "bar/club" | "other";
//     setVenueType(value);
//     if (e.target.value !== "house") {
//       setVenueName("");
//       setVenueNameErrorMessage("");
//     }
//   };

//   const handlePreferredDateFirstChoiceChange = (
//     e: React.ChangeEvent<HTMLInputElement>,
//   ) => {
//     setPreferredDateFirstChoice(e.target.value);
//     if (validatePerformanceDate(new Date(e.target.value))) {
//       setPreferredDateFirstChoiceErrorMessage("");
//     }
//   };

//   const handlePreferredDateSecondChoiceChange = (
//     e: React.ChangeEvent<HTMLInputElement>,
//   ) => {
//     setPreferredDateSecondChoice(e.target.value);
//     if (validatePerformanceDate(new Date(e.target.value))) {
//       setPreferredDateSecondChoiceErrorMessage("");
//     }
//   };

//   const handlePreferredDateThirdChoiceChange = (
//     e: React.ChangeEvent<HTMLInputElement>,
//   ) => {
//     setPreferredDateThirdChoice(e.target.value);
//     if (validatePerformanceDate(new Date(e.target.value))) {
//       setPreferredDateThirdChoiceErrorMessage("");
//     }
//   };

//   const handleArrangeVenueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const isYes = e.target.value === "yes";
//     setArrangeVenueChecked(isYes);
//     if (!isYes) {
//       setArrangeVenueErrorMessage("");
//     }
//   };

//   const handlePlaceToCrashChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const isYes = e.target.value === "yes";
//     setPlaceToCrashChecked(isYes);
//     if (!isYes) {
//       setPlaceToCrashErrorMessage("");
//     }
//   };

//   const handleHelpWithPlaceToCrashChange = (
//     e: React.ChangeEvent<HTMLInputElement>,
//   ) => {
//     const isYes = e.target.value === "yes";
//     setHelpWithPlaceToCrash(isYes);
//     if (!isYes) {
//       setPlaceToCrashErrorMessage("");
//     }
//   };

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
//     setState: React.Dispatch<React.SetStateAction<any>>,
//   ) => {
//     setState(e.target.value);

//     if (e.target.name === "email" && validateEmail(e.target.value)) {
//       setEmailErrorMessage("");
//     }
//     if (e.target.name === "firstName" && validateName(e.target.value)) {
//       setFirstNameErrorMessage("");
//     }
//     if (e.target.name === "lastName" && validateName(e.target.value)) {
//       setLastNameErrorMessage("");
//     }
//     if (e.target.name === "phone" && validatePhone(e.target.value)) {
//       setPhoneErrorMessage("");
//     }
//     if (e.target.name === "message" && validateMessage(e.target.value)) {
//       setMessageErrorMessage("");
//     }
//     if (e.target.name === "city" && validateCity(e.target.value)) {
//       setCityErrorMessage("");
//     }
//     if (e.target.name === "state" && validateState(e.target.value)) {
//       setStateErrorMessage("");
//     }
//     if (e.target.name === "venueName" && validateVenue(e.target.value)) {
//       setVenueNameErrorMessage("");
//     }

//     if (
//       e.target.name === "placeToCrash" &&
//       validatePlaceToCrash(e.target.value)
//     ) {
//       setPlaceToCrashErrorMessage("");
//     }
//   };

//   const handleFormSubmit = async (e: { preventDefault: () => void }) => {
//     e.preventDefault();

//     const trimmedFirstName = firstName.trim();
//     const trimmedLastName = lastName.trim();
//     const trimmedEmail = email.trim();
//     const trimmedPhone = phone.trim();
//     const trimmedMessage = message.trim();

//     const isEmailValid = validateEmail(trimmedEmail);
//     const isFirstNameValid = validateName(trimmedFirstName);
//     const isLastNameValid =
//       trimmedLastName === "" || validateName(trimmedLastName);
//     const isPhoneValid = trimmedPhone === "" || validatePhone(trimmedPhone);
//     const isMessageValid = validateMessage(trimmedMessage);

//     const isPreferredDateFirstChoiceValid =
//       preferredDateFirstChoice.trim() !== "";
//     const isPreferredDateSecondChoiceValid =
//       preferredDateSecondChoice.trim() !== "";

//     if (!isEmailValid) {
//       setEmailErrorMessage("Please enter a valid email address.");
//       return;
//     }

//     if (!isFirstNameValid) {
//       setFirstNameErrorMessage("Please enter a valid first name.");
//       return;
//     }

//     if (!isLastNameValid) {
//       setLastNameErrorMessage("Please enter a valid last name.");
//       return;
//     }

//     if (!isPhoneValid) {
//       setPhoneErrorMessage("Please enter a valid phone number.");
//       return;
//     }

//     if (!isMessageValid) {
//       setMessageErrorMessage("Please enter a message.");
//       return;
//     }

//     if (!isPreferredDateFirstChoiceValid) {
//       setPreferredDateFirstChoiceErrorMessage(
//         "Please choose a first date preference.",
//       );
//       return;
//     }

//     if (!isPreferredDateSecondChoiceValid) {
//       setPreferredDateSecondChoiceErrorMessage(
//         "Please choose a second date preference.",
//       );
//       return;
//     }

//     try {
//       const payload = {
//         firstName: trimmedFirstName,
//         ...(trimmedLastName ? { lastName: trimmedLastName } : {}),
//         email: trimmedEmail,
//         ...(trimmedPhone ? { phone: trimmedPhone } : {}),
//         message: trimmedMessage,
//         mailingListOptIn: mailingListChecked,

//         ...(preferredDateFirstChoice ? { preferredDateFirstChoice } : {}),
//         ...(preferredDateSecondChoice ? { preferredDateSecondChoice } : {}),
//         ...(preferredDateThirdChoice ? { preferredDateThirdChoice } : {}),

//         ...(locationChecked ? { location: locationChecked } : {}),

//         ...(locationChecked === "outside-stl-area"
//           ? {
//               ...(city ? { city } : {}),
//               ...(state ? { state } : {}),
//             }
//           : {}),

//         ...(locationChecked === "outside-stl-area" &&
//         placeToCrashChecked !== undefined
//           ? {
//               placeToCrashOptIn: placeToCrashChecked,
//             }
//           : {}),

//         ...(placeToCrashChecked === true
//           ? {
//               ...(placeToCrashDescription ? { placeToCrashDescription } : {}),
//             }
//           : {}),

//         ...(placeToCrashChecked === false
//           ? {
//               ...(helpWithPlaceToCrash !== undefined
//                 ? { needsHelpFindingPlaceToCrash: helpWithPlaceToCrash }
//                 : {}),
//             }
//           : {}),

//         ...(venueChecked !== undefined ? { hasVenue: venueChecked } : {}),

//         ...(venueChecked
//           ? {
//               ...(venueType ? { venueType } : {}),
//               ...(venueName ? { venueName } : {}),
//               ...(venueWebsite ? { venueWebsite } : {}),
//               ...(venueAddress ? { venueAddress } : {}),
//             }
//           : {}),

//         ...(venueChecked === false
//           ? {
//               ...(arrangeVenueChecked !== undefined
//                 ? { canArrangeVenue: arrangeVenueChecked }
//                 : {}),
//             }
//           : {}),
//       };

//       await submitShowRequest(payload);

//       track("show_request_submitted");
//       setButtonSubmitted(true);
//       setFirstName("");
//       setLastName("");
//       setEmail("");
//       setPhone("");
//       setMessage("");
//       setPreferredDateFirstChoice("");
//       setPreferredDateSecondChoice("");
//       setPreferredDateThirdChoice("");
//       setLocationChecked("stl-area");
//       setCity("");
//       setState("");
//       setPlaceToCrashChecked(undefined);
//       setPlaceToCrashDescription("");
//       setHelpWithPlaceToCrash(undefined);
//       setVenueChecked(undefined);
//       setVenueType(undefined);
//       setVenueName("");
//       setVenueWebsite("");
//       setVenueAddress("");
//       setArrangeVenueChecked(undefined);

//       setTimeout(() => {
//         setButtonSubmitted(false);
//       }, 3000);

//       notify();
//     } catch (error) {
//       setDeliveryErrorMessage(
//         "There was an error delivering your message. Please email us at info@thelongemergency.com. Sorry for the trouble.",
//       );
//     }
//   };

//   return (
//     <div className="w-full">
//       <form
//         onSubmit={handleFormSubmit}
//         className="px-6 py-4 max-w-200 mx-auto relative">
//         <p className="text-center text-lg font-semibold mt-12 mb-4">
//           Contact Information
//         </p>
//         <FormInput
//           idPrefix="show-request-form"
//           inputType="input"
//           label="Email"
//           type="email"
//           name="email"
//           value={email}
//           handleChange={handleChange}
//           placeholder="Email"
//           required={true}
//           autoComplete="email"
//           errorMessage={emailErrorMessage}
//           setStateVariable={setEmail}
//         />
//         <FormInput
//           idPrefix="show-request-form"
//           inputType="input"
//           label="First Name"
//           type="text"
//           name="firstName"
//           value={firstName}
//           handleChange={handleChange}
//           placeholder="First Name"
//           required={true}
//           autoComplete="given-name"
//           errorMessage={firstNameErrorMessage}
//           setStateVariable={setFirstName}
//         />
//         <FormInput
//           idPrefix="show-request-form"
//           inputType="input"
//           label="Last Name"
//           type="text"
//           name="lastName"
//           value={lastName}
//           handleChange={handleChange}
//           placeholder="Last Name"
//           required={false}
//           autoComplete="family-name"
//           errorMessage={lastNameErrorMessage}
//           setStateVariable={setLastName}
//         />

//         <FormInput
//           idPrefix="show-request-form"
//           inputType="input"
//           label="Phone Number"
//           type="tel"
//           name="phone"
//           value={phone}
//           handleChange={handleChange}
//           placeholder="Phone Number"
//           required={false}
//           autoComplete="tel"
//           errorMessage={phoneErrorMessage}
//           setStateVariable={setPhone}
//         />
//         <p className="text-center text-lg font-semibold mt-6 mb-4">
//           Date Preferences
//         </p>
//         <div className="grid grid-cols-1 md:grid-cols-3 md:gap-6">
//           <FormDateInput
//             idPrefix="show-request-form"
//             label="1st Choice"
//             name="preferredDateFirstChoice"
//             value={preferredDateFirstChoice}
//             required={true}
//             min={new Date().toISOString().split("T")[0]}
//             errorMessage={preferredDateFirstChoiceErrorMessage}
//             handleChange={handlePreferredDateFirstChoiceChange}
//           />

//           <FormDateInput
//             idPrefix="show-request-form"
//             label="2nd Choice"
//             name="preferredDateSecondChoice"
//             value={preferredDateSecondChoice}
//             required={true}
//             min={new Date().toISOString().split("T")[0]}
//             errorMessage={preferredDateSecondChoiceErrorMessage}
//             handleChange={handlePreferredDateSecondChoiceChange}
//           />

//           <FormDateInput
//             idPrefix="show-request-form"
//             label="3rd Choice"
//             name="preferredDateThirdChoice"
//             value={preferredDateThirdChoice}
//             required={false}
//             min={new Date().toISOString().split("T")[0]}
//             errorMessage={preferredDateThirdChoiceErrorMessage}
//             handleChange={handlePreferredDateThirdChoiceChange}
//           />
//         </div>
//         <p className="text-center text-lg font-semibold mt-6 mb-4">
//           Location / Venue
//         </p>
//         <>
//           <p>
//             Where are you requesting a show?
//             <span className="text-sm">* (required)</span>
//           </p>
//           <div className="grid grid-cols-1 md:grid-cols-2">
//             <FormCheckbox
//               idPrefix="show-request-form"
//               type="radio"
//               label="St. Louis, MO Area"
//               name="location-choice"
//               value="stl-area"
//               checked={locationChecked === "stl-area"}
//               onChange={handleLocationChoiceChange}
//               errorMessage={locationErrorMessage}
//             />
//             <FormCheckbox
//               idPrefix="show-request-form"
//               type="radio"
//               label="Outside St. Louis, MO Area"
//               name="location-choice"
//               value="outside-stl-area"
//               checked={locationChecked === "outside-stl-area"}
//               onChange={handleLocationChoiceChange}
//               errorMessage={locationErrorMessage}
//             />
//           </div>
//         </>
//         {locationChecked === "outside-stl-area" && (
//           <>
//             <p>Please specify your location:</p>
//             <FormInput
//               idPrefix="show-request-form"
//               inputType="input"
//               label="City"
//               type="text"
//               name="city"
//               value={city}
//               handleChange={handleChange}
//               placeholder="City"
//               required={false}
//               autoComplete="address-level2"
//               errorMessage={cityErrorMessage}
//               setStateVariable={setCity}
//             />
//             <StateAutocomplete
//               value={state}
//               errorMessage={stateErrorMessage}
//               onChange={(nextValue) => {
//                 setState(nextValue);
//                 if (validateState(nextValue)) {
//                   setStateErrorMessage("");
//                 }
//               }}
//               onErrorMessageChange={setStateErrorMessage}
//             />
//             <p>Do you have a place I can crash after the show?</p>
//             <div className="grid grid-cols-1 md:grid-cols-2">
//               <FormCheckbox
//                 idPrefix="show-request-form"
//                 type="radio"
//                 label="Yes"
//                 name="place-to-crash"
//                 value="yes"
//                 checked={placeToCrashChecked === true}
//                 onChange={handlePlaceToCrashChange}
//                 errorMessage=""
//               />
//               <FormCheckbox
//                 idPrefix="show-request-form"
//                 type="radio"
//                 label="No"
//                 name="place-to-crash"
//                 value="no"
//                 checked={placeToCrashChecked === false}
//                 onChange={handlePlaceToCrashChange}
//                 errorMessage=""
//               />
//             </div>

//             {placeToCrashChecked === true && (
//               <>
//                 <p>
//                   Sweet! Thank you! Please provide some details about the
//                   accommodations.
//                 </p>
//                 <FormInput
//                   idPrefix="show-request-form"
//                   inputType="input"
//                   label=""
//                   type="text"
//                   name="place-to-crash-description"
//                   value={placeToCrashDescription}
//                   handleChange={handleChange}
//                   placeholder="Description"
//                   required={false}
//                   autoComplete="off"
//                   errorMessage={placeToCrashDescriptionErrorMessage}
//                   setStateVariable={setPlaceToCrashDescription}
//                 />
//               </>
//             )}

//             {placeToCrashChecked === false && (
//               <>
//                 <p>Can you find a place for me to crash after the show?</p>
//                 <div className="grid grid-cols-1 md:grid-cols-2">
//                   <FormCheckbox
//                     idPrefix="show-request-form"
//                     type="radio"
//                     label="Yes"
//                     name="help-with-place-to-crash"
//                     value="yes"
//                     checked={helpWithPlaceToCrash === true}
//                     onChange={handleHelpWithPlaceToCrashChange}
//                     errorMessage=""
//                   />
//                   <FormCheckbox
//                     idPrefix="show-request-form"
//                     type="radio"
//                     label="No"
//                     name="help-with-place-to-crash"
//                     value="no"
//                     checked={helpWithPlaceToCrash === false}
//                     onChange={handleHelpWithPlaceToCrashChange}
//                     errorMessage=""
//                   />
//                 </div>
//               </>
//             )}
//           </>
//         )}
//         <p>Do you have a venue in mind?</p>
//         <div className="grid grid-cols-1 md:grid-cols-2">
//           <FormCheckbox
//             idPrefix="show-request-form"
//             type="radio"
//             label="Yes"
//             name="venue-choice"
//             value="yes"
//             checked={venueChecked === true}
//             onChange={handleVenueChoiceChange}
//             errorMessage=""
//           />
//           <FormCheckbox
//             idPrefix="show-request-form"
//             type="radio"
//             label="No"
//             name="venue-choice"
//             value="no"
//             checked={venueChecked === false}
//             onChange={handleVenueChoiceChange}
//             errorMessage=""
//           />
//         </div>

//         {venueChecked === true && (
//           <>
//             <p>Great! What type of venue is it?</p>
//             <div className="grid grid-cols-1 md:grid-cols-3">
//               <FormCheckbox
//                 idPrefix="show-request-form"
//                 type="radio"
//                 label="House"
//                 name="venue-type"
//                 value="house"
//                 checked={venueType === "house"}
//                 onChange={handleVenueTypeChange}
//                 errorMessage=""
//               />
//               <FormCheckbox
//                 idPrefix="show-request-form"
//                 type="radio"
//                 label="Bar/Club"
//                 name="venue-type"
//                 value="bar/club"
//                 checked={venueType === "bar/club"}
//                 onChange={handleVenueTypeChange}
//                 errorMessage=""
//               />
//               <FormCheckbox
//                 idPrefix="show-request-form"
//                 type="radio"
//                 label="Other"
//                 name="venue-type"
//                 value="other"
//                 checked={venueType === "other"}
//                 onChange={handleVenueTypeChange}
//                 errorMessage=""
//               />
//             </div>
//           </>
//         )}

//         {venueChecked === true && (
//           <>
//             <FormInput
//               idPrefix="show-request-form"
//               inputType="input"
//               label="Venue Name"
//               type="text"
//               name="venueName"
//               value={venueName}
//               handleChange={handleChange}
//               placeholder="Venue Name"
//               required={false}
//               autoComplete="organization"
//               errorMessage={venueNameErrorMessage}
//               setStateVariable={setVenueName}
//             />
//             <FormInput
//               idPrefix="show-request-form"
//               inputType="input"
//               label="Venue Website"
//               type="text"
//               name="venueWebsite"
//               value={venueWebsite}
//               handleChange={handleChange}
//               placeholder="Venue Website"
//               required={false}
//               autoComplete="organization"
//               errorMessage={venueWebsiteErrorMessage}
//               setStateVariable={setVenueWebsite}
//             />
//             <FormInput
//               idPrefix="show-request-form"
//               inputType="input"
//               label="Venue Address"
//               type="text"
//               name="venueAddress"
//               value={venueAddress}
//               handleChange={handleChange}
//               placeholder="Venue Address"
//               required={false}
//               autoComplete="organization"
//               errorMessage={venueAddressErrorMessage}
//               setStateVariable={setVenueAddress}
//             />
//           </>
//         )}

//         {venueChecked === false && (
//           <>
//             <p>Can you arrange a venue?</p>
//             <div className="grid grid-cols-2">
//               <FormCheckbox
//                 idPrefix="show-request-form"
//                 type="radio"
//                 label="Yes"
//                 name="arrange-venue"
//                 value="yes"
//                 checked={arrangeVenueChecked === true}
//                 onChange={handleArrangeVenueChange}
//                 errorMessage={arrangeVenueErrorMessage}
//               />
//               <FormCheckbox
//                 idPrefix="show-request-form"
//                 type="radio"
//                 label="No"
//                 name="arrange-venue"
//                 value="no"
//                 checked={arrangeVenueChecked === false}
//                 onChange={handleArrangeVenueChange}
//                 errorMessage={arrangeVenueErrorMessage}
//               />
//             </div>
//           </>
//         )}

//         <></>

//         <p className="text-center text-lg font-semibold mt-6 mb-4">Details</p>
//         <FormInput
//           idPrefix="show-request-form"
//           inputType="textarea"
//           label="Please introduce yourself and provide any additional details"
//           type="text"
//           name="message"
//           value={message}
//           handleChange={handleChange}
//           placeholder="Let's rock"
//           required={true}
//           autoComplete="off"
//           errorMessage={messageErrorMessage}
//           setStateVariable={setMessage}
//         />
//         <FormCheckbox
//           idPrefix="show-request-form"
//           label="Sign me up for The Long Emergency mailing list. I understand I can unsubscribe at any time."
//           name="consent"
//           checked={mailingListChecked}
//           onChange={handleMailingListCheckboxChange}
//           // required={true}
//           errorMessage=""
//         />
//         <div className="flex justify-center items-center p-6 ">
//           <button
//             type="submit"
//             disabled={buttonSubmitted}
//             // className={`px-6 py-1 rounded-full border-2 border-black ${
//             //   buttonSubmitted
//             //     ? "bg-green-600 opacity-80 pointer-events-none"
//             //     : "bg-customBlue hover:bg-hoverBlue"
//             // }`}>
//              className="rounded-full border-2 border-slate-400 bg-customBlue px-6 py-1 text-white shadow-white transition enabled:hover:bg-hoverBlue enabled:hover:shadow-md disabled:cursor-not-allowed disabled:opacity-50 disabled:grayscale">
//             <span className="font-emergency text-white text-outline">
//               {buttonSubmitted ? "Sent" : "Send"}
//             </span>
//           </button>
//         </div>
//         {deliveryErrorMessage && (
//           <div className="flex text-center justify-center items-center mt-2 mb-4">
//             <a
//               href="mailto:thelongemergencyband@gmail.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="email The Long Emergency">
//               <p className="text-red-500 text-xs font-bold hover:transform hover:scale-105 transition-transform">
//                 {deliveryErrorMessage}
//               </p>
//             </a>
//           </div>
//         )}
//       </form>
//       <ToastContainer
//         position="top-center"
//         autoClose={5000}
//         hideProgressBar={false}
//         closeOnClick
//         pauseOnFocusLoss
//         pauseOnHover
//         theme="light"
//         transition={Bounce}
//       />
//     </div>
//   );
// }



"use client";

import { track } from "@vercel/analytics";
import Image from "next/image";
import { useState } from "react";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import FormCheckbox from "./form-checkbox";
import FormDateInput from "./form-date-input";
import FormInput from "./form-input";
import StateAutocomplete from "./state-auto-complete";

import {
  validateCity,
  validateEmail,
  validateMessage,
  validateName,
  validatePerformanceDate,
  validatePhone,
  validateState,
  validateVenue,
} from "@/utils/utils";

import { submitShowRequest } from "@/actions/actions";

type LocationChoice = "stl-area" | "outside-stl-area";
type VenueType = "house" | "bar/club" | "other";

export default function HostShowForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [message, setMessage] = useState("");

  const [mailingListChecked, setMailingListChecked] = useState(true);
  const [locationChecked, setLocationChecked] =
    useState<LocationChoice>("stl-area");

  const [placeToCrashChecked, setPlaceToCrashChecked] = useState<
    boolean | undefined
  >(undefined);
  const [placeToCrashDescription, setPlaceToCrashDescription] = useState("");
  const [helpWithPlaceToCrash, setHelpWithPlaceToCrash] = useState<
    boolean | undefined
  >(undefined);

  const [venueChecked, setVenueChecked] = useState<boolean | undefined>(
    undefined,
  );
  const [venueType, setVenueType] = useState<VenueType | undefined>(
    undefined,
  );
  const [venueName, setVenueName] = useState("");
  const [venueWebsite, setVenueWebsite] = useState("");
  const [venueAddress, setVenueAddress] = useState("");
  const [arrangeVenueChecked, setArrangeVenueChecked] = useState<
    boolean | undefined
  >(undefined);

  const [preferredDateFirstChoice, setPreferredDateFirstChoice] =
    useState("");
  const [preferredDateSecondChoice, setPreferredDateSecondChoice] =
    useState("");
  const [preferredDateThirdChoice, setPreferredDateThirdChoice] =
    useState("");

  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [phoneErrorMessage, setPhoneErrorMessage] = useState("");
  const [firstNameErrorMessage, setFirstNameErrorMessage] = useState("");
  const [lastNameErrorMessage, setLastNameErrorMessage] = useState("");
  const [messageErrorMessage, setMessageErrorMessage] = useState("");
  const [cityErrorMessage, setCityErrorMessage] = useState("");
  const [stateErrorMessage, setStateErrorMessage] = useState("");
  const [venueNameErrorMessage, setVenueNameErrorMessage] = useState("");
  const [venueWebsiteErrorMessage, setVenueWebsiteErrorMessage] = useState("");
  const [venueAddressErrorMessage, setVenueAddressErrorMessage] = useState("");
  const [
    placeToCrashDescriptionErrorMessage,
    setPlaceToCrashDescriptionErrorMessage,
  ] = useState("");
  const [
    preferredDateFirstChoiceErrorMessage,
    setPreferredDateFirstChoiceErrorMessage,
  ] = useState("");
  const [
    preferredDateSecondChoiceErrorMessage,
    setPreferredDateSecondChoiceErrorMessage,
  ] = useState("");
  const [
    preferredDateThirdChoiceErrorMessage,
    setPreferredDateThirdChoiceErrorMessage,
  ] = useState("");
  const [deliveryErrorMessage, setDeliveryErrorMessage] = useState("");

  // CHANGE: Track submission separately from form validity.
  const [isSubmitting, setIsSubmitting] = useState(false);

  const notify = () =>
    toast.info("Thank you for your show request! I will be in touch soon.", {
      transition: Bounce,
      position: "top-center",
      icon: (
        <Image
          src="/logos/long-emergency/32x32.png"
          alt="The Long Emergency icon"
          width={32}
          height={32}
        />
      ),
      closeOnClick: true,
      pauseOnHover: true,
      className:
        "border-2 border-slate-400 font-emergency text-outline-none text-black",
    });

  const trimmedFirstName = firstName.trim();
  const trimmedLastName = lastName.trim();
  const trimmedEmail = email.trim();
  const trimmedPhone = phone.trim();
  const trimmedCity = city.trim();
  const trimmedState = state.trim();
  const trimmedMessage = message.trim();
  const trimmedPlaceToCrashDescription =
    placeToCrashDescription.trim();
  const trimmedVenueName = venueName.trim();
  const trimmedVenueWebsite = venueWebsite.trim();
  const trimmedVenueAddress = venueAddress.trim();

  // CHANGE: Only these fields are required.
  const isFirstNameValid = validateName(trimmedFirstName);
  const isEmailValid = validateEmail(trimmedEmail);
  const isMessageValid = validateMessage(trimmedMessage);

  const isFirstDateValid =
    preferredDateFirstChoice !== "" &&
    validatePerformanceDate(new Date(preferredDateFirstChoice));

  const isSecondDateValid =
    preferredDateSecondChoice !== "" &&
    validatePerformanceDate(new Date(preferredDateSecondChoice));

  const isThirdDateValid =
    preferredDateThirdChoice !== "" &&
    validatePerformanceDate(new Date(preferredDateThirdChoice));

  // CHANGE: Optional fields are valid when empty. If provided, they
  // must contain valid values.
  const isLastNameValid =
    trimmedLastName === "" || validateName(trimmedLastName);

  const isPhoneValid =
    trimmedPhone === "" || validatePhone(trimmedPhone);

  const isCityValid =
    trimmedCity === "" || validateCity(trimmedCity);

  const isStateValid =
    trimmedState === "" || validateState(trimmedState);

  const isVenueNameValid =
    trimmedVenueName === "" || validateVenue(trimmedVenueName);

  const isVenueWebsiteValid =
    trimmedVenueWebsite === "" ||
    (() => {
      try {
        const url = new URL(trimmedVenueWebsite);
        return url.protocol === "http:" || url.protocol === "https:";
      } catch {
        return false;
      }
    })();

  // Venue address and accommodation details have no format requirement.
  const isVenueAddressValid = true;
  const isPlaceToCrashDescriptionValid = true;

  // CHANGE: No location, venue, phone, last name, or accommodation choice
  // is required for submission.
  const isFormValid =
    isFirstNameValid &&
    isEmailValid &&
    isFirstDateValid &&
    isSecondDateValid &&
    isThirdDateValid &&
    isMessageValid &&
    isLastNameValid &&
    isPhoneValid &&
    isCityValid &&
    isStateValid &&
    isVenueNameValid &&
    isVenueWebsiteValid &&
    isVenueAddressValid &&
    isPlaceToCrashDescriptionValid;

  const handleMailingListCheckboxChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setMailingListChecked(e.target.checked);
  };

  const handleLocationChoiceChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setLocationChecked(e.target.value as LocationChoice);
  };

  const handleVenueChoiceChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const isYes = e.target.value === "yes";

    setVenueChecked(isYes);

    if (!isYes) {
      setVenueType(undefined);
      setVenueName("");
      setVenueWebsite("");
      setVenueAddress("");
      setVenueNameErrorMessage("");
      setVenueWebsiteErrorMessage("");
      setVenueAddressErrorMessage("");
    }
  };

  const handleVenueTypeChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setVenueType(e.target.value as VenueType);
  };

  const handlePlaceToCrashChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const isYes = e.target.value === "yes";

    setPlaceToCrashChecked(isYes);

    if (!isYes) {
      setPlaceToCrashDescription("");
      setHelpWithPlaceToCrash(undefined);
      setPlaceToCrashDescriptionErrorMessage("");
    }
  };

  const handleHelpWithPlaceToCrashChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setHelpWithPlaceToCrash(e.target.value === "yes");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    setState: React.Dispatch<React.SetStateAction<string>>,
  ) => {
    const { name, value } = e.target;

    setState(value);

    if (name === "firstName") {
      setFirstNameErrorMessage(
        validateName(value) ? "" : "Please enter a valid first name.",
      );
    }

    if (name === "lastName") {
      setLastNameErrorMessage(
        value.trim() === "" || validateName(value)
          ? ""
          : "Please enter a valid last name.",
      );
    }

    if (name === "email") {
      setEmailErrorMessage(
        validateEmail(value) ? "" : "Please enter a valid email address.",
      );
    }

    if (name === "phone") {
      setPhoneErrorMessage(
        value.trim() === "" || validatePhone(value)
          ? ""
          : "Please enter a valid phone number.",
      );
    }

    if (name === "message") {
      setMessageErrorMessage(
        validateMessage(value) ? "" : "Please enter a message.",
      );
    }

    if (name === "city") {
      setCityErrorMessage(
        value.trim() === "" || validateCity(value)
          ? ""
          : "Please enter a valid city.",
      );
    }

    if (name === "venueName") {
      setVenueNameErrorMessage(
        value.trim() === "" || validateVenue(value)
          ? ""
          : "Please enter a valid venue name.",
      );
    }

    if (name === "venueWebsite") {
      setVenueWebsiteErrorMessage("");
    }

    if (name === "venueAddress") {
      setVenueAddressErrorMessage("");
    }

    if (name === "place-to-crash-description") {
      setPlaceToCrashDescriptionErrorMessage("");
    }
  };

  const showValidationErrors = () => {
    if (!isFirstNameValid) {
      setFirstNameErrorMessage("Please enter a valid first name.");
    }

    if (!isEmailValid) {
      setEmailErrorMessage("Please enter a valid email address.");
    }

    if (!isFirstDateValid) {
      setPreferredDateFirstChoiceErrorMessage(
        "Please choose a valid first date.",
      );
    }

    if (!isSecondDateValid) {
      setPreferredDateSecondChoiceErrorMessage(
        "Please choose a valid second date.",
      );
    }

    if (!isThirdDateValid) {
      setPreferredDateThirdChoiceErrorMessage(
        "Please choose a valid third date.",
      );
    }

    if (!isMessageValid) {
      setMessageErrorMessage("Please enter a message.");
    }

    if (!isLastNameValid) {
      setLastNameErrorMessage("Please enter a valid last name.");
    }

    if (!isPhoneValid) {
      setPhoneErrorMessage("Please enter a valid phone number.");
    }

    if (!isCityValid) {
      setCityErrorMessage("Please enter a valid city.");
    }

    if (!isStateValid) {
      setStateErrorMessage("Please select a valid state.");
    }

    if (!isVenueNameValid) {
      setVenueNameErrorMessage("Please enter a valid venue name.");
    }

    if (!isVenueWebsiteValid) {
      setVenueWebsiteErrorMessage(
        "Please enter a valid website URL.",
      );
    }
  };

  const handleFormSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
  ) => {
    e.preventDefault();

    if (isSubmitting) {
      return;
    }

    if (!isFormValid) {
      showValidationErrors();
      return;
    }

    setIsSubmitting(true);
    setDeliveryErrorMessage("");

    try {
      const payload = {
        firstName: trimmedFirstName,
        email: trimmedEmail,
        message: trimmedMessage,
        mailingListOptIn: mailingListChecked,

        preferredDateFirstChoice,
        preferredDateSecondChoice,
        preferredDateThirdChoice,

        ...(trimmedLastName ? { lastName: trimmedLastName } : {}),
        ...(trimmedPhone ? { phone: trimmedPhone } : {}),
        ...(locationChecked ? { location: locationChecked } : {}),
        ...(trimmedCity ? { city: trimmedCity } : {}),
        ...(trimmedState ? { state: trimmedState } : {}),

        ...(placeToCrashChecked !== undefined
          ? { placeToCrashOptIn: placeToCrashChecked }
          : {}),
        ...(trimmedPlaceToCrashDescription
          ? { placeToCrashDescription: trimmedPlaceToCrashDescription }
          : {}),
        ...(helpWithPlaceToCrash !== undefined
          ? {
              needsHelpFindingPlaceToCrash: helpWithPlaceToCrash,
            }
          : {}),

        ...(venueChecked !== undefined
          ? { hasVenue: venueChecked }
          : {}),
        ...(venueType ? { venueType } : {}),
        ...(trimmedVenueName ? { venueName: trimmedVenueName } : {}),
        ...(trimmedVenueWebsite
          ? { venueWebsite: trimmedVenueWebsite }
          : {}),
        ...(trimmedVenueAddress
          ? { venueAddress: trimmedVenueAddress }
          : {}),
        ...(arrangeVenueChecked !== undefined
          ? { canArrangeVenue: arrangeVenueChecked }
          : {}),
      };

      await submitShowRequest(payload);

      track("show_request_submitted");
      notify();

      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setCity("");
      setState("");
      setMessage("");
      setMailingListChecked(true);

      setLocationChecked("stl-area");
      setPlaceToCrashChecked(undefined);
      setPlaceToCrashDescription("");
      setHelpWithPlaceToCrash(undefined);

      setVenueChecked(undefined);
      setVenueType(undefined);
      setVenueName("");
      setVenueWebsite("");
      setVenueAddress("");
      setArrangeVenueChecked(undefined);

      setPreferredDateFirstChoice("");
      setPreferredDateSecondChoice("");
      setPreferredDateThirdChoice("");
    } catch {
      setDeliveryErrorMessage(
        "There was an error delivering your message. Please email us at info@thelongemergency.com. Sorry for the trouble.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full">
      <form
        onSubmit={handleFormSubmit}
        className="relative mx-auto max-w-200 px-6 py-4">
        <p className="mt-12 mb-4 text-center text-lg font-semibold">
          Contact Information
        </p>

        <FormInput
          idPrefix="show-request-form"
          inputType="input"
          label="Email"
          type="email"
          name="email"
          value={email}
          handleChange={handleChange}
          placeholder="Email"
          required={true}
          autoComplete="email"
          errorMessage={emailErrorMessage}
          setStateVariable={setEmail}
        />

        <FormInput
          idPrefix="show-request-form"
          inputType="input"
          label="First Name"
          type="text"
          name="firstName"
          value={firstName}
          handleChange={handleChange}
          placeholder="First Name"
          required={true}
          autoComplete="given-name"
          errorMessage={firstNameErrorMessage}
          setStateVariable={setFirstName}
        />

        <FormInput
          idPrefix="show-request-form"
          inputType="input"
          label="Last Name"
          type="text"
          name="lastName"
          value={lastName}
          handleChange={handleChange}
          placeholder="Last Name"
          required={false}
          autoComplete="family-name"
          errorMessage={lastNameErrorMessage}
          setStateVariable={setLastName}
        />

        <FormInput
          idPrefix="show-request-form"
          inputType="input"
          label="Phone Number"
          type="tel"
          name="phone"
          value={phone}
          handleChange={handleChange}
          placeholder="Phone Number"
          required={false}
          autoComplete="tel"
          errorMessage={phoneErrorMessage}
          setStateVariable={setPhone}
        />

        <p className="mt-6 mb-4 text-center text-lg font-semibold">
          Date Preferences
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-6">
          <FormDateInput
            idPrefix="show-request-form"
            label="1st Choice"
            name="preferredDateFirstChoice"
            value={preferredDateFirstChoice}
            required={true}
            min={new Date().toISOString().split("T")[0]}
            errorMessage={preferredDateFirstChoiceErrorMessage}
            handleChange={(e) => {
              setPreferredDateFirstChoice(e.target.value);
              setPreferredDateFirstChoiceErrorMessage("");
            }}
          />

          <FormDateInput
            idPrefix="show-request-form"
            label="2nd Choice"
            name="preferredDateSecondChoice"
            value={preferredDateSecondChoice}
            required={true}
            min={new Date().toISOString().split("T")[0]}
            errorMessage={preferredDateSecondChoiceErrorMessage}
            handleChange={(e) => {
              setPreferredDateSecondChoice(e.target.value);
              setPreferredDateSecondChoiceErrorMessage("");
            }}
          />

          <FormDateInput
            idPrefix="show-request-form"
            label="3rd Choice"
            name="preferredDateThirdChoice"
            value={preferredDateThirdChoice}
            required={true}
            min={new Date().toISOString().split("T")[0]}
            errorMessage={preferredDateThirdChoiceErrorMessage}
            handleChange={(e) => {
              setPreferredDateThirdChoice(e.target.value);
              setPreferredDateThirdChoiceErrorMessage("");
            }}
          />
        </div>

        <p className="mt-6 mb-4 text-center text-lg font-semibold">
          Location / Venue
        </p>

        <p>Where are you requesting a show?</p>

        <div className="grid grid-cols-1 md:grid-cols-2">
          <FormCheckbox
            idPrefix="show-request-form"
            type="radio"
            label="St. Louis, MO Area"
            name="location-choice"
            value="stl-area"
            checked={locationChecked === "stl-area"}
            onChange={handleLocationChoiceChange}
            errorMessage=""
          />

          <FormCheckbox
            idPrefix="show-request-form"
            type="radio"
            label="Outside St. Louis, MO Area"
            name="location-choice"
            value="outside-stl-area"
            checked={locationChecked === "outside-stl-area"}
            onChange={handleLocationChoiceChange}
            errorMessage=""
          />
        </div>

        {locationChecked === "outside-stl-area" && (
          <>
            <FormInput
              idPrefix="show-request-form"
              inputType="input"
              label="City"
              type="text"
              name="city"
              value={city}
              handleChange={handleChange}
              placeholder="City"
              required={false}
              autoComplete="address-level2"
              errorMessage={cityErrorMessage}
              setStateVariable={setCity}
            />

            <StateAutocomplete
              value={state}
              errorMessage={stateErrorMessage}
              onChange={(nextValue) => {
                setState(nextValue);
                setStateErrorMessage("");
              }}
              onErrorMessageChange={setStateErrorMessage}
            />

            <p>Do you have a place I can crash after the show?</p>

            <div className="grid grid-cols-1 md:grid-cols-2">
              <FormCheckbox
                idPrefix="show-request-form"
                type="radio"
                label="Yes"
                name="place-to-crash"
                value="yes"
                checked={placeToCrashChecked === true}
                onChange={handlePlaceToCrashChange}
                errorMessage=""
              />

              <FormCheckbox
                idPrefix="show-request-form"
                type="radio"
                label="No"
                name="place-to-crash"
                value="no"
                checked={placeToCrashChecked === false}
                onChange={handlePlaceToCrashChange}
                errorMessage=""
              />
            </div>

            {placeToCrashChecked === true && (
              <FormInput
                idPrefix="show-request-form"
                inputType="input"
                label="Accommodation Details"
                type="text"
                name="place-to-crash-description"
                value={placeToCrashDescription}
                handleChange={handleChange}
                placeholder="Description"
                required={false}
                autoComplete="off"
                errorMessage={placeToCrashDescriptionErrorMessage}
                setStateVariable={setPlaceToCrashDescription}
              />
            )}

            {placeToCrashChecked === false && (
              <>
                <p>Can you find a place for me to crash?</p>

                <div className="grid grid-cols-1 md:grid-cols-2">
                  <FormCheckbox
                    idPrefix="show-request-form"
                    type="radio"
                    label="Yes"
                    name="help-with-place-to-crash"
                    value="yes"
                    checked={helpWithPlaceToCrash === true}
                    onChange={handleHelpWithPlaceToCrashChange}
                    errorMessage=""
                  />

                  <FormCheckbox
                    idPrefix="show-request-form"
                    type="radio"
                    label="No"
                    name="help-with-place-to-crash"
                    value="no"
                    checked={helpWithPlaceToCrash === false}
                    onChange={handleHelpWithPlaceToCrashChange}
                    errorMessage=""
                  />
                </div>
              </>
            )}
          </>
        )}

        <p>Do you have a venue in mind?</p>

        <div className="grid grid-cols-1 md:grid-cols-2">
          <FormCheckbox
            idPrefix="show-request-form"
            type="radio"
            label="Yes"
            name="venue-choice"
            value="yes"
            checked={venueChecked === true}
            onChange={handleVenueChoiceChange}
            errorMessage=""
          />

          <FormCheckbox
            idPrefix="show-request-form"
            type="radio"
            label="No"
            name="venue-choice"
            value="no"
            checked={venueChecked === false}
            onChange={handleVenueChoiceChange}
            errorMessage=""
          />
        </div>

        {venueChecked === true && (
          <>
            <p>What type of venue is it?</p>

            <div className="grid grid-cols-1 md:grid-cols-3">
              {(["house", "bar/club", "other"] as VenueType[]).map(
                (type) => (
                  <FormCheckbox
                    key={type}
                    idPrefix="show-request-form"
                    type="radio"
                    label={type === "bar/club" ? "Bar/Club" : type}
                    name="venue-type"
                    value={type}
                    checked={venueType === type}
                    onChange={handleVenueTypeChange}
                    errorMessage=""
                  />
                ),
              )}
            </div>

            <FormInput
              idPrefix="show-request-form"
              inputType="input"
              label="Venue Name"
              type="text"
              name="venueName"
              value={venueName}
              handleChange={handleChange}
              placeholder="Venue Name"
              required={false}
              autoComplete="organization"
              errorMessage={venueNameErrorMessage}
              setStateVariable={setVenueName}
            />

            <FormInput
              idPrefix="show-request-form"
              inputType="input"
              label="Venue Website"
              type="url"
              name="venueWebsite"
              value={venueWebsite}
              handleChange={handleChange}
              placeholder="Venue Website"
              required={false}
              autoComplete="url"
              errorMessage={venueWebsiteErrorMessage}
              setStateVariable={setVenueWebsite}
            />

            <FormInput
              idPrefix="show-request-form"
              inputType="input"
              label="Venue Address"
              type="text"
              name="venueAddress"
              value={venueAddress}
              handleChange={handleChange}
              placeholder="Venue Address"
              required={false}
              autoComplete="street-address"
              errorMessage={venueAddressErrorMessage}
              setStateVariable={setVenueAddress}
            />
          </>
        )}

        {venueChecked === false && (
          <>
            <p>Can you arrange a venue?</p>

            <div className="grid grid-cols-1 md:grid-cols-2">
              <FormCheckbox
                idPrefix="show-request-form"
                type="radio"
                label="Yes"
                name="arrange-venue"
                value="yes"
                checked={arrangeVenueChecked === true}
                onChange={(e) =>
                  setArrangeVenueChecked(e.target.value === "yes")
                }
                errorMessage=""
              />

              <FormCheckbox
                idPrefix="show-request-form"
                type="radio"
                label="No"
                name="arrange-venue"
                value="no"
                checked={arrangeVenueChecked === false}
                onChange={(e) =>
                  setArrangeVenueChecked(e.target.value === "yes")
                }
                errorMessage=""
              />
            </div>
          </>
        )}

        <p className="mt-6 mb-4 text-center text-lg font-semibold">
          Details
        </p>

        <FormInput
          idPrefix="show-request-form"
          inputType="textarea"
          label="Please introduce yourself and provide any additional details"
          type="text"
          name="message"
          value={message}
          handleChange={handleChange}
          placeholder="Let's rock"
          required={true}
          autoComplete="off"
          errorMessage={messageErrorMessage}
          setStateVariable={setMessage}
        />

        <FormCheckbox
          idPrefix="show-request-form"
          label="Sign me up for The Long Emergency mailing list. I understand I can unsubscribe at any time."
          name="consent"
          checked={mailingListChecked}
          onChange={handleMailingListCheckboxChange}
          errorMessage=""
        />

        <div className="flex items-center justify-center p-6">
          <button
            type="submit"
            disabled={!isFormValid || isSubmitting}
            className="rounded-full border-2 border-slate-400 bg-customBlue px-6 py-1 text-white shadow-white transition enabled:hover:bg-hoverBlue enabled:hover:shadow-md disabled:cursor-not-allowed disabled:opacity-50 disabled:grayscale">
            <span className="font-emergency text-outline">
              {isSubmitting ? "Sending..." : "Send"}
            </span>
          </button>
        </div>

        {deliveryErrorMessage && (
          <div className="mt-2 mb-4 flex items-center justify-center text-center">
            <a
              href="mailto:thelongemergencyband@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="email The Long Emergency">
              <p className="text-xs font-bold text-red-500 transition-transform hover:scale-105">
                {deliveryErrorMessage}
              </p>
            </a>
          </div>
        )}
      </form>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        pauseOnFocusLoss
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </div>
  );
}