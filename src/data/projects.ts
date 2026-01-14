/**
 * Projects Data
 * 
 * Purpose: Centralized projects portfolio data
 * Why separate: Easy to add/remove projects without component changes
 * Location: data/ - all data files live here
 * 
 * Usage: Import this data in components that display projects
 * Featured projects can be filtered for homepage preview
 * 
 * Projects extracted from GitHub: https://github.com/Janushan11
 */

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  date: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Playwright QA Exam Project',
    description: 'QA examination project built with Playwright for test automation.',
    longDescription: 'A comprehensive test automation project using Playwright framework. Demonstrates expertise in end-to-end testing, test case design, and automation best practices.',
    image: 'https://via.placeholder.com/600x400',
    technologies: ['Playwright', 'JavaScript', 'Test Automation', 'QA'],
    githubUrl: 'https://github.com/Janushan11/playwright-qa-exam--janushan-',
    featured: true,
    date: '2024-01-15',
  },
  {
    id: '2',
    title: 'Scout Project',
    description: 'TypeScript-based project - Jeya\'s Project.',
    longDescription: 'A project built with TypeScript, showcasing modern web development practices and type-safe coding.',
    image: 'https://via.placeholder.com/600x400',
    technologies: ['TypeScript', 'JavaScript'],
    githubUrl: 'https://github.com/Janushan11/Scout',
    featured: true,
    date: '2024-01-10',
  },
  {
    id: '3',
    title: 'Test Project',
    description: 'JavaScript testing and development project.',
    longDescription: 'A JavaScript project focused on testing methodologies and development practices.',
    image: 'https://via.placeholder.com/600x400',
    technologies: ['JavaScript', 'Testing'],
    githubUrl: 'https://github.com/Janushan11/test_project',
    featured: true,
    date: '2023-12-20',
  },
  {
    id: '4',
    title: 'Janu Testing',
    description: 'HTML-based testing project for web development.',
    longDescription: 'A testing project built with HTML, focusing on web testing and quality assurance practices.',
    image: 'https://via.placeholder.com/600x400',
    technologies: ['HTML', 'Testing', 'QA'],
    githubUrl: 'https://github.com/Janushan11/janu_testing',
    featured: false,
    date: '2023-11-15',
  },
  {
    id: '5',
    title: 'Janu Project',
    description: 'Personal project repository showcasing development work.',
    longDescription: 'A collection of personal projects and experiments in software development and testing.',
    image: 'https://via.placeholder.com/600x400',
    technologies: ['JavaScript', 'Web Development'],
    githubUrl: 'https://github.com/Janushan11/januproj',
    featured: false,
    date: '2023-10-05',
  },
  {
    id: '6',
    title: 'Ragavan Project',
    description: 'Development project repository.',
    longDescription: 'A project repository demonstrating various development and testing skills.',
    image: 'https://via.placeholder.com/600x400',
    technologies: ['Web Development'],
    githubUrl: 'https://github.com/Janushan11/ragavan',
    featured: false,
    date: '2023-09-18',
  },
];

// Helper function to get featured projects
export const getFeaturedProjects = (): Project[] => {
  return projects.filter(project => project.featured);
};

// Helper function to get project by ID
export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};
