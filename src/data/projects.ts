import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    category: 'Web Application',
    description:
      'A full-featured e-commerce platform with real-time inventory management, payment integration, and admin dashboard.',
    tech: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    image: '/images/project.jpg',
    demoUrl: 'https://example.com',
    repoUrl: 'https://github.com/fthliqml/project-1',
  },
  {
    id: '2',
    title: 'Task Management App',
    category: 'Productivity',
    description:
      'A collaborative task management application with real-time updates, team workspaces, and progress tracking.',
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Tailwind CSS'],
    image: '/images/project.jpg',
    repoUrl: 'https://github.com/fthliqml/project-2',
  },
  {
    id: '3',
    title: 'Weather Dashboard',
    category: 'Web Application',
    description:
      'A beautiful weather dashboard with forecasts, interactive maps, and location-based weather alerts.',
    tech: ['React', 'TypeScript', 'Express', 'REST API', 'Tailwind CSS'],
    image: '/images/project.jpg',
    demoUrl: 'https://example.com',
    repoUrl: 'https://github.com/fthliqml/project-3',
  },
];

// Helper functions
export const getFeaturedProjects = (): Project[] => {
  return projects.slice(0, 3);
};

export const getProjectById = (id: string): Project | undefined => {
  return projects.find((project) => project.id === id);
};

export const getProjectsByCategory = (category: string): Project[] => {
  return projects.filter((project) => project.category === category);
};
