import React from "react";

interface NeoButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
}

export const NeoButton: React.FC<NeoButtonProps> = ({
  children,
  className,
  variant = "primary",
  ...props
}) => {
  const baseStyles =
    "border border-white/10 font-display font-bold px-6 py-3 transition-all duration-300 rounded-lg backdrop-blur-sm active:scale-95 text-sm md:text-base";
  const variants = {
    primary:
      "bg-cyan-600/20 text-white hover:bg-cyan-600/40 hover:shadow-glow-primary border-cyan-500/30",
    secondary:
      "bg-purple-600/20 text-white hover:bg-purple-600/40 hover:shadow-glow border-purple-500/30",
    outline:
      "bg-transparent text-slate-300 border-white/20 hover:border-white/40 hover:text-white",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className || ""}`}
      {...props}
    >
      {children}
    </button>
  );
};
