import React, { useEffect, useRef } from "react";

export const StarBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Star properties
    const stars: {
      x: number;
      y: number;
      z: number;
      o: string;
      size: number;
    }[] = [];
    const starCount = 800; // Dense field
    const speed = 0.5;

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        z: Math.random() * width,
        o: "0." + Math.floor(Math.random() * 99),
        size: Math.random() * 2,
      });
    }

    const animate = () => {
      ctx.fillStyle = "#030014"; // Match new Midnight Glow void
      ctx.fillRect(0, 0, width, height);

      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        star.z -= speed;
        if (star.z <= 0) {
          star.z = width;
          star.x = Math.random() * width;
          star.y = Math.random() * height;
        }

        const x = (star.x - width / 2) * (width / star.z);
        const y = (star.y - height / 2) * (width / star.z);
        const sx = x + width / 2;
        const sy = y + height / 2;

        const size = (1 - star.z / width) * star.size * 2;
        const opacity = 1 - star.z / width;

        if (sx > 0 && sx < width && sy > 0 && sy < height) {
          ctx.beginPath();
          // Occasional tinted stars for "impressive" look
          if (i % 50 === 0) {
            ctx.fillStyle = `rgba(0, 210, 255, ${opacity * 0.8})`; // Cyan star
          } else if (i % 70 === 0) {
            ctx.fillStyle = `rgba(255, 0, 193, ${opacity * 0.8})`; // Magenta star
          } else {
            ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
          }
          ctx.arc(sx, sy, size, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      requestAnimationFrame(animate);
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-[-1] pointer-events-none"
    />
  );
};
