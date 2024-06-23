"use client";

import { useState } from 'react';
import Image from 'next/image';
import { MerchProduct } from '../app/lib/definitions';
import { LuShoppingBag } from 'react-icons/lu';
// import components
import CartModal from './shopping-cart-modal';



export default function MerchForSale({ merch }: { merch: MerchProduct[] }) {
  const [selectedItems, setSelectedItems] = useState<MerchProduct[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addToCart = (product: MerchProduct) => {
    setSelectedItems((prevItems) => [...prevItems, product]);
    localStorage.setItem('selectedItems', JSON.stringify([...selectedItems, product]));
  };

  const removeFromCart = (id: number) => {
    setSelectedItems((prevItems) => prevItems.filter((item) => item.id !== id));
    if (selectedItems.length === 1) {
      setIsModalOpen(false);
    }
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      {isModalOpen && <CartModal items={selectedItems} onClose={toggleModal} onRemove={removeFromCart} />}
      {selectedItems.length > 0 && (
        <div>
          <button id="shopping-bag-button" onClick={toggleModal}>
            <LuShoppingBag className="h-6 w-6" />
          </button>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-12">
        {merch.map((product) => (
          <div className="flex flex-col justify-center expand-on-load font-mono p-6 w-72 " key={product.id}>
            <div className="p-2 text-center">
              <h3>{product.name} </h3>
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
              <p>{product.description}</p>
            </div>
            <div className="p-2 flex justify-center">
              <a 
                rel="noopener noreferrer"
                target="_blank"
                href={product.stripe_url}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Buy
              </a>
            </div>
            <div className="p-2 flex justify-center">
              <button 
                onClick={() => addToCart(product)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
