"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, ShoppingBag, Star, Heart, ShieldCheck, Truck, RotateCcw } from "lucide-react";
import Link from "next/link";
import { useCart } from "@/src/context/CartContext";

export default function ProductDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const { addToCart } = useCart();


  const [isLiked, setIsLiked] = useState(false); 
  const [userRating, setUserRating] = useState(0); 
  const [hoverRating, setHoverRating] = useState(0); 

  // Жишээ дата
  const product = {
    id: Number(id),
    name: "Sakarias Armchair",
    price: 1740000,
    image: "/chair1.png",
    category: "Сандал",
    description: "Дээд зэргийн тухлаг, загварлаг сандал. Таны гэрт орчин үеийн уур амьсгал оруулна.",
    origin: "Швед (IKEA)",
    baseRating: 4.8,
    reviewsCount: 124
  };

  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Буцах товч */}
        <button onClick={() => router.back()} className="flex items-center gap-2 text-zinc-400 hover:text-black mb-10 transition-all group">
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> 
          <span className="font-medium">Буцах</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          
          <div className="relative bg-zinc-50 rounded-[40px] p-12 aspect-square flex items-center justify-center border border-zinc-100 shadow-sm group">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full max-w-md object-contain transition-transform duration-500 group-hover:scale-105" 
            />
            
           
            <button 
              onClick={() => setIsLiked(!isLiked)}
              className={`absolute top-8 right-8 p-4 rounded-full shadow-lg transition-all active:scale-90 ${
                isLiked ? "bg-red-50 text-red-500" : "bg-white text-zinc-400 hover:text-red-400"
              }`}
            >
              <Heart size={28} fill={isLiked ? "currentColor" : "none"} strokeWidth={isLiked ? 0 : 2} />
            </button>
          </div>

      
          <div className="flex flex-col pt-4">
            <span className="text-zinc-400 font-bold uppercase tracking-[0.2em] text-[10px] mb-4">
              {product.category} / {product.origin}
            </span>
            <h1 className="text-5xl font-black text-zinc-900 mb-6 tracking-tight">{product.name}</h1>
        
            <div className="flex items-center gap-6 mb-8 p-4 bg-zinc-50 rounded-2xl w-fit">
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-zinc-400 uppercase mb-1">Үнэлгээ өгөх</span>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      onClick={() => setUserRating(star)}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      className="transition-transform active:scale-90"
                    >
                      <Star 
                        size={24} 
                        className="transition-colors"
                        fill={(hoverRating || userRating) >= star ? "#fbbf24" : "none"} 
                        color={(hoverRating || userRating) >= star ? "#fbbf24" : "#d4d4d8"}
                      />
                    </button>
                  ))}
                </div>
              </div>
              <div className="h-10 w-[1px] bg-zinc-200" />
              <div className="text-sm font-medium text-zinc-500">
                <span className="text-zinc-900 font-bold">{product.baseRating}</span> / 5.0
                <p className="text-[10px] uppercase tracking-wider">{product.reviewsCount} хүн үзсэн</p>
              </div>
            </div>

            <p className="text-4xl font-black text-zinc-900 mb-8">
              {product.price.toLocaleString()} <span className="text-2xl font-bold">₮</span>
            </p>
            
            <p className="text-zinc-500 leading-relaxed text-lg mb-10 max-w-lg">
              {product.description}
            </p>

           
            <div className="flex gap-4 mb-10">
               <div className="flex items-center gap-3 bg-zinc-50 px-5 py-3 rounded-xl border border-zinc-100">
                  <Truck size={20} className="text-zinc-900" />
                  <span className="text-xs font-bold">Үнэгүй хүргэлт</span>
               </div>
               <div className="flex items-center gap-3 bg-zinc-50 px-5 py-3 rounded-xl border border-zinc-100">
                  <ShieldCheck size={20} className="text-zinc-900" />
                  <span className="text-xs font-bold">Баталгаат хугацаа</span>
               </div>
            </div>

            
            <div className="flex gap-4">
              <button 
                onClick={() => addToCart(product as any)}
                className="flex-1 bg-zinc-900 text-white py-6 rounded-[24px] font-bold text-lg flex items-center justify-center gap-4 hover:bg-zinc-800 transition-all shadow-[0_20px_40px_rgba(0,0,0,0.15)] active:scale-[0.98]"
              >
                <ShoppingBag size={24} />
                Сагсанд нэмэх
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}