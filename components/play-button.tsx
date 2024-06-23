"use client";
// import from react
import { FiPlay } from "react-icons/fi";
import { Song } from '../app/lib/definitions';

export default function PlayButton({ song, onPlay }: { song: Song, onPlay: (song: Song) => void }) {
  return (
    <div className="">
      <button
        onClick={() => onPlay(song)}
      >
        <FiPlay 
          className="text-lg xl:text-2xl "
        />
      </button>
    </div>
  );
};
