/**
 * Experience Data
 * 
 * Purpose: Centralized work experience and career history
 * Why separate: Easy to update experience without component changes
 * Location: data/ - all data files live here
 * 
 * Usage: Import this data in components that display work experience
 * Supports both current and past positions
 * 
 * Data extracted from LinkedIn and GitHub profiles
 */

export interface Experience {
  id: string;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string | 'Present';
  description: string[];
  technologies: string[];
}

export const experience: Experience[] = [
  {
    id: '1',
    company: 'Bohar IT Solutions',
    position: 'QA Intern',
    location: 'Jaffna, Sri Lanka',
    startDate: '2024-01-01', // Update with actual start date
    endDate: 'Present',
    description: [
      'Working on test automation projects using Selenium and Playwright',
      'Developing and maintaining automated test suites for web applications',
      'Collaborating with development teams to ensure software quality',
      'Learning and implementing best practices in quality assurance',
    ],
    technologies: ['Selenium', 'Playwright', 'JavaScript', 'TypeScript', 'Test Automation'],
  },
  {
    id: '2',
    company: 'SLIIT',
    position: 'Final-Year Student',
    location: 'Sri Lanka',
    startDate: '2020-01-01', // Update with actual enrollment date
    endDate: '2024-12-31', // Update with expected graduation date
    description: [
      'Pursuing degree in Information Technology/Computer Science',
      'Focusing on software quality assurance and test automation',
      'Completing final-year projects and coursework',
      'Building expertise in modern testing frameworks and tools',
    ],
    technologies: ['Software Engineering', 'Quality Assurance', 'Test Automation'],
  },
];
