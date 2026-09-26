// import data
import { getPage } from "@/actions/actions";
// import components
// import MailingListSignUpForm from "@/ui/mailing-list-sign-up-form";
import ContactForm from "@/ui/contact-form";
import Toaster from "@/ui/toaster";
// import Heading from "@/ui/heading";
// import from next
import Image from "next/image";
// export metadata
export const metadata = {
  title: "Contact",
  description: "Contact The Long Emergency",
  alternates: {
    canonical: "/contact",
  },
};

export default async function ContactPage() {
  const contactPageData = await getPage("contact");
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="flex justify-center items-center flex-col text-outline ">
        <h3 className="font-emergency text-outline text-center text-2xl md:text-3xl lg:text-3xl p-6">
          {contactPageData?.page_title ?? "Contact"}
        </h3>

        {/* <MailingListSignUpForm  className="mt-8 mb-16"/> */}
        {/* <Heading
          headingLevel={4}
          text="Send Us a Message"
          className="text-xl lg:text-2xl font-semibold py-12 text-center"
        /> */}
        <div className="">
          <ContactForm />
        </div>

        <div className="w-full h-auto px-12 max-w-200 mb-12 ">
          <Image
            priority
            src="/images/guitar-mask-mound-4510x3205.png"
            alt="guitar mask mound"
            width={4510}
            height={3205}
            className="shadow-md shadow-white rounded-3xl border-2 border-slate-400"
          />
        </div>
      </div>
      <Toaster toastId="default" />
    </div>
  );
}
