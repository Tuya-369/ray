"use client";
import { useState, useEffect, useRef } from "react";

const CATEGORIES = [
  {
    id: 1,
    name: "Phoenix",
    tag: "Орчин үеийн",
    desc: "Зориулалттай, тав тухтай дизайн",
    color: "#C9A99A",
    items: ["Диван", "Ширээ", "Сандал"],
  },
  {
    id: 2,
    name: "Monotech",
    tag: "Минималист",
    desc: "Технологийн нарийн гүйцэтгэл",
    color: "#7B9BAE",
    items: ["Ажлын ширээ", "Тавиур", "Лиж"],
  },
  {
    id: 3,
    name: "Natura",
    tag: "Байгалийн",
    desc: "Мод, чулуу, ган — нэгдсэн хэлбэр",
    color: "#A8B89A",
    items: ["Орны хүрээ", "Шкаф", "Тагт"],
  },
];

function WaveCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number | null>(null);
  const tRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();
    window.addEventListener("resize", resize);

    const colors = [
      [201, 169, 154],
      [123, 155, 174],
      [168, 184, 154],
      [232, 213, 183],
      [180, 160, 200],
    ];

    const draw = () => {
      const W = canvas.offsetWidth;
      const H = canvas.offsetHeight;
      ctx.clearRect(0, 0, W, H);

      const t = tRef.current;
      const slabs = 60;
      const slabW = W / slabs;

      for (let i = 0; i < slabs; i++) {
        const x = i * slabW;
        const wave1 = Math.sin((i / slabs) * Math.PI * 3 + t * 0.6) * 60;
        const wave2 = Math.sin((i / slabs) * Math.PI * 5 + t * 0.4 + 1) * 30;
        const wave3 = Math.cos((i / slabs) * Math.PI * 2 + t * 0.3) * 20;
        const height = 80 + wave1 + wave2 + wave3;
        const centerY =
          H / 2 + Math.sin((i / slabs) * Math.PI * 2 + t * 0.2) * 20;

        const colorIdx = Math.floor(
          ((i / slabs) * colors.length + Math.floor(t * 0.3)) % colors.length,
        );
        const nextIdx = (colorIdx + 1) % colors.length;
        const blend = ((i / slabs) * colors.length + t * 0.3) % 1;

        const r = Math.round(
          colors[colorIdx][0] * (1 - blend) + colors[nextIdx][0] * blend,
        );
        const g = Math.round(
          colors[colorIdx][1] * (1 - blend) + colors[nextIdx][1] * blend,
        );
        const b = Math.round(
          colors[colorIdx][2] * (1 - blend) + colors[nextIdx][2] * blend,
        );

        const tiltOffset = Math.sin((i / slabs) * Math.PI * 4 + t * 0.5) * 15;

        ctx.beginPath();
        ctx.moveTo(x + tiltOffset, centerY - height / 2);
        ctx.lineTo(x + slabW * 0.85 - tiltOffset, centerY - height / 2);
        ctx.lineTo(x + slabW * 0.85 + tiltOffset, centerY + height / 2);
        ctx.lineTo(x - tiltOffset, centerY + height / 2);
        ctx.closePath();

        const grad = ctx.createLinearGradient(
          x,
          centerY - height / 2,
          x,
          centerY + height / 2,
        );
        grad.addColorStop(0, `rgba(${r},${g},${b},0.9)`);
        grad.addColorStop(
          0.5,
          `rgba(${Math.min(r + 30, 255)},${Math.min(g + 30, 255)},${Math.min(b + 30, 255)},0.95)`,
        );
        grad.addColorStop(
          1,
          `rgba(${Math.max(r - 40, 0)},${Math.max(g - 40, 0)},${Math.max(b - 40, 0)},0.7)`,
        );
        ctx.fillStyle = grad;
        ctx.fill();
      }

      tRef.current += 0.015;
      animRef.current = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      if (animRef.current !== null) {
        cancelAnimationFrame(animRef.current);
      }
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: "100%", height: "100%", display: "block" }}
    />
  );
}

export default function FurnitureLanding() {
  const [active, setActive] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      style={{
        fontFamily: "'Helvetica Neue', Arial, sans-serif",
        background: "#FAFAF8",
        minHeight: "100vh",
        color: "#2B2B2B",
      }}
    >
      <section
        style={{
          position: "relative",
          height: "100vh",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div style={{ position: "absolute", inset: 0 }}>
          <WaveCanvas />
          {/* Gradient overlays */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to bottom, rgba(250,250,248,0.2) 0%, rgba(250,250,248,0) 40%, rgba(250,250,248,0) 60%, rgba(250,250,248,0.3) 100%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to right, rgba(250,250,248,0.3) 0%, transparent 40%, transparent 60%, rgba(250,250,248,0.2) 100%)",
            }}
          />
        </div>

        <div
          style={{
            position: "relative",
            zIndex: 10,
            padding: "0 48px",
            maxWidth: 900,
          }}
        >
          <div
            style={{
              fontSize: 11,
              letterSpacing: "0.25em",
              color: "rgba(43,43,43,0.6)",
              marginBottom: 24,
              textTransform: "uppercase",
            }}
          >
            Тавилгын урлаг — 2025
          </div>
          <h1 style={{ margin: 0, lineHeight: 1.05, fontWeight: 300 }}>
            <span
              style={{
                display: "inline",
                fontSize: "clamp(48px, 7vw, 100px)",
                color: "#2B2B2B",
                letterSpacing: "-0.02em",
                marginRight: "0.3em",
              }}
            >
              Чанартай
            </span>
            <span
              style={{
                display: "inline",
                fontSize: "clamp(48px, 7vw, 100px)",
                fontWeight: 700,
                fontStyle: "italic",
                background: "linear-gradient(135deg, #C9A99A, #7B9BAE)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                letterSpacing: "-0.02em",
                marginRight: "0.3em",
              }}
            >
              тавилга
            </span>
            <span
              style={{
                display: "inline",
                fontSize: "clamp(36px, 5vw, 72px)",
                color: "rgba(43,43,43,0.8)",
                fontWeight: 300,
                letterSpacing: "0.04em",
              }}
            >
              тухтай орчин
            </span>
          </h1>
          <div
            style={{
              marginTop: 40,
              display: "flex",
              gap: 16,
              alignItems: "center",
            }}
          >
            <button
              style={{
                background: "#E8E4DC",
                color: "#2B2B2B",
                border: "none",
                padding: "16px 40px",
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: "0.1em",
                cursor: "pointer",
                transition: "all 0.25s",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.background = "#D4A59C";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.background = "#E8E4DC";
              }}
            >
              ХАВТАН ҮЗЭХ
            </button>
            <button
              style={{
                background: "transparent",
                color: "#2B2B2B",
                border: "1px solid rgba(43,43,43,0.2)",
                padding: "16px 40px",
                fontSize: 13,
                letterSpacing: "0.1em",
                cursor: "pointer",
              }}
            >
              ХОЛБОО БАРИХ
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 8,
          }}
        >
          <span
            style={{
              fontSize: 10,
              letterSpacing: "0.2em",
              color: "rgba(43,43,43,0.5)",
            }}
          >
            ДООШ
          </span>
          <div
            style={{
              width: 1,
              height: 48,
              background:
                "linear-gradient(to bottom, rgba(43,43,43,0.3), transparent)",
            }}
          />
        </div>
      </section>
    </div>
  );
}
