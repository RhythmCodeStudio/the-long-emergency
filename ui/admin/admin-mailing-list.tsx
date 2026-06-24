// "use client";
// // import from react
// import { useState } from "react";
// // import icons
// import { IoIosCopy } from "react-icons/io";
// // import components
// import Button from "../button";
// import Heading from "../heading";
// import FormInput from "../form-input";
// // import clsx
// import clsx from "clsx";
// import emailjs from "@emailjs/browser";
// import { toast, Zoom } from "react-toastify";

// type MailingListProps = {
//   rows: { email: string }[];
// };

// export default function AdminMailingList({ rows }: MailingListProps) {
//   const mailingList = rows.map((row: any) => ({ email: row.email }));
//   const numberOfMailingListSubscribers = mailingList.length;
//   // format list for sending a mass mailing
//   const formattedMailingList = mailingList
//     .map((subscriber) => subscriber.email)
//     .join(", ");
//   const copyToClipboard = async () => {
//     try {
//       await navigator.clipboard.writeText(formattedMailingList);
//       alert("Mailing list copied to clipboard!");
//     } catch (err) {
//       alert("Failed to copy mailing list: " + err);
//     }
//   };

//   const [subject, setSubject] = useState("");
//   const [body, setBody] = useState("");

//   const [isSending, setIsSending] = useState(false);

//   const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (isSending) return;

//     // const unsubscribeText =
//     //   "\n\nTo unsubscribe, please visit:\nhttps://www.pomiamusic.com/mailing-list/unsubscribe";

//     const payload = {
//       subject: subject.trim(),
//       message: `${body.trim()}`,
//       bcc_list: formattedMailingList, // comma-separated emails
//     };

//     try {
//       setIsSending(true);

//       await emailjs.send(
//         process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
//         process.env.NEXT_PUBLIC_EMAILJS_MAILING_LIST_TEMPLATE_ID!,
//         payload,
//         process.env.NEXT_PUBLIC_EMAILJS_USER_ID,
//       );

//       toast.success("Mailing list email sent.", {
//         transition: Zoom,
//         position: "top-center",
//       });

//       setSubject("");
//       setBody("");
//     } catch (error) {
//       toast.error("Failed to send mailing list email.", {
//         transition: Zoom,
//         position: "top-center",
//       });
//     } finally {
//       setIsSending(false);
//     }
//   };

//   // const handleSubmit = (e: React.SubmitEvent) => {
//   //   e.preventDefault();
//   //   const unsubscribeText = `\n\nTo unsubscribe, please visit:\nhttps://www.pomiamusic.com/mailing-list/unsubscribe`;
//   //   const mailto = `mailto:pomiamusic@gmail.com?bcc=${encodeURIComponent(
//   //     formattedMailingList,
//   //   )}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body + unsubscribeText)}`;
//   //   window.location.href = mailto;
//   //   setSubject("");
//   //   setBody("");
//   // };

//   return (
//     <div className="w-full flex flex-col justify-center">
//       <Heading
//         text="mailing list administration"
//         headingLevel={2}
//         className="font-bold text-3xl mb-4 text-center"
//       />
//       <p className="text-center">
//         total mailing list subscribers: {numberOfMailingListSubscribers}
//       </p>
//       {/* <p>mailing list:</p>
//       <ul>
//         {mailingList.map((subscriber, index) => (
//           <li key={index}>{subscriber.email}</li>
//         ))}
//       </ul> */}
//       <div className="flex items-center justify-center mt-6 mb-4">
//         <Button
//           icon={<IoIosCopy />}
//           label="copy mailing list"
//           onClick={copyToClipboard}
//           ariaLabel="copy mailing list to clipboard"
//           className={clsx(
//             "items-center justify-center appearance-none min-h-0 leading-none rounded-full border-border-default border-2 shadow-white shadow-md hover:shadow-lg px-4 py-2 text-white bg-black/50 transition duration-200 ease-in-out active:scale-95 rainbow-gradient-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 whitespace-nowrap",
//           )}
//         />
//       </div>
//       <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-2 w-full">
//         <Heading
//           text="send email to mailing list"
//           headingLevel={3}
//           className="font-bold text-2xl text-center"
//         />
//         <label>
//           enter subject:
//           <input
//             type="text"
//             className="border rounded px-2 py-1 w-full"
//             value={subject}
//             onChange={(e) => setSubject(e.target.value)}
//             required
//           />
//         </label>
//         <label>
//           enter message:
//           <textarea
//             className="border rounded px-2 py-1 w-full"
//             value={body}
//             onChange={(e) => setBody(e.target.value)}
//             rows={4}
//             required
//           />
//         </label>
//         <Button
//           type="submit"
//           label="open email to send message"
//           ariaLabel="open email client to email mailing list"
//           className={clsx(
//             "items-center justify-center appearance-none min-h-0 leading-none rounded-full border-border-default border-2 shadow-white shadow-md hover:shadow-lg px-4 py-2 text-white bg-black/50 transition duration-200 ease-in-out active:scale-95 rainbow-gradient-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 whitespace-nowrap",
//           )}
//         />
//       </form>
//       <div className="my-4">
//         <p>mailing list:</p>
//         <ul>
//           {mailingList.map((subscriber, index) => (
//             <li key={index}>{subscriber.email}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }



