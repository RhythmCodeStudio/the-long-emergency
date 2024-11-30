// import data
import ContactForm from "../../components/contact-form";
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
    <div className="flex justify-center items-center flex-col text-outline">
      <h2 className="expand-on-load text-2xl lg:text-3xl xl:text-4xl">{contactPageData.page_title}</h2>
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
  );
}
