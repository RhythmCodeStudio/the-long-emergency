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

      <div className="w-full max-w-5xl relative flex justify-center items-center">
        
        <Image
          src="/images/website-images/kev-sing-nomad-semi-transparent-cut-out.png"
          alt="Kevin Long from The Long Emergency singing on stage with a guitar"
          width={876}
          height={594}
          className="w-[60%] 3xl:w-full h-auto z-10 opacity-60"
        />
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center pointer-events-none">
          {" "}
          <h1 className="p-4 expand-on-load text-5xl md:text-6xl lg:text-6xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl font-emergency text-outline">
            {" "}
            {pageData?.page_title ?? "Loading..."}{" "}
          </h1>{" "}
          <h2 className="expand-on-load p-4 md:text-xl text-outline">
            {" "}
            St. Louis, Missouri{" "}
          </h2>{" "}
        </div>{" "}
      </div>

      {/* <Toaster
        toastId="install-app-toast"
        message="Install thelongemergency.com"
        component={<InstallAppButton />}
      /> */}
    </section>
  );
}