"use client";
// import from react
import { useState } from "react";
// import icons
import { IoIosCopy } from "react-icons/io";
// import components
import Button from "../button";
import Heading from "../heading";
import FormInput from "../form-input";
// import clsx
import clsx from "clsx";
import emailjs from "@emailjs/browser";
import { toast, Zoom } from "react-toastify";

type MailingListProps = {
  rows: { email: string }[];
};

export default function AdminMailingList({ rows }: MailingListProps) {
  const mailingList = rows.map((row: any) => ({ email: row.email }));
  const numberOfMailingListSubscribers = mailingList.length;
  // format list for sending a mass mailing
  const formattedMailingList = mailingList
    .map((subscriber) => subscriber.email)
    .join(", ");
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(formattedMailingList);
      alert("Mailing list copied to clipboard!");
    } catch (err) {
      alert("Failed to copy mailing list: " + err);
    }
  };

  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  // REFACTOR: Add error state for subject and body
  const [subjectErrorMessage, setSubjectErrorMessage] = useState("");
  const [bodyErrorMessage, setBodyErrorMessage] = useState("");

  const [isSending, setIsSending] = useState(false);

  // REFACTOR: Add handleChange function to validate and set error messages
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    setState: React.Dispatch<React.SetStateAction<any>>,
  ) => {
    const { name, value } = e.target;
    setState(value);

    // Validate and set error messages
    if (name === "subject") {
      setSubjectErrorMessage(
        value && value.trim().length === 0
          ? "Subject cannot be empty."
          : "",
      );
    }
    if (name === "body") {
      setBodyErrorMessage(
        value && value.trim().length === 0
          ? "Message cannot be empty."
          : "",
      );
    }
  };

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSending) return;

    // REFACTOR: Add validation before sending
    const isSubjectValid = subject.trim().length > 0;
    const isBodyValid = body.trim().length > 0;

    if (!isSubjectValid) {
      setSubjectErrorMessage("Subject cannot be empty.");
      return;
    }
    if (!isBodyValid) {
      setBodyErrorMessage("Message cannot be empty.");
      return;
    }

    const payload = {
      subject: subject.trim(),
      message: `${body.trim()}`,
      bcc_list: formattedMailingList, // comma-separated emails
    };

    try {
      setIsSending(true);

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_MAILING_LIST_TEMPLATE_ID!,
        payload,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID,
      );

      toast.success("Mailing list email sent.", {
        transition: Zoom,
        position: "top-center",
      });

      setSubject("");
      setBody("");
      setSubjectErrorMessage("");
      setBodyErrorMessage("");
    } catch (error) {
      toast.error("Failed to send mailing list email.", {
        transition: Zoom,
        position: "top-center",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="w-full flex flex-col justify-center">
      <Heading
        text="mailing list administration"
        headingLevel={2}
        className="font-bold text-3xl mb-4 text-center"
      />
      <p className="text-center">
        total mailing list subscribers: {numberOfMailingListSubscribers}
      </p>
      <div className="flex items-center justify-center mt-6 mb-4">
        <Button
          icon={<IoIosCopy />}
          label="copy mailing list"
          onClick={copyToClipboard}
          ariaLabel="copy mailing list to clipboard"
          className={clsx(
            "items-center justify-center appearance-none min-h-0 leading-none rounded-full border-border-default border-2 shadow-white shadow-md hover:shadow-lg px-4 py-2 text-white bg-black/50 transition duration-200 ease-in-out active:scale-95 rainbow-gradient-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 whitespace-nowrap",
          )}
        />
      </div>
      <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-2 w-full">
        <Heading
          text="send email to mailing list"
          headingLevel={3}
          className="font-bold text-2xl text-center"
        />

        {/* REFACTOR: Replace raw input with FormInput component */}
        <FormInput
          idPrefix="admin-mailing-list"
          inputType="input"
          label="subject"
          name="subject"
          type="text"
          placeholder="enter email subject"
          value={subject}
          required={true}
          autoComplete="off"
          errorMessage={subjectErrorMessage}
          handleChange={handleChange}
          setStateVariable={setSubject}
        />

        {/* REFACTOR: Replace raw textarea with FormInput component */}
        <FormInput
          idPrefix="admin-mailing-list"
          inputType="textarea"
          label="message"
          name="body"
          type="text"
          placeholder="enter message for mailing list"
          value={body}
          required={true}
          autoComplete="off"
          errorMessage={bodyErrorMessage}
          handleChange={handleChange}
          setStateVariable={setBody}
        />
        <Button
          type="submit"
          label="send email to mailing list"
          ariaLabel="send email to mailing list"
          className={clsx(
            "text-shadow-black-background-black max-w-52 mx-auto items-center justify-center appearance-none min-h-0 leading-none rounded-full border-border-default border-2 shadow-white shadow-md hover:shadow-lg px-4 py-2 text-white bg-black/50 transition duration-200 ease-in-out active:scale-95 rainbow-gradient-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 whitespace-nowrap",
          )}
        />
      </form>
      <div className="my-4">
        <p>mailing list:</p>
        <ul>
          {mailingList.map((subscriber, index) => (
            <li key={index}>{subscriber.email}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
