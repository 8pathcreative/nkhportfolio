import React from "react";
import { cn } from "@/lib/utils";

type LoadingStateSize = "sm" | "md" | "lg";
type LoadingStateVariant = "spinner" | "dots" | "pulse" | "skeleton";

interface LoadingStateProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: LoadingStateSize;
  variant?: LoadingStateVariant;
  label?: string;
  fullScreen?: boolean;
  className?: string;
}

/**
 * LoadingState component for consistent loading indicators across the app
 * 
 * @example
 * <LoadingState variant="spinner" size="md" label="Loading..." />
 */
export function LoadingState({
  size = "md",
  variant = "spinner",
  label,
  fullScreen = false,
  className,
  ...props
}: LoadingStateProps) {
  // Map sizes to dimensions
  const sizeClasses = {
    sm: {
      container: "h-6 w-6",
      spinner: "border-2",
      dots: "gap-1",
    },
    md: {
      container: "h-10 w-10",
      spinner: "border-3",
      dots: "gap-1.5",
    },
    lg: {
      container: "h-16 w-16",
      spinner: "border-4",
      dots: "gap-2",
    },
  };

  // Render the appropriate loading indicator based on variant
  const renderLoadingIndicator = () => {
    switch (variant) {
      case "spinner":
        return (
          <div
            className={cn(
              "rounded-full border-t-white border-white/10 animate-spin",
              sizeClasses[size].container,
              sizeClasses[size].spinner
            )}
          />
        );
      case "dots":
        return (
          <div className={cn("flex items-center", sizeClasses[size].dots)}>
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className={cn(
                  "bg-white rounded-full animate-pulse",
                  size === "sm" ? "h-1.5 w-1.5" : size === "md" ? "h-2 w-2" : "h-3 w-3",
                  { "animation-delay-75": i === 0 },
                  { "animation-delay-150": i === 1 },
                  { "animation-delay-300": i === 2 }
                )}
                style={{
                  animationDelay: `${i * 150}ms`,
                }}
              />
            ))}
          </div>
        );
      case "pulse":
        return (
          <div
            className={cn(
              "rounded-full bg-white/80 animate-pulse",
              sizeClasses[size].container
            )}
          />
        );
      case "skeleton":
        return (
          <div className="space-y-2 w-full">
            <div className="h-6 bg-neutral-800 rounded-md animate-pulse" />
            <div className="h-6 bg-neutral-800 rounded-md w-5/6 animate-pulse" />
            <div className="h-6 bg-neutral-800 rounded-md w-4/6 animate-pulse" />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center",
        fullScreen && "fixed inset-0 z-50 bg-background/80 backdrop-blur-xs",
        !fullScreen && "w-full h-full min-h-[100px]",
        className
      )}
      {...props}
    >
      {renderLoadingIndicator()}
      
      {label && (
        <span className="mt-4 text-sm text-muted-foreground">{label}</span>
      )}
    </div>
  );
}

/**
 * ImageSkeleton component for image placeholders
 */
export function ImageSkeleton({
  className,
  aspectRatio = "aspect-video", 
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  aspectRatio?: string;
}) {
  return (
    <div
      className={cn(
        "relative bg-neutral-900/50 rounded-md overflow-hidden animate-pulse",
        aspectRatio,
        className
      )}
      {...props}
    />
  );
} 