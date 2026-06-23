"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { useUser } from "@/src/context/UserContext";

export default function SignUpPage() {
  const { setUser } = useUser();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleRegister = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    if (!name || !email || !password) {
      setError("Бүх талбарыг бүрэн оруулна уу.");
      setIsLoading(false);
      return;
    }

    try {
      setUser({ name: name || email.split("@")[0] || "User", email });
      setTimeout(() => setIsLoading(false), 400);
    } catch (err) {
      setError("Бүртгэл хийхэд алдаа гарлаа.");
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f7f1e8] text-[#1e1e1e] flex items-center justify-center p-4 md:p-0 overflow-hidden">
      <div className="relative w-full max-w-7xl min-h-100vh md:min-h-[85vh] bg-white md:rounded-[2.5rem] md:shadow-[0_40px_100px_-40px_rgba(0,0,0,0.15)] flex flex-col md:flex-row overflow-hidden">
        <main className="w-full md:w-1/2 flex items-center justify-center px-6 py-12 md:px-12 lg:px-20 z-10 transition-transform duration-500 ease-in-out">
          <div className="w-full max-w-md">
            <h1 className="text-3xl font-black tracking-tight text-brand sm:text-4xl">
              Бүртгэл үүсгэх
            </h1>
            <p className="mt-2 text-sm text-[#140101]">
              Мөрөөдлийн гэрээ бүтээх аялалаа өнөөдөр эхлүүл.
            </p>

            <div className="mt-6 space-y-4">
              <button
                type="button"
                disabled={isLoading}
                className="flex w-full items-center justify-center gap-3 rounded-2xl border border-[#e4d7ca] bg-[#f8efe4] px-4 py-3 text-sm font-medium text-[#2d2d2d] transition hover:bg-[#efe3d7] disabled:opacity-70"
              >
                <FcGoogle className="text-xl" />
                Google-ээр үргэлжлүүлэх
              </button>

              <div className="relative flex items-center justify-center text-xs uppercase my-4">
                <span className="absolute w-full border-t border-[#e9e2d9]"></span>
                <span className="relative bg-white px-3 tracking-widest text-[#8d8d8d]">
                  Эсвэл имэйлээр
                </span>
              </div>

              {error && (
                <div className="rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-600">
                  {error}
                </div>
              )}

              <form onSubmit={handleRegister} className="space-y-4">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-[#4b4b4b]">
                    Нэр
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Таны нэр"
                    className="w-full rounded-xl border border-[#ded3c7] bg-[#faf3ea] px-4 py-2.5 text-sm text-brand outline-none transition focus:border-[#c17848] focus:ring-2 focus:ring-[#c17848]/20"
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium text-[#4b4b4b]">
                    И-мэйл хаяг
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="example@mail.com"
                    className="w-full rounded-xl border border-[#ded3c7] bg-[#faf3ea] px-4 py-2.5 text-sm text-brand outline-none transition focus:border-[#c17848] focus:ring-2 focus:ring-[#c17848]/20"
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium text-[#4b4b4b]">
                    Нууц үг
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full rounded-xl border border-[#ded3c7] bg-[#faf3ea] px-4 py-2.5 text-sm text-brand outline-none transition focus:border-[#c17848] focus:ring-2 focus:ring-[#c17848]/20"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full rounded-xl bg-[#1f1f1f] py-3 text-sm font-semibold text-white transition hover:bg-[#3e3e3e] disabled:opacity-70 mt-2"
                >
                  {isLoading ? "Уншиж байна..." : "Бүртгүүлэх"}
                </button>
              </form>

              <p className="text-center text-sm text-[#606060] mt-4">
                Бүртгэлтэй юу?{" "}
                <Link
                  href="/login"
                  className="font-bold text-[#c17848] hover:underline"
                >
                  Нэвтрэх
                </Link>
              </p>
            </div>
          </div>
        </main>

        {/* ================= ВИДЕО БА ТЕКСТ БАЙРЛАХ ХЭСЭГ (БАРУУН ТАЛД) ================= */}
        <aside className="hidden md:block md:w-1/2 relative overflow-hidden bg-[#111] z-20 animate-fade-in">
          <video
            src="/signup-furniture.mp4"
            autoPlay
            loop
            muted
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/90 via-[#111111]/40 to-[#111111]/20" />

          <div className="absolute left-12 bottom-16 right-12 text-white">
            <p className="text-xs uppercase tracking-[0.4em] text-[#f8e7d6] font-medium mb-2">
              Interior Design
            </p>
            <h2 className="text-4xl font-bold leading-tight max-w-md">
              Шинэ боломжуудыг нээж, гэрээ гоёорой
            </h2>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/70 font-light">
              Хамгийн чанартай тавилгыг минималист байдлаар нэг дороос хүргэнэ.
              Танд зөвхөн шилдэг нь зохино.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}

function FcGoogle({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#FFC107"
        d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
      />
      <path
        fill="#FF3D00"
        d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
      />
      <path
        fill="#4CAF50"
        d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
      />
      <path
        fill="#1976D2"
        d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
      />
    </svg>
  );
}
