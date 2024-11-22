// import from next
import Image from "next/image";

export default function BandBio() {
  return (
    <section className="max-w-800 flex flex-col justify-center items-center md:text-lg">
      <div className="px-12 pb-3 lg:px-48 xl:px-64 2xl:px-96 font-mono ">
        <p className="text-outline">
          The Long Emergency is led by multi-instrumentalist and songwriter
          Kevin Long. From 2003 to 2013 Kevin was active in the Twin Cities
          independent music scene, performing as a solo artist and with several
          bands including Boxcutter, Sorry OK, and The Drug Budget. In 2013
          Kevin formed The Long Emergency as a vehicle for his songwriting.
          &quot;Starting Over&quot; by The Long Emergency was released in May of 2013.
        </p>
      </div>
      <div className="expand-on-load px-10 py-2 xl:py-6">
        <Image
          priority
          src="/images/kev-16-9.jpg"
          alt="Kevin Long performing with The Long Emergency"
          width={545}
          height={308}
          className="shadow-2xl shadow-blue-300/50 border-2 border-slate-400"
        />
      </div>
      <div className="px-12 py-3 lg:px-48 xl:px-64 2xl:px-96 font-mono">
        <p className="text-outline">
          Later that year Kevin moved to Austin, TX with plans of forming a new version of The Long Emergency. After a year in Texas Kevin came to terms with the fact that he had a problem with alcohol. 
        </p>
      </div>
    </section>
  );
}
