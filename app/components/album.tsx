// import from react
import { useState } from "react";
// import from next
import Image from "next/image";
// import models
import { Album, Song } from "../lib/definitions";
// import components
import DownloadButton from "../components/download-button";
import PlayButton from "../components/play-button";


export default function Album({ album, songs }: { album: Album, songs: Song[] }) {
  const [currentSong, setCurrentSong] = useState<Song>(songs[2]);
  return (
    <div
      key={album.id}
      className="m-4 expand-on-load font-mono text- md:text-2xl">
      <div className="py-4">
        <h3 className="text-2xl">{album.title}</h3>
        <p>{album.type}</p>
        <p>{album.year}</p>
      </div>
      <div className="relative">
        <Image
          priority
          src={album.cover_image}
          alt={album.title}
          width={1423}
          height={1411}
        />
        <div className="py-4">
          <ol className="list-decimal list-inside pl-2">
            {songs
              .filter((song) => song.album === album.id)
              .map((song, index) => (
                <li key={song.id} className="flex items-center">
                  <span className="mr-2">{index + 1}.</span>
                  <span className="">{song.title}</span>
                  <div className="ml-auto flex pr-2">
                    <div className="mr-2">
                    <PlayButton song={song} onPlay={setCurrentSong} />
                    </div>
                    <div className="ml-2">
                      <DownloadButton src={song.src} />
                    </div>
                  </div>
                </li>
              ))}
          </ol>
        </div>
      </div>
    </div>
  );
}