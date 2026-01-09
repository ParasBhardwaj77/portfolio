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
      // Nebula and planet floating animation
      gsap.to(".experience-nebula", {
        scale: 1.1,
        opacity: 0.4,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".experience-planet", {
        y: "20px",
        x: "10px",
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    },
    { scope: containerRef }
  );

  const stars = Array.from({ length: 30 }).map((_, i) => ({
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: `${Math.random() * 2 + 1}px`,
    delay: `${Math.random() * 5}s`,
    duration: `${Math.random() * 3 + 2}s`,
  }));

  return (
    <section ref={containerRef} className="py-20 px-6 relative overflow-hidden">
      {/* Star Field Background */}
      <div className="absolute inset-0 pointer-events-none">
        {stars.map((star, i) => (
          <div
            key={i}
            className="star star-twinkle"
            style={
              {
                top: star.top,
                left: star.left,
                width: star.size,
                height: star.size,
                "--twinkle-duration": star.duration,
                animationDelay: star.delay,
              } as React.CSSProperties
            }
          ></div>
        ))}
      </div>

      {/* Nebula Haze */}
      <div className="experience-nebula absolute top-1/4 -left-20 w-[500px] h-[500px] rounded-full bg-purple-600/10 blur-[120px] pointer-events-none"></div>
      <div className="experience-nebula absolute bottom-1/4 -right-20 w-[600px] h-[600px] rounded-full bg-cyan-600/10 blur-[150px] pointer-events-none"></div>

      {/* Floating Space Object: Ringed Planet */}
      <div className="experience-planet absolute top-20 right-[5%] w-32 h-32 opacity-20 pointer-events-none hidden md:block">
        <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-500 to-indigo-900 border border-white/10 shadow-glow"></div>
        <div className="absolute top-1/2 left-1/2 w-[180%] h-[30%] border-[2px] border-white/10 rounded-[100%] border-opacity-20 -translate-x-1/2 -translate-y-1/2 rotate-[-20deg]"></div>
      </div>

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
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-10 md:mb-16 md:text-right uppercase">
          <span className="bg-gradient-to-l from-cyan-600/30 to-purple-600/30 backdrop-blur-md border border-white/10 px-6 md:px-8 py-2 rounded-xl shadow-glow inline-block text-white">
            Experience
          </span>
        </h2>

        <div className="space-y-12">
          {resumeData.experience.map((exp, index) => (
            <div
              key={index}
              className="experience-item flex flex-col md:flex-row gap-4 md:gap-8 group"
            >
              {/* Timeline Date */}
              <div className="md:w-1/4 pt-2">
                <div className="font-mono font-bold text-xs md:text-sm bg-white/5 border border-white/10 text-cyan-400 inline-block px-4 py-1 rounded-full backdrop-blur-md">
                  {exp.period}
                </div>
              </div>

              {/* Content */}
              <div className="md:w-3/4">
                <NeoCard className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 md:p-8 rounded-2xl group-hover:border-cyan-500/40 transition-colors duration-500 shadow-xl">
                  <h3 className="text-xl md:text-2xl font-bold font-display text-white group-hover:text-cyan-400 transition-colors">
                    {exp.role}
                  </h3>
                  <div className="text-base md:text-lg font-bold mb-4 md:mb-6 flex flex-col md:flex-row md:justify-between md:items-center text-slate-300 gap-2">
                    <span>{exp.company}</span>
                    <span className="text-[10px] w-fit font-mono tracking-widest border border-white/10 px-3 py-1 rounded-full uppercase">
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
