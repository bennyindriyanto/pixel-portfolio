
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Education from '@/components/sections/Education';
import Certifications from '@/components/sections/Certifications';
import Contact from '@/components/sections/Contact';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import Security from '@/components/sections/Security';

const Index = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Scroll to top when home button is clicked
    if (location.hash === '#top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div className="relative min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        <div className="space-y-24 mb-24">
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Security />
          <Education />
          <Certifications />
          <Contact />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
