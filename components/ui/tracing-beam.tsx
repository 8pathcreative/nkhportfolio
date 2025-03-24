"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function TracingBeam({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const [isHovering, setIsHovering] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setMousePosition({ x, y });
  };

  useEffect(() => {
    // Start with the beam visible without hover for main content
    setIsHovering(true);
  }, []);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(true)} // Keep beam visible even when not hovering
      className={cn("relative", className)}
    >
      <motion.div
        animate={{
          opacity: isHovering ? 1 : 0,
          top: mousePosition.y,
        }}
        transition={{
          opacity: { duration: 0.2 },
          top: { duration: 0.5, ease: "easeOut" },
        }}
        className="absolute left-0 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 blur-3xl opacity-20 -z-10 -translate-x-1/2 -translate-y-1/2 rounded-full"
      />
      <div className="relative w-full">{children}</div>
    </div>
  );
} 