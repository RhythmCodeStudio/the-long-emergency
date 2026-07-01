"use server";

import webpush from "web-push";
import type { PushSubscription } from "web-push";
// import { getSubscriptions, saveSubscription, removeSubscription } from "@/lib/push-notification-subscriptions";
import { getSubscriptionsFromDB } from "./notification-subscriptions-db";

webpush.setVapidDetails(
  "mailto:info@thelongemergency.com",
  process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!,
  process.env.VAPID_PRIVATE_KEY!
);

// let subscription: PushSubscription | null = null
// let subscriptions: PushSubscription[] = [];

// save for potential server-side subscription management
// export async function subscribeUserServerSide(endpoint: string) {
//   saveSubscription(endpoint);
//   return { success: true };
// }
// save for potential server-side subscription management
// export async function unsubscribeUserServerSide(endpoint: string) {
//   removeSubscription(endpoint);
//   return { success: true };
// }

export async function sendNotification(message: string, url?: string) {
  // const subscriptions = getSubscriptions();
  const subscriptions = await getSubscriptionsFromDB();
  if (subscriptions.length === 0) {
    return { success: false, error: "No subscriptions available" };
  }

  try {
    await Promise.all(
      subscriptions.map((row) => {
        // Convert Row to PushSubscription
        const subscription: PushSubscription = {
          endpoint: row.endpoint,
          keys: JSON.parse(row.keys),
        };
        return webpush.sendNotification(
          subscription,
          JSON.stringify({
            title: "Notification from The Long Emergency",
            body: message,
            icon: "/icons/web-app-manifest-192x192.png",
            data: {
              url: url || "https://thelongemergency.com/",
            },
          })
        );
      })
    );
    return { success: true };
  } catch (error) {
    console.error("Error sending push notification:", error);
    return { success: false, error: "Failed to send notification" };
  }
}