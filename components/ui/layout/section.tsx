import React from "react";
import { cn } from "@/lib/utils";

type SectionSize = "sm" | "md" | "lg" | "xl";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  size?: SectionSize;
  container?: boolean;
  withDivider?: boolean;
  fullWidth?: boolean;
  children: React.ReactNode;
  className?: string;
}

/**
 * Section component that maintains consistent spacing and layout.
 * 
 * @example
 * <Section id="about" size="lg" withDivider>
 *   <h2>About</h2>
 *   <p>Content goes here</p>
 * </Section>
 */
export function Section({
  id,
  size = "md",
  container = true,
  withDivider = false,
  fullWidth = false,
  children,
  className,
  ...props
}: SectionProps) {
  // Map size to padding values based on the design system
  const sizeClasses = {
    sm: "py-12 md:py-16 lg:py-24", // var(--section-spacing-sm)
    md: "py-16 md:py-24 lg:py-32", // var(--section-spacing)
    lg: "py-20 md:py-28 lg:py-36", // Large section
    xl: "py-24 md:py-32 lg:py-40", // Extra large section
  };

  return (
    <section
      id={id}
      className={cn(
        "relative px-4",
        sizeClasses[size],
        className
      )}
      {...props}
    >
      <div className={cn(
        container && !fullWidth && "container mx-auto",
        fullWidth && "w-full"
      )}>
        {children}
      </div>
      
      {withDivider && (
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <div className="divider w-full"></div>
        </div>
      )}
    </section>
  );
}

/**
 * SectionHeader component for consistent section headers with proper spacing.
 */
export function SectionHeader({
  title,
  subtitle,
  align = "left",
  className,
  titleClassName,
  subtitleClassName,
}: {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "left" | "center" | "right";
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        {
          "text-left": align === "left",
          "text-center": align === "center",
          "text-right": align === "right",
        },
        className
      )}
    >
      <h2 className={cn(
        "text-3xl md:text-4xl font-medium mb-4 md:mb-6", 
        titleClassName
      )}>
        {title}
      </h2>
      
      {subtitle && (
        <p className={cn(
          "text-xl md:text-2xl text-muted-foreground max-w-3xl",
          {
            "mx-auto": align === "center",
            "ml-auto": align === "right"
          },
          subtitleClassName
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

/**
 * SectionContent component for consistent inner spacing of section content.
 */
export function SectionContent({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("space-y-6", className)}
      {...props}
    >
      {children}
    </div>
  );
} 