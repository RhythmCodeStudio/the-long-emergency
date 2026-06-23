"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

type PushContextType = {
  isSubscribed: boolean | null;
  setIsSubscribed: (val: boolean) => void;
  refreshSubscription: () => Promise<void>;
};

const PushNotificationContext = createContext<PushContextType | undefined>(undefined);

export function PushNotificationContextProvider({ children }: { children: React.ReactNode }) {
  const [isSubscribed, setIsSubscribed] = useState<boolean | null>(null);

  // Check subscription on mount
  async function refreshSubscription() {
    if ("serviceWorker" in navigator && "PushManager" in window) {
      const reg = await navigator.serviceWorker.getRegistration();
      const sub = await reg?.pushManager.getSubscription();
      setIsSubscribed(!!sub);
    } else {
      setIsSubscribed(false);
    }
  }

  useEffect(() => {
    refreshSubscription();
  }, []);

  return (
    <PushNotificationContext.Provider value={{ isSubscribed, setIsSubscribed, refreshSubscription }}>
      {children}
    </PushNotificationContext.Provider>
  );
}

export function usePushNotification() {
  const ctx = useContext(PushNotificationContext);
  if (!ctx) throw new Error("usePushNotification must be used within PushNotificationProvider");
  return ctx;
}