import { FiDownload } from "react-icons/fi";

export default function DownloadButton({ src }: { src: string }) {
  return (
    <div className="">
      <a download href={src} >
        <FiDownload className="text-lg" />
      </a>
    </div>
  );
};
