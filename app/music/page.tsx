import { getPage, getAlbums, getSongs } from "../lib/data";
import MusicDisplay from "../../components/music-display";

export const metadata = {
  title: "Music",
  description: "Music by The Long Emergency",
};

export default async function MusicPage() {
  const musicPageData = await getPage("music");
  const albums = await getAlbums();
  const songs = await getSongs();

  return (
    <div className="flex justify-center items-center flex-col">
      <h2 className=" text-center text-2xl lg:text-3xl xl:text-4xl text-outline">
        {musicPageData.page_title}
      </h2>
      <MusicDisplay albums={albums} songs={songs} />
    </div>
  );
}
