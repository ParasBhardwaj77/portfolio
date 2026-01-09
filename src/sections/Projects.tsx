import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { resumeData } from "../data/resume";
import { NeoCard } from "../components/NeoCard";
import { ExternalLink } from "lucide-react";

export const Projects: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Clear any existing animations
      gsap.set(".project-card", { opacity: 0, y: 50 });

      gsap.to(".project-card", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
          // markers: true, // Uncomment to debug
        },
      });

      // Interactive Tilt Effect
      const shapes = gsap.utils.toArray<HTMLElement>(".project-bg-shape");

      containerRef.current?.addEventListener("mousemove", (e: MouseEvent) => {
        if (window.matchMedia("(hover: none)").matches) return;

        const { clientX, clientY } = e;
        const xPos = clientX / window.innerWidth - 0.5;
        const yPos = clientY / window.innerHeight - 0.5;

        shapes.forEach((shape, i) => {
          gsap.to(shape, {
            rotation: xPos * 45 * (i % 2 === 0 ? 1 : -1),
            x: xPos * 50,
            y: yPos * 50,
            duration: 1.5,
            ease: "power2.out",
          });
        });
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="projects"
      className="py-20 md:py-32 px-6 bg-space-void border-y border-white/10 relative overflow-hidden z-20"
    >
      {/* Interactive Background */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="project-bg-shape absolute top-0 -left-20 w-64 h-64 blur-3xl rounded-full bg-cyan-500/10"></div>
        <div className="project-bg-shape absolute bottom-0 -right-20 w-80 h-80 blur-3xl rounded-full bg-purple-500/10"></div>
        <div className="project-bg-shape absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border-dashed border-2 border-white/5 rotate-45"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-16 uppercase text-white inline-block bg-white/5 backdrop-blur-md px-6 py-2 border border-white/10 rounded-lg transform -rotate-1 mt-10 shadow-glow">
          Selected Works
        </h2>

        <div className="project-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resumeData.projects.map((project, index) => (
            <NeoCard
              key={index}
              hoverEffect
              className="project-card flex flex-col h-full bg-white/5 backdrop-blur-xl border border-white/10 relative group p-6 rounded-2xl shadow-2xl hover:border-cyan-500/50 transition-colors duration-500"
            >
              <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-cyan-500 text-black p-2 rounded-full hover:bg-cyan-400 transition-colors shadow-glow-primary"
                >
                  <ExternalLink size={18} />
                </a>
              </div>

              <h3 className="text-2xl font-bold font-display mb-3 text-white group-hover:text-cyan-400 transition-colors">
                {project.name}
              </h3>
              <p className="text-sm font-medium mb-6 text-slate-300 leading-relaxed border-b border-white/10 pb-4">
                {project.description}
              </p>

              <ul className="list-none space-y-2 mb-6 text-sm">
                {project.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2 text-slate-400">
                    <span className="text-cyan-500 mt-1">▹</span>
                    {h}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mt-auto pt-4">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-[10px] font-bold tracking-wider uppercase border border-white/10 px-3 py-1 bg-white/5 text-cyan-300 rounded-full backdrop-blur-md shadow-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </NeoCard>
          ))}
        </div>
      </div>
    </section>
  );
};
