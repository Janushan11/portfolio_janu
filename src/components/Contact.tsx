/**
 * Contact Section Component
 * 
 * Matches HTML reference exactly with real data
 */

import { profile } from '../data/profile';

const Contact = () => {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900/50" id="contact">
      <div className="container mx-auto px-6 md:px-24">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white relative pb-4 mb-8 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-primary">
          Contact
        </h2>
        <p className="mb-12">Feel free to get in touch with me.</p>
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4 space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-primary">location_on</span>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-1">Location:</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{profile.location}</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-primary">mail</span>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-1">Email:</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{profile.email}</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-primary">call</span>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-1">Call:</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Available on request</p>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden h-64 shadow-sm border border-gray-100 dark:border-gray-800">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.58562167748!2d80.0167!3d9.6615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3af54e8e1c3b3b3b%3A0x3b3b3b3b3b3b3b3b!2sJaffna%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location Map"
              ></iframe>
            </div>
          </div>
          <div className="md:col-span-8">
            <div className="bg-background-light dark:bg-background-dark p-8 rounded-xl shadow-lg">
              <form action="#" className="grid grid-cols-2 gap-6" method="POST">
                <div className="col-span-2 md:col-span-1">
                  <label className="block text-sm font-medium mb-2">Your Name</label>
                  <input
                    className="w-full px-4 py-3 rounded-lg border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:ring-primary focus:border-primary"
                    placeholder="John Doe"
                    type="text"
                  />
                </div>
                <div className="col-span-2 md:col-span-1">
                  <label className="block text-sm font-medium mb-2">Your Email</label>
                  <input
                    className="w-full px-4 py-3 rounded-lg border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:ring-primary focus:border-primary"
                    placeholder="john@example.com"
                    type="email"
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <input
                    className="w-full px-4 py-3 rounded-lg border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:ring-primary focus:border-primary"
                    placeholder="Project Inquiry"
                    type="text"
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    className="w-full px-4 py-3 rounded-lg border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:ring-primary focus:border-primary"
                    placeholder="Hello, I'd like to talk about..."
                    rows={6}
                  ></textarea>
                </div>
                <div className="col-span-2 flex justify-center">
                  <button
                    className="bg-primary hover:bg-opacity-90 text-white font-semibold py-3 px-10 rounded-full transition-all shadow-md"
                    type="submit"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

