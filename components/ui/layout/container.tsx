import React from "react";
import { cn } from "@/lib/utils";

type ContainerSize = "sm" | "md" | "lg" | "xl" | "2xl" | "full";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: ContainerSize;
  className?: string;
  children: React.ReactNode;
}

/**
 * Container component that provides consistent width constraints
 * 
 * @example
 * <Container size="md">
 *   <p>Content with consistent width</p>
 * </Container>
 */
export function Container({
  size = "lg", 
  className,
  children,
  ...props
}: ContainerProps) {
  // Maps to Tailwind CSS 4 container breakpoints with REM values
  const sizeClasses = {
    sm: "max-w-[40rem]",     // 640px
    md: "max-w-[48rem]",     // 768px
    lg: "max-w-[64rem]",     // 1024px
    xl: "max-w-[80rem]",     // 1280px
    "2xl": "max-w-[96rem]",  // 1536px
    full: "w-full",
  };
  
  return (
    <div
      className={cn(
        "mx-auto px-4 sm:px-6 lg:px-8",
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
} 