"use client";

import { ShoppingBag, Eye } from "lucide-react";


const products = [
  { 
    id: 1, 
    name: "Sakarias Armchair", 
    price: 1740000, 
    category: "Chair", 
    image: "/chair1.png" 
  },
   { 
    id: 1, 
    name: "Sakarias Armchair", 
    price: 1740000, 
    category: "Chair", 
    image: "/chair1.png" 
  },
   { 
    id: 1, 
    name: "Sakarias Armchair", 
    price: 1740000, 
    category: "Chair", 
    image: "/chair1.png" 
  },
   { 
    id: 1, 
    name: "Sakarias Armchair", 
    price: 1740000, 
    category: "Chair", 
    image: "/chair1.png" 
  },

];

export default function FeaturedProducts() {
  return (
    <section className="w-full mx-auto px-4 py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center w-full mb-12">
          <h2 className="text-2xl font-bold text-zinc-900 tracking-[0.1em] uppercase">
            ОНЦЛОХ БҮТЭЭГДЭХҮҮН
          </h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group flex flex-col h-full cursor-pointer">

              <div className="relative aspect-square w-full overflow-hidden bg-white rounded-xl border border-zinc-100 flex items-center justify-center p-6 transition-all duration-500 group-hover:border-zinc-200 group-hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105" 
                />
                
    
               
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/[0.01] transition-all duration-300 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100">
                  <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-zinc-900 shadow-lg hover:bg-zinc-900 hover:text-white transition-all transform translate-y-2 group-hover:translate-y-0">
                    <ShoppingBag size={18} strokeWidth={1.5} />
                  </button>
                  <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-zinc-900 shadow-lg hover:bg-zinc-900 hover:text-white transition-all transform translate-y-2 group-hover:translate-y-0 delay-75">
                    <Eye size={18} strokeWidth={1.5} />
                  </button>
                </div>
              </div>
              <div className="mt-5 flex flex-col items-start px-1">
                <h3 className="text-[14px] font-medium text-zinc-500 mb-1 leading-tight tracking-tight">
                  {product.name}
                </h3>
                <div className="flex items-center gap-1">
                  <span className="text-[17px] font-bold text-zinc-900">
                    {product.price.toLocaleString()}
                  </span>
                  <span className="text-[14px] font-bold text-zinc-900 mt-0.5">₮</span>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}