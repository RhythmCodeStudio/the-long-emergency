// import from next
import Image from "next/image";
// import from lib
import { getPage } from "@/actions/actions";
// import components
// import Toaster from "@/ui/toaster";
// import InstallAppButton from "@/ui/install-app-button";

export default async function Home() {
  const pageData = await getPage("home");

  return (
    <section className="w-full flex flex-col items-center justify-content">
      {/* <div className="flex flex-col justify-center items-center">
        <h1 className="p-4 expand-on-load text-5xl md:text-6xl lg:text-6xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl font-emergency text-center text-outline">
          {pageData?.page_title ?? "Loading..."}
        </h1>
        <h2 className="expand-on-load  p-4 md:text-xl text-outline">
          St. Louis, Missouri
        </h2>
      </div> */}
      {/* <div className="w-full max-w-5xl relative flex justify-center items-center">
        <Image
          src="/images/website-images/kev-sing-nomad-semi-transparent-cut-out.png"
          alt="Kevin Long from The Long Emergency singing on stage with a guitar"
          width={876}
          height={594}
          className="w-full h-auto z-10 opacity-80"
        />
         <Image
          src="/images/trombone-no-text-banner.png"
          alt="The Long Emergency trombone banner"
          width={960}
          height={691}
          className="absolute inset-0 w-full h-full object-cover opacity-100 z-0"
        /> 
      </div> */}

      {/* <div className="w-full max-w-5xl relative flex justify-center items-center">
        
        <Image
          // src="/images/website-images/kev-sing-nomad-semi-transparent-cut-out.png"
          src="/images/mask-cutout-transparent.png"
          alt="Kevin Long from The Long Emergency singing on stage with a guitar"
          width={876}
          height={594}
          className="w-full md:w-[80%] lg:w-[60%] h-auto z-10 opacity-60"
        />
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center pointer-events-none">
          <h1 className="p-4 expand-on-load text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl font-emergency text-outline">
            {pageData?.page_title ?? "Loading..."}
          </h1>
          <h2 className="expand-on-load p-4 md:text-xl text-outline">
            St. Louis, Missouri
          </h2>
        </div>
      </div> */}

      <div className="w-full max-w-6xl relative flex justify-center items-center">
        {/* Base image */}
        {/* <Image
          src="/images/mask-cutout-transparent.png"
          // src="/images/forward-mask.png"
          alt="paper mache mask"
          width={1868}
          height={2256}
          className="w-full md:w-[80%] lg:w-[60%] xl:w-[40%] 3xl:w-[80%] h-auto z-10 opacity-100"
        /> */}
       
        {/* Overlay image */}
        <Image
          // src="/images/website-images/kev-sing-nomad-semi-transparent-cut-out.png"
          src="/images/kev-cutout-masks.png"
          alt="Kevin Long from The Long Emergency singing on stage with a guitar"
          width={876}
          height={594}
          className="p-6 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full sm:w-[60%] h-auto object-contain z-20 opacity-50 pointer-events-none"
        />

        {/* Text overlay */}
        <div className="absolute inset-0 z-30 flex flex-col items-center justify-center text-center pointer-events-none">
          <h1 className="p-4 expand-on-load text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-emergency text-outline">
            {pageData?.page_title ?? "Loading..."}
          </h1>
          <h2 className="expand-on-load p-4 md:text-xl text-outline">
            St. Louis, Missouri
          </h2>
        </div>
      </div>

      {/* <Toaster
        toastId="install-app-toast"
        message="Install thelongemergency.com"
        component={<InstallAppButton />}
      /> */}
    </section>
  );
}
