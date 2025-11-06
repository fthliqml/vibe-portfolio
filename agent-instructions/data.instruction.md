# 📊 Data & Assets

## 🖼️ Assets Location

### Images:

- **Folder:** `public/images/`
- **Foto profil:** `public/images/me.png` — digunakan di Hero Section (tengah halaman)
- **Project placeholder:** `public/images/project.jpg` — digunakan untuk semua thumbnail project sampai ada gambar asli

### Asset Structure:

```
public/
└── images/
    ├── me.png          # Profile photo
    ├── project.jpg     # Project placeholder/thumbnail
    └── projects/       # (optional) Individual project images
        ├── p1.jpg
        ├── p2.jpg
        └── ...
```

---

## 📝 Data Files Structure

### Recommended Structure:

```
src/
└── data/
    ├── personal.ts     # Personal info & bio
    ├── skills.ts       # Frontend & backend skills
    ├── projects.ts     # All project data
    └── socials.ts      # Social media links
```

---

## 👤 Personal Info

**File:** `src/data/personal.ts`

```typescript
export const personalInfo = {
  name: "M. Fatihul Iqmal",
  title: "Full-Stack Developer",
  tagline: "Building seamless experiences from UI to database",
  bio: "Passionate full-stack developer with expertise in creating elegant user interfaces and robust backend systems. I bridge the gap between design and logic, ensuring every application is both beautiful and performant.",
  email: "fatihul.dev@example.com",
  location: "Indonesia",
  availability: "Open to opportunities",
};
```

---

## 🔗 Social Links

**File:** `src/data/socials.ts`

```typescript
export const socials = {
  github: {
    url: "https://github.com/fthliqml",
    icon: "Github", // from lucide-react
    label: "GitHub",
  },
  linkedin: {
    url: "https://linkedin.com/in/fthliqml",
    icon: "Linkedin",
    label: "LinkedIn",
  },
  twitter: {
    url: "https://twitter.com/fthliqml",
    icon: "Twitter",
    label: "Twitter",
  },
  email: {
    url: "mailto:fatihul.dev@example.com",
    icon: "Mail",
    label: "Email",
  },
};

// Export as array for easier mapping
export const socialLinks = Object.values(socials);
```

---

## 🛠️ Skills Data

**File:** `src/data/skills.ts`

```typescript
export type Skill = {
  name: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "Expert";
  icon: string; // Icon name from lucide-react
};

export const frontendSkills: Skill[] = [
  { name: "React", level: "Advanced", icon: "Code2" },
  { name: "Next.js", level: "Advanced", icon: "Triangle" },
  { name: "TypeScript", level: "Advanced", icon: "FileCode2" },
  { name: "Tailwind CSS", level: "Advanced", icon: "Paintbrush" },
  { name: "Framer Motion", level: "Intermediate", icon: "Sparkles" },
];

export const backendSkills: Skill[] = [
  { name: "Node.js", level: "Advanced", icon: "Server" },
  { name: "Express", level: "Advanced", icon: "Zap" },
  { name: "Prisma", level: "Intermediate", icon: "Database" },
  { name: "PostgreSQL", level: "Intermediate", icon: "Database" },
  { name: "REST API", level: "Advanced", icon: "Plug" },
];

export const allSkills = {
  frontend: frontendSkills,
  backend: backendSkills,
};
```

---

## 💼 Projects Data

**File:** `src/data/projects.ts`

