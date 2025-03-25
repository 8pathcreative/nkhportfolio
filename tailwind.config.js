/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    // Set custom breakpoints using Tailwind CSS 4 syntax with REM values
    screens: {
      'sm': '40rem',    // 640px
      'md': '48rem',    // 768px
      'lg': '64rem',    // 1024px
      'xl': '80rem',    // 1280px
      '2xl': '96rem',   // 1536px
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        lg: '2rem',
      },
      screens: {
        sm: '40rem',    // 640px
        md: '48rem',    // 768px
        lg: '64rem',    // 1024px
        xl: '80rem',    // 1280px
        '2xl': '87.5rem', // 1400px
      },
    },
    extend: {
      // Standardized spacing scale - Tailwind CSS 4 style
      spacing: {
        'section-y-sm': 'var(--section-spacing-sm)',
        'section-y': 'var(--section-spacing)',
        'section-y-lg': 'var(--section-spacing-lg)',
        'content-gap-xs': 'var(--content-gap-xs)',
        'content-gap-sm': 'var(--content-gap-sm)',
        'content-gap': 'var(--content-gap)',
        'content-gap-lg': 'var(--content-gap-lg)',
        'header': 'var(--header-height)',
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} 