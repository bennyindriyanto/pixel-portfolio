
import React from 'react';
import PixelArt from '../ui/PixelArt';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="relative">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto">
          <h2 className="section-title flex items-center gap-2">
            <PixelArt type="cursor" size="sm" />
            Education
          </h2>
          
          <div className="mt-6 relative glass p-8 rounded-lg opacity-0 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="flex-shrink-0 w-16 h-16 rounded-full glass flex items-center justify-center">
                <GraduationCap size={24} className="text-blue-400" />
              </div>
              
              <div>
                <h3 className="text-xl font-medium">Bachelor of Computer Science</h3>
                <p className="text-muted-foreground mt-1">University of Dian Nuswantoro Semarang</p>
                <p className="text-sm text-blue-400 mt-1 font-mono">Graduation: 2019</p>
                
                <div className="mt-4 text-sm text-muted-foreground">
                  <p>
                    Completed my education with a focus on software engineering and database management systems.
                    Developed strong programming skills and a foundation in computer science principles.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
