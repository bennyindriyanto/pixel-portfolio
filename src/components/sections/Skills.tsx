import React from "react";
import PixelArt from "../ui/PixelArt";
import {
  Database,
  Server,
  Code,
  Monitor,
  Terminal,
  HardDrive,
  GitBranch,
  Network,
  Container,
  TerminalSquare,
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      name: "Backend",
      icon: <Server size={20} />,
      skills: ["Java", "JavaScript", "C++"],
    },
    {
      name: "Frontend",
      icon: <Monitor size={20} />,
      skills: ["React", "HTML", "Tailwind CSS", "CSS"],
    },
    {
      name: "Database",
      icon: <Database size={20} />,
      skills: ["PostgreSQL", "MySQL", "MongoDB", "SQL"],
    },
    {
      name: "Caching/NoSQL",
      icon: <HardDrive size={20} />,
      skills: ["Redis", "Memcached"],
    },
    {
      name: "Version Control",
      icon: <GitBranch size={20} />,
      skills: ["GitHub"],
    },
    {
      name: "Methodology",
      icon: <Code size={20} />,
      skills: ["Agile", "Scrum"],
    },
    {
      name: "Networking",
      icon: <Network size={20} />,
      skills: ["TCP/IP", "HTTP/HTTPS"],
    },
    {
      name: "Containerization",
      icon: <Container size={20} />,
      skills: ["Docker"],
    },
    {
      name: "Deployment",
      icon: <TerminalSquare size={20} />,
      skills: ["Linux Server", "Apache Tomcat", "AWS", "Heroku"],
    },
  ];

  return (
    <section id="skills" className="relative">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title flex items-center gap-2">
            <PixelArt type="cursor" size="sm" />
            Technical Skills
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            {skillCategories.map((category, index) => (
              <div
                key={category.name}
                className="glass p-6 rounded-lg opacity-0 animate-fade-in-up"
                style={{
                  animationDelay: `${0.1 + index * 0.1}s`,
                  animationFillMode: "forwards",
                }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="text-blue-400">{category.icon}</div>
                  <h3 className="font-mono text-sm tracking-wider">
                    {category.name}
                  </h3>
                </div>

                <div className="space-y-2">
                  {category.skills.map((skill) => (
                    <div key={skill} className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-sm mr-2"></div>
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
