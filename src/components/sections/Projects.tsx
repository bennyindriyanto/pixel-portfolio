import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Code, ExternalLink, Github } from "lucide-react";

const projects = [
  // {
  //   title: 'Banking Transaction System',
  //   description: 'A secure, high-performance banking transaction processing system that handles millions of daily transactions.',
  //   technologies: ['Java', 'Spring Boot', 'Oracle', 'Microservices'],
  //   github: '#',
  //   demo: '#',
  //   image: 'https://placehold.co/600x400/0f172a/e2e8f0?text=Banking+System'
  // },
  // {
  //   title: 'Financial Data Analytics Dashboard',
  //   description: 'Interactive dashboard for visualizing and analyzing financial data with real-time updates and customizable reports.',
  //   technologies: ['React', 'TypeScript', 'D3.js', 'Node.js'],
  //   github: '#',
  //   demo: '#',
  //   image: 'https://placehold.co/600x400/0f172a/e2e8f0?text=Analytics+Dashboard'
  // },
  // {
  //   title: 'Secure Payment Gateway',
  //   description: 'PCI-compliant payment processing system with fraud detection capabilities and multi-factor authentication.',
  //   technologies: ['Python', 'Django', 'PostgreSQL', 'Docker'],
  //   github: '#',
  //   demo: '#',
  //   image: 'https://placehold.co/600x400/0f172a/e2e8f0?text=Payment+Gateway'
  // }
];

const Projects = () => {
  return (
    <section id="projects" className="container px-4 mx-auto">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title flex items-center gap-2">
          <Code size={16} className="text-blue-400" />
          Projects
        </h2>
        <h3 className="text-3xl font-bold mb-10">
          Featured Work Is Coming soon 💤
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="glass h-full flex flex-col hover:shadow-blue-400/10 transition-all hover:-translate-y-1 border-white/5"
            >
              <div className="aspect-video w-full overflow-hidden rounded-t-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-blue-400">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="text-base text-white/70 mb-4">
                  {project.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs px-2 py-1 rounded bg-white/5 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-3">
                <a
                  href={project.github}
                  className="text-sm flex items-center gap-1 hover:text-blue-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={14} />
                  Code
                </a>
                <a
                  href={project.demo}
                  className="text-sm flex items-center gap-1 hover:text-blue-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink size={14} />
                  Demo
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
