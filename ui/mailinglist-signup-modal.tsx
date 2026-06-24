"use client";
// import from next
// import Image from "next/image";
//import from react
import { useState } from "react";
// import components
import MailingListSignupForm from "./mailing-list-sign-up-form";
import Button from "./button";
import StarrySky from "./starry-sky";
// import from react icons
import { FiXCircle } from "react-icons/fi";

export default function MailingListSignupModal() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button
        label="Sign Up for Mailing List"
        title="Sign up for po's mailing list"
        onClick={() => setIsOpen(true)}
        className="cursor-pointer border-2 border-border-default p-1 px-4 rounded-full rainbow-gradient text-shadow-black-background-black w-full font-semibold shadow-md shadow-white hover:shadow-lg transform transition-transform transition-shadow duration-200 active:scale-95"
      />
      {isOpen && (
        <div className="fixed inset-0 rainbow-gradient flex items-center justify-center z-50">
          <div className="p-6 w-11/12 max-w-md relative z-60">
            <Button
              title="Close"
              onClick={() => setIsOpen(false)}
              className="absolute top-9 right-9 text-white hover:text-neutral-200 transition-transform ease-in-out duration-400"
              icon={<FiXCircle size={26} />}
            />
            <MailingListSignupForm />
          </div>
          <StarrySky />
        </div>
      )}
    </>
  );
}
