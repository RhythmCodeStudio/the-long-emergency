// import data
import { getPage, getAlbums, getSongs } from "../lib/data";
import { Album, Song } from "../lib/definitions";
// import from next
import Image from "next/image";
// import components
import MusicDisplay from "../components/music-display";
import MusicPlayer from "../components/music-player";
import DownloadButton from "../components/download-button";
import PlayButton from "../components/play-button";

export default async function MusicPage() {
  const musicPageData = await getPage("music");
  const albums = await getAlbums();
  const songs = await getSongs();
  // console.log("songs", songs);
  // console.log("albums", albums);
  return (
    <div className="flex justify-center items center flex-col">
      <h2 className="text-center text-2xl lg:text-4xl">{musicPageData.page_title}</h2>
      <MusicDisplay albums={albums} songs={songs} />
    </div>
  );
}
