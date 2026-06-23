"use client";
import { useState, useEffect, useRef } from "react";

// 1. Арын долгионы анимац (Хэвээрээ үлдсэн)
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
      canvas.width = canvas.offsetWidth * Math.min(window.devicePixelRatio, 2);
      canvas.height =
        canvas.offsetHeight * Math.min(window.devicePixelRatio, 2);
      ctx.scale(
        Math.min(window.devicePixelRatio, 2),
        Math.min(window.devicePixelRatio, 2),
      );
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
      const slabs = W < 640 ? 30 : 60;
      const slabW = W / slabs;

      for (let i = 0; i < slabs; i++) {
        const x = i * slabW;
        const wave1 =
          Math.sin((i / slabs) * Math.PI * 3 + t * 0.6) * (W < 640 ? 30 : 60);
        const wave2 = Math.sin((i / slabs) * Math.PI * 5 + t * 0.4 + 1) * 20;
        const wave3 = Math.cos((i / slabs) * Math.PI * 2 + t * 0.3) * 15;
        const height = (W < 640 ? 50 : 80) + wave1 + wave2 + wave3;
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

        const tiltOffset =
          Math.sin((i / slabs) * Math.PI * 4 + t * 0.5) * (W < 640 ? 6 : 15);

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
      if (animRef.current !== null) cancelAnimationFrame(animRef.current);
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

// 2. Үндсэн Landing page компонент (Зассан хувилбар)
export default function FurnitureLanding() {
  return (
    <div
      style={{
        fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
        background: "#FBFBFA",
        minHeight: "100vh",
        color: "#1A1A1A",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <section
        style={{
          position: "relative",
          // ӨНДРИЙГ ӨӨРЧИЛСӨН ХЭСЭГ: 100vh-ийг устгаж уян хатан болгов
          width: "100%",
          padding: "120px 0 80px 0", // Дээд болон доод талд тодорхой хэмжээний зай өгч богиносгов
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          flex: 1,
        }}
      >
        {/* Арын фонны анимаци ба маск */}
        <div style={{ position: "absolute", inset: 0, zIndex: 1 }}>
          <WaveCanvas />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(90deg, rgba(251,251,250,0.96) 0%, rgba(251,251,250,0.6) 50%, rgba(251,251,250,0.2) 100%)",
            }}
          />
        </div>

        {/* Үндсэн Контент */}
        <div
          style={{
            position: "relative",
            zIndex: 10,
            padding: "0 10%",
            maxWidth: 800,
            width: "100%",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              fontSize: 11,
              letterSpacing: "0.25em",
              color: "#C9A99A",
              marginBottom: 16,
              fontWeight: 600,
              textTransform: "uppercase",
            }}
          >
            Тавилгын урлаг — 2025
          </div>

          <h1
            style={{
              margin: 0,
              fontSize: "clamp(36px, 6vw, 72px)",
              lineHeight: 1.15,
              fontWeight: 700,
              letterSpacing: "-0.03em",
              color: "#1A1A1A",
            }}
          >
            Чанартай{" "}
            <span
              style={{
                fontWeight: 300,
                fontStyle: "italic",
                background: "linear-gradient(135deg, #C9A99A, #7B9BAE)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              тавилга,
            </span>
            <br />
            <span
              style={{
                fontSize: "0.75em",
                fontWeight: 300,
                color: "#666",
                letterSpacing: "-0.01em",
              }}
            >
              тухтай орчин.
            </span>
          </h1>

          <p
            style={{
              marginTop: 20,
              fontSize: "clamp(14px, 1.5vw, 15px)",
              color: "#666666",
              lineHeight: 1.5,
              maxWidth: 460,
              fontWeight: 400,
            }}
          >
            Таны гэрт дахин давтагдашгүй өнгө төрх, тав тухыг бэлэглэх уран
            хийцэт орчин үеийн тавилгууд.
          </p>

          <div
            style={{
              marginTop: 32,
              display: "flex",
              flexWrap: "wrap", // Гар утсан дээр товчлуурууд багтахгүй бол доошоо шилжинэ
              gap: 12,
            }}
          >
            <button
              style={{
                background: "#1A1A1A",
                color: "#FFFFFF",
                border: "none",
                padding: "14px 32px",
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: "0.08em",
                cursor: "pointer",
                transition: "all 0.3s ease",
                minWidth: "140px",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.background = "#C9A99A";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.background = "#1A1A1A";
              }}
            >
              ХАВТАН ҮЗЭХ
            </button>
            <button
              style={{
                background: "transparent",
                color: "#1A1A1A",
                border: "1px solid #1A1A1A",
                padding: "14px 32px",
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: "0.08em",
                cursor: "pointer",
                transition: "all 0.3s ease",
                minWidth: "140px",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.background = "rgba(0,0,0,0.02)";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.background = "transparent";
              }}
            >
              ХОЛБОО БАРИХ
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
