# Framer Motion Guidelines for Next.js

This document provides guidelines for implementing animations using Framer Motion in Next.js App Router projects with TypeScript.

## Core Principles

### Client Components Only

- **Always** add `"use client"` directive at the top of components using Framer Motion
- Framer Motion relies on browser APIs and React hooks, which are not available in Server Components
- Server Components can import and render Client Components normally

### TypeScript Integration

- Define proper types for component props
- Use `ReactNode` type for children props
- Type variant objects when needed for better IDE support

## Animation Patterns

### 1. Variant-Based Animations (Recommended)

Define animation variants outside the component for better organization and reusability:

```tsx
"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

// Define variants outside component
const fadeUpVariant = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

type FadeUpAnimationProps = {
  children: ReactNode;
};

const FadeUpAnimation = ({ children }: FadeUpAnimationProps) => {
  return (
    <motion.div variants={fadeUpVariant} initial="hidden" animate="visible">
      {children}
    </motion.div>
  );
};

export default FadeUpAnimation;
```

**Usage in Server Component:**

```tsx
// app/page.tsx (Server Component - no "use client" needed)
import FadeUpAnimation from "@/components/FadeUpAnimation";

export default function Home() {
  return (
    <main className="p-16">
      <FadeUpAnimation>
        <h1 className="text-4xl font-semibold">Welcome to the Home Page</h1>
      </FadeUpAnimation>
    </main>
  );
}
```

### 2. Multiple Variants for State-Driven Animations

Use different variants to control animation states based on component state:

```tsx
const boxVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.94 },
  rest: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: 0,
    transition: { duration: 0.6 },
  },
  floating: {
    opacity: 1,
    y: [0, -12, 0],
    rotate: [0, 5, -5, 0],
    transition: { duration: 3, repeat: Infinity },
  },
  hover: {
    scale: 1.08,
    rotate: 0,
    transition: { duration: 0.3 },
  },
};

// In component:
const [isFloating, setIsFloating] = useState(true);

<motion.div
  variants={boxVariants}
  initial="hidden"
  animate={isFloating ? "floating" : "rest"}
  whileHover="hover"
  whileTap={{ scale: 0.95 }}
>
  {/* content */}
</motion.div>;
```

### 3. AnimatePresence for Conditional Rendering

Use `AnimatePresence` to animate components when they mount/unmount:

```tsx
import { AnimatePresence, motion } from "framer-motion";

const detailVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.45 },
  },
  exit: {
    opacity: 0,
    x: 40,
    transition: { duration: 0.3 },
  },
};

// In component:
const [showDetails, setShowDetails] = useState(false);

<AnimatePresence mode="wait">
  {showDetails && (
    <motion.div
      key="detail"
      variants={detailVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* content */}
    </motion.div>
  )}
</AnimatePresence>;
```

**Important `AnimatePresence` Rules:**

- Always provide a unique `key` prop to animated children
- Use `mode="wait"` to wait for exit animation before entering new content
- Ensure the component has `exit` variant defined for unmount animation

### 4. Gesture Animations

Use `whileHover`, `whileTap`, and `whileFocus` for interactive feedback:

```tsx
<motion.button
  type="button"
  whileTap={{ scale: 0.95 }}
  onClick={handleClick}
  className="..."
>
  Click me
</motion.button>
```

### 5. Looping Animations

For continuous animations, use array values and `repeat: Infinity`:

```tsx
<motion.span
  animate={{ y: [0, -10, 0] }}
  transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
>
  ✨
</motion.span>
```

## Best Practices

### Avoid useEffect for Animations

❌ **Don't use `useEffect` with `useAnimationControls`:**

```tsx
// Avoid this pattern
const controls = useAnimationControls();
useEffect(() => {
  if (isPlaying) {
    controls.start({ ... });
  }
}, [isPlaying]);
```

✅ **Use variants with state-driven `animate` prop instead:**

```tsx
// Prefer this pattern
<motion.div
  variants={boxVariants}
  initial="hidden"
  animate={isPlaying ? "floating" : "rest"}
/>
```

### Transition Configuration

- Avoid using string-based easing names (e.g., `"easeOut"`) as they cause TypeScript errors
- Use simple duration-based transitions or built-in easing functions
- For complex easing, use cubic-bezier arrays (if type-compatible)

✅ **Recommended:**

```tsx
transition: { duration: 0.5 }
transition: { duration: 1.2, repeat: Infinity }
```

❌ **Avoid (causes type errors):**

```tsx
transition: { duration: 0.5, ease: "easeOut" }
```

### Component Organization

1. **Define variants outside component** for better readability
2. **Group related variants** together (e.g., all card animations)
3. **Export reusable variants** from separate files if used across components
4. **Type your props** with proper TypeScript interfaces/types

### Path Aliases

Ensure `tsconfig.json` has proper path resolution configured:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

## Complete Example: AnimatedBox Component

See `src/components/AnimatedBox.tsx` for a complete example demonstrating:

- Multiple animation variants (entry, floating, hover)
- State-driven animation switching
- `AnimatePresence` for conditional panel
- Gesture interactions (`whileHover`, `whileTap`)
- Looping animations
- TypeScript props typing

**Key features:**

- Entry animation with `fadeUpVariant`
- Toggleable floating animation on the gradient box
- Hover and tap gestures for interactivity
- Conditional detail panel with enter/exit animations
- No `useEffect` usage—all animation controlled by variants

## Common Pitfalls

1. **Forgetting `"use client"` directive** → Causes hydration errors
2. **Missing `key` prop in `AnimatePresence`** → Exit animations won't work
3. **Using string easing names** → TypeScript type errors
4. **Overusing `useAnimationControls`** → Prefer variant-based approach
5. **Not configuring path aliases** → Import errors with `@/` prefix

## Resources

- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Next.js Client Components](https://nextjs.org/docs/app/building-your-application/rendering/client-components)
- Example: `src/components/AnimatedBox.tsx`
- Example Usage: `src/app/page.tsx`
