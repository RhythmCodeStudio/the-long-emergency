"use client";
import React, { createContext, useContext, useState } from "react";

interface DismissedToastsContextType {
  dismissedToasts: Set<string>;
  addDismissedToast: (id: string) => void;
}

const DismissedToastsContext = createContext<DismissedToastsContextType | undefined>(
  undefined,
);

export function DismissedToastsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [dismissedToasts, setDismissedToasts] = useState<Set<string>>(
    new Set(),
  );

  const addDismissedToast = (id: string) => {
    setDismissedToasts((prev) => new Set(prev).add(id));
  };

  return (
    <DismissedToastsContext.Provider value={{ dismissedToasts, addDismissedToast }}>
      {children}
    </DismissedToastsContext.Provider>
  );
}

export function useDismissedToasts() {
  const context = useContext(DismissedToastsContext);
  if (!context) {
    throw new Error(
      "useDismissedToasts must be used within DismissedToastsProvider",
    );
  }
  return context;
}