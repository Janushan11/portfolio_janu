/**
 * App Component
 * 
 * Single-page portfolio matching HTML reference exactly
 */

import SidebarNav from './components/SidebarNav';
import Hero from './components/Hero';
import About from './components/About';
import Resume from './components/Resume';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-gray-700 dark:text-gray-300">
      <SidebarNav />
      <Hero />
      <About />
      <Resume />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
