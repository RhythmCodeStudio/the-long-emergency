"use client";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { Song } from '../lib/definitions';

export default function MusicPlayer({ song }: { song: Song }) {
  return (
    <div className="border border-2-black expand-on-load flex flex-col justify-center items-center shadow-xl shadow-blue-300/50">
      <AudioPlayer
        className="text-center text-black outline-black"
        src={ song.src }
        onPlay={(e) => console.log(`Now playing ${song.title}`)}
        preload='auto'
        header={song.title}
        footer="The Long Emergency"
        />
    </div>
  );
}
