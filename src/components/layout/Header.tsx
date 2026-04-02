import { ShoppingBag, User } from "lucide-react"; // User icon нэмсэн
import Link from "next/link";

export default function Header() {
  return (
    <header className="absolute top-0 left-0 w-full z-50 px-6 py-8">
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between bg-white/10 backdrop-blur-md border border-white/20 px-8 py-4 rounded-full shadow-2xl">
        

        <Link href="/" className="text-2xl font-bold text-white tracking-widest cursor-pointer">
          
        </Link>


        <nav className="hidden md:flex items-center gap-12 text-white/90 font-medium text-sm lg:text-base">
          <a href="#" className="hover:text-white hover:scale-105 transition-all">Furniture</a>
          <a href="#" className="hover:text-white hover:scale-105 transition-all">Shop</a>
          <a href="#" className="hover:text-white hover:scale-105 transition-all">About Us</a>
          <a href="#" className="hover:text-white hover:scale-105 transition-all">Contact</a>
        </nav>


        <div className="flex items-center gap-6">
          

          <Link href="/login" className="flex items-center gap-2 group cursor-pointer">
            <div className="p-2 rounded-full hover:bg-white/10 transition-all">
              <User className="text-white w-6 h-6 group-hover:scale-110 transition-transform" />
            </div>

            <span className="hidden lg:block text-white/90 text-sm font-medium group-hover:text-white">
              Log In
            </span>
          </Link>

  
          <div className="relative group cursor-pointer p-2 rounded-full hover:bg-white/10 transition-all">
            <ShoppingBag className="text-white w-6 h-6 group-hover:scale-110 transition-transform" />
            <span className="absolute top-1 right-1 bg-orange-500 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full shadow-md">
              0
            </span>
          </div>
          
        </div>
        
      </div>
    </header>
  );
}