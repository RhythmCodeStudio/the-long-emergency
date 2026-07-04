import { signOut } from "@/actions/actions";
// import { redirect } from "next/navigation";
// import components
import Button from "./button";
// import icon
// import { RiLogoutCircleRLine } from "react-icons/ri";
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
        "flex items-center justify-center px-4 py-1 rounded-full border-2 border-border-default shadow-white shadow-md lg:hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#174054] cursor-pointer w-full transform transition-transform duration-200 active:scale-95 font-medium tracking-wider text-sm",
      )}
      labelClassName="-mb-1"
      label="Sign Out"
      type="button"
      ariaLabel="Sign out of your account"
      // icon={<RiLogoutCircleRLine size={24} />}
    />
  );
}
