// import from next
import Image from "next/image";
// import components
import HostShowForm from "@/ui/host-show-form";
export default function HostAShowPage() {
  return (
    <div className="flex flex-col mx-auto w-full max-w-200 p-4">
      <h3 className="text-2xl font-semibold mb-4 text-center">
        Host a Show
      </h3>
      <p className="px-6 py-4 max-w-200">
        I am trying to share my music with as many people as possible. I'll play
        just about anywhere folks will have me. Wanna host a show in your
        basement, your living room, or wherever? Let's make it happen!
      </p>
      <p className="px-6 py-4 max-w-200">
        Fill out the form below to host a show. Please be as detailed as
        possible. It's cool if you don't have all of the information but be sure to
        include:
      </p>
      <div className="flex justify-center">
        <ul className="list-disc list-inside px-6">
          <li>Your first name</li>
          <li>Your email address</li>
          <li>Date preferences</li>
          <li>A detailed message</li>
        </ul>
      </div>
      <HostShowForm />
      <div className="w-full h-auto px-6 max-w-200 my-12">
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
