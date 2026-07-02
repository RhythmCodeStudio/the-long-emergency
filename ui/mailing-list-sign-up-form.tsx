"use client";
// import from react
import { useState } from "react";
// import actions
import {
  signUpForMailingList,
  removeFromMailingList,
} from "../actions/actions";
// import from clsx
import { clsx } from "clsx";
// import from toastify
import { ToastContainer, Zoom, toast } from "react-toastify";
// import components
import ContactFormInput from "./form-input";
import Heading from "./heading";
// import from utils
import { validateEmail } from "../utils/utils";

interface MailingListSignUpFormProps {
  mode?: "sign-up" | "remove";
  className?: string;
}

export default function MailingListSignUpForm({
  mode = "sign-up",
  className,
}: MailingListSignUpFormProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  // const [error, setError] = useState("");
  const [emailErrorMessage, setEmailErrorMessage] = useState("");

  const isFormValid = validateEmail(email.trim());

  const showErrorToast = (msg: string) => {
    toast.error(msg, {
      transition: Zoom,
      position: "top-center",
      closeOnClick: true,
      pauseOnHover: true,
      className: "border-2 border-neutral-400 text-white",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const value = e.target.value;
    setEmail(value);
    setEmailErrorMessage(
      value && !validateEmail(value)
        ? "Please enter a valid email address."
        : "",
    );
  };

  const handleFormSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // trim form data
    const trimmedEmail = email.trim();
    const isEmailValid = validateEmail(trimmedEmail);
    if (!isEmailValid) {
      setEmailErrorMessage("Please enter a valid email address.");
      return;
    }

    try {
      if (mode === "sign-up") {
        await signUpForMailingList(trimmedEmail);
      } else if (mode === "remove") {
        await removeFromMailingList(trimmedEmail);
      }
      setSubmitted(true);
      setEmail("");
    } catch (err) {
      console.error("Error signing up for mailing list:", err);
      showErrorToast(
        "An error occurred while signing up. Please try again later.",
      );
    }
  };

  return (
    <div className={`flex flex-col items-stretch w-full p-4 lg:p-8 bg-black/50 border-border-default border-2 shadow-white shadow-lg rounded-4xl max-w-lg ${className}`}>
      <Heading
        text={
          mode === "sign-up"
            ? "Mailing List Sign-Up"
            : "Unsubscribe from Mailing List"
        }
        headingLevel={3}
        className="text-xl lg:text-2xl font-semibold text-shadow-black-background-black mb-4 text-center"
      />
      <form
        onSubmit={handleFormSubmit}
        className="flex flex-col text-shadow-black-background-black">
        <ContactFormInput
          idPrefix="mailing-list-sign-up-form"
          inputType="input"
          label="Email address"
          type="email"
          name="email"
          value={email}
          handleChange={handleChange}
          placeholder="Enter your email address"
          required={true}
          autoComplete="email"
          errorMessage={emailErrorMessage}
          setStateVariable={setEmail}
        />
        {/* {emailErrorMessage && <p className="text-red-500">{emailErrorMessage}</p>} */}
        <button
          type="submit"
          disabled={!isFormValid || submitted}
          className={clsx(
            "z-50 border-2 border-border-default p-1 px-4 rounded-full text-sm rainbow-gradient text-shadow-black-background-black transition duration-700 ease-in-out tracking-widest will-change-transform mx-auto",
            {
              "cursor-not-allowed opacity-40": !isFormValid || submitted,
              "border-green-500 hover:border-border-default cursor-pointer opacity-100 hover:scale-105 active:scale-95 shadow-lg shadow-white":
                isFormValid && !submitted,
            },
          )}>
          <span className="z-50 font-semibold text-white tracking-wideest">
            {submitted
              ? mode === "sign-up"
                ? "Thank you for signing up!"
                : "Thank you! Sign up again at any time!"
              : mode === "sign-up"
                ? "Sign Up"
                : "Unsubscribe"}
          </span>
        </button>
      </form>
      <ToastContainer />
    </div>
  );
}
