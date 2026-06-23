"use client";
import { useEffect, useRef, useState } from "react";

export default function About() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen overflow-hidden flex items-center justify-center"
    >
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src="/About.mp4"
      />

      {/* Overlay — dark + subtle warm tint to keep German timber warmth */}
      <div className="absolute inset-0 .bg-gradient-to-b from-black/70 via-black/60 to-black/80" />

      {/* Thin gold accent line — top */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 h-px .bg-gradient-to-r from-transparent via-amber-400 to-transparent transition-all duration-1000 ease-out"
        style={{ width: visible ? "60%" : "0%" }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 py-24 text-center">
        {/* Eyebrow label */}
        <div
          className="inline-flex items-center gap-2 mb-6 transition-all duration-700 ease-out"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(16px)",
            transitionDelay: "100ms",
          }}
        >
          <span className="w-6 h-px bg-amber-400" />
          <span className="text-amber-400 text-xs font-semibold tracking-[0.25em] uppercase">
            Бидний тухай
          </span>
          <span className="w-6 h-px bg-amber-400" />
        </div>

        {/* Headline — word-by-word reveal */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8 tracking-tight">
          {"Германы чанарыг таны гэрт".split(" ").map((word, i) => (
            <span
              key={i}
              className="inline-block mr-[0.25em] transition-all duration-600 ease-out"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(24px)",
                transitionDelay: `${200 + i * 80}ms`,
              }}
            >
              {word}
            </span>
          ))}
        </h2>

        {/* Divider */}
        <div
          className="mx-auto mb-8 h-px .bg-gradient-to-r from-transparent via-amber-400/60 to-transparent transition-all duration-900 ease-out"
          style={{
            width: visible ? "120px" : "0px",
            transitionDelay: "700ms",
          }}
        />

        {/* Body text — paragraph 1 */}
        <p
          className="text-base md:text-lg text-zinc-200 leading-relaxed mb-6 transition-all duration-700 ease-out"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transitionDelay: "800ms",
          }}
        >
          Ray Interior Design нь Германы чанартай хавтан модоор таны мөрөөдлийн
          тавилгыг урлахад зориулагдсан компани юм. Бид стандартын дагуу
          боловсруулсан хавтан модыг ашиглан, минималист хэв маяг, нарийн нандин
          гар урлалын төгс зохицол бүхий тавилгыг таны гэрт хүргэхийг зорьж
          байна.
        </p>

        {/* Body text — paragraph 2 */}
        <p
          className="text-base md:text-lg text-zinc-300 leading-relaxed transition-all duration-700 ease-out"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transitionDelay: "1000ms",
          }}
        >
          Манай бүтээгдэхүүнүүд нь орчин үеийн минималист дизайнтай бөгөөд таны
          гэрийн интерьерийг төгс төгөлдөр болгох болно. Бидний тавилгууд нь
          нарийн нандин гар урлалтай бөгөөд таны гэрт Германы чанарыг мэдрүүлэх
          болно.
        </p>

        {/* CTA link */}
        <div
          className="mt-10 transition-all duration-700 ease-out"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(16px)",
            transitionDelay: "1200ms",
          }}
        >
          <a
            href="#"
            className="group inline-flex items-center gap-2 text-amber-400 text-sm font-semibold tracking-widest uppercase border-b border-amber-400/40 pb-1 hover:border-amber-400 transition-colors duration-300"
          >
            Дэлгэрэнгүй үзэх
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* Thin gold accent line — bottom */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px .bg-gradient-to-r from-transparent via-amber-400 to-transparent transition-all duration-1000 ease-out"
        style={{
          width: visible ? "60%" : "0%",
          transitionDelay: "400ms",
        }}
      />
    </section>
  );
}
