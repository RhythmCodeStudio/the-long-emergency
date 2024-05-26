// import icons
import { FiFacebook } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FiMail } from "react-icons/fi";

import IconLink from "./iconLink";

const linkData = [
  {
    href: "https://www.instagram.com/longemergency/",
    icon: <FiInstagram size={30} />,
    label: "link to The Long Emergency on Instagram",
    name: "link to The Long Emergency on Instagram",
  },
  {
    href: "https://www.linkedin.com/company/rhythm-code-studio/",
    icon: <FiMail size={30} />,
    label: "email The Long Emergency",
    name: "link to The Long Emergency on LinkedIn",
  },
  {
    href: "https://www.facebook.com/thelongemergencyband",
    icon: <FiFacebook size={30} />,
    label: "link to The Long Emergency on Facebook",
    name: "link to The Long Emergency on Facebook",
  },
];


export default function SocialMediaLinks() {
  return (
    <div className="flex justify-center items-center space-x-16 lg:space-x-28 xl:space-x-48 m-2 p-2">
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