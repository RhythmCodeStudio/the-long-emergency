import { FiPlay } from "react-icons/fi";

export default function PlayButton({ src }: { src: string }) {
  return (
    <div className="">
      <a download href={src} >
        <FiPlay />
      </a>
    </div>
  );
};
