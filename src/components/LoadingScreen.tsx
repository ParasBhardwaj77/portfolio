import React, { useEffect, useState } from "react";

export const LoadingScreen: React.FC<{ onComplete: () => void }> = ({
  onComplete,
}) => {
  const [text, setText] = useState("");
  const fullText = "SUMMONING PARAS'S UNIVERSE...";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) {
        clearInterval(interval);
        setTimeout(onComplete, 1000);
      }
    }, 50);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-[#030014] z-[100] flex flex-col items-center justify-center font-mono px-4">
      <div className="text-cyan-400 text-base md:text-xl lg:text-2xl tracking-[0.15em] md:tracking-[0.2em] mb-4 text-center">
        {text}
        <span className="animate-pulse">_</span>
      </div>
      <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden">
        <div className="h-full bg-cyan-500 animate-[loading_2s_ease-in-out_infinite]"></div>
      </div>
    </div>
  );
};
