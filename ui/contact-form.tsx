"use client";

import { track } from "@vercel/analytics";
import Image from "next/image";
import { useState } from "react";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import FormCheckbox from "./form-checkbox";
import FormInput from "./form-input";

import {
  validateEmail,
  validateMessage,
  validateName,
  validatePhone,
} from "@/utils/utils";

import { signUpForMailingList } from "../actions/actions";
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

  const trimmedFirstName = firstName.trim();
  const trimmedLastName = lastName.trim();
  const trimmedEmail = email.trim();
  const trimmedPhone = phone.trim();

  const isFirstNameValid = validateName(trimmedFirstName);
  const isLastNameValid = validateName(trimmedLastName);
  const isEmailValid = validateEmail(trimmedEmail);
  const isPhoneValid = !trimmedPhone || validatePhone(trimmedPhone);
  const isMessageValid = validateMessage(message);

  const isFormValid =
    isFirstNameValid &&
    isLastNameValid &&
    isEmailValid &&
    isPhoneValid &&
    isMessageValid;

  const notify = () => {
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
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    setState: React.Dispatch<React.SetStateAction<string>>,
  ) => {
    const { name, value } = e.target;

    setState(value);

    if (name === "email" && validateEmail(value)) {
      setEmailErrorMessage("");
    }

    if (name === "firstName" && validateName(value)) {
      setFirstNameErrorMessage("");
    }

    if (name === "lastName" && validateName(value)) {
      setLastNameErrorMessage("");
    }

    if (name === "phone" && (!value.trim() || validatePhone(value))) {
      setPhoneErrorMessage("");
    }

    if (name === "message" && validateMessage(value)) {
      setMessageErrorMessage("");
    }
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isFormValid) {
      if (!isEmailValid) {
        setEmailErrorMessage("Please enter a valid email address.");
      }

      if (!isFirstNameValid) {
        setFirstNameErrorMessage("Please enter a valid first name.");
      }

      if (!isLastNameValid) {
        setLastNameErrorMessage("Please enter a valid last name.");
      }

      if (!isPhoneValid) {
        setPhoneErrorMessage("Please enter a valid phone number.");
      }

      if (!isMessageValid) {
        setMessageErrorMessage("Please enter a message.");
      }

      return;
    }

    const emailTemplateParams = {
      first_name: trimmedFirstName,
      last_name: trimmedLastName,
      email: trimmedEmail,
      phone_number: trimmedPhone,
      message,
    };

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
        emailTemplateParams,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID,
      );

      track("Contact form submission");

      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setMessage("");

      if (checked) {
        await signUpForMailingList(trimmedEmail);
      }

      notify();
    } catch {
      setDeliveryErrorMessage(
        "There was an error delivering your message. Please email us at info@thelongemergency.com. Sorry for the trouble.",
      );
    }
  };

  return (
    <div className="w-full">
      <form
        onSubmit={handleFormSubmit}
        className="relative mx-auto max-w-200 px-12 py-4 sm:py-8">
        <FormInput
          idPrefix="contact-form"
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
          idPrefix="contact-form"
          inputType="input"
          label="Last Name"
          type="text"
          name="lastName"
          value={lastName}
          handleChange={handleChange}
          placeholder="Last Name"
          required={true}
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
        <FormInput
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
        />
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
          errorMessage=""
        />

        <div className="flex items-center justify-center p-6">
          <button
            type="submit"
            disabled={!isFormValid}
            className="rounded-full border-2 border-slate-400 bg-customBlue px-6 py-1 text-white shadow-white transition enabled:hover:bg-hoverBlue enabled:hover:shadow-md disabled:cursor-not-allowed disabled:opacity-50 disabled:grayscale">
            <span className="font-emergency text-outline">Send</span>
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
