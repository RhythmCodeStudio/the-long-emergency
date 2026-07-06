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
} from "../app/utils/utils";
// import actions
import {
  signUpForMailingList,
} from "../actions/actions";
// import from emailjs
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const [checked, setChecked] = useState(true);

  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [phoneErrorMessage, setPhoneErrorMessage] = useState("");
  const [firstNameErrorMessage, setFirstNameErrorMessage] = useState("");
  const [lastNameErrorMessage, setLastNameErrorMessage] = useState("");
  const [messageErrorMessage, setMessageErrorMessage] = useState("");
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

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
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
      const emailTemplateParams = {
        first_name: trimmedFirstName,
        last_name: trimmedLastName,
        email: trimmedEmail,
        phone_number: trimmedPhone,
        message: message,
      };

      try {
        emailjs
          .send(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
            emailTemplateParams,
            process.env.NEXT_PUBLIC_EMAILJS_USER_ID,
          )
          .then(() => {
            track("Contact form submission");
            setButtonSubmitted(true);
            setFirstName("");
            setLastName("");
            setEmail("");
            setPhone("");
            setMessage("");

            setTimeout(() => {
              setButtonSubmitted(false);
            }, 5000);

            notify();
          });
      } catch (error) {
        setDeliveryErrorMessage(
          "There was an error delivering your message. Please email us at thelongemergencyband@gmail.com. Sorry for the trouble.",
        );
      }
    }
    if (checked && isEmailValid) {
      signUpForMailingList(trimmedEmail);
    }
  };

  return (
    <div className="w-full black">
      <form
        onSubmit={handleFormSubmit}
        className="expand-on-load px-12 py-6 max-w-200 mx-auto relative"
      >
        <FormInput
          idPrefix="contact-form"
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
          c
        />

        <FormInput
          idPrefix="contact-form"
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
          idPrefix="contact-form"
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

        {/* Keep phone state/validation behavior unchanged even though field is hidden */}
        {/* <FormInput
          idPrefix="contact-form"
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
        /> */}

        <FormInput
          idPrefix="contact-form"
          inputType="textarea"
          label="Message"
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
          idPrefix="contact-form"
          label="Sign me up for The Long Emergency mailing list. I understand I can unsubscribe at any time."
          name="consent"
          checked={checked}
          onChange={handleCheckboxChange}
          // required={true}
          errorMessage=""
        />

        <div className="flex justify-center items-center p-6 ">
          <button
            onClick={handleFormSubmit}
            type="submit"
            className="px-6 py-1 bg-blue-500 hover:bg-blue-700 rounded-full border-2 border-black"
          >
            <span className="font-emergency text-white text-outline">Send</span>
          </button>
        </div>

        {deliveryErrorMessage && (
          <div className="flex text-center justify-center items-center mt-2 mb-4">
            <a
              href="mailto:thelongemergencyband@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="email The Long Emergency"
            >
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
