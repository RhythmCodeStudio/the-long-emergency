// import from next
import Image from "./image";

export default async function CdsForSale() {
// title: string,
// artist: string,
// price: number,
// imageUrl: string,
// description: string,
// year: number
  const availableCds = [
    {
      title: "Starting Over",
      format: "CD",
      artist: "The Long Emergency",
      price: 10,
      image: "/images/starting-over.jpg",
      description: "The debut album from The Long Emergency on CD",
      year: 2013,
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4">
      {availableCds.map((cd) => (
        <div
          className="flex flex-col justify-center expand-on-load font-mono p-6 w-72 md:w-96"
          key={cd.title}>
          <Image
            priority
            width={960}
            height={952}
            src={cd.image}
            alt={cd.title}
            className=" h-auto shadow-xl shadow-blue-300/50 border border-2-black"
          />
          <div className="p-2">
            <h3 className="">{cd.title} </h3>
            {/* <p>{cd.artist}</p> */}

            <p>{cd.description}</p>
            <p>${cd.price}</p>
            {/* <p>Released in {cd.year}</p> */}
          </div>
        </div>
      ))}
    </div>
  );
}
