"use client";
// import from react
import { useState, useEffect } from "react";
// import components
import Button from "./button";

export default function InstallAppButton() {
  const [isIOS, setIsIOS] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isIosModalOpen, setIsIosModalOpen] = useState(false);

  useEffect(() => {
    setIsIOS(
      /iPad|iPhone|iPod/.test(navigator.userAgent) &&
        !(window as Window & { MSStream?: unknown }).MSStream,
    );
    setIsStandalone(window.matchMedia("(display-mode: standalone)").matches);

    window.addEventListener("appinstalled", () => {
      setIsStandalone(true);
    });

    function handleBeforeInstallPrompt(e: Event) {
      e.preventDefault();
      setDeferredPrompt(e);
    }
    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt,
      );
    };
  }, []);

  // if (isStandalone) {
  //   return null;
  // }

  async function handleInstallClick() {
    if (isIOS) {
      setIsIosModalOpen(true);
      return;
    }
    if (!deferredPrompt) return;
    (deferredPrompt as any).prompt();
    const { outcome } = await (deferredPrompt as any).userChoice;
    setDeferredPrompt(null);
    // console.log("User response to the install prompt:", outcome);
  }

  return (
    <>
      {!isStandalone && (
        <Button
          onClick={async () => {
            await handleInstallClick();
          }}
          className="rainbow-gradient p-1 rounded-full border-2 border-border-default shadow-white shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#174054] cursor-pointer w-full max-w-xs transform transition-transform duration-200 active:scale-95 text-shadow-black-background-black font-medium tracking-wider px-4"
          label="install app"
        />
      )}
    </>
  );
}
