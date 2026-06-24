"use client";
import { useState } from "react";
import { sendNotification } from "../../app/actions/actions";

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
    const result = await sendNotification(message, url);
    setStatus(
      result && result.success ? "Notification sent!" : "Failed to send."
    );
    setMessage("");
    setUrl("");
  }

  return (
    <div className="p-2">
      <h3 className="text-center font-bold mb-2">notification admin</h3>
      <p>
        {numberOfSubscriptions === 1
          ? `there is currently ${numberOfSubscriptions} person subscribed to notifications.`
          : `There are currently ${
              numberOfSubscriptions ?? "Loading..."
            } people subscribed to notifications.`}
      </p>
      <br />
      <p>send a new notification:</p>
      <input
        type="text"
        placeholder="enter notification message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="border p-1 rounded-md my-2 w-full max-w-md"
      />
      <br />
      <input
        type="text"
        placeholder="enter url to open on click"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="border p-1 rounded-md my-2 w-full max-w-md"
      />
      <br />
      <button
        onClick={handleSend}
        className="mt-2 px-4 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 border-1">
        send notification
      </button>
      {status && <p>{status}</p>}
    </div>
  );
}
