
import React, { useEffect, useRef } from 'react';
import PixelArt from '../ui/PixelArt';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const moveX = (x - rect.width / 2) / 50;
      const moveY = (y - rect.height / 2) / 50;
      
      const elements = containerRef.current.querySelectorAll('[data-parallax]');
      elements.forEach((el) => {
        const strength = parseFloat(el.getAttribute('data-strength') || '1');
        (el as HTMLElement).style.transform = `translate3d(${moveX * strength}px, ${moveY * strength}px, 0)`;
      });
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      <div ref={containerRef} className="container px-4 mx-auto relative">
        <div className="absolute top-20 left-10 opacity-30" data-parallax data-strength="3">
          <PixelArt type="star" size="lg" />
        </div>
        <div className="absolute bottom-10 right-10 opacity-30" data-parallax data-strength="2">
          <PixelArt type="robot" size="lg" />
        </div>
        <div className="absolute top-40 right-20 opacity-20" data-parallax data-strength="1.5">
          <PixelArt type="computer" size="lg" />
        </div>
        
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-6 opacity-0 animate-fade-in-down [animation-delay:0.05s] [animation-fill-mode:forwards]">
            <Avatar className="w-32 h-32 border-4 border-blue-400/20">
              <AvatarImage 
                src="https://drive.google.com/thumbnail?id=19CmKnVi7Voev7CDU0QtjBXFa3F7zByJb" 
                alt="Profile" 
              />
              <AvatarFallback>BI</AvatarFallback>
            </Avatar>
          </div>
          
          <h1 className="opacity-0 animate-fade-in-down [animation-delay:0.1s] [animation-fill-mode:forwards]">
            <span className="text-sm tracking-widest font-mono text-blue-400 block mb-3">SOFTWARE ENGINEER</span>
            Core Banking & Financial Technology
          </h1>
          
          <p className="mt-6 text-xl leading-relaxed text-muted-foreground opacity-0 animate-fade-in [animation-delay:0.5s] [animation-fill-mode:forwards]">
            With 4 years of experience in developing financial solutions
            and banking applications
          </p>
          
          <div className="mt-10 opacity-0 animate-fade-in-up [animation-delay:0.8s] [animation-fill-mode:forwards]">
            <a
              href="#contact"
              className="relative inline-flex items-center justify-center px-6 py-3 text-sm font-medium transition-all duration-300 overflow-hidden group hover:scale-105"
            >
              <span className="absolute inset-0 w-full h-full glass"></span>
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600"></span>
              <span className="relative flex items-center gap-2">
                Contact Me
                <PixelArt type="cursor" size="sm" />
              </span>
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background z-10"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
