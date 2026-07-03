import { signOut } from "@/actions/actions";
// import { redirect } from "next/navigation";
// import components
import Button from "./button";
// import icon
import { RiLogoutCircleRLine } from "react-icons/ri";
import clsx from "clsx";

export default function SignOutButton() {
  const handleSignOut = async () => {
    try {
      signOut();

      // Optionally, you can add a success message or redirect the user after signing out
      // alert("Signed out successfully!");
    } catch (error) {
      console.error("Error signing out:", error);
      // alert("Failed to sign out. Please try again.");
    }
  };

  return (
    <Button
      onClick={handleSignOut}
      // className="text-black hover:underline"
      className={clsx(
        "inline-flex items-center justify-center appearance-none min-h-0 leading-none rounded-full border-border-default border-2 shadow-white shadow-md hover:shadow-lg px-4 py-2 text-white bg-black/50 transition duration-200 ease-in-out active:scale-95 -hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 whitespace-nowrap",
      )}
      label="Sign Out"
      type="button"
      ariaLabel="Sign out of your account"
      // icon={<RiLogoutCircleRLine size={24} />}
    />
  );
}
