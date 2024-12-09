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

      <div className="relative w-[500px] h-[500px] mt-28 flex items-center">
        
        <ul className="absolute top-6 z-50 flex flex-col justify-center text-center ">
        {/* <h2 className="z-50 text-xl text-outline font-mono mb-6">I spent all my money on a habit</h2> */}
          {songs.map((song, index) => (
            <li key={index} className="p-2 text-xl font-mono text-outline">{song}</li>
          ))}
          <h2 className="z-50 text-2xl text-outline mt-6">The Long Emergency</h2>
          <p className="font-mono text-outline">© 2025 The Long Emergency</p>
        </ul>
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
};