import { Search } from "lucide-react";

export default function HomeSection() {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden">
      <img 
        src="/landing.png" 
        alt="Тавилгын зураг" 
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
        
        <h1 className="text-5xl font-bold mb-4">ТУЯАРАХ</h1>
        <p className="text-xl mb-8 text-gray-200">Гэрэлтсэн амьдралын хэв маяг, чанартай тавилга</p>
<div className="w-full max-w-xl flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-full overflow-hidden shadow-2xl">
  <input 
    type="text" 
    placeholder="Тавилга хайх..." 
    className="flex-grow px-6 py-4 bg-transparent text-white placeholder:text-white/70 outline-none"
  />
<Search className="text-white w-6 h-6 mr-4 cursor-pointer hover:text-gray-700" />
</div>

      </div>
    </section>
  );
}