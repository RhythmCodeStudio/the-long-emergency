import { getPage, getAlbums, getSongs } from "../lib/data";
// import components
import MusicDisplay from "@/ui/music-display";
import Toaster from "@/ui/toaster";
import InstallAppButton from "@/ui/install-app-button";

export const metadata = {
  title: "Music",
  description: "Music by The Long Emergency",
  alternates: {
    canonical: "/music",
  },
};

export default async function MusicPage() {
  const musicPageData = await getPage("music");
  const albums = await getAlbums();
  const chronologicalAlbums = albums.sort((a, b) => {
    if (a.year !== b.year) {
      return b.year - a.year; // Newest first
    }
    // If years are the same, albums come before singles
    if (a.type === "single" && b.type !== "single") {
      return 1;
    }
    if (a.type !== "single" && b.type === "single") {
      return -1;
    }
    return 0;
  });
  const songs = await getSongs();

  return (
    <div className="bg-[rgba(0,0,0,0.5)] md:bg-transparent w-full">
      <div className="flex flex-col justify-center items-center ">
        <h2 className="font-emergency mt-4 text-center text-2xl lg:text-3xl xl:text-4xl text-outline">
          {musicPageData?.page_title ?? "Music"}
        </h2>
        <MusicDisplay albums={chronologicalAlbums} songs={songs} />
      </div>
      <Toaster
              toastId="install-app-toast"
              message="Install thelongemergency.com"
              component={<InstallAppButton />}
            />
    </div>
  );
}
