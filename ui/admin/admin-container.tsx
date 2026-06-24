// "use client";
// import { useState } from "react";
// import MailingList from "./mailing-list";
// import AdminNotificationPanel from "./admin-notification-panel";
// import AdminCalendar from "./admin-calendar";
// import Messages from "./messages";
// import Button from "../button";
// import Heading from "../heading";
// // import clsx
// import clsx from "clsx";

// interface AdminContainerProps {
//   mailingListRows: any[];
//   numberOfNotificationSubscriptions?: number;
// }

// export default function AdminContainer({
//   mailingListRows,
//   numberOfNotificationSubscriptions,
// }: AdminContainerProps) {
//   const [view, setView] = useState<
//     "calendar" | "mailingList" | "notifications" | "messages"
//   >("calendar");

//   // --- set a fixed minHeight for the content area to prevent layout shift ---
//   // adjust this value based on largest panel's height
//   const contentMinHeight = "min-h-[600px]"; // <-- change as needed

//   return (
//     <section className="w-full min-w-[300px] max-w-4xl flex flex-col items-center p-4">
//       <Heading
//         headingLevel={2}
//         className="text-center mb-4"
//         text="Admin Panel"
//       />
//       <div className="flex gap-4 mb-6 justify-center">
//         <Button
//           label="Calendar"
//           onClick={() => setView("calendar")}
//           ariaLabel="View Calendar"
//           className={clsx(
//             view === "calendar"
//               ? "bg-blue-600 text-white pointer-events-none"
//               : "bg-gray-200 text-gray-800"
//           )}
//         />
//         <Button
//           label="Notifications"
//           onClick={() => setView("notifications")}
//           ariaLabel="Send Notifications"
//           className={clsx(
//         view === "notifications"
//           ? "bg-blue-600 text-white pointer-events-none"
//           : "bg-gray-200 text-gray-800"
//           )}
//         />
//         <Button
//           label="Mailing List"
//           onClick={() => setView("mailingList")}
//           ariaLabel="View Mailing List"
//           className={clsx(
//         view === "mailingList"
//           ? "bg-blue-600 text-white pointer-events-none"
//           : "bg-gray-200 text-gray-800"
//           )}
//         />
//         <Button
//           label="Messages"
//           onClick={() => setView("messages")}
//           ariaLabel="View Messages"
//           className={clsx(
//         view === "messages"
//           ? "bg-blue-600 text-white pointer-events-none"
//           : "bg-gray-200 text-gray-800"
//           )}
//         />
//       </div>
//       {/* --- Changed: Render all panels, but only show the active one with absolute positioning and opacity --- */}
//       <div className={`relative w-full ${contentMinHeight}`}>
//         <div
//           className={`absolute inset-0 transition-opacity duration-300 ${
//             view === "calendar"
//               ? "opacity-100 pointer-events-auto"
//               : "opacity-0 pointer-events-none"
//           }`}>
//           <AdminCalendar/>
//         </div>
//         <div
//           className={`absolute inset-0 transition-opacity duration-300 ${
//             view === "mailingList"
//               ? "opacity-100 pointer-events-auto"
//               : "opacity-0 pointer-events-none"
//           }`}>
//           <MailingList rows={mailingListRows} />
//         </div>
//         <div
//           className={`absolute inset-0 transition-opacity duration-300 ${
//             view === "notifications"
//               ? "opacity-100 pointer-events-auto"
//               : "opacity-0 pointer-events-none"
//           }`}>
//           <AdminNotificationPanel
//             numberOfSubscriptions={numberOfNotificationSubscriptions}
//           />
//         </div>
//         <div
//           className={`absolute inset-0 transition-opacity duration-300 ${
//             view === "messages"
//               ? "opacity-100 pointer-events-auto"
//               : "opacity-0 pointer-events-none"
//           }`}>
//           <Messages />
//         </div>
//       </div>
//     </section>
//   );
// }
// // --- Changes marked above ---
// // - Added a minHeight to the content area to prevent layout shift.
// // - Render all views absolutely stacked, only the active one is visible, so the container size doesn't change.

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
import { CalendarEvent } from "@/lib/definitions";

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
