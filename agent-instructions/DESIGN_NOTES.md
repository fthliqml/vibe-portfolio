# 📝 Design Implementation Notes

**Generated:** 2025-11-07
**Design Style:** Black/White/Gray Minimalist with Code Aesthetic

---

## 🎯 Project Specifications

### Personal Info:
- **Name:** Muhammad Fatihul Iqmal
- **Title:** Full-Stack Developer
- **Email:** fatihul.dev@example.com (update with real email later)

### Social Links:
- **LinkedIn:** https://linkedin.com/in/fthliqml
- **Instagram:** https://instagram.com/fthliqml
- **Email:** mailto:fatihul.dev@example.com

### Tech Stack (Marquee):
Sesuai reference images, technologies to display:
1. React
2. TypeScript
3. Node.js
4. Express
5. MongoDB
6. PostgreSQL
7. Tailwind CSS
8. Git

---

## 🎨 Design System Summary

### Colors:
```css
/* Backgrounds */
--bg-white: #FFFFFF (main sections)
--bg-black: #000000 (header & footer)
--bg-gray-100: #F3F4F6 (portfolio section)
--bg-code: #282c34 (code cards)

/* Text */
--text-black: #000000 (headings)
--text-gray-900: #111827 (primary text)
--text-gray-500: #6B7280 (secondary text)
--text-gray-300: #D1D5DB (text on dark)
--text-white: #FFFFFF (text on black bg)

/* Syntax Highlighting */
--purple-400: keywords (import, from, return)
--green-300: strings
--blue-400: variables (const)
--yellow-300: functions/components
--orange-400: numbers/parameters
```

### Typography Scale:
```css
/* Hero Titles */
.hero-section-title: text-5xl md:text-6xl font-black tracking-tight
.hero-name: text-6xl font-extrabold tracking-tight
.hero-subtitle: text-4xl font-bold tracking-tight sm:text-5xl

/* Section Titles (CRITICAL PATTERN) */
.section-title: text-sm font-bold uppercase tracking-widest text-gray-500

/* Body Text */
.description: text-lg text-gray-500
.paragraph: text-base text-gray-600
```

### Components Structure:
```
components/
├── Header.tsx          - Sticky black navbar
├── Hero.tsx           - Main hero with 3 columns
├── CodeCard.tsx       - Reusable code snippet card
├── TechStack.tsx      - Marquee animation section
├── Portfolio.tsx      - Projects grid
├── PortfolioCard.tsx  - Individual project card
├── Contact.tsx        - CTA section
├── Footer.tsx         - Black footer
└── Icons.tsx          - All SVG icons
```

---

## 🚫 Critical Constraints

### NO FRAMER MOTION:
- ❌ Do NOT use framer-motion package
- ✅ Use Tailwind CSS transitions only
- ✅ Use CSS @keyframes for marquee animation
- ✅ Use hover: states and transition-* classes

### Animation Guidelines:
```css
/* Hover Transitions */
transition-all duration-300
hover:scale-105
hover:-translate-y-1
hover:shadow-xl

/* Marquee Animation (in index.html or globals.css) */
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
```

---

## 📦 Assets Needed

### Images:
- ✅ `me.png` - Already exists
- ⏳ `project.jpg` - Placeholder for all projects initially

### Icons (SVG in Icons.tsx):
**Required Icons:**
1. LogoIcon - Code bracket `</>` for header
2. LinkedInIcon
3. InstagramIcon
4. MailIcon
5. FooterLogoIcon - Letter "N" or similar

---

## 🎯 Implementation Priority

### Phase 1: Foundation (Tasks 1-4)
1. Setup Icons.tsx with all SVG components
2. Update globals.css with keyframes
3. Create data structure (personal info, projects, tech stack)
4. Setup TypeScript types

### Phase 2: Components (Tasks 5-10)
5. Build Header component (black navbar)
6. Build CodeCard component (with syntax highlighting)
7. Build Hero component (3-column layout)
8. Build TechStack component (marquee)
9. Build PortfolioCard component
10. Build Portfolio section

### Phase 3: Final Sections (Tasks 11-12)
11. Build Contact section
12. Build Footer component

### Phase 4: Integration & Testing (Task 13)
13. Integrate all in page.tsx, test responsiveness

---

## 💡 Key Implementation Details

### CodeCard Component:
```tsx
- Dark background: bg-[#282c34]
- Header with macOS-style dots: red, yellow, green
- Title bar: bg-gray-700
- Syntax highlighting with colored spans
- Monospace font for code
```

### Hero Layout (lg:grid-cols-12):
```
┌─────────┬─────────┬─────────┐
│ Col 1-4 │ Col 5-8 │ Col 9-12│
│ Front   │ Center  │ Back    │
│ End     │ Name +  │ End     │
│ +Code   │ Title   │ +Code   │
└─────────┴─────────┴─────────┘
```

### Marquee Implementation:
- Duplicate content for seamless loop
- Fade gradients at edges (left & right)
- Grayscale logos → color on hover
- Animation: 30s linear infinite

---

## 📝 Data Structure

### projects.ts:
```typescript
{
  id, title, category, description, 
  tech: string[], image, demoUrl, repoUrl
}
```

### techStack.ts:
```typescript
{
  name, icon: SVGComponent, url?: string
}
```

### personalInfo.ts:
```typescript
{
  name, title, email, description,
  social: { linkedin, instagram, email }
}
```

---

**Status:** Ready for task generation
**Next:** Generate 13 tasks for homepage implementation
