import { getPage, getReleases, getSongs } from "@/actions/actions";
// import components
import MusicDisplay from "@/ui/music-display";
import Toaster from "@/ui/toaster";
// import InstallAppButton from "@/ui/install-app-button";

export const metadata = {
  title: "Music",
  description: "Music by The Long Emergency",
  alternates: {
    canonical: "/music",
  },
};

export default async function MusicPage() {
  const musicPageData = await getPage("music");

  const releases = await getReleases();
  const chronologicalReleases = releases.sort((a, b) => {
    if (a.year !== b.year) {
      return b.year - a.year; // Newest first
    }
    // If years are the same, releases come before singles
    if (a.release_type === "single" && b.release_type !== "single") {
      return 1;
    }
    if (a.release_type !== "single" && b.release_type === "single") {
      return -1;
    }
    return 0;
  });
  // console.log("Chronological Releases:", chronologicalReleases);

  const songs = await getSongs();
  // console.log("Songs:", songs);

  return (
    <div className="w-full">
      <div className="flex flex-col justify-center items-center ">
         <h2 className="sm:hidden font-emergency text-outline text-center text-2xl lg:text-3xl xl:text-4xl py-4 sm:py-6">
          {musicPageData?.page_title ?? "Music"}
        </h2>
        <section className="sm:py-6">
          <MusicDisplay releases={chronologicalReleases} songs={songs} />
        </section>
      </div>
      <Toaster toastId="default" />
    </div>
  );
}
