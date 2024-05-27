"use client";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

export default function MusicPlayer() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h4>Music Player</h4>
      <AudioPlayer
        src="/tracks/starting-over/flac/last-night.flac"
        onPlay={(e) => console.log('onPlay')}
        />
    </div>
  );
}
