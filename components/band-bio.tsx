// import from next
import Image from "next/image";

export default function BandBio() {
  return (
    <section className="p-2 px-8 max-w-800 flex flex-col md:text-lg">
      <div className="pb-3 lg:px-48 xl:px-64 2xl:px-96 font-mono text-balance rounded-2xl" >
        <p className="text-outline" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          I was active in the Twin Cities independent music scene from around
          2003 through 2013 as a solo artist and with several different bands.
          In 2013 I formed The Long Emergency as a vehicle for my songwriting.
          &quot;Starting Over&quot; by The Long Emergency was independently
          released in May of 2013. That summer I moved to Austin, TX with plans
          to promote the new album and form a new version of The Long Emergency
          to continue recording and performing. After a year in Texas I came to
          terms with the fact that I had a drinking problem and made up my mind
          to do something about it.
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
      <div className="py-3 lg:px-48 xl:px-64 2xl:px-96 font-mono">
        <p className="text-outline">
          {/* Later that year Kevin moved to Austin, TX with plans of forming a new version of The Long Emergency. After a year in Texas Kevin came to terms with the fact that he had a problem with alcohol.  */}
          In those early days without alcohol playing music felt impossible.
          Just holding my guitar felt weird. I couldn&apos;t imagine performing
          sober. Playing gigs in bars and going to rehearsals seemed like asking
          for trouble. I no longer felt the joy and excitement I once did when I picked up the guitar. I felt empty inside. I decided to set music aside while I adjusted to life
          without alcohol. I figured I would come back to it when I was ready. I just didn&apos;t expect it to take so long.
        </p>
      </div>
      <div className="py-3 lg:px-48 xl:px-64 2xl:px-96 font-mono">
        <p className="text-outline">
          Ten years later and still alcohol free I am ready to share my songs
          and my story.
        </p>
      </div>
      <div className="py-3 lg:px-48 xl:px-64 2xl:px-96 font-mono">
        <p className="text-outline">
          Songwriting for me has always been a way of processing difficult
          things. I have danced with anxiety, depression, and addiction most of
          my life. All of my songs are in some way about these experiences.
        </p>
      </div>
      <div className="py-3 lg:px-48 xl:px-64 2xl:px-96 font-mono">
        <p className="text-outline">
          {/* I used to beat myself up for not putting more of an effort into pursuing music as a career. I used to think that I had wasted my talent and not much of anything with my music. With the wisdom of hindsight I can see that this is not true.  */}
          These songs saved my life. If by sharing them with the world I can
          possibly help someone else then maybe it will have all been
          worthwhile. If you are struggling with addiction and need someone to talk to please reach out.
        </p>
      </div>
      {/* <div className="py-3 lg:px-48 xl:px-64 2xl:px-96 font-mono">
        <p className="text-outline">
          If you are wrestling with addiction please know that it is not your fault. You are not a bad person. If you need someone to talk to please reach out. You might be very alone, but you don't have to be.
        </p>
      </div> */}
      <div className="py-3 lg:px-48 xl:px-64 2xl:px-96 font-mono">
        <p className="text-outline">Thank you for listening.</p>
        <p className="mt-6 text-outline text-right">
          -&nbsp;
          <a
            href="https://www.discogs.com/artist/3655286-Kevin-Long-5"
            target="_blank"
            rel="noopener noreferrer"
          >
            Kevin Long
          </a>
        </p>
      </div>
    </section>
  );
}
