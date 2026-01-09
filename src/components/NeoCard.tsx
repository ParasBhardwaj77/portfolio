import React from "react";

interface NeoCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export const NeoCard: React.FC<NeoCardProps> = ({
  children,
  className = "",
  hoverEffect = false,
}) => {
  return (
    <div
      className={`
      border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl p-6 rounded-2xl
      ${
        hoverEffect
          ? "transition-[border-color,box-shadow] duration-300 hover:shadow-glow hover:border-white/20 hover:-translate-y-2"
          : ""
      }
      ${className}
    `}
    >
      {children}
    </div>
  );
};
