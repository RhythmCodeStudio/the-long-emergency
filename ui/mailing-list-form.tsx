// "use client";
// // import from react
// import { useState } from "react";
// // import from next
// import Link from "next/link";
// // import actions
// import {
//   signUpForMailingList,
//   removeFromMailingList,
// } from "../actions/actions";
// // import from clsx
// import { clsx } from "clsx";
// // import from toastify
// import { ToastContainer, Zoom, toast } from "react-toastify";
// // import components
// import FormInput from "./form-input";
// import Heading from "./heading";
// // import from utils
// import { validateEmail } from "../utils/utils";

// interface MailingListFormProps {
//   mode?: "sign-up" | "remove";
//   className?: string;
// }

// export default function MailingListForm({
//   mode = "sign-up",
//   className,
// }: MailingListFormProps) {
//   const isSignUpMode = mode === "sign-up";
//   const toggleMode = isSignUpMode ? "remove" : "sign-up";
//   const toggleHref = `/mailing-list?mode=${toggleMode}`;
//   const toggleLabel = isSignUpMode
//     ? "Unsubscribe from Mailing List"
//     : "Sign Up for Mailing List";
//   const [email, setEmail] = useState("");
//   const [submitted, setSubmitted] = useState(false);
//   // const [error, setError] = useState("");
//   const [emailErrorMessage, setEmailErrorMessage] = useState("");
//   const isFormValid = validateEmail(email.trim());

//   const showErrorToast = (msg: string) => {
//     toast.error(msg, {
//       transition: Zoom,
//       position: "top-center",
//       closeOnClick: true,
//       pauseOnHover: true,
//       className: "border-2 border-neutral-400 text-white",
//     });
//   };

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
//   ) => {
//     const value = e.target.value;
//     setEmail(value);
//     setEmailErrorMessage(
//       value && !validateEmail(value)
//         ? "Please enter a valid email address."
//         : "",
//     );
//   };

//   const handleFormSubmit = async (e: { preventDefault: () => void }) => {
//     e.preventDefault();
//     // trim form data
//     const trimmedEmail = email.trim();
//     const isEmailValid = validateEmail(trimmedEmail);
//     if (!isEmailValid) {
//       setEmailErrorMessage("Please enter a valid email address.");
//       return;
//     }

//     try {
//       if (mode === "sign-up") {
//         await signUpForMailingList(trimmedEmail);
//       } else if (mode === "remove") {
//         await removeFromMailingList(trimmedEmail);
//       }
//       setSubmitted(true);
//       setEmail("");
//     } catch (err) {
//       console.error("Error signing up for mailing list:", err);
//       showErrorToast(
//         mode === "sign-up"
//           ? "An error occurred while signing up. Please try again later."
//           : "An error occurred while unsubscribing. Please try again later.",
//       );
//     }
//   };

//   return (
//     <>
//       <div
//         className={`flex flex-col items-stretch w-full p-4 lg:p-8 bg-black/50 border-border-default border-2 shadow-white shadow-lg rounded-4xl max-w-lg text-black-shadow-only ${className}`}>
//         <Heading
//           text={
//             mode === "sign-up"
//               ? "Mailing List Sign-Up"
//               : "Unsubscribe from Mailing List"
//           }
//           headingLevel={3}
//           className="text-xl lg:text-2xl font-semibold  mb-4 text-center"
//         />
//         <form onSubmit={handleFormSubmit} className="flex flex-col ">
//           <FormInput
//             idPrefix="mailing-list-sign-up-form"
//             inputType="input"
//             label="Email address"
//             type="email"
//             name="email"
//             value={email}
//             handleChange={handleChange}
//             placeholder="Enter your email address"
//             required={true}
//             autoComplete="email"
//             errorMessage={emailErrorMessage}
//             setStateVariable={setEmail}
//           />
//           {/* {emailErrorMessage && <p className="text-red-500">{emailErrorMessage}</p>} */}
//           <button
//             type="submit"
//             disabled={!isFormValid || submitted}
//             className={clsx(
//               "border-2 border-border-default p-1 px-4 rounded-full text-sm   transition duration-700 ease-in-out tracking-widest will-change-transform mx-auto",
//               {
//                 "cursor-not-allowed opacity-40": !isFormValid || submitted,
//                 "border-green-500 hover:border-border-default cursor-pointer opacity-100 hover:scale-105 active:scale-95 shadow-lg shadow-white":
//                   isFormValid && !submitted,
//               },
//             )}>
//             <span className="z-50 font-semibold text-white tracking-wideest">
//               {submitted
//                 ? mode === "sign-up"
//                   ? "Thank you for signing up!"
//                   : "Thank you! Sign up again at any time!"
//                 : mode === "sign-up"
//                   ? "Sign Up"
//                   : "Unsubscribe"}
//             </span>
//           </button>
//         </form>
//         <ToastContainer />
//       </div>
//       <div className="flex justify-center mt-12">
//         <Link href={toggleHref} className="text-blue-500 hover:underline">
//           {toggleLabel}
//         </Link>
//       </div>
//     </>
//   );
// }

