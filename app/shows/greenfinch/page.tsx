import Image from "next/image";
import logo from "../../../public/images/graphics/the-long-emergency.png";

export default async function BirthdayShow() {
  return (
    <div className="relative font-emergency">
      <div className="border-4 border-slate-400 shadow-2xl shadow-blue-300/50">
      <Image
        src="/images/show-posters/masks-no-text.png"
        alt="poster"
        width={953}
        height={1348}
      />
      {/* <Image
        src="/images/show-posters/yellow-template.png"
        alt="poster"
        width={953}
        height={1348}
      /> */}
      {/* <Image
        src="/images/show-posters/1-17-2025-bg-remove.png"
        alt="poster"
        width={953}
        height={1348}
      /> */}
      </div>
      <div className="absolute top-10 left-0 w-full h-full" style={{ textShadow: '2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000' }}>
        {/* <h1 className="text-white absolute text-5xl top-72 right-60 transform -rotate-18 origin-top-left">
          Jan 17
        </h1>
        <h2 className="text-white absolute text-5xl top-56 right-14 transform rotate-22 origin-bottom-left">
          7:00
        </h2> */}

        {/* <h2 className="text-6xl text-center -mt-4 mb-4">The Long Emergency</h2> */}
        {/* <h3 className="text-3xl text-center mt-2">Album Release Show</h3> */}
        {/* <h3 className="text-2xl text-center mt-2">St Louis debut</h3> */}
      </div>
      <div className="absolute top-52 left-14" style={{ textShadow: '2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000' }}>
        {/* <h3 className="text-2xl text-center mt-2 ">Featuring</h3> */}
        {/* <h3 className="text-7xl text-center mt-2 mb-4">
          Leaving <br />
          Missouri
        </h3> */}
        {/* <h3 className="text-2xl text-center mt-6">special guests</h3> */}
        <h3 className="text-5xl text-center mt-2">Random Fog</h3>
        <div className="mt-6">
        {/* <h3 className="text-2xl text-center mt-6">Greenfinch Theater & Dive</h3>
        <h3 className="text-xl text-center ">2525 S. Jefferson Av.</h3> */}
      </div>
      </div>
      {/* <div 
        className="absolute bottom-152 left-8 text-3xl text-center"
        style={{ textShadow: '2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000' }}
      >five <br/> dollars</div> */}
    </div>
  );
}
