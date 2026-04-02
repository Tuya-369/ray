import Image from "next/image";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <div className="flex min-h-screen bg-white">
      <div className="flex flex-col justify-center w-full px-8 py-12 md:w-1/2 lg:px-24">
        <div className="max-w-md mx-auto w-full">

          
          

          <button 
            type="button"
            className="w-full flex items-center justify-center gap-3 border border-zinc-200 py-3.5 rounded-xl font-medium hover:bg-zinc-50 transition-all active:scale-[0.98] mb-6"
          >
            <FcGoogle className="text-xl" /> 
            <span>Google-ээр үргэлжлүүлэх</span>
          </button>

          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-zinc-200"></span></div>
            <div className="relative flex justify-center text-xs uppercase"><span className="bg-white px-2 text-zinc-400">Эсвэл и-мэйлээр</span></div>
          </div>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-zinc-700 mb-1">Нэр</label>
              <input type="text" placeholder="Таны нэр" className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-orange-500 outline-none transition-all" />
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-700 mb-1">И-мэйл хаяг</label>
              <input type="email" placeholder="example@mail.com" className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-orange-500 outline-none transition-all" />
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-700 mb-1">Нууц үг</label>
              <input type="password" placeholder="••••••••" className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-orange-500 outline-none transition-all" />
            </div>

            <button className="w-full bg-zinc-900 text-white py-3.5 rounded-xl font-semibold hover:bg-zinc-800 transition-all mt-4">
              Бүртгүүлэх
            </button>
          </form>

          <p className="mt-8 text-center text-zinc-600 text-sm">
            Бүртгэлтэй юу? <Link href="/login" className="text-orange-600 font-bold hover:underline">Нэвтрэх</Link>
          </p>
        </div>
      </div>


<div className="hidden relative md:block md:w-1/2">
  {/* Үндсэн зураг */}
  <Image 
    src="/signup-furniture.jpg" 
    alt="Modern Living Room"
    fill
    priority
    className="object-cover"
  />

  <div className="absolute inset-0 bg-black/25" />


  <div className="absolute top-12 left-12">
    <h2 className="text-xl font-light tracking-[0.6em] text-white/90 uppercase">
      Туяарах
    </h2>
    <div className="h-[1px] w-8 bg-orange-500 mt-2" />
  </div>

  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full px-16">
    <span className="text-orange-500 font-medium tracking-widest text-sm uppercase mb-4 block">
      Interior Design
    </span>
    <h2 className="text-5xl font-bold text-white mb-6 leading-tight">
      Таны мөрөөдлийн <br /> гэр эндээс эхэлнэ
    </h2>
    <p className="text-white/70 text-lg font-light max-w-sm mx-auto">
      Хамгийн чанартай тавилгыг <br /> нэг дороос, нэг товшилтоор.
    </p>
  </div>
</div>
    </div>
  );
}


function FcGoogle({ className }: { className?: string }) {
  return (
    <svg className={className} stroke="currentColor" fill="currentColor" strokeWidth="0" version="1.1" x="0px" y="0px" viewBox="0 0 48 48" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
      <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
      <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
      <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
      <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
    </svg>
  );
}