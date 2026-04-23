"use client";

import { useState } from "react";
import { ShoppingBag, User, X, Search } from "lucide-react"; 
import Link from "next/link";
import { useCart } from "@/src/context/CartContext";

export default function Header() {
  const { cart, removeFromCart, totalPrice } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      <header className="absolute top-0 left-0 w-full z-50 px-4 py-6 md:px-10 md:py-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between bg-white/10 backdrop-blur-lg border border-white/10 px-6 py-3 md:px-10 md:py-4 rounded-full shadow-xl">
          
          <Link href="/" className="text-lg md:text-xl font-bold text-white tracking-[0.2em]">
            Tuyarah
          </Link>

        
          <nav className="hidden md:flex items-center gap-10 text-white/70 text-[13px] uppercase tracking-widest">
            <Link href="/" className="hover:text-white transition-all">Furniture</Link>
            <Link href="/" className="hover:text-white transition-all">Shop</Link>
            <Link href="/" className="hover:text-white transition-all">About Us</Link>
          </nav>

       
          <div className="flex items-center gap-3 md:gap-6 text-white">
          
            <div className="flex items-center bg-white/5 rounded-full px-2 py-1 border border-white/5">
              {isSearchOpen && (
                <input 
                  autoFocus
                  type="text" 
                  placeholder="Хайх..." 
                  className="bg-transparent border-none outline-none text-xs w-24 md:w-32 px-2 animate-in fade-in slide-in-from-right-2"
                  onBlur={() => setIsSearchOpen(false)}
                />
              )}
              <Search 
                size={18} 
                className="cursor-pointer opacity-80 hover:opacity-100 transition-opacity m-1" 
                onClick={() => setIsSearchOpen(!isSearchOpen)}
              />
            </div>

         
            <Link href="/login" className="hover:opacity-70 transition-opacity">
              <User size={20} />
            </Link>

         
            <div onClick={() => setIsCartOpen(true)} className="relative cursor-pointer hover:opacity-70 transition-opacity">
              <ShoppingBag size={20} />
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-white text-black text-[9px] font-bold w-3.5 h-3.5 flex items-center justify-center rounded-full">
                  {cart.length}
                </span>
              )}
            </div>
          </div>
        </div>
      </header>

      {isCartOpen && (
        <div className="fixed inset-0 z-[100] flex justify-end">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsCartOpen(false)} />
          <div className="relative w-full max-w-sm bg-white h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-500">
            <div className="flex justify-between items-center p-8 border-b border-zinc-50">
              <h2 className="text-lg font-bold text-zinc-900 uppercase tracking-widest">Сагс ({cart.length})</h2>
              <button onClick={() => setIsCartOpen(false)} className="hover:rotate-90 transition-transform"><X size={20} /></button>
            </div>

            <div className="flex-1 overflow-y-auto p-8 space-y-6">
              {cart.length === 0 ? (
                <p className="text-zinc-400 text-sm text-center py-10 italic">Таны сагс хоосон байна.</p>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="flex gap-4 group">
                    <Link href={`/product/${item.id}`} onClick={() => setIsCartOpen(false)} className="flex gap-4 flex-1">
                      <div className="w-16 h-16 bg-zinc-50 rounded-lg overflow-hidden flex-shrink-0">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-zinc-900 text-xs uppercase tracking-tighter">{item.name}</h4>
                        <p className="font-medium text-zinc-500 text-xs mt-1">{item.price.toLocaleString()} ₮</p>
                      </div>
                    </Link>
                    <button onClick={() => removeFromCart(item.id)} className="text-[10px] text-zinc-300 hover:text-red-500 font-bold uppercase transition-colors">Устгах</button>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-8 border-t border-zinc-50 space-y-4 bg-zinc-50/50">
                <div className="flex justify-between text-sm font-bold text-zinc-900">
                  <span className="uppercase tracking-widest opacity-50 text-[10px]">Нийт:</span>
                  <span className="text-lg">{totalPrice.toLocaleString()} ₮</span>
                </div>
                <button className="w-full bg-zinc-900 text-white py-4 rounded-full text-xs font-bold uppercase tracking-[0.2em] hover:bg-zinc-800 transition-colors shadow-lg">
                  Төлбөр төлөх
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}