# Tailwind CSS Conventions

This document outlines our conventions for using Tailwind CSS in this project.

## Class Ordering Convention

To maintain consistency across the project, we follow this class ordering convention:

1. **Layout** - Position, display, width, height, overflow, etc.
   - `relative`, `absolute`, `fixed`, `flex`, `grid`, `w-full`, `h-screen`, etc.

2. **Spacing** - Margin, padding, gap, etc.
   - `m-4`, `p-6`, `gap-2`, etc.

3. **Typography** - Font size, weight, line height, text color, etc.
   - `text-lg`, `font-medium`, `leading-tight`, `text-primary`, etc.

4. **Backgrounds & Borders** - Colors, borders, opacity, etc.
   - `bg-white`, `border`, `border-gray-200`, `rounded-md`, etc.

5. **Effects & Transitions** - Shadows, transitions, transforms, etc.
   - `shadow-md`, `transition-all`, `hover:scale-105`, etc.

6. **Responsive & State Variants** - Media queries and states
   - `md:flex`, `hover:bg-primary`, `dark:text-white`, etc.

Example:

```jsx
<div className="
  // Layout
  relative flex flex-col
  // Spacing
  p-4 my-6 gap-4
  // Typography
  text-lg font-medium text-foreground
  // Backgrounds & Borders
  bg-background border border-neutral-200 rounded-lg
  // Effects & Transitions
  shadow-sm transition-colors
  // Responsive & State Variants
  md:flex-row lg:p-6 hover:border-primary dark:border-neutral-800
">
```

## Component System Usage

### Layout Components

We have established several reusable layout components to maintain consistency:

#### Section

```jsx
<Section id="about" size="lg" withDivider>
  <SectionHeader
    title="About Me"
    subtitle="Learn more about my background and experience"
    align="center"
  />
  <SectionContent>
    {/* Content goes here */}
  </SectionContent>
</Section>
```

Available props:

- `id`: Section ID for navigation (optional)
- `size`: `"sm" | "md" | "lg" | "xl"` (default: "md")
- `container`: Whether to apply container width (default: true)
- `withDivider`: Whether to add a divider at the bottom (default: false)
- `fullWidth`: Allow content to span full width (default: false)
- `className`: Additional classes (optional)

#### Container

```jsx
<Container size="md">
  <p>Content with consistent width constraints</p>
</Container>
```

Available props:

- `size`: `"sm" | "md" | "lg" | "xl" | "full"` (default: "lg")
- `className`: Additional classes (optional)

### Image Components

#### OptimizedImage

```jsx
<OptimizedImage
  src="/images/portfolio/project-1.jpg"
  alt="Project thumbnail"
  width={800}
  height={600}
  priority={index === 0}
  hoverEffect
/>
```

Available props:

- `src`: Image source URL (required)
- `alt`: Image alt text (required)
- `width`: Image width in pixels (optional)
- `height`: Image height in pixels (optional)
- `sizes`: Responsive size attribute (default: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw")
- `className`: Additional classes for the image (optional)
- `containerClassName`: Additional classes for the container (optional)
- `priority`: Whether to prioritize loading (default: false)
- `quality`: Image quality (0-100, default: 85)
- `fill`: Whether to fill container (default: false)
- `blurDataURL`: Custom blur data URL (optional)
- `objectFit`: Object-fit value (default: "cover")
- `eager`: Load image eagerly (default: false)
- `showLoadingIndicator`: Show loading spinner (default: true)
- `fallbackSrc`: Fallback image source (optional)
- `aspectRatio`: Container aspect ratio (default: "aspect-video")
- `hoverEffect`: Apply hover zoom effect (default: false)

### Loading Components

#### LoadingState

```jsx
<LoadingState
  variant="spinner"
  size="md"
  label="Loading projects..."
/>
```

Available props:

- `variant`: `"spinner" | "dots" | "pulse" | "skeleton"` (default: "spinner")
- `size`: `"sm" | "md" | "lg"` (default: "md")
- `label`: Loading text (optional)
- `fullScreen`: Whether to display full screen (default: false)
- `className`: Additional classes (optional)

#### ImageSkeleton

```jsx
<ImageSkeleton aspectRatio="aspect-square" />
```

Available props:

- `aspectRatio`: Aspect ratio of skeleton (default: "aspect-video")
- `className`: Additional classes (optional)

## Utility Functions

We use `cn` from `lib/utils.ts` to conditionally apply classes:

```jsx
import { cn } from "@/lib/utils";

<div className={cn(
  "base-classes",
  condition && "conditional-classes",
  className
)} />
```

## Typography Plugin

We use the `@tailwindcss/typography` plugin for rich text content:

```jsx
<div className="prose prose-lg dark:prose-invert">
  {/* Rich text content */}
</div>
```
