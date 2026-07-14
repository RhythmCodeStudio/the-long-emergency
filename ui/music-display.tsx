"use client";
import { track } from "@vercel/analytics";
// import from react
import { useState } from "react";
// import from next
import Image from "next/image";
// import components
import MusicPlayer from "./music-player";
import DownloadButton from "./download-button";
import PlayButton from "./play-button";
// import BandcampModal from "./bandcamp-modal";
// import icons
// import { FiDownload } from "react-icons/fi";
// import data
import { Release, Song } from "@/definitions/definitions";

const truncateTitle = (title: string, maxLength: number) => {
  if (title.length > maxLength) {
    return title.substring(0, maxLength) + '...';
  }
  return title;
};

export default function MusicDisplay({
  releases,
  songs,
}: {
  releases: Release[];
  songs: Song[];
}) {
  // const [modalOpen, setModalOpen] = useState(false);
  const [songSelected, setSongSelected] = useState<Song | null>(null);
  const [currentSong, setCurrentSong] = useState<Song>({} as Song);
  const trackSongPlay = (song: Song) => {
    track("song-play", {
      song: song.title,
      release: song.release,
    });
  };
  const trackSongDownload = (song: Song) => {
    track("song-download", {
      song: song.title,
      release: song.release,
    });
  };
  const trackReleaseDownload = (release: Release) => {
    track("release-download", {
      release: release.title,
    });
  };

  return (
    <div className="flex justify-center items center flex-col">
      <div className="px-10 lg:px-0 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-24 justify-center items center text-center">
        {releases.map((release) => (
          <div key={release.id} className="m-4 md:text-2xl">
            <div className="text-outline expand-on-load ">
              <h3 className="text-lg">{release.title}</h3>
              <h4 className="text-md">{release.release_type}</h4>
              <h5 className="text-sm">{release.year}</h5>
            </div>

            <div className="relative">
              <div className="max-w-96 p-6">
                <Image
                  priority
                  src={release.cover_image}
                  alt={`${release.title} cover art`}
                  width={1423}
                  height={1411}
                  className="expand-on-load h-auto shadow-md shadow-white border-2 border-slate-400 rounded-2xl"
                />
              </div>
              <div className="text-outline expand-on-load ">
                <div className="download-release-div ">
                  <h6 className="text-sm">Download {release.title}</h6>
                  <div
                    className="mb-6 flex justify-center icon-outline"
                    onClick={() => {
                      trackReleaseDownload(release);
                    }}>
                    <DownloadButton src={release.zip_file || ""} label={`Download ${release.title}`} />
                  </div>
                </div>
                <ol className="list-decimal list-inside pl-2 expand-on-load">
                  {songs
                    .filter((song) => song.release === release.id)
                    .sort((a, b) => a.track_number - b.track_number)
                    .map((song, index) => (
                      // console.log(song, index),
                      <li key={song.id} className="flex items-center my-1 z-0">
                        <span className="mr-2">{index + 1}.</span>
                        <span className="">{truncateTitle(song.title, 18)}</span>
                        <div className="ml-auto flex pr-2 ">
                          <div className="mr-2 icon-outline">
                            <PlayButton
                              song={song}
                              onPlay={() => {
                                setSongSelected(song);
                                setCurrentSong(song);
                                trackSongPlay(song);
                              }}
                            />
                          </div>
                          <div
                            className="ml-2 icon-outline"
                            onClick={() => {
                              trackSongDownload(song);
                            }}>
                            <DownloadButton src={song.src} label={`Download ${song.title}`} />
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
        <MusicPlayer song={currentSong || undefined} songSelected={songSelected} />
      </div>
    </div>
  );
}