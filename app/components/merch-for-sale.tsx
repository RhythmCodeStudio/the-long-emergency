// import from next
import Image from "next/image";
import { MerchProduct } from "../lib/definitions";

export default function MerchForSale({
  merch,
}: {
  merch: MerchProduct[];
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
      {merch.map((product) => (
        <div
          className="flex flex-col justify-center expand-on-load font-mono p-6 w-72 "
          key={product.id}>
          <Image
            priority
            width={960}
            height={952}
            src={product.image}
            alt={product.name}
            className=" h-auto shadow-xl shadow-blue-300/50 border border-2-black"
          />
          <div className="p-2">
            <h3>{product.name} </h3>
            <p>{product.description}</p>
            <p>${product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
  
