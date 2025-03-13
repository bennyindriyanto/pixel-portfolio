
import React from 'react';
import PixelArt from '../ui/PixelArt';

const About = () => {
  return (
    <section id="about" className="relative">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto">
          <h2 className="section-title flex items-center gap-2">
            <PixelArt type="cursor" size="sm" />
            About Me
          </h2>
          
          <div className="mt-6 relative glass p-8 rounded-lg overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 right-0">
                <PixelArt type="block" size="md" />
              </div>
              <div className="absolute bottom-0 left-0">
                <PixelArt type="block" size="md" />
              </div>
            </div>
            
            <div className="relative">
              <p className="text-lg mb-4">
                I'm a software engineer specialized in core banking and financial technology with 4 years of professional experience.
              </p>
              
              <p className="text-muted-foreground mb-4">
                My passion lies in building robust, secure, and scalable applications that help financial institutions operate efficiently and securely. I excel at solving complex problems and implementing cutting-edge solutions in the fintech space.
              </p>
              
              <p className="text-muted-foreground">
                With expertise spanning both backend and frontend development, I create comprehensive solutions that address the unique challenges of the financial industry while ensuring excellent user experiences.
              </p>
            </div>
            
            <div className="shimmer"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
