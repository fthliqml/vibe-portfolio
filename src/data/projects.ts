import type { Project, ProjectCategory } from "@/types";

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

export const getFeaturedProjects = () =>
  projects.filter((p) => p.featured).slice(0, 3);

export const getProjectById = (id: string) => projects.find((p) => p.id === id);

export const getProjectsByCategory = (category: ProjectCategory) =>
  projects.filter((p) => p.category === category);
