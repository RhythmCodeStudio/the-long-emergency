// "use client";
// import { useState, useEffect } from "react";
// // import from react-icons
// import { IoIosNotifications, IoIosNotificationsOff } from "react-icons/io";
// // import from headlessui
// // import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
// // import from context
// import { usePushNotification } from "../context/push-notification-context-provider";

// async function subscribeUser(sub: any) {
//   await fetch("/api/push-notifications/subscribe", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(sub),
//   });
// }

// async function unsubscribeUser(endpoint: string) {
//   await fetch("/api/push-notifications/unsubscribe", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ endpoint }),
//   });
// }

// // for generating keys
// function urlBase64ToUint8Array(base64String: string) {
//   const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
//   const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");
//   const rawData = window.atob(base64);
//   const outputArray = new Uint8Array(rawData.length);
//   for (let i = 0; i < rawData.length; ++i) {
//     outputArray[i] = rawData.charCodeAt(i);
//   }
//   return outputArray;
// }

// interface PushNotificationSubscriptionManagerProps {
//   renderedAs: "icon" | "button";
// }
// // Manage the browser's push subscription
// export default function PushNotificationSubscriptionManager({
//   renderedAs,
// }: PushNotificationSubscriptionManagerProps) {
//   const { setIsSubscribed } = usePushNotification();
//   const [isSupported, setIsSupported] = useState(false);
//   const [subscription, setSubscription] = useState<PushSubscription | null>(
//     null,
//   );
//   // const [message, setMessage] = useState("");
//   // const [url, setUrl] = useState("");

//   // useEffect(() => {
//   //   if ("serviceWorker" in navigator && "PushManager" in window) {
//   //     setIsSupported(true);
//   //     registerServiceWorker();
//   //   }
//   // }, []);

//     useEffect(() => {
//     async function setupPush() {
//       if (!("serviceWorker" in navigator) || !("PushManager" in window)) {
//         return;
//       }

//       setIsSupported(true);

//       if (process.env.NODE_ENV !== "production") {
//         // Keep local dev free of SW caching/HMR conflicts.
//         const regs = await navigator.serviceWorker.getRegistrations();
//         await Promise.all(regs.map((reg) => reg.unregister()));
//         return;
//       }

//       await registerServiceWorker();
//     }

//     setupPush().catch((error) => {
//       console.error("Push setup failed:", error);
//     });
//   }, []);

//   // Register service worker, then retrieve subscription if present
//   async function registerServiceWorker() {
//     const registration = await navigator.serviceWorker.register("/sw.js", {
//       scope: "/",
//       updateViaCache: "none",
//     });
//     const sub = await registration.pushManager.getSubscription();
//     setSubscription(sub);
//   }

//   async function subscribeToPush() {
//     const registration = await navigator.serviceWorker.ready;
//     const sub = await registration.pushManager.subscribe({
//       userVisibleOnly: true,
//       applicationServerKey: urlBase64ToUint8Array(
//         process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!,
//       ),
//     });
//     setSubscription(sub);
//     setIsSubscribed(true);
//     const serializedSub = JSON.parse(JSON.stringify(sub));
//     console.log("Subscribing to push notifications:", serializedSub);
//     await subscribeUser(serializedSub);
//   }

//   async function unsubscribeFromPush() {
//     if (subscription) {
//       console.log("Unsubscribing from push notifications:", subscription);
//       await subscription.unsubscribe();
//     }
//     setSubscription(null);
//     setIsSubscribed(false);
//     if (subscription) {
//       const serializedSub = JSON.parse(JSON.stringify(subscription));
//       await unsubscribeUser(serializedSub);
//     }
//   }

//   // async function sendTestNotification() {
//   //   if (subscription) {
//   //     await sendNotification(message, url);
//   //     setMessage("");
//   //     setUrl("");
//   //   }
//   // }

//   if (!isSupported) {
//     return <p>Push notifications are not supported in this browser.</p>;
//   }

