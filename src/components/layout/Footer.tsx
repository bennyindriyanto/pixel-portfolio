
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import PixelArt from '../ui/PixelArt';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/bennyindriyanto',
      icon: <Github size={20} />,
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/benny-indriyanto',
      icon: <Linkedin size={20} />,
    },
    {
      name: 'Email',
      href: 'mailto:benny.indriyanto@ibm.com',
      icon: <Mail size={20} />,
    },
  ];

  return (
    <footer className="relative py-10 border-t border-white/10">
      <div className="container px-4 mx-auto">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="flex items-center md:justify-start justify-center gap-2">
            <PixelArt type="robot" size="sm" />
            <span className="font-mono text-sm">PORTFOLIO</span>
          </div>
          
          <div className="flex justify-center items-center">
            <p className="text-sm text-center text-muted-foreground">
              &copy; {currentYear} All rights reserved
            </p>
          </div>
          
          <div className="flex justify-center md:justify-end gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="transition-colors hover:text-blue-400"
                aria-label={link.name}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
    </footer>
  );
};

export default Footer;
