// import icons
import { FiFacebook } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { PiPatreonLogoBold } from "react-icons/pi";
// import { TbBrandBandcamp } from "react-icons/tb";
// import components
import IconLink from "./iconLink";

export default function ContactLinks({ size }: { size: number }) {
  const linkData = [
   
    {
      href: "mailto:thelongemergencyband@gmail.com",
      icon: <FiMail size={size} className="icon-outline"/>,
      label: "Email The Long Emergency",
      name: "Email The Long Emergency",
    },
    // {
    //   href: "https://thelongemergency.bandcamp.com",
    //   icon: <TbBrandBandcamp size={size} className="icon-outline"/>,
    //   label: "Download music from The Long Emergency on Bandcamp",
    //   name: "Download music from The Long Emergency on Bandcamp",
    // },
    { 
      href: "https://patreon.com/TheLongEmergency",
      icon: <PiPatreonLogoBold size={size} className="icon-outline"/>,
      label: "Support The Long Emergency on Patreon",
      name: "Support The Long Emergency on Patreon",
    },
    {
      href: "https://www.instagram.com/longemergency/",
      icon: <FiInstagram size={size} className="icon-outline"/>,
      label: "Follow The Long Emergency on Instagram",
      name: "Follow The Long Emergency on Instagram",
    }
  ];
  return (
    <div className="flex justify-center items-center space-x-10 sm:space-x-16 md:space-x-24  m-4 p-2">
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