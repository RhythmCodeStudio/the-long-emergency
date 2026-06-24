"use client";
import { useState } from "react";
import AdminMailingList from "./admin-mailing-list";
import AdminNotificationPanel from "./admin-notification-panel";
import AdminCalendar from "./admin-calendar";
import Messages from "./messages";
import Button from "../button";
import Heading from "../heading";
import clsx from "clsx";
// import definitions
// import { CalendarEvent } from "@/definitions/definitions";

interface AdminContainerProps {
  mailingListRows: any[];
  numberOfNotificationSubscriptions?: number;
  calendarEventRows: any[];
}

export default function AdminContainer({
  mailingListRows,
  numberOfNotificationSubscriptions,
  calendarEventRows,
}: AdminContainerProps) {
  const [view, setView] = useState<
    "calendar" | "mailingList" | "notifications" | "messages"
  >("calendar");

  // Adjust this value based on your shortest panel
  const contentMinHeight = "min-h-[42rem]"; // <-- change as needed

  return (
    <section className="bg-black/50 rounded-4xl shadow-lg shadow-white border-2 border-border-default w-full max-w-6xl min-w-[16rem] flex flex-col items-center p-4 pb-8">
      <Heading
        headingLevel={2}
        className="text-center text-xl mb-4"
        text="admin panel"
      />
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mb-6 justify-center w-full px-6">
        <Button
          label="calendar"
          onClick={() => setView("calendar")}
          ariaLabel="View Calendar"
          className={clsx(
            "rounded-full px-4 py-2 transition duration-200", // always applied
            view === "calendar"
              ? "bg-blue-600 text-white pointer-events-none"
              : "bg-gray-200 text-gray-800",
          )}
        />
        <Button
          label="notifications"
          onClick={() => setView("notifications")}
          ariaLabel="Send Notifications"
          className={clsx(
            "rounded-full px-4 py-2 transition duration-200", // always applied
            view === "notifications"
              ? "bg-blue-600 text-white pointer-events-none"
              : "bg-gray-200 text-gray-800",
          )}
        />
        <Button
          label="mailing list"
          onClick={() => setView("mailingList")}
          ariaLabel="View Mailing List"
          className={clsx(
            "rounded-full px-4 py-2 transition duration-200", // always applied
            view === "mailingList"
              ? "bg-blue-600 text-white pointer-events-none"
              : "bg-gray-200 text-gray-800",
          )}
        />
        {/* <Button
          label="Messages"
          onClick={() => setView("messages")}
          ariaLabel="View Messages"
          className={clsx(
             "rounded-full font-semibold px-4 py-2 transition duration-200", // always applied
            view === "messages"
              ? "bg-blue-600 text-white pointer-events-none"
              : "bg-gray-200 text-gray-800"
          )}
        /> */}
      </div>
      {/* Conditional rendering: only the active panel is mounted */}
      <div className={`w-full ${contentMinHeight} h-auto`}>
        {view === "calendar" && (
          <AdminCalendar calendarEventRows={calendarEventRows} />
        )}
        {view === "mailingList" && <AdminMailingList rows={mailingListRows} />}
        {view === "notifications" && (
          <AdminNotificationPanel
            numberOfSubscriptions={numberOfNotificationSubscriptions}
          />
        )}
        {view === "messages" && <Messages />}
      </div>
    </section>
  );
}
