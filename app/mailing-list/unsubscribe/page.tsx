// import components
import MailingListSignUpForm from "@/ui/mailing-list-sign-up-form";

export default function UnsubscribePage() {
  return (
    <div className="flex flex-col justify-center items-center w-full p-8">
      <MailingListSignUpForm mode="remove" />
    </div>
  );
}