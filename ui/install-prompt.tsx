"use client";
import { useState, useEffect } from "react";

export default function InstallPrompt() {
  const [isIOS, setIsIOS] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [dismissed, setDismissed] = useState(false);

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

  if (isStandalone || dismissed) {
    return null;
  }

  async function handleInstallClick() {
    if (!deferredPrompt) return;
    (deferredPrompt as any).prompt();
    const { outcome } = await (deferredPrompt as any).userChoice;
    setDeferredPrompt(null);
    // console.log("User response to the install prompt:", outcome);
  }

  function handleDismiss() {
    setDismissed(true);
  }

  return (
    <div className="m-6 p-4 border-2 border-border-default rounded-4xl text-center max-w-[88vw] md:max-w-sm mx-auto text-black relative shadow-md shadow-white bg-black/80 z-50">
      <button
        onClick={handleDismiss}
        className="absolute top-2 right-2 hover:text-gray-700 text-2xl font-bold px-2 cursor-pointer text-shadow-black-background-black"
        aria-label="Dismiss install prompt"
        type="button">
        x
      </button>
      <div className="text-shadow-black-background-black">
        <h2 className="text-xl font-semibold mb-2">install po mia music</h2>
        <p className="mb-4">install on your device for the best experience.</p>
      </div>
      {deferredPrompt && (
        <button
          onClick={handleInstallClick}
          className="rainbow-gradient p-1 rounded-full  border-2 border-border-default text-sm shadow-black/50 shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#174054] cursor-pointer w-full max-w-xs hover:scale-105 transform transition-transform duration-600 active:scale-95 text-shadow-black-background-black">
          install app
        </button>
      )}
      {!deferredPrompt && !isStandalone && (
        <p className="mx-auto p-6 max-w-2xl text-shadow-black-background-black">
          App installation is not available in this browser mode. If you are
          using private or incognito browsing, try switching to a regular
          window. Otherwise, you can add this app to your home screen manually
          using your browser&apos;s menu (look for “Add to Home Screen” or
          similar).
        </p>
      )}

      {isIOS && (
        <p>
          On iOS, tap the share button{" "}
          <span role="img" aria-label="share icon">
            ⎋
          </span>{" "}
          then “Add to Home Screen”{" "}
          <span role="img" aria-label="plus icon">
            ➕
          </span>
          .
        </p>
      )}
    </div>
  );
}
