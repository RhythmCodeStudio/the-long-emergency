// import from next

import Image from "next/image";
// import components
import ShowRequestForm from "@/ui/show-request-form";
export default function RequestAShowPage() {
  return (
    <div className="flex flex-col mx-auto w-full max-w-200 p-4">
      <h3 className="text-2xl font-semibold mb-4 text-center">
        Request a Show
      </h3>
      <p className="px-12 py-4 max-w-200">
        I am trying to share my music with as many people as possible. I'll play just about anywhere folks will have me. Wanna have a show in your basement, your living room, or wherever? Let's make it happen!   
      </p>
      <p className="px-12 py-4 max-w-200">
        Fill out the form below to request a show. Please be s detailed as possible. It's cool if you can't fill out the whole form but be sure to include:
      </p>
      <ul className="list-disc list-inside px-12">
        <li>Your first name</li>
        <li>Your email address</li>
        <li>Date preferences</li>
        <li>A message describing your show request</li>
        
      </ul>
      <ShowRequestForm />

      <div className="w-full h-auto px-12 max-w-200 my-12">
        <Image
          src="/images/website-images/trombone-no-text-banner.png"
          alt="Kevin in Mask with Trombone"
          width={960}
          height={691}
          className="shadow-md shadow-white rounded-3xl border-2 border-slate-400"
        />
      </div>
    </div>
  );
}
