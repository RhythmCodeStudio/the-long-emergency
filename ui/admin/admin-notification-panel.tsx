"use client";
// import from react
import { useState } from "react";
// import actions
import { sendNotification } from "@/actions/push-notifications/actions";
// import components
import Button from "@/ui/button";
import FormInput from "../form-input";

export default function AdminNotificationPanel({
  numberOfSubscriptions,
}: {
  numberOfSubscriptions?: number;
}) {
  // console.log("numberOfSubscriptions in client:", numberOfSubscriptions);
  const [message, setMessage] = useState("");
  const [url, setUrl] = useState("");
  const [status, setStatus] = useState<null | string>(null);

  async function handleSend() {
    // console.log("handleSend clicked", { message, url });
    try {
      const result = await sendNotification(message, url);
      // console.log("sendNotification result", result);
      setStatus(
        result?.success
          ? "Notification sent!"
          : `Failed: ${result?.error ?? "Unknown error"}`,
      );
      setMessage("");
      setUrl("");
    } catch (err) {
      console.error("sendNotification threw before network", err);
      setStatus("Client error before request. Check console.");
    }
  }

  const handleMessageChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    // setMessage(e.target.value);
  };

  const handleUrlChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    // setUrl(e.target.value);
  };

  return (
    <div className="p-2">
      <h3 className="text-center font-bold mb-2">Notification Admin</h3>
      <p>
        {numberOfSubscriptions === 1
          ? `there is currently ${numberOfSubscriptions} person subscribed to notifications.`
          : `There are currently ${
              numberOfSubscriptions ?? "Loading..."
            } people subscribed to notifications.`}
      </p>
      <br />
      <p>Send a new notification:</p>
      {/* <input
        type="text"
        placeholder="enter notification message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="border p-1 rounded-md my-2 w-full max-w-md"
      />
      <br /> */}
      <FormInput
        inputType="input"
        type="text"
        label="Enter Notification Message"
        name="notificationMessage"
        placeholder="Enter Notification Message"
        value={message}
        handleChange={handleMessageChange}
        required={true}
        errorMessage=""
        setStateVariable={setMessage}
      />

      <FormInput
        inputType="input"
        type="text"
        label="Enter URL to open on click"
        name="notificationUrl"
        placeholder="Enter URL to open on click"
        value={url}
        handleChange={handleUrlChange}
        required={false}
        errorMessage=""
        setStateVariable={setUrl}
      />
      
      <button
        onClick={handleSend}
        className="rounded-full px-4 py-2 bg-customBlue text-black hover:shadow-md hover:shadow-white border-1 border-slate-400 flex items-center active:scale-95 transition ease-in-out duration-400">
        Send Notification
      </button>
      {status && <p className="mt-2">{status}</p>}
    </div>
  );
}
