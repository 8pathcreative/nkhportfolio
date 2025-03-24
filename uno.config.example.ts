import { defineConfig, presetUno, presetTypography } from 'unocss'
import presetTailwind from '@unocss/preset-tailwind'
import transformerVariantGroup from '@unocss/transformer-variant-group'
import transformerDirectives from '@unocss/transformer-directives'
import { presetAnimations } from 'unocss-preset-animations'

/**
 * Example UnoCSS configuration that can replace Tailwind CSS
 * This is a more performant alternative to Tailwind with the same utility-first approach
 * 
 * To use this configuration:
 * 1. Install required packages:
 *    npm install -D unocss @unocss/preset-tailwind @unocss/transformer-variant-group @unocss/transformer-directives unocss-preset-animations
 * 
 * 2. Rename this file to uno.config.ts
 * 
 * 3. Update your Next.js config to use UnoCSS instead of Tailwind
 */
export default defineConfig({
  presets: [
    // Use Tailwind preset to maintain compatibility with existing code
    presetTailwind({
      // Your existing Tailwind configuration
      darkMode: ["class"],
      theme: {
        screens: {
          'sm': '40rem',     // 640px
          'md': '48rem',     // 768px
          'lg': '64rem',     // 1024px
          'xl': '80rem',     // 1280px
          '2xl': '96rem',    // 1536px
        },
        // Extend to include your custom variables
        extend: {
          // Section configuration
          section: {
            'xs': {
              'spacing': '2rem',   // 32px
              'padding': '1rem',   // 16px
            },
            'sm': {
              'spacing': '3rem',   // 48px
              'padding': '2rem',   // 32px
            },
            'md': {
              'spacing': '4rem',   // 64px
              'padding': '3rem',   // 48px
            },
            'lg': {
              'spacing': '6rem',   // 96px
              'padding': '4rem',   // 64px
            },
            'xl': {
              'spacing': '8rem',   // 128px
              'padding': '5rem',   // 80px
            },
          },
          spacing: {
            '4.5': '1.125rem',  // 18px
            '5.5': '1.375rem',  // 22px
            '7.5': '1.875rem',  // 30px
            '13': '3.25rem',    // 52px
            '15': '3.75rem',    // 60px
            '18': '4.5rem',     // 72px
            '22': '5.5rem',     // 88px
            '26': '6.5rem',     // 104px
            '30': '7.5rem',     // 120px
          },
          // Your other custom theme extensions
        }
      }
    }),
    // Add other presets for additional features
    presetUno(),
    presetTypography(),
    presetAnimations(),
  ],
  
  // Custom shorthand classes (similar to @apply in Tailwind)
  shortcuts: {
    // Section utility classes
    'section-xs': 'py-4 my-8 relative',
    'section-sm': 'py-8 my-12 relative',
    'section-md': 'py-12 my-16 relative',
    'section-lg': 'py-16 my-24 relative',
    'section-xl': 'py-20 my-32 relative',
    
    // Other shorthand classes
    'gradient-text': 'bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent',
    'day-gradient-text': 'bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent',
    'night-gradient-text': 'bg-gradient-to-r from-blue-800 to-blue-900 bg-clip-text text-transparent',
    'divider': 'h-px bg-gradient-to-r from-transparent via-border/70 to-transparent',
  },
  
  // Safelist patterns for dynamically generated classes
  safelist: [
    // Text utilities
    'text-xs', 'text-sm', 'text-base', 'text-lg', 'text-xl', 'text-2xl', 'text-3xl', 'text-4xl', 'text-5xl', 'text-6xl', 'text-7xl', 'text-8xl',
    // Legacy text classes
    'text-1125', 'text-125', 'text-15', 'text-2', 'text-25', 'text-3', 'text-375', 'text-45', 'text-5',
    // Section utility classes
    'section-xs', 'section-sm', 'section-md', 'section-lg', 'section-xl',
  ],
  
  // Add CSS transformers
  transformers: [
    // Support for variant groups like 'hover:(bg-blue-500 text-white)'
    transformerVariantGroup(),
    // Support for @apply and other directives
    transformerDirectives(),
  ],
  
  // Custom rules to handle complex classes
  rules: [
    // Add custom rules here for specific needs
  ],
}) 