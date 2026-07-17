"use client";
// import from react
// import { useState, useEffect } from "react";
// import from next
import Link from "next/link";
// import from headless ui
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
// import clsx
import { clsx } from "clsx";
// import components
import InstallAppButton from "./install-app-button";
import PushNotificationSubscriptionManager from "./push-notification-subscription-manager";
import SupportLink from "./support-link";
import SignOutButton from "./sign-out-button";
// import context
import { useInstallContext } from "@/context/install-context-provider";
// import icons
import { TbChevronDown, TbChevronUp } from "react-icons/tb";

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
  isAuthenticated: boolean;
}

export default function MorePopover({
  anchor = "bottom end",
  onAnyAction,
  isAuthenticated,
}: MorePopoverProps) {
  const { isIOS, isStandalone, canInstall } = useInstallContext();
  // Match the same visibility logic as InstallAppButton
  const showInstallRow = !isStandalone && (isIOS || canInstall);

  return (
    <Popover>
      {({ open }) => (
        <>
          <PopoverButton
            aria-label="More options"
            className={clsx(
              "flex items-center justify-center gap-2 font-semibold text-white rounded-full border-2 border-transparent px-4 py-2 transition duration-200 ease-in-out shadow-white",
              open
                ? "bg-black/80 shadow-md border-white"
                : "hover:border-white hover:shadow-lg",
            )}>
            <span className="text-outline leading-none translate-y-px">
              More
            </span>
            {open ? <TbChevronUp size={20} /> : <TbChevronDown size={20} />}
          </PopoverButton>
          <PopoverPanel
            transition
            anchor={anchor}
            className="divide-y divide-white/5 rounded-4xl bg-black text-sm/6 transition duration-200 ease-in-out [--anchor-gap:--spacing(5)] data-closed:-translate-y-1 data-closed:opacity-0 z-50 border-2 shadow-white shadow-md mt-2 w-80 max-w-[20vw]">
            {({ close }) => (
              <>
                {isAuthenticated && (
                  <>
                    <div className="flex items-center justify-center my-6 w-full px-4">
                      <SignOutButton />
                    </div>
                    <div className="flex items-center justify-center my-6 w-full px-4">
                      <Link
                        // href="/mailing-list?mode=sign-up"
                        href="/admin"
                        onClick={() => {
                          close();
                          if (onAnyAction) onAnyAction(); // <-- close mobile menu if provided
                        }}
                        className="flex items-center justify-center px-4 py-1 rounded-full border-2 border-border-default shadow-white shadow-md lg:hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#174054] cursor-pointer w-full transform transition-transform duration-200 active:scale-95 font-medium tracking-wider text-sm">
                        <span className="-mb-1">Admin Panel</span>
                      </Link>
                    </div>
                  </>
                )}
                {showInstallRow && (
                  <div className="flex items-center justify-center my-6 w-full px-4">
                    <InstallAppButton labelClassName="-mb-1" />
                  </div>
                )}
                <div className="flex items-center justify-center my-6 w-full px-4">
                  <SupportLink />
                </div>
                <div className="flex items-center justify-center my-6 w-full px-4">
                  <PushNotificationSubscriptionManager
                    renderedAs="button"
                    labelClassName="-mb-1"
                  />
                </div>
                <div className="flex items-center justify-center my-6 w-full px-4">
                  <Link
                    // href="/mailing-list?mode=sign-up"
                    href="/mailing-list"
                    onClick={() => {
                      close();
                      if (onAnyAction) onAnyAction(); // <-- close mobile menu if provided
                    }}
                    className="flex items-center justify-center px-4 py-1 rounded-full border-2 border-border-default shadow-white shadow-md lg:hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#174054] cursor-pointer w-full transform transition-transform duration-200 active:scale-95 font-medium tracking-wider text-sm">
                    <span className="-mb-1">Signup for Mailing List</span>
                  </Link>
                </div>
                <div className="flex items-center justify-center my-6 w-full px-4">
                  <Link
                    href="/mailing-list?mode=remove"
                    onClick={() => {
                      close();
                      if (onAnyAction) onAnyAction(); // <-- close mobile menu if provided
                    }}
                    className="flex items-center justify-center px-4 py-1 rounded-full border-2 border-border-default shadow-white shadow-md lg:hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#174054] cursor-pointer w-full transform transition-transform duration-200 active:scale-95 font-medium tracking-wider text-sm">
                    <span className="-mb-1">Unsubscribe from Mailing List</span>
                  </Link>
                </div>
              </>
            )}
          </PopoverPanel>
        </>
      )}
    </Popover>
  );
}
