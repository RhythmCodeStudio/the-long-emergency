import { FiDownload } from "react-icons/fi";

export default function DownloadButton({ src }: { src: string }) {
  return (
    <div>
      <a download href={src} >
        <FiDownload className="text-lg xl:text-2xl" />
      </a>
    </div>
  );
};
