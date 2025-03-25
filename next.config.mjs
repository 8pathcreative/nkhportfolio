let userConfig = undefined
try {
  userConfig = await import('./v0-user-next.config')
} catch (e) {
  // ignore error
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      // Remove the external CDN pattern since we're using local images
    ],
    unoptimized: false,
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
    optimizePackageImports: [
      'lucide-react',
      '@radix-ui/react-toast',
      '@radix-ui/react-dialog',
      'framer-motion'
    ],
    cssChunking: true,
    ppr: false,
  },
  webpack: (config, { dev, isServer }) => {
    // Configure webpack caching properly
    if (dev) {
      // Disable persistent caching in development to prevent corruption
      config.cache = false;
    } else {
      // In production, use memory caching with safer settings
      config.cache = {
        type: 'memory',
        maxGenerations: 1
      };
      
      // Enable module concatenation for production
      config.optimization.concatenateModules = true;
    }
    
    return config;
  },
}

mergeConfig(nextConfig, userConfig)

function mergeConfig(nextConfig, userConfig) {
  if (!userConfig) {
    return
  }

  for (const key in userConfig) {
    if (
      typeof nextConfig[key] === 'object' &&
      !Array.isArray(nextConfig[key])
    ) {
      nextConfig[key] = {
        ...nextConfig[key],
        ...userConfig[key],
      }
    } else {
      nextConfig[key] = userConfig[key]
    }
  }
}

export default nextConfig
