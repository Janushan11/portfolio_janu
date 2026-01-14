/**
 * Hero Section Component
 * 
 * Matches HTML reference exactly with real data
 */

import { profile } from '../data/profile';

const Hero = () => {
  return (
    <section className="min-h-screen relative flex items-center overflow-hidden" id="hero">
      <div className="container mx-auto px-6 md:px-24 grid md:grid-cols-2 gap-12 items-center">
        <div className="z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white mb-4">
            {profile.name}
          </h1>
          <p className="text-2xl md:text-3xl text-gray-600 dark:text-gray-400 mb-8">
            I'm <span className="text-primary font-semibold border-b-2 border-primary">{profile.title.split('&')[0].trim()}</span>
          </p>
          <div className="flex space-x-4">
            {profile.socialLinks.github && (
              <a
                href={profile.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-primary hover:text-white transition-colors"
              >
                <span className="material-symbols-outlined text-sm">code</span>
              </a>
            )}
            {profile.socialLinks.email && (
              <a
                href={`mailto:${profile.socialLinks.email}`}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-primary hover:text-white transition-colors"
              >
                <span className="material-symbols-outlined text-sm">alternate_email</span>
              </a>
            )}
            {profile.socialLinks.linkedin && (
              <a
                href={profile.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-primary hover:text-white transition-colors"
              >
                <span className="material-symbols-outlined text-sm">share</span>
              </a>
            )}
          </div>
        </div>
        <div className="hidden md:block absolute right-0 top-0 h-full w-1/2">
          <img
            alt="Professional Portrait"
            className="h-full w-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-700"
            src={profile.avatar}
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-white dark:to-background-dark"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

