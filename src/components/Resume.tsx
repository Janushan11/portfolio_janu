/**
 * Resume Section Component
 * 
 * Matches HTML reference exactly with real data
 */

import { experience } from '../data/experience';
import { profile } from '../data/profile';

const Resume = () => {
  const education = experience.filter(exp => 
    exp.position.toLowerCase().includes('student') || 
    exp.position.toLowerCase().includes('education')
  );
  
  const workExperience = experience.filter(exp => 
    !exp.position.toLowerCase().includes('student') && 
    !exp.position.toLowerCase().includes('education')
  );

  return (
    <section className="py-24" id="resume">
      <div className="container mx-auto px-6 md:px-24">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white relative pb-4 mb-8 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-primary">
          Resume
        </h2>
        <p className="mb-12">Check out my resume and work experience.</p>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Summary & Education</h3>
            <div className="pl-6 border-l-2 border-primary/30 relative pb-6">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2 border-primary bg-white dark:bg-background-dark"></div>
              <h4 className="text-lg font-bold uppercase text-primary mb-2">{profile.name.toUpperCase()}</h4>
              <p className="italic mb-4 text-sm">{profile.bio}</p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>{profile.location}</li>
                <li>{profile.email}</li>
                <li>{profile.socialLinks.github}</li>
              </ul>
            </div>
            {education.map((edu) => (
              <div key={edu.id} className="pl-6 border-l-2 border-primary/30 relative pb-6 pt-6">
                <div className="absolute -left-[9px] top-6 w-4 h-4 rounded-full border-2 border-primary bg-white dark:bg-background-dark"></div>
                <h4 className="text-lg font-bold uppercase text-primary mb-1">{edu.position}</h4>
                <span className="inline-block bg-gray-100 dark:bg-gray-800 px-3 py-1 text-xs font-semibold mb-3">
                  {edu.startDate} - {edu.endDate}
                </span>
                <p className="italic mb-2 font-medium">{edu.company}, {edu.location}</p>
                <p className="text-sm">{edu.description[0]}</p>
              </div>
            ))}
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Professional Experience</h3>
            {workExperience.map((exp, index) => (
              <div key={exp.id} className={`pl-6 border-l-2 border-primary/30 relative ${index === 0 ? 'pb-6' : 'pt-6 pb-6'}`}>
                <div className={`absolute -left-[9px] ${index === 0 ? 'top-0' : 'top-6'} w-4 h-4 rounded-full border-2 border-primary bg-white dark:bg-background-dark`}></div>
                <h4 className="text-lg font-bold uppercase text-primary mb-1">{exp.position}</h4>
                <span className="inline-block bg-gray-100 dark:bg-gray-800 px-3 py-1 text-xs font-semibold mb-3">
                  {exp.startDate} - {exp.endDate}
                </span>
                <p className="italic mb-2 font-medium">{exp.company}, {exp.location}</p>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  {exp.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;

