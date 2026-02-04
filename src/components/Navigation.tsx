import React from "react";
import { ArrowRight, FileText, Mail } from "lucide-react";
import { NeoButton } from "./NeoButton";
import { resumeData } from "../data/resume";

export const Navigation: React.FC = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const openResume = () => {
    window.open(resumeData.contact.resumeUrl, "_blank");
  };

  return (
    <>
      {/* Desktop: Fixed Bottom-Right Horizontal Group */}
      <div className="hidden md:flex fixed bottom-8 right-8 z-50 gap-4 bg-black/20 backdrop-blur-xl p-2 rounded-2xl border border-white/10 shadow-2xl">
        <NeoButton onClick={() => scrollToSection("projects")}>
          SELECTED WORKS
        </NeoButton>
        <NeoButton
          variant="secondary"
          onClick={() => scrollToSection("contact")}
        >
          CONTACT
        </NeoButton>
        <a
          href={resumeData.contact.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-yellow-500/80 hover:bg-yellow-500 text-black border-yellow-400 border font-display font-bold px-6 py-3 transition-all duration-300 rounded-lg backdrop-blur-sm active:scale-95 text-sm md:text-base flex items-center gap-2"
        >
          RESUME <FileText size={20} />
        </a>
      </div>

      {/* Mobile: Bottom Fixed Bar */}
      <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 w-[92%] bg-black/60 backdrop-blur-3xl border border-white/10 z-50 flex justify-around items-center p-3 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        <MobileNavButton
          icon={<ArrowRight />}
          label="WORK"
          onClick={() => scrollToSection("projects")}
        />
        <MobileNavButton
          icon={<Mail />}
          label="CONTACT"
          onClick={() => scrollToSection("contact")}
        />
        <a
          href={resumeData.contact.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 font-bold text-[10px] text-white/70 hover:text-white transition-all group"
        >
          <div className="p-2.5 bg-gradient-to-br from-yellow-500/20 to-amber-600/20 text-yellow-400 rounded-xl border border-yellow-500/20 group-active:scale-90 transition-all shadow-glow">
            <FileText size={20} />
          </div>
          RESUME
        </a>
      </div>
    </>
  );
};

const MobileNavButton: React.FC<{
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
}> = ({ icon, label, onClick }) => (
  <button
    onClick={onClick}
    className="flex flex-col items-center gap-1 font-bold text-[10px] text-white/70 hover:text-white transition-all group"
  >
    <div className="p-2.5 bg-white/5 text-cyan-400 rounded-xl border border-white/10 group-active:scale-90 transition-all shadow-glow-primary">
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      {React.cloneElement(icon as any, { size: 20 })}
    </div>
    {label}
  </button>
);
