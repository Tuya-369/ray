"use client";

import { useState } from "react";
import { ShoppingBag, Eye } from "lucide-react";
import Link from "next/link";
import { Product, useCart } from "@/src/context/CartContext";

export default function ProductCard({ product }: { product: Product }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { addToCart } = useCart();

  return (
    <>
      <div className="group flex flex-col h-full bg-white">
        {/* Зургийн хэсэг */}
        <div className="relative aspect-square w-full overflow-hidden  flex items-center justify-center p-8 transition-all duration-500 group-hover:shadow-xl group-hover:shadow-zinc-200/50">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110" 
          />
          
      
          <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
            <button 
              onClick={() => addToCart(product)}
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-zinc-900 shadow-lg hover:bg-zinc-900 hover:text-white transition-all duration-300 active:scale-90"
              title="Сагсанд нэмэх"
            >
              <ShoppingBag size={20} strokeWidth={1.5} />
            </button>

            <Link 
              href={`/product/${product.id}`}
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-zinc-900 shadow-lg hover:bg-zinc-900 hover:text-white transition-all duration-300 active:scale-90"
              title="Дэлгэрэнгүй үзэх"
            >
              <Eye size={20} strokeWidth={1.5} />
            </Link>
          </div>
        </div>

        <div className="mt-5 px-1">
          <p className="text-[11px] text-zinc-400 uppercase tracking-widest font-bold mb-1">
            {product.category}
          </p>
          <h3 className="text-[15px] font-semibold text-zinc-800 group-hover:text-zinc-900 transition-colors truncate">
            {product.name}
          </h3>
          <div className="flex items-center gap-1 mt-1">
            <span className="text-[17px] font-black text-zinc-900">
              {product.price.toLocaleString()}
            </span>
            <span className="text-[14px] font-bold text-zinc-900">₮</span>
          </div>
        </div>
      </div>

   
    </>
  );
}