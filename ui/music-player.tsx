"use client";
import { useState } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { Song } from "@/definitions/definitions";
import LyricsModal from "./lyrics-modal";
// import from react

// import  Masks  from '../public/images/masks-no-text.png';

export default function MusicPlayer({
  song,
  songSelected,
}: {
  song: Song;
  songSelected: Song | null;
}) {
  // const [songSelected, setSongSelected] = useState<Song | null>(null);

  return (
    <>
      <div className="border-2 border-slate-400  flex flex-col justify-center items-center shadow-md shadow-white rounded-2xl w-full audio-player-container">
        <AudioPlayer
          className="h-36 text-center text-white rounded-2xl w-full"
          src={song.src}
          // onPlay={(e) => console.log(`Now playing ${song.title}`)}
          preload="auto"
          // header={song?.title?.trim() || "\u00A0"}
          header={song?.title?.trim() || "Select a song above"}
          footer="The Long Emergency"
        />
        <LyricsModal
          title={song.title}
          lyrics={song.lyrics}
          songSelected={songSelected}
        />
      </div>
    </>
  );
}
