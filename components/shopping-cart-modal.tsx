"use client";
// import from next
import Image from "./image";
import Link from "next/link";
// import { useRouter } from 'next/navigation'

// import definitions
import { MerchProduct } from "../app/lib/definitions";
// import icons
import { FiX } from "react-icons/fi";


export default function CartModal({
  items,
  onClose,
  onRemove,
}: {
  items: MerchProduct[];
  onClose: () => void;
  onRemove: (id: number) => void;
}) {
  // const router = useRouter();
  const cartTotal = items.reduce((acc, item) => acc + item.price, 0);
  
  // const handleCheckout = () => {
  //   router.push('/checkout');

  // };

  return (
    <div className="modal fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 z-50 flex justify-center items-center">
      <div className="modal-content p-4 rounded-lg w-3/4 h-auto">
        <button onClick={onClose} className="absolute top-2 right-2">
          <FiX size={24} />
        </button>
        <h2 className="mx-6 mt-6">Your Cart</h2>
        {items.map((item) => (
          <div
            key={item.id}
            className="font-mono flex flex-col items-center py-4">
            <h3>{item.name}</h3>
            <p>${item.price}</p>
            <div className="w-28 h-auto">
              <Image
                priority
                width={960}
                height={952}
                src={item.image}
                alt={item.name}
                className="h-auto shadow-xl shadow-blue-300/50 border border-2-black"
              />
            </div>
            <div className="p-2 flex justify-center">
              <button onClick={() => onRemove(item.id)}>
                <FiX />
              </button>
            </div>
          </div>
        ))}
        <p className="m-6">Total: ${cartTotal}</p>
        <div className="flex justify-center">
          <Link
            href="/checkout"
            className="mb-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
}