```typescript
export type Project = {
  id: string;
  title: string;
  category: "Front-End" | "Back-End" | "Fullstack";
  role: string;
  description: string; // Short description (for cards)
  longDescription: string; // Full description (for detail page)
  tech: string[];
  image: string;
  demoUrl?: string | null;
  repoUrl: string;
  year: number;
  featured?: boolean; // For homepage "Latest Projects"
};

export const projects: Project[] = [
  {
    id: "p1",
    title: "E-Commerce Dashboard",
    category: "Fullstack",
    role: "Fullstack Developer",
    description:
      "Modern admin dashboard for e-commerce platform with real-time analytics, inventory management, and order tracking.",
    longDescription:
      "Built a comprehensive admin dashboard using Next.js 14 and Prisma ORM. Implemented real-time data updates with WebSocket, integrated Stripe for payment processing, and created custom analytics visualizations. The system handles thousands of products and orders with optimized database queries.",
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS"],
    image: "/images/project.jpg",
    demoUrl: "https://demo.example.com",
    repoUrl: "https://github.com/fthliqml/ecommerce-dashboard",
    year: 2024,
    featured: true,
  },
  {
    id: "p2",
    title: "Portfolio Builder",
    category: "Front-End",
    role: "Front-End Developer",
    description:
      "Drag-and-drop portfolio builder with live preview and customizable themes.",
    longDescription:
      "Created an intuitive portfolio builder that allows users to create professional portfolios without coding. Features include drag-and-drop components, real-time preview, theme customization, and export to static HTML. Built with React DnD and Framer Motion for smooth interactions.",
    tech: ["React", "Framer Motion", "Tailwind CSS", "React DnD"],
    image: "/images/project.jpg",
    demoUrl: "https://demo.example.com",
    repoUrl: "https://github.com/fthliqml/portfolio-builder",
    year: 2024,
    featured: true,
  },
  {
    id: "p3",
    title: "Task Management API",
    category: "Back-End",
    role: "Back-End Developer",
    description:
      "RESTful API for team task management with authentication and real-time notifications.",
    longDescription:
      "Developed a scalable REST API for task management systems. Implemented JWT authentication, role-based access control, and WebSocket notifications. Optimized database queries with proper indexing and caching strategies using Redis. API documentation created with Swagger.",
    tech: ["Node.js", "Express", "Prisma", "PostgreSQL", "Redis"],
    image: "/images/project.jpg",
    demoUrl: null,
    repoUrl: "https://github.com/fthliqml/task-api",
    year: 2023,
    featured: false,
  },
  {
    id: "p4",
    title: "Social Media Analytics",
    category: "Fullstack",
    role: "Fullstack Developer",
    description:
      "Analytics platform for social media metrics with interactive dashboards and automated reports.",
    longDescription:
      "Built a comprehensive analytics platform that aggregates data from multiple social media APIs. Features include custom dashboard creation, scheduled reports, data visualization with Chart.js, and export functionality. Implemented background jobs for data fetching and processing.",
    tech: ["Next.js", "TypeScript", "Prisma", "Chart.js", "Bull Queue"],
    image: "/images/project.jpg",
    demoUrl: "https://demo.example.com",
    repoUrl: "https://github.com/fthliqml/social-analytics",
    year: 2024,
    featured: true,
  },
  {
    id: "p5",
    title: "Component Library",
    category: "Front-End",
    role: "Front-End Developer",
    description:
      "Reusable React component library with TypeScript and comprehensive documentation.",
    longDescription:
      "Created a production-ready component library with 50+ accessible components. Built with TypeScript for type safety, documented with Storybook, and published to npm. Includes theming system, dark mode support, and follows WCAG accessibility guidelines.",
    tech: ["React", "TypeScript", "Storybook", "Tailwind CSS"],
    image: "/images/project.jpg",
    demoUrl: "https://storybook.example.com",
    repoUrl: "https://github.com/fthliqml/ui-components",
    year: 2023,
    featured: false,
  },
  {
    id: "p6",
    title: "Real-Time Chat Platform",
    category: "Fullstack",
    role: "Fullstack Developer",
    description:
      "WebSocket-based chat application with group messaging, file sharing, and typing indicators.",
    longDescription:
      "Developed a real-time chat platform using Socket.io for instant messaging. Features include private and group chats, file uploads with preview, typing indicators, read receipts, and message search. Implemented message encryption and data compression for performance.",
    tech: ["Next.js", "Socket.io", "Prisma", "PostgreSQL", "AWS S3"],
    image: "/images/project.jpg",
    demoUrl: "https://demo.example.com",
    repoUrl: "https://github.com/fthliqml/chat-platform",
    year: 2024,
    featured: false,
  },
];

// Helper functions
export const getFeaturedProjects = () =>
  projects.filter((p) => p.featured).slice(0, 3);

export const getProjectById = (id: string) => projects.find((p) => p.id === id);

export const getProjectsByCategory = (category: Project["category"]) =>
  projects.filter((p) => p.category === category);
```

---

## 🎯 Usage Examples

### In Components:

```typescript
// Import data
import { personalInfo } from "@/data/personal";
import { frontendSkills, backendSkills } from "@/data/skills";
import { projects, getFeaturedProjects } from "@/data/projects";
import { socialLinks } from "@/data/socials";

// Use in component
export default function HomePage() {
  const featured = getFeaturedProjects();

  return (
    <div>
      <h1>{personalInfo.name}</h1>
      <p>{personalInfo.tagline}</p>
      {featured.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
```

---

## 🖼️ Image Optimization

### Next.js Image Component:

```typescript
import Image from "next/image";

// Profile image (fixed size)
<Image
  src="/images/me.png"
  alt="M. Fatihul Iqmal - Full-Stack Developer"
  width={400}
  height={400}
  priority
  className="rounded-full"
/>

// Project thumbnail (responsive)
<Image
  src={project.image}
  alt={`${project.title} preview`}
  fill
  className="object-cover"
/>
```

### Image Guidelines:

1. **Always provide `alt` text** for accessibility
2. Use `priority` for above-the-fold images (hero)
3. Use `fill` with `object-cover` for responsive cards
4. Optimize images before uploading (WebP format recommended)
5. Recommended sizes:
   - Profile photo: 400x400px minimum
   - Project thumbnails: 800x600px minimum
   - Project detail: 1200x800px minimum

---

## 🔤 TypeScript Types

**File:** `src/types/index.ts` (optional centralized types)

```typescript
export type SkillLevel = "Beginner" | "Intermediate" | "Advanced" | "Expert";

export type ProjectCategory = "Front-End" | "Back-End" | "Fullstack";

export interface Skill {
  name: string;
  level: SkillLevel;
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  role: string;
  description: string;
  longDescription: string;
  tech: string[];
  image: string;
  demoUrl?: string | null;
  repoUrl: string;
  year: number;
  featured?: boolean;
}

export interface SocialLink {
  url: string;
  icon: string;
  label: string;
}
```

---

## 📌 Important Notes

1. **All data is placeholder** — replace with real data later
2. **TypeScript types** ensure data consistency across components
3. **Centralized data** makes updates easier (change once, reflect everywhere)
4. **Helper functions** (like `getFeaturedProjects`) simplify data filtering
5. **Image paths** must start with `/` for public folder
6. **Alt text** is crucial for SEO and accessibility
