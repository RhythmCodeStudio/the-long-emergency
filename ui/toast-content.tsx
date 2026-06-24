// import from react-toastify
import { toast } from "react-toastify";
//  import components
import PushNotificationSubscriptionManager from "./push-notification-subscription-manager";
import Button from "./button"
// import icon
import { RiCloseCircleFill } from "react-icons/ri";

interface ToastContentProps {
  // You can add props here if needed in the future
  message?: string;
  component?: React.ReactNode;
}

export default function ToastContent({ message, component }: ToastContentProps) {
  return (
    <div>
      <Button
        onClick={() => toast.dismiss()}
        className="absolute top-2 right-2 p-1"
        aria-label="Close notification"
        icon={<RiCloseCircleFill size={18} className="icon-shadow" />}
      />

      <div className="mt-6 flex flex-col items-center text-center text-shadow-black-background-black rounded-2xl">
        <p>
          {message || "subscribe to notifications to stay up to date with the latest from po mia!"}
        </p>
        <div className="my-2 flex flex-col justify-center items-center">
          {component || <PushNotificationSubscriptionManager renderedAs="button" />}
        </div>
      </div>
    </div>
  );
}