// import icons
import { FiFacebook } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { PiPatreonLogoBold } from "react-icons/pi";
// import components
import IconLink from "./iconLink";




export default function ContactLinks({ size }: { size: number }) {
  const linkData = [
    {
      href: "https://www.instagram.com/longemergency/",
      icon: <FiInstagram size={size} />,
      label: "Follow The Long Emergency on Instagram",
      name: "Follow The Long Emergency on Instagram",
    },
    {
      href: "mailto:thelongemergencyband@gmail.com",
      icon: <FiMail size={size} />,
      label: "Email The Long Emergency",
      name: "Email The Long Emergency",
    },
    // {
    //   href: "https://www.patreon.com",
    //   icon: <PiPatreonLogoBold size={size} />,
    //   label: "Support The Long Emergency on Patreon",
    //   name: "Support The Long Emergency on Patreon",
    // },
    {
      href: "https://www.facebook.com/thelongemergencyband",
      icon: <FiFacebook size={size} />,
      label: "Follow The Long Emergency on Facebook",
      name: "Follow The Long Emergency on Facebook",
    },
  ];
  return (
    <div className="flex justify-center items-center space-x-24 lg:space-x-36 xl:space-x-72 m-2 p-2">
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