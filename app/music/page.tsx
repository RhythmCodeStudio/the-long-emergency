// import data
import { getPage, getAlbums, getSongs } from "../lib/data";
// import from next
import Image from "next/image";
// import components
import MusicPlayer from "../components/music-player";
// import icons
import { HiDownload } from "react-icons/hi";
import { FiDownload } from "react-icons/fi";
import { FiPlay } from "react-icons/fi";

export default async function MusicPage() {
  const musicPageData = await getPage("music");
  const albums = await getAlbums();
  const songs = await getSongs();
  console.log("songs", songs);
  console.log("albums", albums);
  return (
    <div className="flex justify-center items center flex-col">
      <h2 className="text-center text-2xl">{musicPageData.page_title}</h2>
      <div className="p-12 grid grid-cols-1 lg:grid-cols-2 flex justify-center items center text-center">
        {albums.map((album) => (
          <div
            key={album.id}
            className="m-4 expand-on-load font-mono text-lg md:text-2xl">
            <div className="py-4">
              <h3 className="text-2xl">{album.title}</h3>
              {/* <p>{album.type}</p> */}
              <p>{album.year}</p>
            </div>

            <Image
              src={album.cover_image}
              alt={album.title}
              width={1423}
              height={1411}
            />

            <div className="py-4">
              <ol className="list-decimal list-inside">
                {songs
                  .filter((song) => song.album === album.id)
                  .map((song) => (

                    <li key={song.id} >
                      <FiDownload className="inline justify-center" />
                      <span>{song.title}</span>
                      <FiPlay className="inline" />
                    </li>
                    
                  ))}
              </ol>
            </div>
          </div>
        ))}
      </div>
      <div className="px-12">
        <MusicPlayer />
      </div>
    </div>
  );
}
