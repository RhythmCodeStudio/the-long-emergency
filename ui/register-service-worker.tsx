"use client";
import { useEffect } from "react";

export default function RegisterServiceWorker() {
  useEffect(() => {
    let cancelled = false;
    async function register() {
      if (!("serviceWorker" in navigator)) return;

      const enablePushInDev =
        process.env.NEXT_PUBLIC_ENABLE_PUSH_IN_DEV === "true";
      const shouldRegister =
        process.env.NODE_ENV === "production" || enablePushInDev;

      if (!shouldRegister) return;

      try {
        await navigator.serviceWorker.register("/sw.js", {
          scope: "/",
          updateViaCache: "none",
        });
      } catch (error) {
        if (!cancelled) {
          console.error("Service worker registration failed:", error);
        }
      }
    }

    void register();

    return () => {
      cancelled = true;
    };
  }, []);

  return null;
}
