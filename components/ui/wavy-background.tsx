"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface WavyBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: "slow" | "fast";
  waveOpacity?: number;
  position?: "front" | "back";
}

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors = ["#38bdf8", "#818cf8", "#c084fc", "#e879f9", "#22d3ee"],
  waveWidth = 50,
  backgroundFill = "white",
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  position = "back",
  ...props
}: WavyBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);
  const gradientsRef = useRef<CanvasGradient[]>([]);
  const phase = useRef<number[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    contextRef.current = context;
    const gradients: CanvasGradient[] = [];

    // Create gradients
    colors.forEach((color) => {
      const gradient = context.createLinearGradient(0, 0, canvas.width, 0);
      gradient.addColorStop(0, color);
      gradient.addColorStop(0.5, "rgba(255,255,255,0)");
      gradient.addColorStop(1, color);
      gradients.push(gradient);
    });

    gradientsRef.current = gradients;
    phase.current = colors.map(() => 0);

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const animate = () => {
      if (!contextRef.current) return;

      contextRef.current.fillStyle = backgroundFill;
      contextRef.current.fillRect(0, 0, canvas.width, canvas.height);

      phase.current = phase.current.map((p) => {
        const newPhase = p + (speed === "fast" ? 0.002 : 0.001);
        return newPhase >= 1 ? 0 : newPhase;
      });

      gradientsRef.current.forEach((gradient, i) => {
        const y = (canvas.height / colors.length) * i;
        const amplitude = 50;
        const frequency = Math.PI * 2 * waveWidth;

        contextRef.current!.beginPath();
        contextRef.current!.moveTo(0, y);

        for (let x = 0; x < canvas.width; x++) {
          const dx = x / canvas.width;
          const yOffset =
            Math.sin(dx * frequency + phase.current[i] * Math.PI * 2) * amplitude;
          contextRef.current!.lineTo(x, y + yOffset);
        }

        contextRef.current!.strokeStyle = gradient;
        contextRef.current!.globalAlpha = waveOpacity;
        contextRef.current!.stroke();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [colors, waveWidth, backgroundFill, speed, waveOpacity]);

  return (
    <div className={cn("relative overflow-hidden", containerClassName)}>
      <canvas
        className={cn("absolute inset-0 z-0", position === "front" ? "z-10" : "z-0")}
        ref={canvasRef}
        style={{
          filter: `blur(${blur}px)`,
        }}
      />
      <div className={cn("relative z-10", className)} {...props}>
        {children}
      </div>
    </div>
  );
}; 