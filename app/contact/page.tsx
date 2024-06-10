// import data
import ContactForm from "../components/contact-form";
import { getPage } from "../lib/data";
// import from next
import Image from "next/image";

export default async function ContactPage() {
  const contactPageData = await getPage("contact");
  return (
    <div className="flex justify-center items-center flex-col">
      <h2>{contactPageData.page_title}</h2>
      <ContactForm />
      <div className="-mt-6 w-full h-auto p-6 max-w-600 expand-on-load ">
        <Image
          priority
          src="/images/guitar-mask-mound-4510x3205.png"
          alt="guitar mask mound"
          width={4510}
          height={3205}
        />
      </div>
      {/* <ContactForm /> */}
    </div>
  );
}
