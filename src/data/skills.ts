/**
 * Skills Data
 * 
 * Purpose: Centralized skills information organized by category
 * Why separate: Easy to update skills without touching component code
 * Location: data/ - all data files live here
 * 
 * Usage: Import this data in components that display skills
 * Structure supports multiple skill categories
 * 
 * Skills based on GitHub profile and QA expertise
 */

export type SkillLevel = 'beginner' | 'intermediate' | 'advanced' | 'expert';

export interface Skill {
  name: string;
  level: SkillLevel;
  icon?: string; // Optional icon/image path
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export const skills: SkillCategory[] = [
  {
    name: 'Test Automation',
    skills: [
      { name: 'Selenium', level: 'advanced' },
      { name: 'Playwright', level: 'advanced' },
      { name: 'Test Automation', level: 'advanced' },
      { name: 'Quality Assurance', level: 'advanced' },
    ],
  },
  {
    name: 'Programming Languages',
    skills: [
      { name: 'JavaScript', level: 'advanced' },
      { name: 'TypeScript', level: 'intermediate' },
      { name: 'HTML/CSS', level: 'advanced' },
      { name: 'Python', level: 'intermediate' },
    ],
  },
  {
    name: 'Web Development',
    skills: [
      { name: 'React', level: 'intermediate' },
      { name: 'Node.js', level: 'intermediate' },
      { name: 'Git', level: 'advanced' },
      { name: 'REST APIs', level: 'intermediate' },
    ],
  },
  {
    name: 'Tools & Platforms',
    skills: [
      { name: 'GitHub', level: 'advanced' },
      { name: 'Jira', level: 'intermediate' },
      { name: 'Atlassian', level: 'intermediate' },
      { name: 'CI/CD', level: 'beginner' },
    ],
  },
];
