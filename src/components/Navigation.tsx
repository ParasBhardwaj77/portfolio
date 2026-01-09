import React from "react";
import { ArrowRight, FileText, Mail } from "lucide-react";
import { NeoButton } from "./NeoButton";

export const Navigation: React.FC = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const openResume = () => {
    window.open("/resume.pdf", "_blank");
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
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-yellow-500/80 hover:bg-yellow-500 text-black border-yellow-400 border font-display font-bold px-6 py-3 transition-all duration-300 rounded-lg backdrop-blur-sm active:scale-95 text-sm md:text-base flex items-center gap-2"
        >
          RESUME <FileText size={20} />
        </a>
      </div>

      {/* Mobile: Bottom Fixed Bar */}
      <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] bg-black/40 backdrop-blur-2xl border border-white/10 z-50 flex justify-around p-4 rounded-3xl shadow-2xl">
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
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 font-bold text-[10px] text-white/70 hover:text-white transition-colors"
        >
          <div className="p-2 bg-white/5 text-cyan-400 rounded-xl border border-white/10 active:scale-95 transition-all">
            <FileText size={18} />
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
    className="flex flex-col items-center gap-1 font-bold text-[10px] text-white/70 hover:text-white transition-colors"
  >
    <div className="p-2 bg-white/5 text-cyan-400 rounded-xl border border-white/10 active:scale-95 transition-all">
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      {React.cloneElement(icon as any, { size: 18 })}
    </div>
    {label}
  </button>
);
