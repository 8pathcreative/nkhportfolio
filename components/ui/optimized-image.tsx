import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

// Default blur placeholder for all images
const defaultBlurDataURL = "data:image/webp;base64,UklGRlQAAABXRUJQVlA4WAoAAAAQAAAACQAAAgAAQUxQSCIAAAABHyAQSC0WNm0wnP8zoG0bWXXdvO3/hyIiJgD+4ZNotQAAVlA4IBgAAAAwAQCdASoJAAIAAUAmJaQAAP70vUAA";

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  sizes?: string;
  className?: string;
  containerClassName?: string;
  priority?: boolean;
  quality?: number;
  fill?: boolean;
  blurDataURL?: string;
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
  eager?: boolean;
  showLoadingIndicator?: boolean;
  fallbackSrc?: string;
  aspectRatio?: string;
  hoverEffect?: boolean;
}

/**
 * OptimizedImage component for consistent image handling with loading states
 * 
 * @example
 * <OptimizedImage 
 *   src="/images/hero.jpg" 
 *   alt="Hero image" 
 *   width={1200}
 *   height={600}
 *   priority
 *   showLoadingIndicator
 * />
 */
export function OptimizedImage({
  src,
  alt,
  width,
  height,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  className,
  containerClassName,
  priority = false,
  quality = 85,
  fill = false,
  blurDataURL = defaultBlurDataURL,
  objectFit = "cover",
  eager = false,
  showLoadingIndicator = true,
  fallbackSrc,
  aspectRatio = "aspect-video",
  hoverEffect = false,
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const handleImageError = () => {
    setError(true);
    setIsLoading(false);
  };

  return (
    <div className={cn(
      "relative overflow-hidden",
      !fill && aspectRatio,
      hoverEffect && "portfolio-image-container",
      containerClassName
    )}>
      {/* Loading indicator */}
      {showLoadingIndicator && isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-neutral-900/50 z-10">
          <div className="w-6 h-6 rounded-full border-2 border-neutral-700 border-t-white animate-spin" />
        </div>
      )}
      
      {/* Image */}
      {error && fallbackSrc ? (
        <Image
          src={fallbackSrc}
          alt={alt}
          width={width}
          height={height}
          className={cn(
            "transition-all duration-500",
            objectFit === "cover" && "object-cover",
            objectFit === "contain" && "object-contain",
            objectFit === "fill" && "object-fill",
            objectFit === "none" && "object-none",
            objectFit === "scale-down" && "object-scale-down",
            hoverEffect && "portfolio-image",
            isLoading ? "scale-105 blur-xs" : "scale-100 blur-0",
            className
          )}
          fill={fill}
          sizes={sizes}
          quality={quality}
          priority={priority || eager}
          placeholder="blur-xs"
          blurDataURL={blurDataURL}
          onLoad={handleImageLoad}
        />
      ) : (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={cn(
            "transition-all duration-500",
            objectFit === "cover" && "object-cover",
            objectFit === "contain" && "object-contain",
            objectFit === "fill" && "object-fill",
            objectFit === "none" && "object-none",
            objectFit === "scale-down" && "object-scale-down",
            hoverEffect && "portfolio-image",
            isLoading ? "scale-105 blur-xs" : "scale-100 blur-0",
            className
          )}
          fill={fill}
          sizes={sizes}
          quality={quality}
          priority={priority || eager}
          placeholder="blur-xs"
          blurDataURL={blurDataURL}
          onLoad={handleImageLoad}
          onError={handleImageError}
        />
      )}
    </div>
  );
} 