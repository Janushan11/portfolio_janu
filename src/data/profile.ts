/**
 * Profile Data
 * 
 * Purpose: Centralized profile information for the portfolio
 * Why separate: Single source of truth for personal information
 * Location: data/ - all data files live here
 * 
 * Usage: Import this data in components that need profile information
 * Easy to replace with API calls or CMS data later
 * 
 * Data extracted from:
 * - GitHub: https://github.com/Janushan11
 * - LinkedIn: https://www.linkedin.com/in/kalaikumar-janushan-94943a334/
 */

export interface Profile {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  shortBio: string;
  avatar: string;
  location: string;
  email: string;
  dateOfBirth: string;
  socialLinks: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    email: string;
  };
}

export const profile: Profile = {
  name: 'Kalaikumar Janushan',
  title: 'QA Intern & Final-Year Student',
  tagline: 'Hello, I\'m',
  bio: 'I am a final-year student at SLIIT with a passion for quality assurance and test automation. Currently working as a QA Intern at Bohar IT Solutions, where I\'m growing my expertise in Test Automation using Selenium and Playwright. I love building reliable, well-tested applications and ensuring software quality through comprehensive testing strategies.',
  shortBio: '🎓 Final-year student at SLIIT | 🔍 QA Intern at Bohar IT Solutions | 💻 Growing expertise in Test Automation (Selenium, Playwright)',
  avatar: '/profile.jpg', // User's profile photo
  location: 'Jaffna, Sri Lanka',
  email: 'janushan@example.com', // Update with your actual email
  dateOfBirth: '1994-01-26',
  socialLinks: {
    github: 'https://github.com/Janushan11',
    linkedin: 'https://www.linkedin.com/in/kalaikumar-janushan-94943a334/',
    email: 'janushan@example.com', // Update with your actual email
  },
};
