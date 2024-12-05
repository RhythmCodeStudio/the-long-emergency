// import from next
import Image from "./image";

export default function BandBio() {
  return (
    <section className="p-2 px-8 max-w-800 flex flex-col md:text-lg">
      <div className="pb-3 lg:px-48 xl:px-64 2xl:px-96 font-mono rounded-2xl">
        <p
          className="text-outline"
          // style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
        >
          I was active in the Twin Cities independent music scene from around
          2003 through 2013 as a solo artist and with several different bands.
          In 2013 I formed The Long Emergency as a vehicle for my songwriting.
          Starting Over by The Long Emergency was independently released in May
          of 2013.
        </p>
      </div>
      <div className="pb-3 lg:px-48 xl:px-64 2xl:px-96 font-mono rounded-2xl">
        <p
          className="text-outline"
          // style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
        >
          That summer I moved to Austin, TX with plans to promote the new album
          and form a new version of The Long Emergency to continue performing
          and recording. After about a year in Texas I came to terms with the
          fact that I had a drinking problem and made up my mind to do something
          about it. In May of 2014 I quit drinking for good.
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
          In those early days without alcohol playing music felt impossible.
          Just holding my guitar felt weird. I couldn&apos;t imagine performing
          sober. I no longer felt the joy and sense of purpose I once did when I
          picked up the guitar. I was empty inside. I decided to set music aside
          while I adjusted to life without alcohol. I figured I would come back
          to it when I was ready. I just didn&apos;t expect it to take so long.
        </p>
      </div>
      <div className="py-3 lg:px-48 xl:px-64 2xl:px-96 font-mono">
        <p className="text-outline">
          Ten years later I am ready to share my songs and my story.
        </p>
      </div>
      <div className="py-3 lg:px-48 xl:px-64 2xl:px-96 font-mono ">
        <p className="text-outline">
          Songwriting for me has always been a way of processing difficult
          things. I have danced with anxiety, depression, and addiction most of
          my life. All of my songs are in some way about these experiences.
        </p>
      </div>
      <div className="py-3 lg:px-48 xl:px-64 2xl:px-96 font-mono">
        <p className="text-outline">
          My first attempt to quit drinking came during the recording of
          Starting Over. There was something about hearing these songs over and
          over throughout the recording process that made the reality of my
          situation start to sink in. That first attempt didn&apos;t stick but
          the seed had been planted. A year or so later that seed sprouted. It
          is still growing today.
        </p>
      </div>
      <div className="py-3 lg:px-48 xl:px-64 2xl:px-96 font-mono">
        <p className="text-outline">
          {/* I used to beat myself up for not putting more of an effort into pursuing music as a career. I used to think that I had wasted my talent and not much of anything with my music. With the wisdom of hindsight I can see that this is not true.  */}
          These songs saved my life. I&apos;ve never really shared them in the
          way that they deserve. I offer them now in the hope that they might
          help someone else. Maybe that&apos;s silly. I don&apos;t know. I do
          know that songs are meant to be heard and this music isn&apos;t doing much
          of anything locked in my head or saved on my computer. If by sharing
          my songs and my story I can help someone else even just a little bit
          then maybe it will have all been worthwhile.
        </p>
      </div>
      <div className="py-3 lg:px-48 xl:px-64 2xl:px-96 font-mono">
        <p className="text-outline">Thank you for listening.</p>
      </div>
      {/* <div className="py-3 lg:px-48 xl:px-64 2xl:px-96 font-mono">
        <p className="text-outline">
          If you are struggling with addiction please know that it is not your fault. You are not a bad person. Feel free to reach out and say hi.
        </p>
      </div> */}
      <div className="py-3 lg:px-48 xl:px-64 2xl:px-96 font-mono">
        <p className="mt-6 text-outline text-right">
          -&nbsp;
          <a
            href="https://www.discogs.com/artist/3655286-Kevin-Long-5"
            target="_blank"
            rel="noopener noreferrer">
            Kevin Long
          </a>
        </p>
      </div>
    </section>
  );
}
