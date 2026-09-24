"use client";
// import from vercel
import { track } from "@vercel/analytics";
// import from next
import Image from "next/image";
// import from react
import { useState } from "react";
// import from toastify
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import from components
import FormInput from "./form-input";
import FormCheckbox from "./form-checkbox";
// import from utils
import {
  validateEmail,
  validateName,
  validatePhone,
  validateMessage,
  validateCity,
  validateState,
  validateVenue,
  validateOtherActs,
  validatePerformanceDate,
  validatePlaceToCrash,
  validateShowRequestForm,
} from "@/utils/utils";
// import actions
import { submitShowRequest } from "@/actions/actions";
import FormDateInput from "./form-date-input";

export default function ShowRequestForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [message, setMessage] = useState("");

  const [mailingListChecked, setMailingListChecked] = useState(true);

  const [venueChecked, setVenueChecked] = useState<boolean | undefined>(
    undefined,
  );
  const [venueName, setVenueName] = useState("");

  const [preferredDateFirstChoice, setPreferredDateFirstChoice] = useState("");
  const [preferredDateSecondChoice, setPreferredDateSecondChoice] =
    useState("");
  const [preferredDateThirdChoice, setPreferredDateThirdChoice] = useState("");

  const [placeToCrashChecked, setPlaceToCrashChecked] = useState(false);
  const [placeToCrash, setPlaceToCrash] = useState("");

  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [phoneErrorMessage, setPhoneErrorMessage] = useState("");
  const [firstNameErrorMessage, setFirstNameErrorMessage] = useState("");
  const [lastNameErrorMessage, setLastNameErrorMessage] = useState("");
  const [messageErrorMessage, setMessageErrorMessage] = useState("");

  const [cityErrorMessage, setCityErrorMessage] = useState("");
  const [stateErrorMessage, setStateErrorMessage] = useState("");
  const [venueNameErrorMessage, setVenueNameErrorMessage] = useState("");

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
  const [placeToCrashErrorMessage, setPlaceToCrashErrorMessage] = useState("");

  const [deliveryErrorMessage, setDeliveryErrorMessage] = useState("");
  const [buttonSubmitted, setButtonSubmitted] = useState(false);

  const notify = () =>
    toast.info("Thanks for reaching out. I will be in touch soon!", {
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

  const handleMailingListCheckboxChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setMailingListChecked(e.target.checked);
  };

  const handleVenueChoiceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isYes = e.target.value === "yes";
    setVenueChecked(isYes);
    if (!isYes) {
      setVenueName("");
      setVenueNameErrorMessage("");
    }
  };

  const handlePlaceToCrashCheckboxChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setPlaceToCrashChecked(e.target.checked);
  };

  const handlePreferredDateFirstChoiceChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setPreferredDateFirstChoice(e.target.value);
    if (validatePerformanceDate(new Date(e.target.value))) {
      setPreferredDateFirstChoiceErrorMessage("");
    }
  };

  const handlePreferredDateSecondChoiceChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setPreferredDateSecondChoice(e.target.value);
    if (validatePerformanceDate(new Date(e.target.value))) {
      setPreferredDateSecondChoiceErrorMessage("");
    }
  };

  const handlePreferredDateThirdChoiceChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setPreferredDateThirdChoice(e.target.value);
    if (validatePerformanceDate(new Date(e.target.value))) {
      setPreferredDateThirdChoiceErrorMessage("");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    setState: React.Dispatch<React.SetStateAction<any>>,
  ) => {
    setState(e.target.value);

    if (e.target.name === "email" && validateEmail(e.target.value)) {
      setEmailErrorMessage("");
    }
    if (e.target.name === "firstName" && validateName(e.target.value)) {
      setFirstNameErrorMessage("");
    }
    if (e.target.name === "lastName" && validateName(e.target.value)) {
      setLastNameErrorMessage("");
    }
    if (e.target.name === "phone" && validatePhone(e.target.value)) {
      setPhoneErrorMessage("");
    }
    if (e.target.name === "message" && validateMessage(e.target.value)) {
      setMessageErrorMessage("");
    }
    if (e.target.name === "city" && validateCity(e.target.value)) {
      setCityErrorMessage("");
    }
    if (e.target.name === "state" && validateState(e.target.value)) {
      setStateErrorMessage("");
    }
    if (e.target.name === "venueName" && validateVenue(e.target.value)) {
      setVenueNameErrorMessage("");
    }

    if (
      e.target.name === "placeToCrash" &&
      validatePlaceToCrash(e.target.value)
    ) {
      setPlaceToCrashErrorMessage("");
    }
  };

  const handleFormSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const trimmedFirstName = firstName.trim();
    const trimmedLastName = lastName.trim();
    const trimmedEmail = email.trim();
    const trimmedPhone = phone.trim();

    const isEmailValid = validateEmail(trimmedEmail);
    const isPhoneValid = validatePhone(trimmedPhone);
    const isFirstNameValid = validateName(trimmedFirstName);
    const isLastNameValid = validateName(trimmedLastName);
    const isMessageValid = validateMessage(message);

    if (!isEmailValid) {
      setEmailErrorMessage("Please enter a valid email address.");
      return;
    }
    if (!isFirstNameValid) {
      setFirstNameErrorMessage("Please enter a valid first name.");
      return;
    }
    if (!isLastNameValid) {
      setLastNameErrorMessage("Please enter a valid last name.");
      return;
    }
    if (!isPhoneValid) {
      setPhoneErrorMessage("Please enter a valid phone number.");
      return;
    }
    if (!isMessageValid) {
      setMessageErrorMessage("Please enter a message.");
      return;
    }

    if (
      isEmailValid &&
      isPhoneValid &&
      isFirstNameValid &&
      isLastNameValid &&
      isMessageValid
    ) {
      submitShowRequest({
        name: `${trimmedFirstName} ${trimmedLastName}`,
        email: trimmedEmail,
        phone: trimmedPhone,
        message: message,
        subscribe: mailingListChecked,
      });
    }
  };

  return (
    <div className="w-full">
      <form
        onSubmit={handleFormSubmit}
        className="px-12 py-4 max-w-200 mx-auto relative">
        <p className="text-center text-lg font-semibold mb-4">
          Contact Information
        </p>
        <FormInput
          idPrefix="show-request-form"
          inputType="input"
          label="First Name"
          type="text"
          name="firstName"
          value={firstName}
          handleChange={handleChange}
          placeholder="First Name"
          required={false}
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
        <p className="text-center text-lg font-semibold mt-6 mb-4">
          Date Preferences
        </p>
        <div className="grid grid-cols-3 gap-6">
          <FormDateInput
            idPrefix="show-request-form"
            label="1st Choice"
            name="preferredDateFirstChoice"
            value={preferredDateFirstChoice}
            required={false}
            min={new Date().toISOString().split("T")[0]}
            errorMessage={preferredDateFirstChoiceErrorMessage}
            handleChange={handlePreferredDateFirstChoiceChange}
          />

          <FormDateInput
            idPrefix="show-request-form"
            label="2nd Choice"
            name="preferredDateSecondChoice"
            value={preferredDateSecondChoice}
            required={false}
            min={new Date().toISOString().split("T")[0]}
            errorMessage={preferredDateSecondChoiceErrorMessage}
            handleChange={handlePreferredDateSecondChoiceChange}
          />

          <FormDateInput
            idPrefix="show-request-form"
            label="3rd Choice"
            name="preferredDateThirdChoice"
            value={preferredDateThirdChoice}
            required={false}
            min={new Date().toISOString().split("T")[0]}
            errorMessage={preferredDateThirdChoiceErrorMessage}
            handleChange={handlePreferredDateThirdChoiceChange}
          />
        </div>

        <p className="text-center text-lg font-semibold mt-6 mb-4">
          Venue Information
        </p>
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
        <FormInput
          idPrefix="show-request-form"
          inputType="input"
          label="State"
          type="text"
          name="state"
          value={state}
          handleChange={handleChange}
          placeholder="State"
          required={false}
          autoComplete="address-level1"
          errorMessage={stateErrorMessage}
          setStateVariable={setState}
        />
        <p>Do you have a venue in mind?</p>
        <div className="grid grid-cols-2">
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
        )}

        <p className="text-center text-lg font-semibold mb-4">Details</p>
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
          // required={true}
          errorMessage=""
        />
        <div className="flex justify-center items-center p-6 ">
          <button
            onClick={handleFormSubmit}
            type="submit"
            className="px-6 py-1 bg-blue-500 hover:bg-blue-700 rounded-full border-2 border-black">
            <span className="font-emergency text-white text-outline">Send</span>
          </button>
        </div>
        {deliveryErrorMessage && (
          <div className="flex text-center justify-center items-center mt-2 mb-4">
            <a
              href="mailto:thelongemergencyband@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="email The Long Emergency">
              <p className="text-red-500 text-xs font-bold hover:transform hover:scale-105 transition-transform">
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
