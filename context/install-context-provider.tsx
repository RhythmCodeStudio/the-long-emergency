"use client";
import React, {
  createContext,
  useContext,
  // useEffect,
  useLayoutEffect,
  useMemo,
  useState,
} from "react";

type InstallChoice = {
  outcome: "accepted" | "dismissed";
  platform: string;
};

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<InstallChoice>;
}

interface InstallContextType {
  isIOS: boolean;
  isStandalone: boolean;
  canInstall: boolean;
  deferredPrompt: BeforeInstallPromptEvent | null;
  promptInstall: () => Promise<InstallChoice | null>;
}

const InstallContext = createContext<InstallContextType | undefined>(undefined);

export function InstallContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isIOS, setIsIOS] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);

  useLayoutEffect(() => {
    const ios =
      /iPad|iPhone|iPod/.test(navigator.userAgent) &&
      !(window as Window & { MSStream?: unknown }).MSStream;

    const media = window.matchMedia("(display-mode: standalone)");
    setIsIOS(ios);
    setIsStandalone(media.matches);

    const handleDisplayModeChange = (e: MediaQueryListEvent) => {
      setIsStandalone(e.matches);
    };

    const handleAppInstalled = () => {
      setIsStandalone(true);
      setDeferredPrompt(null);
    };

    const handleBeforeInstallPrompt = (event: Event) => {
      console.log("beforeinstallprompt event fired");
      const e = event as BeforeInstallPromptEvent;
      e.preventDefault();
      setDeferredPrompt(e);
    };

    media.addEventListener("change", handleDisplayModeChange);
    window.addEventListener("appinstalled", handleAppInstalled);
    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      media.removeEventListener("change", handleDisplayModeChange);
      window.removeEventListener("appinstalled", handleAppInstalled);
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt,
      );
    };
  }, []);

  const promptInstall = async (): Promise<InstallChoice | null> => {
    if (!deferredPrompt) return null;
    await deferredPrompt.prompt();
    const choice = await deferredPrompt.userChoice;
    setDeferredPrompt(null);
    return choice;
  };

  const value = useMemo<InstallContextType>(
    () => ({
      isIOS,
      isStandalone,
      canInstall: !!deferredPrompt,
      deferredPrompt,
      promptInstall,
    }),
    [isIOS, isStandalone, deferredPrompt],
  );

  return (
    <InstallContext.Provider value={value}>{children}</InstallContext.Provider>
  );
}

export function useInstallContext() {
  const context = useContext(InstallContext);
  if (!context) {
    throw new Error(
      "useInstallContext must be used within an InstallContextProvider",
    );
  }
  return context;
}