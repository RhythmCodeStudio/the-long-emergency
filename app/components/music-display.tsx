"use client";
import { track } from "@vercel/analytics";
// import from react
import { useState } from "react";
// import from next
import Image from "next/image";
// import components
import MusicPlayer from "../components/music-player";
import DownloadButton from "../components/download-button";
import PlayButton from "../components/play-button";
import { Album, Song } from "../lib/definitions";

export default function MusicDisplay({
  albums,
  songs,
}: {
  albums: Album[];
  songs: Song[];
}) {
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
            <div className="py-4">
              <h3 className="text-2xl">{album.title}</h3>
              <p>{album.type}</p>
              <p>{album.year}</p>
            </div>
            <div className="relative">
              <div className="border border-2-black shadow-xl shadow-blue-300/50 max-w-72">
                <Image
                  priority
                  src={album.cover_image}
                  alt={album.title}
                  width={1423}
                  height={1411}
                />
              </div>
              <div className="py-4">
                <div className="download-album-div ">
                  <p>Download {album.title}</p>
                  <div
                    className="flex justify-center"
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
                      <li key={song.id} className="flex items-center my-1">
                        <span className="mr-2">{index + 1}.</span>
                        <span className="">{song.title}</span>
                        <div className="ml-auto flex pr-2 ">
                          <div className="mr-2">
                            <PlayButton
                              song={song}
                              onPlay={() => {
                                setCurrentSong(song);
                                trackSongPlay(song);
                              }}
                            />
                          </div>
                          <div
                            className="ml-2"
                            onClick={() => {
                              trackSongDownload(song);
                            }}>
                            <DownloadButton src={song.src} />
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
      <div className="px-12">
        <MusicPlayer song={currentSong || undefined} />
      </div>
    </div>
  );
}
