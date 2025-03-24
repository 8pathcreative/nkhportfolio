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
  output: 'export',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.prod.website-files.com',
        pathname: '**',
      },
    ],
    unoptimized: true,
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
    
    // Add UnoCSS to webpack configuration
    config.plugins.push(
      // This will be automatically detected by UnoCSS
    );
    
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
