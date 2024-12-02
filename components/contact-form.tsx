"use client";
// import from vercel
import { track } from "@vercel/analytics";
// import from react
import { ChangeEvent, SetStateAction, useState } from "react";
//import from nextui
import { Button, ButtonGroup } from "@nextui-org/button";
// import from toastify
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import from utils
import {
  validateEmail,
  validateName,
  validatePhone,
  validateMessage,
} from "../app/utils/utils";
// import from emailjs
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [phoneErrorMessage, setPhoneErrorMessage] = useState("");
  const [firstNameErrorMessage, setFirstNameErrorMessage] = useState("");
  const [lastNameErrorMessage, setLastNameErrorMessage] = useState("");
  const [messageErrorMessage, setMessageErrorMessage] = useState("");
  const [deliveryErrorMessage, setDeliveryErrorMessage] = useState("");
  const [buttonSubmitted, setButtonSubmitted] = useState(false);

  const notify = () => toast.info("Thanks for reaching out. I will be in touch soon!",{
    transition: Bounce,
    position: "top-center",
    icon: <img src="/logos/long-emergency/32x32.png" alt="The Long Emergency icon" />,
    closeOnClick: true,
    pauseOnHover: true,
    className: "border-2 border-slate-400 font-emergency text-outline-none text-black",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
    setState: {
      (value: SetStateAction<string>): void;
      (value: SetStateAction<string>): void;
      (value: SetStateAction<string>): void;
      (value: SetStateAction<string>): void;
      (value: SetStateAction<string>): void;
      (arg0: any): void;
    }
  ) => {
    setState(e.target.value);
    // Check if the email is being updated and is valid
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
    // trim form data
    const trimmedFirstName = firstName.trim();
    const trimmedLastName = lastName.trim();
    const trimmedEmail = email.trim();
    const trimmedPhone = phone.trim();
    // validation  for inputs, handle errors accordingly
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
            process.env.NEXT_PUBLIC_EMAILJS_USER_ID
          )
          .then((result) => {
            track("Contact form submission");
            setButtonSubmitted(true);
            setFirstName("");
            setLastName("");
            setEmail("");
            setPhone("");
            setMessage("");
            // Reset the button's submitted state after 5 seconds
            setTimeout(() => {
              setButtonSubmitted(false);
            }, 5000);
            notify();
          });
      } catch (error) {
        setDeliveryErrorMessage(
          "There was an error delivering your message. Please email us at thelongemergencyband@gmail.com. Sorry for the trouble."
        );
      }
    }
  };

  return (
    <div className="w-full black">
      {/* <h3 className="text-center text-xl text-2xl xl:text-3xl font-bold">Get In Touch</h3> */}
      <form
        onSubmit={handleFormSubmit}
        className="expand-on-load px-12 py-6 max-w-200 mx-auto relative font-mono">
        {/* <h3 className="text-center text-xl text-2xl xl:text-3xl font-bold">Get In Touch</h3> */}
        <div className="flex flex-col justify-center">
          <label htmlFor="firstName">
            First Name
            {/* <span className="text-xs">(required)</span> */}
          </label>
          <input
            autoComplete="given-name"
            placeholder="First Name"
            onChange={(e) => handleChange(e, setFirstName)}
            value={firstName}
            // required
            type="text"
            name="firstName"
            id="firstName"
            className="shadow-2xl shadow-blue-300/50 border-2 border-slate-400 p-2 w-full text-black"
          />
          {firstNameErrorMessage && (
            <div className="flex justify-center items-center mt-2 mb-4">
              <p className="text-red-500 text-xs">{firstNameErrorMessage}</p>
            </div>
          )}
        </div>
        <div className="flex flex-col justify-center ">
          <label htmlFor="lastName">
            Last Name
            {/* <span className="text-xs"> (required)</span> */}
          </label>
          <input
            autoComplete="family-name"
            placeholder="Last Name"
            onChange={(e) => handleChange(e, setLastName)}
            value={lastName}
            // required
            type="text"
            name="lastName"
            id="lastName"
            className="shadow-2xl shadow-blue-300/50 border-2 border-slate-400 p-2 w-full text-black"
          />
          {lastNameErrorMessage && (
            <div className="flex justify-center text-center text-balance items-center mt-2 mb-4">
              <p className="text-red-500 text-xs">{lastNameErrorMessage}</p>
            </div>
          )}
        </div>
        <div className="flex flex-col justify-center">
          <label htmlFor="email">
            Email*<span className="text-xs"> (required)</span>
          </label>
          <input
            autoComplete="email"
            placeholder="Email"
            onChange={(e) => handleChange(e, setEmail)}
            value={email}
            required
            type="email"
            name="email"
            id="email"
            className="shadow-2xl shadow-blue-300/50 border-2 border-slate-400 p-2 w-full text-black"
          />
          {emailErrorMessage && (
            <div className="flex justify-center items-center mt-2 mb-4">
              <p className="text-red-500 text-xs">{emailErrorMessage}</p>
            </div>
          )}
        </div>
        {/* <div className="flex flex-col justify-center">
          <label htmlFor="phone">
            Phone Number<span className="text-xs"> (optional)</span>
          </label>
          <input
            autoComplete="tel"
            placeholder="Phone Number"
            onChange={(e) => handleChange(e, setPhone)}
            value={phone}
            type="tel"
            name="phone"
            id="phone"
            className="border-2 border-gray-800 p-2 w-full"
          />
          {phoneErrorMessage && (
            <div className="flex justify-center items-center mt-2 mb-4">
              <p className="text-red-500 text-xs">{phoneErrorMessage}</p>
            </div>
          )}
        </div> */}
        <div className="flex flex-col justify-center">
          <label htmlFor="message">
            Message*<span className="text-xs"> (required)</span>
          </label>
          <textarea
            autoComplete="off"
            maxLength={1000}
            placeholder="Let's rock"
            onChange={(e) => handleChange(e, setMessage)}
            value={message}
            required
            name="message"
            id="message"
            className="text-black shadow-2xl shadow-blue-300/50 border-2 border-slate-400 p-2 h-60 w-60 resize-none w-full"
          />
          {messageErrorMessage && (
            <div className="flex justify-center items-center mt-2 mb-4">
              <p className="text-red-500 text-xs">{messageErrorMessage}</p>
            </div>
          )}
        </div>
        <div className="flex justify-center items-center p-6 ">
          <Button
            // color="primary"
            variant="shadow"
            onClick={handleFormSubmit}
            // isSubmitted={buttonSubmitted}
            type="submit"
            className=" bg-blue-500 hover:bg-blue-700 rounded-full border-2 border-black">
            <span className="font-emergency text-white text-outline">Send</span>
          </Button>
        </div>
        {deliveryErrorMessage && (
          <div className="flex text-balance text-center justify-center items-center mt-2 mb-4">
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
