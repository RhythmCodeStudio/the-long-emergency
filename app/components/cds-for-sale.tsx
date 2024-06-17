// import from next
import Image from "next/image";

export default async function CdsForSale(
  // title: string,
  // artist: string,
  // price: number,
  // imageUrl: string,
  // description: string,
  // year: number
) {
  const availableCds = [
    {
      title: "Starting Over",
      format: "CD",
      artist: "The Long Emergency",
      price: 10,
      imageUrl: "/images/starting-over.jpg",
      description: "The debut album from The Long Emergency on CD",
      year: 2013,
    },

  ];

  return (
    <div className="grid grid-cols-1 gap-4">
      {availableCds.map((cd) => (
        <div className="expand-on-load cd-item font-mono p-16 " key={cd.title}>
          <Image 
            width={960}
            height={952}
            src={cd.imageUrl} 
            alt={cd.title} 
            className="w-96 xl:w-128 h-auto shadow-xl shadow-blue-300/50 border border-2-black"
          />
          <h3>{cd.title}{" "}</h3>
          {/* <p>{cd.artist}</p> */}
          <p>${cd.price}</p>
          <p>{cd.description}</p>
          <p>Released in {cd.year}</p>
        </div>
      ))}
    </div>
  );
};
