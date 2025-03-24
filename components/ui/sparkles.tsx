"use client";
import React, { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface SparklesCoreProps extends React.HTMLAttributes<HTMLDivElement> {
  id?: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  speed?: number;
  particleColor?: string;
  className?: string;
  particleDensity?: number;
}

export function SparklesCore({
  id,
  background = "transparent",
  minSize = 0.4,
  maxSize = 1,
  speed = 1,
  particleColor = "#FFF",
  className,
  particleDensity = 100,
  ...props
}: SparklesCoreProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const context = useRef<CanvasRenderingContext2D | null>(null);
  const particles = useRef<Particle[]>([]);
  const animationRef = useRef<number | null>(null);
  const resizeRef = useRef<number | null>(null);

  class Particle {
    x: number;
    y: number;
    size: number;
    speedX: number;
    speedY: number;
    constructor() {
      this.x = Math.random() * (canvasRef.current?.width || 0);
      this.y = Math.random() * (canvasRef.current?.height || 0);
      this.size = (Math.random() * (maxSize - minSize) + minSize) * 2; // Make sparkles larger
      this.speedX = (Math.random() - 0.5) * speed;
      this.speedY = (Math.random() - 0.5) * speed;
    }
    update() {
      this.x += this.speedX;
      this.y += this.speedY;

      if (this.size > 0.1) this.size -= 0.02 * speed;

      // Reset particle if it goes off-screen or becomes too small
      if (
        this.x < 0 ||
        this.x > (canvasRef.current?.width || 0) ||
        this.y < 0 ||
        this.y > (canvasRef.current?.height || 0) ||
        this.size <= 0.1
      ) {
        this.x = Math.random() * (canvasRef.current?.width || 0);
        this.y = Math.random() * (canvasRef.current?.height || 0);
        this.size = (Math.random() * (maxSize - minSize) + minSize) * 3;
      }
    }
    draw() {
      if (!context.current) return;
      context.current.fillStyle = particleColor;
      context.current.beginPath();
      context.current.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      context.current.fill();
    }
  }

  const initCanvas = () => {
    if (canvasRef.current && canvasContainerRef.current) {
      const ctx = canvasRef.current.getContext("2d");
      if (ctx) context.current = ctx;

      resizeCanvas();
      
      // Create initial particles
      particles.current = [];
      const numberOfParticles = Math.min(particleDensity, 500); // Cap at 500 for performance
      for (let i = 0; i < numberOfParticles; i++) {
        particles.current.push(new Particle());
      }
      
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      animate();
    }
  };

  const resizeCanvas = () => {
    if (canvasRef.current && canvasContainerRef.current) {
      canvasRef.current.width = canvasContainerRef.current.clientWidth;
      canvasRef.current.height = canvasContainerRef.current.clientHeight;
    }
  };

  const animate = () => {
    if (!context.current || !canvasRef.current) return;

    context.current.clearRect(
      0,
      0,
      canvasRef.current.width,
      canvasRef.current.height
    );
    
    particles.current.forEach((particle) => {
      particle.update();
      particle.draw();
    });
    
    animationRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    initCanvas();
    window.addEventListener("resize", () => {
      if (resizeRef.current) clearTimeout(resizeRef.current);
      resizeRef.current = window.setTimeout(resizeCanvas, 100);
    });

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", resizeCanvas);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [particleDensity, speed, maxSize, minSize]);

  return (
    <div
      ref={canvasContainerRef}
      className={cn("relative h-full w-full", className)}
      style={{
        background,
      }}
      {...props}
    >
      <canvas
        ref={canvasRef}
        id={id}
        style={{
          position: "absolute",
          inset: 0,
        }}
      />
      {props.children}
    </div>
  );
} 