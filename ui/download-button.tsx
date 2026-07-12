// import { FiDownload } from "react-icons/fi";

// export default function DownloadButton({ src }: { src: string }) {
//   return (
//     <div>
//       <a download href={src} >
//         <FiDownload className="text-lg xl:text-2xl" />
//       </a>
//     </div>
//   );
// };


import { FiDownload } from "react-icons/fi";

type DownloadButtonProps = {
  src: string;
  label?: string;
};

export default function DownloadButton({
  src,
  label = "Download file",
}: DownloadButtonProps) {
  return (
    <a
      download
      href={src}
      aria-label={label}
      className="inline-flex items-center justify-center leading-none"
    >
      <FiDownload className="text-lg xl:text-2xl" aria-hidden="true" />
    </a>
  );
}