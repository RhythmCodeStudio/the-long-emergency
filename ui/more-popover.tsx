"use client";
// import from react
import { useState, useEffect } from "react";
// import from next
import Link from "next/link";
// import from headless ui
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
// import clsx
import { clsx } from "clsx";
// import components
import InstallAppButton from "./install-app-button";
import PushNotificationSubscriptionManager from "./push-notification-subscription-manager";
import Button from "./button";
// import from react icons
import { FiXCircle } from "react-icons/fi";

interface MorePopoverProps {
  anchor?:
    | "top"
    | "right"
    | "bottom"
    | "left"
    | "top start"
    | "top end"
    | "bottom start"
    | "bottom end"
    | "right start"
    | "right end"
    | "left start"
    | "left end";
  onAnyAction?: () => void;
}

export default function MorePopover({
  anchor = "bottom end",
  onAnyAction,
}: MorePopoverProps) {
  // const [isIOS, setIsIOS] = useState(false);
  // const [isStandalone, setIsStandalone] = useState(false);
  // const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  // const [isIosModalOpen, setIsIosModalOpen] = useState(false);

  // useEffect(() => {
  //   setIsIOS(
  //     /iPad|iPhone|iPod/.test(navigator.userAgent) &&
  //       !(window as Window & { MSStream?: unknown }).MSStream,
  //   );
  //   setIsStandalone(window.matchMedia("(display-mode: standalone)").matches);

  //   window.addEventListener("appinstalled", () => {
  //     setIsStandalone(true);
  //   });

  //   function handleBeforeInstallPrompt(e: Event) {
  //     e.preventDefault();
  //     setDeferredPrompt(e);
  //   }
  //   window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

  //   return () => {
  //     window.removeEventListener(
  //       "beforeinstallprompt",
  //       handleBeforeInstallPrompt,
  //     );
  //   };
  // }, []);

  // if (isStandalone) {
  //   return null;
  // }

  // async function handleInstallClick() {
  //   if (isIOS) {
  //     setIsIosModalOpen(true);
  //     return;
  //   }
  //   if (!deferredPrompt) return;
  //   (deferredPrompt as any).prompt();
  //   const { outcome } = await (deferredPrompt as any).userChoice;
  //   setDeferredPrompt(null);
  //   // console.log("User response to the install prompt:", outcome);
  // }

  return (
    <>
      <Popover>
        {({ open }) => (
          <>
            <PopoverButton
              className={clsx(
                "inline-flex items-center justify-center px-4 py-1 rounded-full transition duration-200 ease-in-out focus:outline-none focus-visible:outline-none border-2",
                "border-transparent hover:border-white",
                open
                  ? "bg-black/80 border-white shadow-white shadow-lg"
                  : "bg-transparent",
              )}>
              <span aria-label="More options" className="text-outline -mb-1">
                More
              </span>
            </PopoverButton>
            <PopoverPanel
              transition
              anchor={anchor}
              className="divide-y divide-white/5 rounded-4xl bg-black/80 text-sm/6 transition duration-200 ease-in-out [--anchor-gap:--spacing(5)] data-closed:-translate-y-1 data-closed:opacity-0 z-50 border-2 shadow-white shadow-lg mt-2 w-64">
              {({ close }) => (
                <>
                  {/* {!isStandalone && (
                    <div className="flex items-center justify-center my-6 px-4">
                      <button
                        onClick={async () => {
                          await handleInstallClick();
                          // close();
                          // if (onAnyAction) onAnyAction();
                        }}
                        className="p-1 rounded-full border-2 border-border-default shadow-white shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#174054] cursor-pointer w-full max-w-xs transform transition-transform duration-200 active:scale-95 font-medium tracking-wider">
                        Install App
                      </button>
                    </div>
                  )} */}
                  <div className="flex items-center justify-center my-6 w-full px-4">
                    <InstallAppButton />
                  </div>
                  <div className="flex items-center justify-center my-6 w-full px-4">
                    <PushNotificationSubscriptionManager renderedAs="button" />
                  </div>
                  <div className="flex items-center justify-center my-6 w-full px-4">
                    <Link
                      href="/mailing-list?mode=sign-up"
                      onClick={() => {
                        close();
                        if (onAnyAction) onAnyAction(); // <-- close mobile menu if provided
                      }}
                      className="p-1 rounded-full border-2 border-border-default shadow-white shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#174054] cursor-pointer w-full max-w-xs transform transition-transform duration-200 active:scale-95  text-center font-medium tracking-wider">
                      Mailing List
                      <br />
                      Signup
                    </Link>
                  </div>
                  <div className="flex items-center justify-center my-6 px-4">
                    <Link
                      href="/mailing-list?mode=remove"
                      onClick={() => {
                        close();
                        if (onAnyAction) onAnyAction(); // <-- close mobile menu if provided
                      }}
                      className="p-1 rounded-full border-2 border-border-default shadow-white shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#174054] cursor-pointer w-full max-w-xs transform transition-transform duration-200 active:scale-95  text-center font-medium tracking-wider">
                      Unsubscribe from
                      <br />
                      Mailing List
                    </Link>
                  </div>
                </>
              )}
            </PopoverPanel>
          </>
        )}
      </Popover>
      {/* {isIosModalOpen && (
        <div
          className="fixed inset-0  flex items-center justify-center z-50"
          role="dialog"
          aria-modal="true"
          aria-labelledby="ios-install-dialog-title">
          <div className="p-6 w-11/12 max-w-md relative z-50">
            <Button
              title="Close"
              onClick={() => setIsIosModalOpen(false)}
              className="absolute top-9 right-9 text-white hover:text-neutral-200 transition-transform ease-in-out duration-400"
              icon={<FiXCircle size={26} />}
            />
            <div className="text-white text-center">
              <h2 className="text-xl font-semibold mb-4">
                Install The Long Emergency
              </h2>
              <p className="mb-4">
                To install the app on your iOS device, tap the "Share" button in
                Safari (the square with an arrow pointing up), then select "Add
                to Home Screen".
              </p>
              <p className="mb-4">
                This will add The Long Emergency to your home screen for easy
                access.
              </p>
              <p className="italic">
                Note: This option is only available in Safari on iOS.
              </p>
            </div>
          </div>
        </div>
      )} */}
    </>
  );
}
