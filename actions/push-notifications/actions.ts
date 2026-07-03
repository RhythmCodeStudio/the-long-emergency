"use server";

import { auth } from "@/auth/server";

import webpush from "web-push";
import type { PushSubscription } from "web-push";
// import { getSubscriptions, saveSubscription, removeSubscription } from "@/lib/push-notification-subscriptions";
import { getSubscriptionsFromDB, removeSubscriptionFromDB } from "./notification-subscriptions-db";

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
  const session = await auth.getSession();
  if (!session?.data?.user?.id) {
    return { success: false, error: "Unauthorized" };
  }

  const subscriptions = await getSubscriptionsFromDB();
  if (subscriptions.length === 0) {
    return { success: false, error: "No subscriptions available" };
  }

  const payload = JSON.stringify({
    title: "Notification from The Long Emergency",
    body: message,
    icon: "/icons/web-app-manifest-192x192.png",
    data: {
      url: url || "https://thelongemergency.com/",
    },
  });

  const results = await Promise.allSettled(
    subscriptions.map(async (row) => {
      const keys =
        typeof row.keys === "string" ? JSON.parse(row.keys) : row.keys;

      const subscription: PushSubscription = {
        endpoint: row.endpoint,
        keys,
      };

      try {
        await webpush.sendNotification(subscription, payload);
        return { ok: true as const, endpoint: row.endpoint };
      } catch (err: any) {
        if (err?.statusCode === 404 || err?.statusCode === 410) {
          await removeSubscriptionFromDB(row.endpoint);
        }

        return {
          ok: false as const,
          endpoint: row.endpoint,
          statusCode: err?.statusCode ?? null,
          message: err?.message ?? "Unknown push error",
          body: err?.body ?? null,
        };
      }
    }),
  );

  const successes = results.filter(
    (r): r is PromiseFulfilledResult<{ ok: true; endpoint: string }> =>
      r.status === "fulfilled" && r.value.ok,
  );

  const failures = results
    .map((r) => {
      if (r.status === "fulfilled") {
        return r.value.ok ? null : r.value;
      }
      return {
        ok: false as const,
        endpoint: "unknown",
        statusCode: null,
        message:
          r.reason instanceof Error
            ? r.reason.message
            : "Unhandled notification error",
        body: null,
      };
    })
    .filter(Boolean);

  if (successes.length === 0) {
    return {
      success: false,
      error:
        failures[0]?.message || "Failed to send notification to all subscribers",
      failures,
    };
  }

  return {
    success: true,
    sent: successes.length,
    failed: failures.length,
    failures,
  };
}