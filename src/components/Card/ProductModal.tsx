"use client";

import { Product, useCart } from "@/src/context/CartContext";
import { X, ShoppingBag } from "lucide-react";

interface ModalProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProductModal({ product, isOpen, onClose }: ModalProps) {
  const { addToCart } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
   
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />
      
      <div className="relative bg-white w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row animate-in fade-in zoom-in duration-300">
        <button onClick={onClose} className="absolute right-6 top-6 p-2 hover:bg-zinc-100 rounded-full z-10 transition-colors">
          <X size={24} />
        </button>

        {/* Зураг */}
        <div className="md:w-1/2 bg-zinc-50 p-12 flex items-center justify-center">
          <img src={product.image} alt={product.name} className="max-h-[400px] object-contain" />
        </div>

  
        <div className="md:w-1/2 p-10 flex flex-col justify-center">
          <span className="text-zinc-400 uppercase tracking-[0.2em] text-xs font-bold mb-3">{product.category}</span>
          <h2 className="text-3xl font-bold text-zinc-900 mb-4">{product.name}</h2>
          <p className="text-2xl font-bold text-zinc-900 mb-6">{product.price.toLocaleString()} ₮</p>
          
          <div className="space-y-6 mb-10">
            <p className="text-zinc-500 leading-relaxed">{product.description}</p>
            <div className="flex items-center gap-2 text-sm text-zinc-500">
              <span className="font-bold text-zinc-900">Гарал үүсэл:</span> {product.origin}
            </div>
          </div>

          <button 
            onClick={() => { addToCart(product); onClose(); }}
            className="w-full bg-zinc-900 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-zinc-800 transition-all active:scale-95"
          >
            <ShoppingBag size={20} /> Сагсанд нэмэх
          </button>
        </div>
      </div>
    </div>
  );
}