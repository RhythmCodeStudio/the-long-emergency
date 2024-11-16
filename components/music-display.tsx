"use client";
import { track } from "@vercel/analytics";
// import from react
import { useState } from "react";
// import from next
import Image from "next/image";
// import components
import IframeModal from "./iframe-modal";
import MusicPlayer from "./music-player";
import DownloadButton from "./download-button";
import PlayButton from "./play-button";
import { FiDownload } from "react-icons/fi";

// import data
import { Album, Song } from "../app/lib/definitions";

export default function MusicDisplay({
  albums,
  songs,
}: {
  albums: Album[];
  songs: Song[];
}) {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentSong, setCurrentSong] = useState<Song>({} as Song);
  const trackSongPlay = (song: Song) => {
    track("song-play", {
      song: song.title,
      album: song.album,
    });
  };
  const trackSongDownload = (song: Song) => {
    track("song-download", {
      song: song.title,
      album: song.album,
    });
  };
  const trackAlbumDownload = (album: Album) => {
    track("album-download", {
      album: album.title,
    });
  };

  return (
    <div className="flex justify-center items center flex-col">
      <div className="px-10 grid grid-cols-1 lg:grid-cols-2 lg:gap-24 flex justify-center items center text-center">
        {albums.map((album) => (
          <div
            key={album.id}
            className="m-4 expand-on-load font-mono text- md:text-2xl">
            <div className="text-outline">
              <h3 className="text-2xl">{album.title}</h3>
              <p>{album.type}</p>
              <p>{album.year}</p>
            </div>
            <div className="relative">
              <div className=" max-w-96 p-6">
                <Image
                  priority
                  src={album.cover_image}
                  alt={album.title}
                  width={1423}
                  height={1411}
                  className=" h-auto shadow-2xl shadow-blue-300/50 border-2 border-slate-400"
                />
              </div>
              <div className="py-4 text-outline">
                <div className="download-album-div ">
                  <p>Download {album.title}</p>
                  <div
                    className="flex justify-center icon-outline"
                    onClick={() => {
                      trackAlbumDownload(album);
                    }}>
                    <DownloadButton src={album.zip} />
                  </div>
                </div>
                <ol className="list-decimal list-inside pl-2 ">
                  {songs
                    .filter((song) => song.album === album.id)
                    .map((song, index) => (
                      <li key={song.id} className="flex items-center my-1 z-0">
                        <span className="mr-2">{index + 1}.</span>
                        <span className="">{song.title}</span>
                        <div className="ml-auto flex pr-2 ">
                          <div className="mr-2 icon-outline">
                            <PlayButton
                              song={song}
                              onPlay={() => {
                                setCurrentSong(song);
                                trackSongPlay(song);
                              }}
                            />
                          </div>
                        
                          <div
                            className="ml-2 icon-outline"
                            // onClick={() => {
                            //   trackSongDownload(song);
                            // }}
                          >
                            {/* <DownloadButton src={song.src} /> */}
                            <IframeModal
                              src={song.bandcamp_url}
                              title={song.title}
                            />
                          </div>
                        </div>
                      </li>
                    ))}
                </ol>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="p-8">
        <MusicPlayer song={currentSong || undefined} />
      </div>
    </div>
  );
}
