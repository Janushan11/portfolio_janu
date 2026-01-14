# Tailwind Design Tokens Explanation

This document explains each design token in the Tailwind configuration and how to use them.

## Colors

### Primary Colors (`primary-*`)
- **Purpose**: Main brand color for CTAs, links, and primary actions
- **Usage**: 
  - `bg-primary-500` - Primary button backgrounds
  - `text-primary-600` - Primary text/links
  - `border-primary-400` - Primary borders
- **Scale**: 50 (lightest) to 950 (darkest)
- **Base**: `primary-500` (#0ea5e9 - Sky blue)

### Secondary Colors (`secondary-*`)
- **Purpose**: Supporting accent color for variety
- **Usage**: Secondary buttons, accents, highlights
- **Base**: `secondary-500` (#a855f7 - Purple)

### Neutral Colors (`neutral-*`)
- **Purpose**: Text, backgrounds, and borders
- **Usage**:
  - `neutral-50-100`: Light backgrounds
  - `neutral-200-300`: Borders
  - `neutral-400-500`: Muted text
  - `neutral-600-700`: Primary text
  - `neutral-800-900`: Headings
- **Base**: Grayscale palette

### Semantic Colors
- **Success** (`success-500/600`): Success messages, confirmations
- **Error** (`error-500/600`): Error messages, destructive actions
- **Warning** (`warning-500/600`): Warning messages, cautions

## Typography

### Font Families
- **`font-sans`**: Default sans-serif stack (Inter preferred)
- **`font-mono`**: Monospace for code (Fira Code preferred)

### Font Sizes
- **Scale**: `xs` (12px) to `9xl` (128px)
- **Common Usage**:
  - `text-xs`: Captions, labels
  - `text-sm`: Small text
  - `text-base`: Body text (default)
  - `text-lg`: Large body text
  - `text-xl`: Small headings
  - `text-2xl`: Section headings
  - `text-3xl-4xl`: Page titles
  - `text-5xl+`: Hero headings

## Spacing

### Scale
- Based on 4px base unit (0.25rem = 4px)
- **Common Values**:
  - `0-4`: Tight spacing (0-16px)
  - `6-8`: Component spacing (24-32px)
  - `12-16`: Section spacing (48-64px)
  - `20-24`: Large spacing (80-96px)

### Usage
- **Margins**: `m-*`, `mx-*`, `my-*`, `mt-*`, etc.
- **Padding**: `p-*`, `px-*`, `py-*`, `pt-*`, etc.
- **Gaps**: `gap-*` for flex/grid layouts

## Responsive Breakpoints

### Mobile-First Approach
Styles apply to mobile by default, then override for larger screens.

- **`xs`**: 475px - Extra small devices
- **`sm`**: 640px - Small tablets
- **`md`**: 768px - Tablets landscape
- **`lg`**: 1024px - Desktops
- **`xl`**: 1280px - Large desktops
- **`2xl`**: 1536px - Extra large desktops

### Usage
```tsx
<div className="text-sm md:text-base lg:text-lg">
  Responsive text
</div>
```

## Border Radius

- **`rounded-sm`**: 2px - Subtle rounding
- **`rounded`**: 4px - Default (buttons, cards)
- **`rounded-md`**: 6px - Medium rounding
- **`rounded-lg`**: 8px - Large rounding
- **`rounded-xl`**: 12px - Extra large
- **`rounded-2xl`**: 16px - Very large
- **`rounded-full`**: Circles (avatars, pills)

## Box Shadows

Elevation system for depth:
- **`shadow-sm`**: Subtle elevation
- **`shadow`**: Default (cards)
- **`shadow-md`**: Medium elevation
- **`shadow-lg`**: Large elevation (modals)
- **`shadow-xl`**: Extra large elevation
- **`shadow-2xl`**: Maximum elevation

## Best Practices

1. **Use semantic color names**: `primary-500` instead of hex codes
2. **Consistent spacing**: Use the spacing scale, avoid arbitrary values
3. **Mobile-first**: Write mobile styles first, then add breakpoints
4. **Typography scale**: Use predefined sizes for consistency
5. **Color contrast**: Ensure WCAG AA compliance (4.5:1 for text)

## Customization

To customize colors/spacing for your Figma design:
1. Update values in `tailwind.config.ts`
2. Maintain the scale structure (50-950 for colors)
3. Keep naming consistent
4. Document any new tokens

