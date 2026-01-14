/**
 * Sidebar Navigation Component
 * 
 * Matches HTML reference exactly
 */

import { useState, useEffect } from 'react';

const SidebarNav = () => {
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { label: 'Home', href: '#hero', icon: 'home' },
    { label: 'About', href: '#about', icon: 'person' },
    { label: 'Resume', href: '#resume', icon: 'description' },
    { label: 'Services', href: '#services', icon: 'settings' },
    { label: 'Portfolio', href: '#portfolio', icon: 'grid_view' },
    { label: 'Contact', href: '#contact', icon: 'mail' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.substring(1));
      let current = '';
      
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const sectionTop = element.offsetTop;
          const sectionHeight = element.clientHeight;
          if (window.pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section;
          }
        }
      });
      
      setActiveSection(current || 'hero');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col space-y-2">
      {navItems.map((item) => {
        const sectionId = item.href.substring(1);
        const isActive = activeSection === sectionId;
        
        return (
          <a
            key={item.href}
            href={item.href}
            onClick={(e) => handleClick(e, item.href)}
            className="group relative flex items-center"
          >
            <span className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 mb-4 ${
              isActive 
                ? 'bg-primary text-white' 
                : 'bg-gray-100 dark:bg-gray-800 text-gray-500 hover:bg-primary hover:text-white'
            }`}>
              <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
            </span>
            <span className="absolute left-14 opacity-0 group-hover:opacity-100 bg-gray-900 text-white text-xs py-1 px-3 rounded pointer-events-none transition-opacity">
              {item.label}
            </span>
          </a>
        );
      })}
    </nav>
  );
};

export default SidebarNav;

