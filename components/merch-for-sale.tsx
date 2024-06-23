"use client";
// import from next
import Image from "next/image";
// import definitions
import { MerchProduct } from "../app/lib/definitions";


export default function MerchForSale({ merch }: { merch: MerchProduct[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-12">
      {merch.map((product) => (
        <div
          className="flex flex-col justify-center expand-on-load font-mono p-6 w-72 "
          key={product.id}>
          <div className="p-2 text-center">
            <h3>{product.name} </h3>
            {/* <p>{product.description}</p> */}
            <p className="">${product.price}</p>
          </div>
          <Image
            priority
            width={960}
            height={952}
            src={product.image}
            alt={product.name}
            className=" h-auto shadow-xl shadow-blue-300/50 border border-2-black"
          />
          <div className="p-2">
            {/* <h3>{product.name} </h3> */}
            <p>{product.description}</p>
            {/* <p>${product.price}</p> */}
          </div>
          <div className="flex justify-center">
            <a 
              rel="noopener noreferrer"
              target="_blank"
              href={product.stripe_url}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Buy
            </a>
          </div>
        </div>
      ))}

      {/* <Elements
        stripe={stripePromise}
        options={{
          mode: "payment",
          amount: convertToSubcurrency(amount),
          currency: "usd",
        }}>
        <CheckoutForm amount={amount} />
      </Elements> */}
    </div>
  );
}
