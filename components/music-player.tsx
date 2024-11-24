"use client";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { Song } from "../app/lib/definitions";
// import from react
import { useState, useRef, useEffect } from "react";
// import  Masks  from '../public/images/masks-no-text.png';

export default function MusicPlayer({ song }: { song: Song }) {
  const [isOpen, setIsOpen] = useState(false);
  const detailsRef = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    if (detailsRef.current) {
      const details = detailsRef.current;
      const summary = details.querySelector("summary");

      const handleToggle = () => {
        setIsOpen(details.open);
      };

      if (summary) {
        summary.addEventListener("click", handleToggle);
      }

      return () => {
        if (summary) {
          summary.removeEventListener("click", handleToggle);
        }
      };
    }
  }, []);

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
        {song.lyrics && (
        <details
          ref={detailsRef}
          className={`font-mono bg-black transition-all duration-500 ease-in-out ${
            isOpen ? "max-h-96" : "max-h-0 overflow-hidden"
          }`}
        >
          <summary>Lyrics</summary>
          <p className="text-sm max-w-200">{song.lyrics}</p>
        </details>
      )}
      </div>
    </>
  );
}