//   return (
//     <>
//       {renderedAs === "icon" ? (
//         subscription ? (
//           <IoIosNotificationsOff
//             className="cursor-pointer"
//             size={24}
//             title="Unsubscribe from push notifications"
//             onClick={unsubscribeFromPush}
//           />
//         ) : (
//           <IoIosNotifications
//             className="cursor-pointer"
//             size={24}
//             title="Subscribe to push notifications"
//             onClick={subscribeToPush}
//           />
//         )
//       ) : subscription ? (
//         <button
//           onClick={unsubscribeFromPush}
//           className="cursor-pointer border-2 border-border-default p-1 px-4 rounded-full   w-full shadow-white shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#174054] transform transition-transform duration-200 active:scale-95 text-sm"
//         >
//           Unsubscribe from Notifications
//         </button>
//       ) : (
//         <button
//           onClick={subscribeToPush}
//           className="cursor-pointer border-2 border-border-default p-1 px-4 rounded-full   w-full shadow-white shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#174054] transform transition-transform duration-200 active:scale-95 text-sm"
//         >
//           <span className="tracking-wider z-50">Subscribe to Notifications</span>
//         </button>
//       )}
//     </>
//   );
// }

"use client";

// import from react
import { useState, useEffect } from "react";
// import from react-icons
import { IoIosNotifications, IoIosNotificationsOff } from "react-icons/io";
// import from context
import { usePushNotification } from "../context/push-notification-context-provider";
// import components
import Button from "./button";

async function subscribeUser(sub: Record<string, unknown>) {
  const response = await fetch("/api/push-notifications/subscribe", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(sub),
  });

  if (!response.ok) {
    throw new Error("Failed to persist push subscription.");
  }
}

async function unsubscribeUser(endpoint: string) {
  const response = await fetch("/api/push-notifications/unsubscribe", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ endpoint }),
  });

  if (!response.ok) {
    throw new Error("Failed to remove push subscription.");
  }
}

function urlBase64ToUint8Array(base64String: string) {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");
  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }

  return outputArray;
}

interface PushNotificationSubscriptionManagerProps {
  renderedAs: "icon" | "button";
}

