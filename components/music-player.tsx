"use client";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { Song } from "../app/lib/definitions";
import LyricsModal from "./lyrics-modal";
// import from react

// import  Masks  from '../public/images/masks-no-text.png';

export default function MusicPlayer({ song }: { song: Song }) {

  return (
    <>
      <div className="border-2 border-slate-400 expand-on-load flex flex-col justify-center items-center shadow-xl shadow-blue-300/50 bg-black">
        <AudioPlayer
          className=" h-36 text-center text-black"
          src={song.src}
          // onPlay={(e) => console.log(`Now playing ${song.title}`)}
          preload="auto"
          header={song.title}
          footer="The Long Emergency"
        />
        {song && song.lyrics && <LyricsModal title={song.title} lyrics={song.lyrics} />}
      </div>
    </>
  );
}
