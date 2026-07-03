// import data
import { getPage } from "@/actions/actions";
// import components
// import MailingListSignUpForm from "@/ui/mailing-list-sign-up-form";
import ContactForm from "@/ui/contact-form";
import Heading from "@/ui/heading";
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
    <div className="bg-[rgba(0,0,0,0.5)] md:bg-transparent">
      <div className="flex justify-center items-center flex-col text-outline mt-4">
        <h2 className="font-emergency expand-on-load text-2xl lg:text-3xl xl:text-4xl">
          {contactPageData?.page_title ?? "Contact"}
        </h2>
        
          {/* <MailingListSignUpForm  className="mt-8 mb-16"/> */}
        {/* <Heading 
          headingLevel={4}
          text="Send Us a Message"
         className="text-xl lg:text-2xl font-semibold text-shadow-black-background-black mb-4 text-center"
        /> */}

        <ContactForm />
        <div className="w-full h-auto px-12 max-w-200 expand-on-load mb-12 ">
          <Image
            priority
            src="/images/guitar-mask-mound-4510x3205.png"
            alt="guitar mask mound"
            width={4510}
            height={3205}
            className="shadow-2xl shadow-blue-300/50 border-2 border-slate-400"
          />
        </div>
      </div>
    </div>
  );
}
