// import components
import Image from "../../../components/image";
// export metadata
export const metadata = {
  title: "",
  description: "",
};

export default async function Page() {

  const songs = [
    "fall",
    "i am not sorry",
    "snow emergency",
    "standing on a tree stump with a bunch of buttons in my hand",
    "twist the knife",
    "one of my turns",
    "last night",
    "like breathing",
  ]
  
  return (
    <div className="relative flex flex-col justify-center items-center">
      <div className="relative w-[500px] h-[500px]">
        <Image
          className="absolute"
          src="/images/misc/cardboard.jpg"
          alt=""
          width={500}
          height={500}
          priority
        />
        <h1 className="absolute top-4 right-6 text-2xl text-outline z-50">The Long Emergency</h1>
        <Image
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          src="/images/misc/mask-side.png"
          alt=""
          width={374}
          height={441}
          priority
        />
        <h2 className="absolute bottom-0 left-6 text-xl text-outline font-mono z-50 mb-3">I spent all my money on a habit</h2>
      </div>
      <div className="relative flex flex-col justify-center items-center">

      <div className="relative w-[500px] h-[500px] mt-28">
        {songs.map((song, index) => (
          <h3 key={index} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl font-mono text-outline z-50 mb-3">{song}</h3>
        ))}

        {/* <h3 className="absolute top-12 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-mono text-outline z-50 mb-3">fall</h3>
        <h3 className="absolute top-28 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-mono text-outline z-50 mb-3">i am not sorry</h3>
        <h3 className="absolute top-44 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-mono text-outline z-50 mb-3">snow emergency</h3>
        <h3 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-mono text-outline z-50 mb-3">snow emergency</h3>
        <h3 className="absolute top-56 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-mono text-outline z-50 mb-3">snow emergency</h3> */}
        <Image
          className="absolute z-0"
          src="/images/misc/cardboard.jpg"
          alt=""
          width={500}
          height={500}
          priority
        />
        </div>
      </div>
    </div>
  );
}