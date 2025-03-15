import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Backend Developer",
    company: "PT. Bank Mega",
    period: "2024 - Present",
    description:
      "Experienced Backend Developer at PT. Bank Mega, specializing in building robust and reliable microservices for the fintech industry, with a focus on credit card systems and financial integrations. Passionate about delivering high-performance solutions and collaborating with teams to develop fast, efficient, and user-friendly applications.",
    technologies: [
      "Java",
      "Spring Boot",
      "Oracle",
      "Microservices",
      "Docker",
      "Postman",
      "postgreSQL",
      "MySQL",
      "REST API",
      "Agile",
      "git",
      "Linux Server",
      "Apache Tomcat",
      "AWS",
      "nginx",
      "ci/cd",
    ],
  },
  {
    title: "Quality Assurance Engineer",
    company: "PT. Mitra Transaksi Indonesia",
    period: "2021 - 2024",
    description:
      "xperienced Quality Assurance Engineer with 3 years at PT. Mitra Transaksi Indonesia, skilled in REST API testing, integration testing, manual & automation testing. Proficient in PostgreSQL, MySQL, pentesting, performance testing, and project analysis (FSD, test cases, schedules). Expertise in core banking, backend payments, e-commerce, and merchant integration within Agile environments.",
    technologies: [
      "PostgreSQL",
      "MySQL",
      "REST API",
      "Agile",
      "JIRA",
      "Selenium",
      "JMeter",
      "Katalon",
      "Postman",
    ],
  },
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
            <Card
              key={index}
              className="glass hover:shadow-blue-400/10 transition-all hover:-translate-y-1 border-white/5"
            >
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl text-blue-400">
                      {job.title}
                    </CardTitle>
                    <CardDescription className="text-base text-white/70">
                      {job.company}
                    </CardDescription>
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
