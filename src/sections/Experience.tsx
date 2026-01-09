import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { resumeData } from "../data/resume";
import { NeoCard } from "../components/NeoCard";

export const Experience: React.FC = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Slide-in animation
      gsap.set(".experience-item", { opacity: 0, x: -50 });

      gsap.to(".experience-item", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        x: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out",
      });

      // Parallax Effect
      const symbols = gsap.utils.toArray<HTMLElement>(".code-symbol");

      if (containerRef.current) {
        const handleMouseMove = (e: MouseEvent) => {
          if (window.matchMedia("(hover: none)").matches) return;

          const { clientX, clientY } = e;
          const xPos = (clientX / window.innerWidth - 0.5) * 2;
          const yPos = (clientY / window.innerHeight - 0.5) * 2;

          symbols.forEach((symbol, i) => {
            const depth = (i + 1) * 20; // Varying depth
            gsap.to(symbol, {
              x: xPos * depth,
              y: yPos * depth,
              duration: 1,
              ease: "power2.out",
            });
          });
        };

        containerRef.current.addEventListener("mousemove", handleMouseMove);

        return () => {
          containerRef.current?.removeEventListener(
            "mousemove",
            handleMouseMove
          );
        };
      }
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} className="py-20 px-6 relative overflow-hidden">
      {/* Parallax Background Symbols */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-10 text-white font-mono font-bold">
        <div className="code-symbol absolute top-10 left-10 text-6xl text-cyan-500/30">
          {"{ }"}
        </div>
        <div className="code-symbol absolute top-1/2 right-20 text-8xl text-purple-500/30">
          {"</>"}
        </div>
        <div className="code-symbol absolute bottom-20 left-1/4 text-6xl text-magenta-500/30">
          {"//"}
        </div>
        <div className="code-symbol absolute top-1/3 left-1/2 text-5xl text-blue-500/30">
          {"=>"}
        </div>
        <div className="code-symbol absolute bottom-10 right-10 text-7xl text-gold-500/30">
          {";"}
        </div>
        <div className="code-symbol absolute top-20 right-1/3 text-4xl text-cyan-300/30">
          {"&&"}
        </div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-16 text-right uppercase">
          <span className="bg-gradient-to-l from-cyan-600/30 to-purple-600/30 backdrop-blur-md border border-white/10 px-8 py-2 rounded-xl shadow-glow inline-block text-white">
            Experience
          </span>
        </h2>

        <div className="space-y-12">
          {resumeData.experience.map((exp, index) => (
            <div
              key={index}
              className="experience-item flex flex-col md:flex-row gap-8 group"
            >
              {/* Timeline Date */}
              <div className="md:w-1/4 pt-2">
                <div className="font-mono font-bold text-sm bg-white/5 border border-white/10 text-cyan-400 inline-block px-4 py-1 rounded-full backdrop-blur-md">
                  {exp.period}
                </div>
              </div>

              {/* Content */}
              <div className="md:w-3/4">
                <NeoCard className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl group-hover:border-cyan-500/40 transition-colors duration-500 shadow-xl">
                  <h3 className="text-2xl font-bold font-display text-white group-hover:text-cyan-400 transition-colors">
                    {exp.role}
                  </h3>
                  <div className="text-lg font-bold mb-6 flex justify-between items-center text-slate-300">
                    <span>{exp.company}</span>
                    <span className="text-[10px] font-mono tracking-widest border border-white/10 px-3 py-1 rounded-full uppercase">
                      {exp.location}
                    </span>
                  </div>

                  <ul className="space-y-3">
                    {exp.highlights.map((h, i) => (
                      <li
                        key={i}
                        className="text-sm text-slate-400 flex gap-3 items-start"
                      >
                        <span className="text-cyan-500 mt-1">▹</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </NeoCard>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
