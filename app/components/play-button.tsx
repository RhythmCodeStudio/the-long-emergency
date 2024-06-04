"use client";
// import from react
import { useState } from "react";
import { FiPlay } from "react-icons/fi";
import { Song } from '../lib/definitions';

export default function PlayButton({ song, onPlay }: { song: Song, onPlay: (song: Song) => void }) {
  // const [currentSong, setCurrentSong] = useState<Song>(song);
  return (
    <div className="">
      <button
        onClick={() => onPlay(song)}
      >
        <FiPlay 
          className="text-xl"
        />
      </button>
    </div>
  );
}
