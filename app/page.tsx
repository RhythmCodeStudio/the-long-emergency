import Image from "next/image";
import { getPage } from "@/actions/actions";

export default async function Home() {
  const pageData = await getPage("home");

  return (
    // <section className="relative w-full flex-1 min-h-0 overflow-hidden [--image-h:clamp(18rem,48vh,56rem)] bg-cover bg-center bg-[url('/images/background-images/768x1156.png')] xl:bg-[url('/images/background-images/masks-no-text-4800x3190-gaps-filled-horizontal.png')] md:bg-fixed">
      <section className="relative w-full flex-1 min-h-0 overflow-hidden [--image-h:clamp(18rem,48vh,56rem)]">
      <div className="absolute inset-x-0 bottom-0 h-(--image-h)">
        <Image
          src="/images/kevcutout3.png"
          alt="The Long Emergency promo image"
          fill
          priority
          sizes="100vw"
          className="select-none pointer-events-none object-contain object-bottom"
        />
      </div>
      <div className="absolute inset-x-0 z-10 flex flex-col items-center text-center pointer-events-none top-[calc((100%-var(--image-h))/6)] -translate-y-1/2">
        <h1 className="p-4 expand-on-load text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-emergency text-outline">
          {pageData?.page_title ?? "Loading..."}
        </h1>
        <h2 className="expand-on-load md:text-xl text-outline">
          St. Louis, Missouri
        </h2>
      </div>
    </section>
  );
}
