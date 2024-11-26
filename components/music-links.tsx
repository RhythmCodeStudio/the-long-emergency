// import icons
import { AiOutlineSpotify } from "react-icons/ai";
import { SiYoutubemusic } from "react-icons/si";
import { FiYoutube } from "react-icons/fi";
import { SiApplemusic } from "react-icons/si";
import { FaDeezer } from "react-icons/fa6";
import { TbBrandBandcamp } from "react-icons/tb";
// import components
import IconLink from "./iconLink";

export default function MusicLinks({ size }: { size: number }) {
  const linkData = [
   
    {
      href: "https://open.spotify.com/artist/337ssIYmyo5p8gCv8v5X1z",
      icon: <AiOutlineSpotify size={size} className="icon-outline"/>,
      label: "Listen to The Long Emergency on Spotify",
      name: "Listen to The Long Emergency on Spotify",
    },
    {
      href: "https://thelongemergency.bandcamp.com",
      icon: <TbBrandBandcamp size={size} className="icon-outline"/>,
      label: "Download music from The Long Emergency on Bandcamp",
      name: "Download music from The Long Emergency on Bandcamp",
    },
    { 
      href: "https://music.youtube.com/channel/UCijrNB6Yeh1PwY_7oYDXChw",
      icon: <SiYoutubemusic size={size} className="icon-outline"/>,
      label: "Listen to The Long Emergency on YouTube Music",
      name: "Listen to The Long Emergency on YouTube Music",
    },
    {
      href: "https://www.youtube.com/@TheLongEmergency",
      icon: <FiYoutube size={size} className="icon-outline"/>,
      label: "Follow The Long Emergency on YouTube",
      name: "Follow The Long Emergency on YouTube",
    },
    {
      href: "https://www.facebook.com/thelongemergencyband",
      icon: <SiApplemusic size={size} className="icon-outline"/>,
      label: "Listen to The Long Emergency on Apple Music",
      name: "Listen to The Long Emergency on Apple Music",
    },
    {
      href: "https://www.deezer.com/us/album/666428461",
      icon: <FaDeezer size={size} className="icon-outline"/>,
      label: "Listen to The Long Emergency on Deezer",
      name: "Listen to The Long Emergency on Deezer",
    },
  ];
  return (
    <div className="flex justify-center items-center space-x-10 sm:space-x-16 md:space-x-24 m-4 p-2">
      {linkData.map((link) => (
        <div key={link.href} className="sm:hover:transform hover:scale-125 transition-transform">
          <IconLink
            href={link.href}
            icon={link.icon}
            label={link.label}
            name={link.name}
          />
        </div>
      ))}
    </div>
  );
}