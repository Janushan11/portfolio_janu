/**
 * Portfolio Section Component
 * 
 * Matches HTML reference exactly with real project data
 */

import { useState } from 'react';
import { projects } from '../data/projects';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', 'App', 'Card', 'Web'];

  const filteredProjects = activeFilter === 'All' 
    ? projects.slice(0, 6) 
    : projects.filter(p => 
        p.technologies.some(t => t.toLowerCase().includes(activeFilter.toLowerCase()))
      ).slice(0, 6);

  return (
    <section className="py-24" id="portfolio">
      <div className="container mx-auto px-6 md:px-24">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white relative pb-4 mb-8 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-primary">
          Portfolio
        </h2>
        <p className="mb-12">My works from the last 5 years.</p>
        <div className="flex justify-center space-x-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                activeFilter === filter
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 dark:bg-gray-800 hover:bg-primary hover:text-white'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-xl bg-gray-200 dark:bg-gray-800 aspect-[4/3]"
            >
              <img
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                src={project.image}
              />
              <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="material-symbols-outlined text-white text-3xl cursor-pointer hover:scale-110 transition-transform"
                  >
                    add
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="material-symbols-outlined text-white text-3xl cursor-pointer hover:scale-110 transition-transform"
                  >
                    link
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

