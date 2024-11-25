// import from next
import Image from "next/image";

export default function BandBio() {
  return (
    <section className="max-w-800 flex flex-col md:text-lg">
      <div className="px-8 pb-3 lg:px-48 xl:px-64 2xl:px-96 font-mono text-balance">
        <p className="text-outline">
        I was active in the Twin Cities independent music scene from around 2003 through 2013 as a solo artist and with several different bands. In 2013 I formed The Long Emergency as a vehicle for my songwriting. &quot;Starting Over&quot; by The Long Emergency was independently released in May of 2013. That summer I moved to Austin, TX with plans to promote the new album and form a new version of The Long Emergency to continue recording and performing. After a year in Texas I came to terms with the fact that I had a drinking problem and mad up my mind to do something about it.
          {/* The Long Emergency is led by multi-instrumentalist and songwriter
          Kevin Long. From 2003 to 2013 Kevin was active in the Twin Cities
          independent music scene, performing as a solo artist and with several
          bands including Boxcutter, Sorry OK, and The Drug Budget. In 2013
          Kevin formed The Long Emergency as a vehicle for his songwriting.
          &quot;Starting Over&quot; by The Long Emergency was released in May of 2013. */}
        </p>
      </div>
      <div className="expand-on-load px-10 py-2 xl:py-6 flex justify-center items-center">
        <Image
          priority
          src="/images/kev-16-9.jpg"
          alt="Kevin Long performing with The Long Emergency"
          width={545}
          height={308}
          className="shadow-2xl shadow-blue-300/50 border-2 border-slate-400"
        />
      </div>
      <div className="px-8 py-3 lg:px-48 xl:px-64 2xl:px-96 font-mono">
        <p className="text-outline">
          {/* Later that year Kevin moved to Austin, TX with plans of forming a new version of The Long Emergency. After a year in Texas Kevin came to terms with the fact that he had a problem with alcohol.  */}
          In those early days without alcohol playing music felt impossible. Just holding my guitar felt weird. I couldn&apos;t imagine performing sober. Playing gigs in bars and going to band practice seemed like asking for trouble. I decided to set music aside while I figured out this new way to live. I figured I would come back to it when I was ready. 
        </p>
      </div>
      <div className="px-8 py-3 lg:px-48 xl:px-64 2xl:px-96 font-mono">
        <p className="text-outline">
        Ten years later and still alcohol free I am ready to share my songs and my story. 
        </p>
      </div>
      <div className="px-8 py-3 lg:px-48 xl:px-64 2xl:px-96 font-mono">
        <p className="text-outline">
        Songwriting for me has always been a way of processing difficult things. I have danced with anxiety, depression, and addiction most of my life. In some way all of my songs are about these experiences. 
        </p>
      </div>
      <div className="px-8 py-3 lg:px-48 xl:px-64 2xl:px-96 font-mono">
        <p className="text-outline">
        These songs saved my life. If by sharing them with the world I can possibly help someone else then maybe it will have all been worthwhile. 
        </p>
      </div>
      <div className="px-8 py-3 lg:px-48 xl:px-64 2xl:px-96 font-mono">
        <p className="text-outline">
          Thank you for listening
        </p>
        <p className="text-outline">
          - Kevin Long
        </p>
      </div>
    </section>
  );
}
