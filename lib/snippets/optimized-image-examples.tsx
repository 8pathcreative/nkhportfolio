/**
 * Optimized Image Examples for Next.js with Static Export
 * 
 * This file contains examples of how to optimize images in Next.js
 * when using static export (output: 'export').
 * 
 * Key optimization techniques:
 * 1. Pre-sized images
 * 2. Modern formats (WebP, AVIF)
 * 3. Placeholder blurs
 * 4. Responsive images
 * 5. Priority loading for LCP images
 */

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

/**
 * Example 1: Local image with blur placeholder
 * 
 * - Precomputed blur data URL for instant placeholder
 * - Correct sizing with aspect ratio preservation
 * - Priority loading for above-the-fold images
 */
export function OptimizedLocalImage() {
  return (
    <div className="relative aspect-square overflow-hidden rounded-2xl">
      <Image
        src="/images/example-image.webp" 
        alt="Example description"
        width={500}
        height={500}
        className="object-cover"
        placeholder="blur"
        blurDataURL="data:image/webp;base64,UklGRlQAAABXRUJQVlA4WAoAAAAQAAAACQAAAgAAQUxQSCIAAAABHyAQSC0WNm0wnP8zoG0bWXXdvO3/hyIiJgD+4ZNotQAAVlA4IBgAAAAwAQCdASoJAAIAAUAmJaQAAP70vUAA" 
        priority
      />
    </div>
  );
}

/**
 * Example 2: Remote image with blurhash placeholder and lazy loading
 * 
 * - Custom blur hash placeholder
 * - Proper alt text for accessibility
 * - Lazy loading for below-the-fold images
 */
export function OptimizedRemoteImage() {
  // Blurhash data URL (pre-computed or from your CMS)
  const blurDataUrl = "data:image/webp;base64,UklGRlQAAABXRUJQVlA4WAoAAAAQAAAACQAAAgAAQUxQSCIAAAABHyAQSC0WNm0wnP8zoG0bWXXdvO3/hyIiJgD+4ZNotQAAVlA4IBgAAAAwAQCdASoJAAIAAUAmJaQAAP70vUAA";
  
  return (
    <div className="relative aspect-video overflow-hidden rounded-xl">
      <Image
        src="https://cdn.prod.website-files.com/6593837a237f27f93f2579ec/659de91ca988aa0c3ba35b73_neil-about-image.webp"
        alt="Neil Humphrey profile" 
        width={800}
        height={450}
        className="object-cover w-full"
        placeholder="blur"
        blurDataURL={blurDataUrl}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
}

/**
 * Example 3: Responsive art-directed images
 * 
 * - Different image for mobile vs desktop
 * - Uses client-side detection for static export
 * - CSS transforms for performance
 */
export function ResponsiveArtDirectedImage() {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="relative aspect-video md:aspect-[16/9] overflow-hidden rounded-xl">
      <Image
        src={isMobile 
          ? "/images/project-mobile.webp" 
          : "/images/project-desktop.webp"
        }
        alt="Project screenshot"
        width={isMobile ? 375 : 1200}
        height={isMobile ? 250 : 675}
        className="object-cover w-full transform transition-transform duration-700 hover:scale-105"
        placeholder="blur"
        blurDataURL="data:image/webp;base64,UklGRlQAAABXRUJQVlA4WAoAAAAQAAAACQAAAgAAQUxQSCIAAAABHyAQSC0WNm0wnP8zoG0bWXXdvO3/hyIiJgD+4ZNotQAAVlA4IBgAAAAwAQCdASoJAAIAAUAmJaQAAP70vUAA"
      />
    </div>
  );
}

/**
 * Example 4: Portfolio image with hover effect and loading state
 * 
 * - State-based loading indicator
 * - Transition effects
 * - Background color placeholder
 */
export function PortfolioImage({
  src,
  alt,
  width = 600,
  height = 400,
  aspectRatio = "aspect-video",
  className,
}: {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  aspectRatio?: string;
  className?: string;
}) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={cn(
      "relative overflow-hidden rounded-xl bg-neutral-900/50", 
      aspectRatio,
      className
    )}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-neutral-900/80 z-10">
          <div className="w-8 h-8 rounded-full border-2 border-neutral-700 border-t-white animate-spin" />
        </div>
      )}
      
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        onLoadingComplete={() => setIsLoading(false)}
        className={cn(
          "object-cover w-full h-full transition-all duration-700",
          isLoading ? "scale-110 blur-sm" : "scale-100 blur-0",
          "hover:scale-105"
        )}
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-white text-lg font-medium">{alt}</h3>
        </div>
      </div>
    </div>
  );
}

/**
 * Example 5: Avatar image with fallback
 * 
 * - Uses next/image with fallback mechanism
 * - CSS for perfect circle
 * - Error handling
 */
export function AvatarImage({
  src,
  alt,
  size = 64,
  className,
}: {
  src: string;
  alt: string;
  size?: number;
  className?: string;
}) {
  const [error, setError] = useState(false);
  
  // Generate initials from alt text for fallback
  const initials = alt
    .split(' ')
    .map(part => part[0])
    .join('')
    .toUpperCase()
    .substring(0, 2);
  
  return (
    <div 
      className={cn(
        "relative overflow-hidden rounded-full bg-neutral-800 flex items-center justify-center",
        className
      )}
      style={{ width: size, height: size }}
    >
      {!error ? (
        <Image
          src={src}
          alt={alt}
          width={size}
          height={size}
          className="object-cover"
          onError={() => setError(true)}
        />
      ) : (
        <span className="text-white font-medium text-sm">{initials}</span>
      )}
    </div>
  );
}

/**
 * Example 6: Image gallery with lazy-loaded thumbnails
 */
export function ImageGallery({
  images
}: {
  images: { src: string; alt: string; }[]
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  
  return (
    <div className="space-y-4">
      {/* Main image */}
      <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
        <Image
          src={images[activeIndex].src}
          alt={images[activeIndex].alt}
          width={800}
          height={600}
          className="object-cover w-full"
          priority
        />
      </div>
      
      {/* Thumbnails */}
      <div className="flex space-x-2 overflow-x-auto pb-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={cn(
              "relative w-16 h-16 rounded overflow-hidden flex-shrink-0 transition-opacity",
              activeIndex === index ? "ring-2 ring-blue-500" : "opacity-70 hover:opacity-100"
            )}
          >
            <Image
              src={image.src}
              alt={`Thumbnail for ${image.alt}`}
              width={64}
              height={64}
              className="object-cover"
              loading="lazy"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

// Helper to generate BlurHash data URLs (requires blurhash package)
// Example usage (client-side only):
//
// import { encode } from 'blurhash';
// 
// async function getBlurHashDataUrl(imageUrl) {
//   const img = new Image();
//   img.src = imageUrl;
//   await new Promise(resolve => img.onload = resolve);
//   
//   const canvas = document.createElement('canvas');
//   canvas.width = 32;
//   canvas.height = 32;
//   const ctx = canvas.getContext('2d');
//   ctx.drawImage(img, 0, 0, 32, 32);
//   
//   const imageData = ctx.getImageData(0, 0, 32, 32);
//   const hash = encode(imageData.data, 32, 32, 4, 4);
//   
//   return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(
//     `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
//        <filter id="b" color-interpolation-filters="sRGB">
//          <feGaussianBlur stdDeviation="12" />
//        </filter>
//        <image preserveAspectRatio="none" filter="url(#b)" x="0" y="0" height="100%" width="100%"
//          href="data:image/webp;base64,${hash}" />
//      </svg>`
//   )}`;
// } 