export default function PushNotificationSubscriptionManager({
  renderedAs,
}: PushNotificationSubscriptionManagerProps) {
  const { setIsSubscribed } = usePushNotification();

  const [isSupported, setIsSupported] = useState(false);
  const [isInitializing, setIsInitializing] = useState(true);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [registration, setRegistration] =
    useState<ServiceWorkerRegistration | null>(null);
  const [subscription, setSubscription] = useState<PushSubscription | null>(
    null,
  );

  useEffect(() => {
    let mounted = true;

    async function setupPush() {
      try {
        if (!("serviceWorker" in navigator) || !("PushManager" in window)) {
          if (mounted) {
            setIsSupported(false);
            setStatusMessage(
              "Push notifications are not supported in this browser.",
            );
          }
          return;
        }

        if (!mounted) return;
        setIsSupported(true);

        const enablePushInDev =
          process.env.NEXT_PUBLIC_ENABLE_PUSH_IN_DEV === "true";
        const shouldDisablePush =
          process.env.NODE_ENV !== "production" && !enablePushInDev;

        if (shouldDisablePush) {
          const regs = await navigator.serviceWorker.getRegistrations();
          await Promise.all(regs.map((reg) => reg.unregister()));

          if (mounted) {
            setSubscription(null);
            setIsSubscribed(false);
            setStatusMessage(
              "Push notifications are disabled in local development.",
            );
          }
          return;
        }

        const reg = await navigator.serviceWorker.register("/sw.js", {
          scope: "/",
          updateViaCache: "none",
        });

        const existingSub = await reg.pushManager.getSubscription();

        if (!mounted) return;
        setRegistration(reg);
        setSubscription(existingSub);
        setIsSubscribed(Boolean(existingSub));
        setStatusMessage(null);
      } catch (error) {
        console.error("Push setup failed:", error);
        if (mounted) {
          setStatusMessage("Push setup failed. Please refresh and try again.");
        }
      } finally {
        if (mounted) {
          setIsInitializing(false);
        }
      }
    }

    setupPush();

    return () => {
      mounted = false;
    };
  }, [setIsSubscribed]);

  async function subscribeToPush() {
    if (isInitializing) return;
    if (!isSupported) return;

    try {
      setStatusMessage(null);

      const reg = registration ?? (await navigator.serviceWorker.ready);
      setRegistration(reg);

      let sub = await reg.pushManager.getSubscription();

      if (!sub) {
        const vapidPublicKey = process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY;
        if (!vapidPublicKey) {
          throw new Error("Missing NEXT_PUBLIC_VAPID_PUBLIC_KEY.");
        }

        sub = await reg.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: urlBase64ToUint8Array(vapidPublicKey),
        });
      }

      setSubscription(sub);
      setIsSubscribed(true);

      const serializedSub = JSON.parse(JSON.stringify(sub)) as Record<
        string,
        unknown
      >;
      await subscribeUser(serializedSub);

      setStatusMessage("Subscribed to notifications.");
    } catch (error) {
      console.error("Subscribe failed:", error);
      setStatusMessage("Could not subscribe. Please try again.");
    }
  }

  async function unsubscribeFromPush() {
    if (isInitializing) return;
    if (!subscription) return;

    try {
      setStatusMessage(null);

      const endpoint = subscription.endpoint;
      await subscription.unsubscribe();
      await unsubscribeUser(endpoint);

      setSubscription(null);
      setIsSubscribed(false);
      setStatusMessage("Unsubscribed from notifications.");
    } catch (error) {
      console.error("Unsubscribe failed:", error);
      setStatusMessage("Could not unsubscribe. Please try again.");
    }
  }

  if (!isSupported) {
    return <p>Push notifications are not supported in this browser.</p>;
  }

  const isBusy = isInitializing;
  const buttonBaseClass =
    "flex items-center justify-center cursor-pointer border-2 border-border-default py-1 px-4 rounded-full w-full shadow-white shadow-md lg:hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#174054] transform transition-transform duration-200 active:scale-95 text-sm";
  const disabledClass = isBusy ? "opacity-60 cursor-not-allowed" : "";

  return (
    <>
      {renderedAs === "icon" ? (
        subscription ? (
          <IoIosNotificationsOff
            className={
              isBusy ? "cursor-not-allowed opacity-60" : "cursor-pointer"
            }
            size={24}
            title={
              isBusy
                ? "Initializing push notifications..."
                : "Unsubscribe from push notifications"
            }
            onClick={() => {
              if (!isBusy) void unsubscribeFromPush();
            }}
          />
        ) : (
          <IoIosNotifications
            className={
              isBusy ? "cursor-not-allowed opacity-60" : "cursor-pointer"
            }
            size={24}
            title={
              isBusy
                ? "Initializing push notifications..."
                : "Subscribe to push notifications"
            }
            onClick={() => {
              if (!isBusy) void subscribeToPush();
            }}
          />
        )
      ) : subscription ? (
        // <button
        //   onClick={() => void unsubscribeFromPush()}
        //   disabled={isBusy}
        //   className={`${buttonBaseClass} ${disabledClass}`}>
        //   {isBusy
        //     ? "Preparing notifications..."
        //     : "Unsubscribe from Notifications"}
        // </button>
        <Button
          onClick={() => void unsubscribeFromPush()}
          disabled={isBusy}
          className={`${buttonBaseClass} ${disabledClass}`}
          labelClassName="-mb-1"
          label={
            isBusy
              ? "Preparing notifications..."
              : "Unsubscribe from Notifications"
          }
        />
      ) : (
        // <button
        //   onClick={() => void subscribeToPush()}
        //   disabled={isBusy}
        //   className={`${buttonBaseClass} ${disabledClass}`}>
        //   <span className="tracking-wider z-50">
        //     {isBusy
        //       ? "Preparing notifications..."
        //       : "Subscribe to Notifications"}
        //   </span>
        // </button>
        <Button
          onClick={() => void subscribeToPush()}
          disabled={isBusy}
          className={`${buttonBaseClass} ${disabledClass}`}
          labelClassName="-mb-1"
          label={
            isBusy
              ? "Preparing notifications..."
              : "Subscribe to Notifications"
          }
        />
      )}

      {/* {statusMessage && renderedAs === "button" ? (
        <p className="mt-2 text-center text-xs">{statusMessage}</p>
      ) : null} */}
    </>
  );
}
