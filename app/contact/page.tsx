// import data
import ContactForm from "../components/contact-form";
import { getPage } from "../lib/data";
// import from next
import Image from "next/image";
// export metadata
export const metadata  = {
  title: "Contact",
  description: "Contact The Long Emergency",
};


export default async function ContactPage() {
  const contactPageData = await getPage("contact");
  return (
    <div className="flex justify-center items-center flex-col">
      <h2 className="expand-on-load text-2xl lg:text-4xl">{contactPageData.page_title}</h2>
      <ContactForm />
      <div className="-mt-6 w-full h-auto px-12 max-w-200 expand-on-load ">
        <Image
          priority
          src="/images/guitar-mask-mound-4510x3205.png"
          alt="guitar mask mound"
          width={4510}
          height={3205}
        />
      </div>
    </div>
  );
}
