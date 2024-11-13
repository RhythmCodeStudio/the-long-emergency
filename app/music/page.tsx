// import data
import { getPage, getAlbums, getSongs } from "../lib/data";
// import components
import MusicDisplay from "../../components/music-display";
// export metadata
export const metadata  = {
  title: "Music",
  description: "Music by The Long Emergency",
};

export default async function MusicPage() {
  const musicPageData = await getPage("music");
  const albums = await getAlbums();
  const songs = await getSongs();
  return (
    <div className="flex justify-center items center flex-col">
      <h2 className="my-3 text-center text-2xl lg:text-4xl text-outline">{musicPageData.page_title}</h2>
      <MusicDisplay albums={albums} songs={songs} />
    </div>
  );
}
