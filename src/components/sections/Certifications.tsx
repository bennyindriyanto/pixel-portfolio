
import React from 'react';
import PixelArt from '../ui/PixelArt';
import { Award, ExternalLink } from 'lucide-react';
import { Button } from '../ui/button';

const Certifications = () => {
  const certifications = [
    {
      title: 'Prompt Engineering for Everyone',
      issuer: 'cognitiveclass.ai',
      date: 'September 30, 2024',
      description: 'Fundamentals of prompt engineering for AI systems and applications.',
      certificateLink: 'https://courses.cognitiveclass.ai/certificates/28d53c0737144dfda8a675ccc21e8ed6'
    },
    {
      title: 'Python & Machine Learning for Financial Analysis',
      issuer: 'Udemy',
      date: 'May 2021',
      description: 'Applied machine learning techniques to financial data analysis and prediction modeling.',
      certificateLink: 'https://udemy-certificate.s3.amazonaws.com/image/UC-e4114bc6-2e09-4fcb-b9bf-a0ad7a0cb8d3.jpg'
    },
    {
      title: 'Responsive Web Design',
      issuer: 'freeCodeCamp',
      date: 'May 9, 2021',
      description: 'Modern responsive web design techniques including HTML5, CSS3, and web accessibility.',
      certificateLink: 'https://www.freecodecamp.org/certification/bennyisbenny/responsive-web-design'
    },
    {
      title: 'Software Engineer',
      issuer: 'HackerRank',
      date: '28 February 2025',
      description: 'Verified skills in core software engineering principles and problem-solving abilities.',
      certificateLink: 'https://www.hackerrank.com/certificates/iframe/a25d61021e09'
    },
    {
      title: 'REST API (Intermediate)',
      issuer: 'HackerRank',
      date: '28 February 2025',
      description: 'Proficiency in designing and implementing RESTful API services and web services architecture.',
      certificateLink: 'https://www.hackerrank.com/certificates/iframe/85dc72a14860'
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
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full glass flex items-center justify-center">
                    <Award size={20} className="text-blue-400" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <h3 className="text-lg font-medium">{cert.title}</h3>
                      <span className="text-sm text-blue-400 font-mono">{cert.date}</span>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mt-1">Issued by {cert.issuer}</p>
                    <p className="text-sm mt-2">{cert.description}</p>
                    
                    <div className="mt-3">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="text-xs gap-1 hover:text-blue-400"
                        asChild
                      >
                        <a href={cert.certificateLink} target="_blank" rel="noopener noreferrer">
                          View Certificate <ExternalLink size={12} />
                        </a>
                      </Button>
                    </div>
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
