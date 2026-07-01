"use client";
import Button from "./button";
import { useInstallContext } from "@/context/install-context-provider";

export default function InstallAppButton() {
  const { isIOS, isStandalone, canInstall, promptInstall } = useInstallContext();

  if (isStandalone) return null;

  async function handleInstallClick() {
    if (isIOS || !canInstall) return;
    await promptInstall();
  }

  const isDisabled = !canInstall || isIOS;

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
      className="p-1 rounded-full border-2 border-border-default shadow-white shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#174054] w-full max-w-xs transform transition-transform duration-200 active:scale-95 text-outline-white tracking-wider px-4 disabled:cursor-not-allowed disabled:opacity-60"
      label={canInstall ? "Install App" : "Install Not Available Yet"}
    />
  );
}
