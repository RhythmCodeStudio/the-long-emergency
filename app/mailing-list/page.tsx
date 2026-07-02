"use client";
import { useSearchParams } from "next/navigation";
// import components
import MailingListSignUpForm from "../../ui/mailing-list-sign-up-form";

export default function MailingListPage() {
  const searchParams = useSearchParams();
  const mode = searchParams.get("mode");
  return (
    <>
      {mode === "remove" || mode === "sign-up" ? (
        <div className="flex flex-col justify-center items-center w-full p-8">
          {mode === "remove" ? (
            <MailingListSignUpForm mode="remove" />
          ) : (
            <MailingListSignUpForm mode="sign-up" />
          )}
        </div>
      ) : (
        typeof window !== "undefined" && (window.location.href = "/")
      )}
    </>
  );
}