
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    title: 'Senior Software Engineer',
    company: 'IBM',
    period: '2021 - Present',
    description: 'Lead developer for core banking applications serving over 5 million customers. Implemented secure transaction processing systems and optimized database performance.',
    technologies: ['Java', 'Spring Boot', 'Oracle', 'Microservices', 'Kubernetes']
  },
  {
    title: 'Software Engineer',
    company: 'Fintech Solutions',
    period: '2019 - 2021',
    description: 'Developed financial transaction APIs and payment processing systems. Collaborated with cross-functional teams to deliver secure and scalable banking solutions.',
    technologies: ['Java', 'JavaScript', 'React', 'PostgreSQL', 'AWS']
  },
  {
    title: 'Junior Developer',
    company: 'Tech Innovations',
    period: '2018 - 2019',
    description: 'Assisted in the development of web applications and internal tools. Participated in code reviews and testing processes.',
    technologies: ['JavaScript', 'Node.js', 'MongoDB', 'Docker']
  }
];

const Experience = () => {
  return (
    <section id="experience" className="container px-4 mx-auto">
      <div className="max-w-3xl mx-auto">
        <h2 className="section-title flex items-center gap-2">
          <Briefcase size={16} className="text-blue-400" />
          Experience
        </h2>
        <h3 className="text-3xl font-bold mb-10">My Professional Journey</h3>
        
        <div className="space-y-8">
          {experiences.map((job, index) => (
            <Card key={index} className="glass hover:shadow-blue-400/10 transition-all hover:-translate-y-1 border-white/5">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl text-blue-400">{job.title}</CardTitle>
                    <CardDescription className="text-base text-white/70">{job.company}</CardDescription>
                  </div>
                  <span className="text-sm font-mono bg-blue-500/10 px-3 py-1 rounded-full text-blue-400">
                    {job.period}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{job.description}</p>
                <div className="flex flex-wrap gap-2">
                  {job.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="text-xs px-2 py-1 rounded bg-white/5 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
