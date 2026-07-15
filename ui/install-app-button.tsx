"use client";
import Button from "./button";
import { useInstallContext } from "@/context/install-context-provider";

interface InstallAppButtonProps {
  labelClassName?: string;
  className?: string;
}

export default function InstallAppButton({
  labelClassName,
  className,
}: InstallAppButtonProps) {
  const { isIOS, isStandalone, canInstall, promptInstall } =
    useInstallContext();

  if (isStandalone) return null;

  async function handleInstallClick() {
    if (isIOS || !canInstall) return;
    await promptInstall();
  }

  const isDisabled = !canInstall || isIOS;

  if (isStandalone || (!canInstall && !isIOS)) return null;

  return (
    <Button
      onClick={handleInstallClick}
      disabled={isDisabled}
      title={
        isIOS
          ? "Use your browser share menu to add to home screen on iOS"
          : canInstall
            ? "Install App"
            : "Install prompt not available yet"
      }
      className={`${className} bg-black/80 inline-flex items-center justify-center cursor-pointer border-2 border-border-default py-1 px-4 rounded-full w-full shadow-white shadow-md lg:hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#174054] transform transition-transform duration-200 active:scale-95 text-sm`}
      labelClassName={labelClassName}
      label={
        isIOS
          ? "Add to Home Screen (iOS)"
          : canInstall
            ? "Install App"
            : "Checking..."
      }
    />
  );
}
