import { Rocket } from "lucide-react";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { resumeData } from "../data/resume";

export const Hero: React.FC = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      // Intro animation
      gsap.from(".hero-text", {
        y: 100,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        ease: "power4.out",
        delay: 0.5,
      });

      // Background shapes animation
      gsap.to(".bg-shape", {
        y: "random(-30, 30)",
        x: "random(-20, 20)",
        rotation: "random(-180, 180)",
        duration: 4,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        stagger: {
          each: 0.5,
          from: "random",
        },
      });

      gsap.to(".bg-shape-rotate", {
        rotation: 360,
        duration: 20,
        ease: "linear",
        repeat: -1,
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="h-screen flex flex-col justify-center px-6 pt-16 relative overflow-hidden"
    >
      {/* Background Star Overlay */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      ></div>

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Planet 1: Vibrant Cyan Giant (Top Left) */}
        <div
          className="bg-shape absolute top-[-5%] left-[-5%] w-64 h-64 rounded-full opacity-60 shadow-[0_0_80px_rgba(0,210,255,0.4)]"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, var(--color-space-primary), #001a2c)",
          }}
        >
          <div className="absolute top-1/2 left-1/2 w-[160%] h-[30%] border-t-[4px] border-cyan-400 rounded-[100%] border-opacity-30 -translate-x-1/2 -translate-y-1/2 rotate-[-25deg]"></div>
        </div>

        {/* Planet 2: Magenta Rogue Planet (Bottom Right) */}
        <div
          className="bg-shape bg-shape-rotate absolute bottom-10 -right-10 w-80 h-80 rounded-full shadow-[0_0_70px_rgba(255,0,193,0.4)] opacity-80"
          style={{
            background:
              "radial-gradient(circle at 40% 40%, var(--color-space-secondary), #1a0014)",
          }}
        >
          <div className="absolute top-1/4 left-1/3 w-12 h-12 bg-white/20 rounded-full border border-white/10 shadow-inner"></div>
          <div className="absolute bottom-1/4 right-1/4 w-20 h-20 bg-black/20 rounded-full border border-white/5 opacity-40"></div>
        </div>

        {/* Rocket Ship (Vibrant Gold Glow) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 animate-bounce duration-[4000ms] z-0 opacity-80">
          <Rocket
            size={120}
            className="text-white drop-shadow-[0_0_30px_rgba(255,215,0,0.6)] transform rotate-45"
          />
          <div className="absolute bottom-4 left-4 w-12 h-24 bg-gradient-to-t from-transparent via-gold-500/40 to-transparent blur-xl -rotate-45 -z-10"></div>
        </div>

        {/* Planet 3: Golden Moon (Top Right) */}
        <div className="bg-shape absolute top-32 right-[15%] w-24 h-24 rounded-full bg-gradient-to-br from-yellow-400 to-amber-700 shadow-[0_0_50px_rgba(255,215,0,0.3)] opacity-70"></div>

        {/* Nebula Haze (Magenta & Purple) */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-transparent to-pink-900/30 mix-blend-screen pointer-events-none"></div>
      </div>

      <div className="max-w-6xl mx-auto w-full z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center -mt-12">
        <div className="order-2 md:order-1">
          <div className="mb-4 inline-block border border-cyan-500/30 bg-cyan-950/20 backdrop-blur-md px-4 py-1 shadow-glow-primary rounded-full hero-text">
            <span className="font-bold font-mono text-cyan-400 text-sm tracking-widest uppercase">
              {resumeData.location}
            </span>
          </div>

          <h1 className="text-4xl md:text-7xl font-display font-black leading-tight mb-4 hero-text tracking-tighter">
            HI, I'M{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-white drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]">
              {resumeData.name.toUpperCase()}
            </span>
          </h1>

          <div className="bg-purple-600/30 backdrop-blur-md text-white inline-block px-5 py-1 text-base md:text-2xl font-bold mb-6 border border-purple-500/30 shadow-glow rounded-full hero-text">
            {resumeData.role}
          </div>

          <p className="max-w-xl text-sm md:text-lg font-medium text-slate-200 leading-relaxed mb-8 hero-text border-l-4 border-cyan-500/50 pl-4 md:pl-6 bg-white/5 py-3 md:py-4 backdrop-blur-sm rounded-r-xl shadow-2xl">
            {resumeData.summary}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 hero-text">
            <a
              href="#projects"
              className="bg-cyan-500 hover:bg-cyan-400 text-black px-8 py-3 font-bold rounded-lg transition-all transform hover:scale-105 shadow-glow-primary text-sm md:text-base text-center"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="border border-white/20 bg-white/5 hover:bg-white/10 text-white px-8 py-3 font-bold rounded-lg transition-all backdrop-blur-md text-sm md:text-base text-center"
            >
              Get In Touch
            </a>
          </div>
        </div>

        <div className="order-1 md:order-2 flex justify-center hero-text">
          <div className="relative group scale-90 md:scale-100">
            {/* Holographic glow effect */}
            <div className="absolute inset-0 bg-cyan-500/20 blur-3xl rounded-full scale-110 group-hover:bg-cyan-500/30 transition-all duration-1000"></div>

            <div className="relative border border-white/20 bg-white/5 p-3 backdrop-blur-2xl rounded-2xl shadow-2xl overflow-hidden">
              <img
                src="/paras.png"
                alt="Paras Bhardwaj"
                className="w-56 h-56 md:w-72 md:h-72 object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 rounded-xl"
              />
              {/* Corner tech accents */}
              <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-cyan-400"></div>
              <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-cyan-400"></div>
              <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-cyan-400"></div>
              <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-cyan-400"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="absolute bottom-0 left-0 w-full bg-neo-black/80 backdrop-blur-md text-neo-white py-2 border-y border-white/10 rotate-[-1deg] scale-105 origin-left z-20">
        <div className="whitespace-nowrap overflow-hidden flex gap-8 animate-marquee font-mono font-bold">
          {[...resumeData.skills.frontend, ...resumeData.skills.backend].map(
            (skill, i) => (
              <span key={i} className="mx-4 text-lg">
                ★ {skill.toUpperCase()}
              </span>
            )
          )}
          {/* Duplicate for seamless loop */}
          {[...resumeData.skills.frontend, ...resumeData.skills.backend].map(
            (skill, i) => (
              <span key={`dup-${i}`} className="mx-4 text-lg">
                ★ {skill.toUpperCase()}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
};
