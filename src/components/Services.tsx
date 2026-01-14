/**
 * Services Section Component
 * 
 * Matches HTML reference exactly
 */

const services = [
  {
    icon: 'language',
    title: 'Web Design',
    description: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident',
  },
  {
    icon: 'code',
    title: 'Web Development',
    description: 'Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata',
  },
  {
    icon: 'camera_alt',
    title: 'Photography',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
  },
  {
    icon: 'smartphone',
    title: 'App Development',
    description: 'Excepteur sint occaecati cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
  },
  {
    icon: 'edit_note',
    title: 'Graphic Design',
    description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque',
  },
  {
    icon: 'campaign',
    title: 'Marketing',
    description: 'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi',
  },
];

const Services = () => {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900/50" id="services">
      <div className="container mx-auto px-6 md:px-24">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white relative pb-4 mb-8 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-primary">
          Services
        </h2>
        <p className="mb-12">What I can do for you.</p>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-background-light dark:bg-background-dark p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow border border-gray-100 dark:border-gray-800 group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <span className="material-symbols-outlined text-primary group-hover:text-white">{service.icon}</span>
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

