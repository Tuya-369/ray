"use client";

import { useState, useEffect } from "react";
import { ShoppingBag, User, X, Search, LogOut } from "lucide-react";
import Link from "next/link";
import { useCart } from "@/src/context/CartContext";
import { useUser } from "@/src/context/UserContext";

export default function Header() {
  const { cart, removeFromCart, totalPrice } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const { user, logout } = useUser();

  // Ухаалаг эффект: Scroll хийж эхлэхэд header-ийн загварыг өөрчлөх үүднээс
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* АНХААРАХ ХЭСЭГ: fixed байрлалтай болгож, top-0 өгсөн.
        Scroll хийх үед padding-ийг 0 болгож дээд ирмэгт яг таг наасан тул хар зай гарахгүй.
      */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 backdrop-blur-md shadow-sm py-3 px-4 md:px-10"
            : "bg-transparent py-6 px-4 md:px-10"
        }`}
      >
        {/* Голын цагаан дугуй контент */}
        <div className="max-w  mx-auto flex items-center justify-between bg-white/90 backdrop-blur-sm border border-white/20 px-6 py-3 md:px-10 md:py-4 rounded-full shadow-lg transition-all duration-300">
          {/* Лого */}
          <div className="text-2xl font-black tracking-widest uppercase text-orange-500">
            Ray
          </div>

          {/* Цэс */}
          <nav className="hidden md:flex items-center gap-10 text-gray-600 text-[13px] uppercase tracking-widest">
            <Link
              href="/"
              className="hover:text-orange-500 transition-all font-medium"
            >
              Furniture
            </Link>
            <Link
              href="/"
              className="hover:text-orange-500 transition-all font-medium"
            >
              Shop
            </Link>
            <Link
              href="/"
              className="hover:text-orange-500 transition-all font-medium"
            >
              About Us
            </Link>
          </nav>

          {/* Баруун талын иконнууд */}
          <div className="flex items-center gap-3 md:gap-6 text-gray-700">
            {/* Хайлт */}
            <div className="flex items-center px-3 py-1.5 rounded-full border border-gray-200 bg-gray-50/50">
              {isSearchOpen && (
                <input
                  autoFocus
                  type="text"
                  placeholder="Хайх..."
                  className="bg-transparent border-none outline-none text-xs w-24 md:w-32 px-1 animate-in fade-in slide-in-from-right-2 text-gray-700 placeholder:text-gray-400"
                  onBlur={() => setIsSearchOpen(false)}
                />
              )}
              <Search
                size={16}
                className="cursor-pointer opacity-70 hover:opacity-100 transition-opacity text-gray-600"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
              />
            </div>

            {/* Хэрэглэгч */}
            <div className="relative">
              {user ? (
                <button
                  onClick={() => setProfileOpen((s) => !s)}
                  className="flex items-center gap-3 rounded-full px-2 py-1 hover:bg-gray-100 transition-colors"
                >
                  <div className="h-8 w-8 flex items-center justify-center rounded-full bg-orange-500 text-white font-bold">
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                  <span className="hidden md:inline text-sm font-medium text-gray-700">
                    {user.name}
                  </span>
                </button>
              ) : (
                <button
                  onClick={() => setProfileOpen((s) => !s)}
                  className="hover:text-orange-500 transition-colors text-gray-600"
                  aria-label="Open profile"
                >
                  <User size={20} />
                </button>
              )}

              {profileOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-100 rounded-lg shadow-lg py-2 z-20">
                  {user ? (
                    <>
                      <button
                        onClick={() => {
                          logout();
                          setProfileOpen(false);
                        }}
                        className="flex items-center gap-2 w-full px-3 py-2 text-sm text-gray-700 hover:bg-gray-50"
                      >
                        <LogOut size={16} /> <span>Logout</span>
                      </button>
                    </>
                  ) : (
                    <>
                      <Link
                        href="/login"
                        onClick={() => setProfileOpen(false)}
                        className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50"
                      >
                        Login
                      </Link>
                      <Link
                        href="/register"
                        onClick={() => setProfileOpen(false)}
                        className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50"
                      >
                        Sign up
                      </Link>
                    </>
                  )}
                </div>
              )}
            </div>

            {/* Сагс икон */}
            <div
              onClick={() => setIsCartOpen(true)}
              className="relative cursor-pointer hover:text-orange-500 transition-colors text-gray-600"
            >
              <ShoppingBag size={20} />
              {cart.length > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-orange-500 text-white text-[9px] font-bold w-4 h-4 flex items-center justify-center rounded-full shadow-sm animate-pulse">
                  {cart.length}
                </span>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Сагсны Sidebar хэсэг */}
      {isCartOpen && (
        <div className="fixed inset-0 z-100 flex justify-end">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setIsCartOpen(false)}
          />
          <div className="relative w-full max-w-sm bg-white h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
            <div className="flex justify-between items-center p-6 border-b border-gray-100">
              <h2 className="text-sm font-bold text-gray-900 uppercase tracking-widest">
                Сагс ({cart.length})
              </h2>
              <button
                onClick={() => setIsCartOpen(false)}
                className="hover:rotate-90 transition-transform duration-300 text-gray-400 hover:text-gray-900"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cart.length === 0 ? (
                <p className="text-gray-400 text-sm text-center py-10 italic">
                  Таны сагс хоосон байна.
                </p>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="flex gap-4 group items-center">
                    <Link
                      href={`/product/${item.id}`}
                      onClick={() => setIsCartOpen(false)}
                      className="flex gap-4 flex-1 items-center"
                    >
                      <div className="w-14 h-14 bg-gray-50 rounded-lg overflow-hidden `flex-shrink-0` border border-gray-100">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-800 text-xs uppercase tracking-tight line-clamp-1">
                          {item.name}
                        </h4>
                        <p className="font-medium text-gray-500 text-xs mt-0.5">
                          {item.price.toLocaleString()} ₮
                        </p>
                      </div>
                    </Link>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-[10px] text-gray-400 hover:text-red-500 font-bold uppercase transition-colors"
                    >
                      Устгах
                    </button>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-6 border-t border-gray-100 space-y-4 bg-gray-50/50">
                <div className="flex justify-between items-center text-sm font-bold text-gray-900">
                  <span className="uppercase tracking-widest opacity-50 text-[10px]">
                    Нийт:
                  </span>
                  <span className="text-lg text-orange-500">
                    {totalPrice.toLocaleString()} ₮
                  </span>
                </div>
                <button className="w-full bg-gray-900 text-white py-4 rounded-full text-xs font-bold uppercase tracking-[0.2em] hover:bg-orange-500 transition-colors shadow-md">
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
