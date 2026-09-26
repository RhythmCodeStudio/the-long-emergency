// import data
import { getPage } from "@/actions/actions";
// import components
import BandBio from "../../ui/band-bio";
import Toaster from "@/ui/toaster";
import InstallAppButton from "@/ui/install-app-button";
// export metadata
export const metadata = {
  title: "About",
  description: "About The Long Emergency",
  alternates: {
    canonical: "/about",
  },
};

export default async function AboutPage() {
  const aboutPageData = await getPage("about");
  console.log(aboutPageData);
  return (
    <div className="flex flex-col items-center w-full">
      <h3 className="font-emergency text-outline text-center text-2xl md:text-3xl lg:text-3xl p-6">
        {aboutPageData?.page_title ?? "About"}
      </h3>
      <div className="p-6">
        <BandBio />
      </div>
      {/* <Toaster toastId="default"/> */}
      <Toaster
        toastId="install-app-toast"
        message="Install thelongemergency.com"
        component={<InstallAppButton />}
      />
    </div>
  );
}
