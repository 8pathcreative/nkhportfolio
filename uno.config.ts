import { defineConfig, presetUno, presetTypography } from 'unocss'
import { presetWind } from '@unocss/preset-wind'
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
    presetUno(),
    presetWind(),
    presetTypography(),
    presetAnimations(),
  ],
  
  // Custom shorthand classes (similar to @apply in Tailwind)
  shortcuts: {
    'border-magic': 'relative before:absolute before:inset-0 before:rounded-lg before:p-[1px] before:bg-linear-to-r before:from-indigo-500 before:via-purple-500 before:to-pink-500 before:content-empty before:z-0',
    'border-magic-content': 'relative z-10',
  },
  
  // Safelist patterns for dynamically generated classes
  safelist: [
    // Animation classes
    'animate-fade-in', 'animate-fade-out',
    'animate-slide-in-bottom', 'animate-slide-out-bottom',
    'animate-slide-in-top', 'animate-slide-out-top',
  ],
  
  // Add CSS transformers
  transformers: [
    transformerVariantGroup(),
    transformerDirectives(),
  ],
  
  theme: {
    colors: {
      // Your color palette
    },
    spacing: {
      // Extend spacing scale
      '128': '32rem',
      '144': '36rem',
    },
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
  },
  
  // Custom rules to handle complex classes
  rules: [
    // Custom rules
    ['section-xs', { 'padding-top': '1rem', 'padding-bottom': '1rem' }],
    ['section-sm', { 'padding-top': '2rem', 'padding-bottom': '2rem' }],
    ['section-md', { 'padding-top': '3rem', 'padding-bottom': '3rem' }],
    ['section-lg', { 'padding-top': '4rem', 'padding-bottom': '4rem' }],
    ['section-xl', { 'padding-top': '5rem', 'padding-bottom': '5rem' }],
  ],
}) 