"use client";
import { useState, type ChangeEvent, type FormEvent } from "react";
import Link from "next/link";
import { clsx } from "clsx";
import { ToastContainer, Zoom, toast } from "react-toastify";

import {
  signUpForMailingList,
  removeFromMailingList,
} from "../actions/actions";
import FormInput from "./form-input";
import Heading from "./heading";
import { validateEmail } from "../utils/utils";

type MailingListMode = "sign-up" | "remove";

interface MailingListFormProps {
  mode?: MailingListMode;
  className?: string;
}

type ModeConfig = {
  heading: string;
  submitLabel: string;
  submittedLabel: string;
  errorMessage: string;
  toggleMode: MailingListMode;
  toggleLabel: string;
  action: (email: string) => Promise<unknown>;
};

const MODE_CONFIG: Record<MailingListMode, ModeConfig> = {
  "sign-up": {
    heading: "Mailing List Sign-Up",
    submitLabel: "Sign Up",
    submittedLabel: "Thank you for signing up!",
    errorMessage: "An error occurred while signing up. Please try again later.",
    toggleMode: "remove",
    toggleLabel: "Unsubscribe from Mailing List",
    action: signUpForMailingList,
  },
  remove: {
    heading: "Unsubscribe from Mailing List",
    submitLabel: "Unsubscribe",
    submittedLabel: "Thank you! Sign up again at any time!",
    errorMessage:
      "An error occurred while unsubscribing. Please try again later.",
    toggleMode: "sign-up",
    toggleLabel: "Sign Up for Mailing List",
    action: removeFromMailingList,
  },
};

export default function MailingListForm({
  mode = "sign-up",
  className,
}: MailingListFormProps) {
  const activeMode: MailingListMode = mode === "remove" ? "remove" : "sign-up";
  const config = MODE_CONFIG[activeMode];

  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState("");

  const isFormValid = validateEmail(email.trim());
  const toggleHref = "/mailing-list?mode=" + config.toggleMode;

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
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const value = e.target.value;
    setEmail(value);
    setEmailErrorMessage(
      value && !validateEmail(value)
        ? "Please enter a valid email address."
        : "",
    );
  };

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const trimmedEmail = email.trim();
    if (!validateEmail(trimmedEmail)) {
      setEmailErrorMessage("Please enter a valid email address.");
      return;
    }

    try {
      await config.action(trimmedEmail);
      setSubmitted(true);
      setEmail("");
    } catch (err) {
      console.error("Error submitting mailing list form:", err);
      showErrorToast(config.errorMessage);
    }
  };

  return (
    <>
      <div
        className={clsx(
          "flex flex-col items-stretch w-full p-4 lg:p-8 bg-black/50 border-border-default border-2 shadow-white shadow-lg rounded-4xl max-w-lg text-black-shadow-only",
          className,
        )}>
        <Heading
          text={config.heading}
          headingLevel={3}
          className="text sm:text-lg md:text-xl lg:text-2xl font-semibold mb-4 text-center"
        />
        <form onSubmit={handleFormSubmit} className="flex flex-col">
          <FormInput
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

          <button
            type="submit"
            disabled={!isFormValid || submitted}
            className={clsx(
              "border-2 border-border-default p-1 px-4 rounded-full text-sm transition duration-700 ease-in-out tracking-widest will-change-transform mx-auto",
              {
                "cursor-not-allowed opacity-40": !isFormValid || submitted,
                "border-green-500 hover:border-border-default cursor-pointer opacity-100 hover:scale-105 active:scale-95 shadow-lg shadow-white":
                  isFormValid && !submitted,
              },
            )}>
            <span className="z-50 font-semibold text-white tracking-wideest">
              {submitted ? config.submittedLabel : config.submitLabel}
            </span>
          </button>
        </form>
        <ToastContainer />
      </div>
      <div className="flex justify-center mt-12">
        <Link href={toggleHref} className="text-blue-500 hover:underline">
          {config.toggleLabel}
        </Link>
      </div>
    </>
  );
}
