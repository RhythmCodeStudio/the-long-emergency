import Image from "./image";

export default function BannerImage({ src, alt, width, height, className }: { src: string, alt: string, width: number, height: number, className?: string}) {
  return (
    <section className="grid grid-cols-1">
        <div className={`w-full relative justify-center items-center ${className}`}>
          <Image src={src} alt={alt} width={width} height={height} priority/>
      </div>
    </section>
  );
}