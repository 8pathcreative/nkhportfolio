import React from "react";
import { cn } from "@/lib/utils";

type ContainerSize = "sm" | "md" | "lg" | "xl" | "full";

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
  // Maps to Tailwind's container breakpoints using standardized variables
  const sizeClasses = {
    sm: "max-w-screen-sm",      // 640px
    md: "max-w-screen-md",      // 768px
    lg: "max-w-screen-lg",      // 1024px
    xl: "max-w-screen-xl",      // 1280px
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