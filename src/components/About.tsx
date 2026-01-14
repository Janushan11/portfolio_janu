/**
 * About Section Component
 * 
 * Matches HTML reference exactly with real data
 */

import { profile } from '../data/profile';

const About = () => {
  const age = new Date().getFullYear() - new Date(profile.dateOfBirth).getFullYear();

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900/50" id="about">
      <div className="container mx-auto px-6 md:px-24">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white relative pb-4 mb-8 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-primary">
          About
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-3xl">
          {profile.bio}
        </p>
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <div className="bg-orange-100 dark:bg-orange-900/20 rounded-2xl p-8 flex items-center justify-center">
              <img
                alt="Profile Illustration"
                className="rounded-xl w-full"
                src={profile.avatar}
              />
            </div>
          </div>
          <div className="md:col-span-8">
            <h3 className="text-2xl font-bold text-primary mb-4">{profile.title}</h3>
            <p className="italic mb-8">{profile.shortBio}</p>
            <div className="grid md:grid-cols-2 gap-y-4 gap-x-12 mb-8">
              <div className="flex items-center space-x-2">
                <span className="material-symbols-outlined text-primary text-lg">chevron_right</span>
                <span className="font-bold">Birthday:</span> <span>{new Date(profile.dateOfBirth).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="material-symbols-outlined text-primary text-lg">chevron_right</span>
                <span className="font-bold">Location:</span> <span>{profile.location}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="material-symbols-outlined text-primary text-lg">chevron_right</span>
                <span className="font-bold">Email:</span> <span>{profile.email}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="material-symbols-outlined text-primary text-lg">chevron_right</span>
                <span className="font-bold">Age:</span> <span>{age}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="material-symbols-outlined text-primary text-lg">chevron_right</span>
                <span className="font-bold">Degree:</span> <span>Final Year Student</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="material-symbols-outlined text-primary text-lg">chevron_right</span>
                <span className="font-bold">GitHub:</span> <span><a href={profile.socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">github.com/Janushan11</a></span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="material-symbols-outlined text-primary text-lg">chevron_right</span>
                <span className="font-bold">LinkedIn:</span> <span><a href={profile.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">View Profile</a></span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="material-symbols-outlined text-primary text-lg">chevron_right</span>
                <span className="font-bold">Freelance:</span> <span>Available</span>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              {profile.bio}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

