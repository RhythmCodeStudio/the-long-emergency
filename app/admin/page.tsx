export const dynamic = "force-dynamic";
// import stack server app
// import { stackServerApp } from "@/stack/server";
// import data
import { getSubscriptionsFromDB } from "@/actions/push-notifications/notification-subscriptions-db";
import { getMailingList, getCalendarEvents } from "../../actions/actions";
// import from neon auth
// import { SignIn } from "@stackframe/stack";
// import { AccountSettings } from "@stackframe/stack";
// import components
import Heading from "@/ui/heading";
import AdminContainer from "@/ui/admin/admin-container";
// import AdminNotificationPanel from "@/app/ui/admin/admin-notification-panel";

export default async function AdminPage() {
  // const app = stackServerApp;
  // const user = await app.getUser();
  const subsctiptions = await getSubscriptionsFromDB();
  const numberOfSubscriptions = subsctiptions.length;
  // const calendarEvents = await getCalendarEvents();

  return (
     <div className="w-full">
      {/* {!user && (
        <div className="flex justify-center my-12">
          <SignIn automaticRedirect={true} firstTab="password" />
        </div>
      )} */}

      {/* {user && ( */}
        <div className="flex flex-col justify-center items-center text-shadow-black-background-black w-full">
          <Heading
            text="Welcome back Kevin"
            headingLevel={2}
            className="font-bold text-2xl lg:text-4xl text-shadow-black-background-black tracking-widest mt-4 md:mt-0"
          />
          <div className="w-full flex justify-center p-8">
            <AdminContainer
              mailingListRows={await getMailingList()}
              numberOfNotificationSubscriptions={numberOfSubscriptions}
              calendarEventRows={await getCalendarEvents()}
            />
          </div>
        </div>
      {/* )} */}
    </div>
  );
}