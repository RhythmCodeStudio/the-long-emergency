"use client";
import { useEffect, useRef } from "react";
import { ToastContainer, toast, Slide } from "react-toastify";
import ToastContent from "./toast-content";
import { usePushNotification } from "../context/push-notification-context-provider";
import { useDismissedToasts } from "../context/dismissed-toasts-context-provider";

interface ToasterProps {
  toastId: string;
  message?: string;
  component?: React.ReactNode;
}

const toastMessage = (toastId: string, message?: string, component?: React.ReactNode, onDismiss?: () => void) => {
  toast(<ToastContent message={message} component={component} />, {
    toastId: toastId,
    position: "bottom-center",
    autoClose: 7000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    closeButton: false,
    progress: undefined,
    transition: Slide,
    onClose: () => {
      onDismiss?.();
    },
    style: {
      borderRadius: "1rem 1rem 1rem 1rem",
      background:
        "linear-gradient(135deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #8b00ff, #ff0000)",
      color: "#fff",
      boxShadow: "0 4px 24px rgba(0,0,0,0.18)",
      fontSize: "1rem",
      minWidth: "260px",
      maxWidth: "90vw",
      padding: "1rem",
      border: "2px solid rgba(255, 255, 255, 0.3)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
  });
};

export default function Toaster({ toastId, message, component }: ToasterProps) {
  const { isSubscribed } = usePushNotification();
  const { dismissedToasts, addDismissedToast } = useDismissedToasts();
  const shownRef = useRef(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isSubscribed !== false) return;

    const handler = () => {
      if (shownRef.current) return;

      // Check if already dismissed THIS SESSION
      if (dismissedToasts.has(toastId)) {
        return;
      }

      shownRef.current = true;
      timeoutRef.current = setTimeout(() => {
        if (isSubscribed === false) {
          toastMessage(toastId, message, component, () =>
            addDismissedToast(toastId),
          );
        }
      }, 1500);
    };

    window.addEventListener("pointerdown", handler, { once: true });
    return () => window.removeEventListener("pointerdown", handler);
  }, [isSubscribed, message, component, toastId, dismissedToasts, addDismissedToast]);

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
    />
  );
}