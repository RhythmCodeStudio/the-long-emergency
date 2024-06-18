// import from next
import Image from "next/image";

export default function BandBio() {
  return (
   
<section className="max-w-800 flex flex-col justify-center items-center">

<div className="px-12 pb-3 lg:px-48 xl:px-64 2xl:px-96 font-mono">
  <p> The Long Emergency is led by multi-instrumentalist and songwriter Kevin Long. From 2003 to 2013 Kevin was a mainstay on the Twin Cities independent music scene, performing as a solo artist and with several bands including Boxcutter, Sorry OK, and The Drug Budget. In 2013 Kevin formed The Long Emergency as a vehicle for his songwriting. The band released its debut album Starting Over in May of that year.</p>
</div>
<div className="expand-on-load p-12 ">
        <Image
          src="/images/kev-16-9.jpg"
          alt="Kevin Long performing with The Long Emergency"
          width={545}
          height={308}
        />
      </div>
<div className="px-12 py-3 lg:px-48 xl:px-64 2xl:px-96 font-mono">
  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat ipsam officiis quidem quos sequi ab! Consequatur non neque harum possimus, atque, earum commodi suscipit incidunt veritatis nisi illo, praesentium illum Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum assumenda provident voluptatem deleniti facilis nesciunt ex incidunt, libero in fugit cupiditate, qui eos mollitia alias? Perspiciatis itaque dignissimos minus sunt.</p>
</div>
</section>


  )
}