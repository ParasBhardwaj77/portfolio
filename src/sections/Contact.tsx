import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { resumeData } from "../data/resume";
import { Mail, Github, Linkedin, Phone, MessageCircle } from "lucide-react";

export const Contact: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          toggleActions: "play none none none",
        },
      });

      tl.fromTo(
        ".contact-card",
        {
          scale: 0.9,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          stagger: 0.2,
          ease: "back.out(1.7)",
        }
      ).fromTo(
        ".social-icon",
        {
          y: 20,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.4,
          stagger: 0.1,
        },
        "-=0.2"
      );

      // Magnetic Flow Effect
      const floaters = gsap.utils.toArray<HTMLElement>(".contact-floater");

      containerRef.current?.addEventListener("mousemove", (e: MouseEvent) => {
        if (window.matchMedia("(hover: none)").matches) return;

        const { clientX, clientY } = e;
        // Calculate position relative to the container
        const rect = containerRef.current?.getBoundingClientRect();
        if (!rect) return;

        const relX = clientX - rect.left;
        const relY = clientY - rect.top;

        floaters.forEach((floater, i) => {
          const lag = (i + 1) * 0.2;
          gsap.to(floater, {
            x: (relX - rect.width / 2) * 0.1 * lag,
            y: (relY - rect.height / 2) * 0.1 * lag,
            duration: 1,
            ease: "power2.out",
          });
        });
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      id="contact"
      ref={containerRef}
      className="py-20 px-6 bg-space-void text-white relative overflow-hidden"
    >
      {/* Magnetic Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="contact-floater absolute top-10 left-10 text-cyan-500 opacity-10">
          <Mail size={100} />
        </div>
        <div className="contact-floater absolute bottom-20 right-10 text-purple-500 opacity-10">
          <MessageCircle size={120} />
        </div>
        <div className="contact-floater absolute top-1/2 left-2/3 text-magenta-500 opacity-10">
          <div className="w-24 h-24 rounded-full border-4 border-current"></div>
        </div>
      </div>

      <div className="contact-grid max-w-4xl mx-auto text-center relative z-10 mt-6 md:mt-10">
        <h2 className="text-4xl md:text-7xl font-display font-bold mb-10 md:mb-16 text-white drop-shadow-glow">
          LET'S TALK
        </h2>

        <div className="contact-grid grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 mb-10 md:mb-12">
          <a
            href={`mailto:${resumeData.contact.email}`}
            className="contact-card bg-white/5 backdrop-blur-xl border border-white/10 p-6 md:p-8 hover:border-cyan-500/50 transition-all duration-300 group rounded-2xl shadow-2xl"
            onMouseEnter={(e) => {
              gsap.to(e.currentTarget.querySelector("svg"), {
                y: -15,
                repeat: -1,
                yoyo: true,
                duration: 0.4,
                ease: "power1.inOut",
              });
            }}
            onMouseLeave={(e) => {
              gsap.to(e.currentTarget.querySelector("svg"), {
                y: 0,
                duration: 0.5,
                ease: "bounce.out",
              });
            }}
          >
            <Mail
              size={40}
              className="mx-auto mb-4 group-hover:text-cyan-400 transition-all"
            />
            <div className="text-lg md:text-xl font-bold group-hover:text-cyan-400 transition-colors break-words">
              {resumeData.contact.email}
            </div>
            <div className="text-sm opacity-60">Email Me</div>
          </a>

          <a
            href={resumeData.contact.linkedin}
            target="_blank"
            rel="noreferrer"
            className="contact-card bg-white/5 backdrop-blur-xl border border-white/10 p-6 md:p-8 hover:border-purple-500/50 transition-all duration-300 group rounded-2xl shadow-2xl"
            onMouseEnter={(e) => {
              const svg = e.currentTarget.querySelector("svg");
              gsap.to(svg, {
                rotate: 20,
                scale: 1.3,
                filter: "drop-shadow(0 0 15px #7000ff)",
                duration: 0.4,
                ease: "back.out(2)",
              });
              gsap.to(svg, {
                filter: "drop-shadow(0 0 30px #7000ff)",
                repeat: -1,
                yoyo: true,
                duration: 0.8,
              });
            }}
            onMouseLeave={(e) => {
              const svg = e.currentTarget.querySelector("svg");
              gsap.killTweensOf(svg);
              gsap.to(svg, {
                rotate: 0,
                scale: 1,
                filter: "drop-shadow(0 0 0px #7000ff)",
                duration: 0.5,
                ease: "power2.inOut",
              });
            }}
          >
            <Linkedin
              size={40}
              className="mx-auto mb-4 group-hover:text-purple-400 transition-all duration-500"
            />
            <div className="text-lg md:text-xl font-bold group-hover:text-purple-400 transition-colors">
              LinkedIn
            </div>
            <div className="text-sm opacity-60">Connect</div>
          </a>
        </div>

        <div className="flex justify-center gap-8 md:gap-12 mt-8 md:mt-12">
          <a
            href={resumeData.contact.github}
            target="_blank"
            rel="noreferrer"
            className="social-icon group text-white/60 hover:text-cyan-400 transition-all p-3 bg-white/5 rounded-2xl border border-white/10 hover:border-cyan-500/50"
            onMouseEnter={(e) => {
              gsap.to(e.currentTarget.querySelector("svg"), {
                rotate: 15,
                repeat: -1,
                yoyo: true,
                duration: 0.15,
                ease: "power1.inOut",
              });
            }}
            onMouseLeave={(e) => {
              gsap.to(e.currentTarget.querySelector("svg"), {
                rotate: 0,
                duration: 0.3,
                ease: "back.out(1.7)",
              });
            }}
          >
            <Github size={32} className="md:w-[40px] md:h-[40px]" />
          </a>
          <a
            href={`tel:${resumeData.contact.phone}`}
            className="social-icon group text-white/60 hover:text-gold-500 transition-all p-3 bg-white/5 rounded-2xl border border-white/10 hover:border-gold-500/50"
            onMouseEnter={(e) => {
              gsap.to(e.currentTarget.querySelector("svg"), {
                x: 4,
                repeat: -1,
                yoyo: true,
                duration: 0.08,
                ease: "power1.inOut",
              });
            }}
            onMouseLeave={(e) => {
              gsap.to(e.currentTarget.querySelector("svg"), {
                x: 0,
                duration: 0.3,
                ease: "back.out(1.7)",
              });
            }}
          >
            <Phone size={32} className="md:w-[40px] md:h-[40px]" />
          </a>
        </div>

        <footer className="mt-20 md:mt-24 text-center opacity-40 font-mono text-[10px] md:text-sm tracking-widest pb-20 md:pb-0">
          {new Date().getFullYear()} • {resumeData.name.toUpperCase()} • CRAFTED
          WITH PRECISION
        </footer>
      </div>
    </section>
  );
};
