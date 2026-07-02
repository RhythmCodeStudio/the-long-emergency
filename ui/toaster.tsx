"use client";
import { useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import { ToastContainer, toast, Slide } from "react-toastify";
import ToastContent from "./toast-content";
import { usePushNotification } from "../context/push-notification-context-provider";
import { useDismissedToasts } from "../context/dismissed-toasts-context-provider";
import { useInstallContext } from "@/context/install-context-provider";

interface ToasterProps {
  toastId: string;
  message?: string;
  component?: React.ReactNode;
}

const toastMessage = (
  toastId: string,
  message?: string,
  component?: React.ReactNode,
  onDismiss?: () => void,
) => {
  toast.info(<ToastContent message={message} component={component} />, {
    toastId,
    position: "bottom-center",
    autoClose: 7000,
    hideProgressBar: false,
    icon: (
      <Image
        src="/logos/long-emergency/32x32.png"
        alt="The Long Emergency icon"
        width={32}
        height={32}
      />
    ),
    closeOnClick: false,
    pauseOnHover: true,
    closeButton: false,
    progress: undefined,
    transition: Slide,
    onClose: () => {
      onDismiss?.();
    },
    className:
      "border-2 border-slate-400 font-emergency text-outline-none text-black flex flex-col items-center justify-center text-center rounded-2xl shadow-lg shadow-white/50",
    theme: "dark",
  });
};

export default function Toaster({ toastId, message, component }: ToasterProps) {
  const { isSubscribed } = usePushNotification();
  const { dismissedToasts, addDismissedToast } = useDismissedToasts();
  const { canInstall } = useInstallContext();

  const shownRef = useRef(false);
  const interactedRef = useRef(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const maybeShowToast = useCallback(() => {
    if (shownRef.current) return;
    if (!interactedRef.current) return;
    if (isSubscribed !== false) return;
    // if (!canInstall) return;
    if (dismissedToasts.has(toastId)) return;

    shownRef.current = true;
    timeoutRef.current = setTimeout(() => {
      toastMessage(toastId, message, component, () =>
        addDismissedToast(toastId),
      );
    }, 1500);
  }, [
    isSubscribed,
    dismissedToasts,
    toastId,
    message,
    component,
    addDismissedToast,
  ]);

  useEffect(() => {
  if (isSubscribed !== false) return;

  const onFirstInteraction = () => {
    if (interactedRef.current) return;
    interactedRef.current = true;
    maybeShowToast();

    // Remove all listeners after first trigger
    window.removeEventListener("pointerdown", onFirstInteraction);
    window.removeEventListener("wheel", onFirstInteraction);
    window.removeEventListener("touchstart", onFirstInteraction);
    window.removeEventListener("keydown", onFirstInteraction);
  };

  window.addEventListener("pointerdown", onFirstInteraction, { passive: true });
  window.addEventListener("wheel", onFirstInteraction, { passive: true });
  window.addEventListener("touchstart", onFirstInteraction, { passive: true });
  window.addEventListener("keydown", onFirstInteraction);

  return () => {
    window.removeEventListener("pointerdown", onFirstInteraction);
    window.removeEventListener("wheel", onFirstInteraction);
    window.removeEventListener("touchstart", onFirstInteraction);
    window.removeEventListener("keydown", onFirstInteraction);
  };
}, [isSubscribed, maybeShowToast]);

  useEffect(() => {
    maybeShowToast();
  }, [maybeShowToast]);

  useEffect(() => {
    if (isSubscribed && timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, [isSubscribed]);

  return (
    <ToastContainer
      className={"relative"}
      closeButton={false}
      newestOnTop
      limit={1}
      toastStyle={{
        transition: "all 0.6s cubic-bezier(.4,0,.2,1)",
      }}
      theme="dark"
    />
  );
}
