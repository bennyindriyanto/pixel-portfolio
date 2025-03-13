
import React from 'react';
import PixelArt from '../ui/PixelArt';
import { Award } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: 'Software Engineer',
      issuer: 'HackerRank',
      year: '2022',
      description: 'Verified skills in core software engineering principles and problem-solving abilities.'
    },
    {
      title: 'REST API',
      issuer: 'HackerRank',
      year: '2021',
      description: 'Proficiency in designing and implementing RESTful API services and web services architecture.'
    },
    {
      title: 'Python and Machine Learning for Financial Analysts',
      issuer: 'Udemy',
      year: '2020',
      description: 'Applied machine learning techniques to financial data analysis and prediction modeling.'
    }
  ];

  return (
    <section id="certifications" className="relative">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto">
          <h2 className="section-title flex items-center gap-2">
            <PixelArt type="cursor" size="sm" />
            Certifications
          </h2>
          
          <div className="mt-6 space-y-4">
            {certifications.map((cert, index) => (
              <div 
                key={cert.title}
                className="glass p-6 rounded-lg opacity-0 animate-fade-in"
                style={{ animationDelay: `${0.2 + index * 0.1}s`, animationFillMode: 'forwards' }}
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full glass flex items-center justify-center">
                    <Award size={20} className="text-blue-400" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <h3 className="text-lg font-medium">{cert.title}</h3>
                      <span className="text-sm text-blue-400 font-mono">{cert.year}</span>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mt-1">Issued by {cert.issuer}</p>
                    <p className="text-sm mt-2">{cert.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
