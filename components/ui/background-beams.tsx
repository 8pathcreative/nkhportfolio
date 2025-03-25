"use client";
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export function BackgroundBeams({
  className,
  ...props
}: {
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>) {
  const beamRef = useRef<HTMLDivElement>(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (!beamRef.current) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!beamRef.current) return;
      const rect = beamRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setCursorPosition({ x, y });
    };

    const handleMouseEnter = () => {
      setIsHovering(true);
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    beamRef.current.addEventListener("mousemove", handleMouseMove);
    beamRef.current.addEventListener("mouseenter", handleMouseEnter);
    beamRef.current.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      if (!beamRef.current) return;
      beamRef.current.removeEventListener("mousemove", handleMouseMove);
      beamRef.current.removeEventListener("mouseenter", handleMouseEnter);
      beamRef.current.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={beamRef}
      className={cn(
        "h-full w-full overflow-hidden bg-black [--spotlight-size:250px] [--spotlight-color:rgba(56,189,248,0.1)]",
        className
      )}
      {...props}
    >
      <div
        className={`
          pointer-events-none absolute inset-0 h-full w-full bg-[radial-gradient(var(--spotlight-size)_circle_at_var(--x)_var(--y),var(--spotlight-color),transparent_100%)] transition-opacity duration-300
          ${isHovering ? "opacity-100" : "opacity-0"}
        `}
        style={
          {
            "--x": `${cursorPosition.x}px`,
            "--y": `${cursorPosition.y}px`,
          } as React.CSSProperties
        }
      ></div>
      
      <div className="absolute inset-0 h-full w-full bg-black [mask-image:radial-gradient(transparent,white)] [background:radial-gradient(circle_at_center_center,rgba(56,189,248,0.2)_5%,rgba(56,189,248,0.05)_25%,transparent_60%)]"></div>

      <div className="absolute h-full w-full">
        <div className="absolute h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-linear-to-r from-blue-500 to-purple-600 opacity-20 blur-3xl filter"></div>
        <div className="absolute right-0 top-1/4 h-[400px] w-[400px] translate-x-1/2 -translate-y-1/2 rounded-full bg-linear-to-l from-blue-400 to-violet-500 opacity-20 blur-3xl filter"></div>
        <div className="absolute bottom-0 left-1/4 h-[300px] w-[300px] -translate-x-1/2 translate-y-1/2 rounded-full bg-linear-to-tr from-pink-500 to-indigo-500 opacity-20 blur-3xl filter"></div>
      </div>
      
      <svg className="absolute inset-0 h-full w-full opacity-[0.02]">
        <filter id="noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch"></feTurbulence>
          <feColorMatrix type="saturate" values="0"></feColorMatrix>
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)"></rect>
      </svg>
    </div>
  );
} 