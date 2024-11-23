'use client';
import { usePathname } from "next/navigation";
import Marquee from "react-fast-marquee";


export default function ScrollingBanner() {
  const currentPath = usePathname();
  return (
    <div className={`m-6 mb-6 ${currentPath === "/" ? "hidden" : ""}`}>
      <Marquee speed={60}>
        <span className="text-xl text-center text-outline font-mono">
          New album &quot;Boxcutter&quot; - Available 1/17/2025. Release show @
          Greenfinch Theater and Dive. 1/17/2025 - 7:00pm.&nbsp;
          <a
            href="https://www.purplepass.com/events/304686-the-long-emergency-%7C-album-release-show---featurin-jan-17th-2025"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >Tickets on sale now.</a>&nbsp;
        </span>
      </Marquee>
    </div>
  );
};
