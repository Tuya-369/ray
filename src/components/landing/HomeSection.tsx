import React from "react";

export default function HomeSection() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/landing.mp4" type="video/mp4" />
      </video>


      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4 text-center">
        <div className="flex flex-col items-center max-w-4xl">

          <h1 className="text-3xl md:text-7xl font-bold tracking-tight mb-6 drop-shadow-2xl">
            Чанартай тавилга, <br /> 
            <span className="font-light italic text-white/90">тухтай орчин</span>
          </h1>
          

        </div>
      </div>
    </section>
  );
}