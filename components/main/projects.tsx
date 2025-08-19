"use client";

import React from 'react';
import { PROJECTS } from "@/constants";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaGithub, FaExternalLinkAlt, FaAws, FaJava, FaCheck, FaRobot } from "react-icons/fa";
import ProjectImageCarousel from "../sub/ProjectImageCarousel";
import {
  SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiTailwindcss,
  SiNodedotjs, SiExpress, SiMongodb, SiFirebase, SiCircleci,
  SiCypress, SiPython, SiFlask, SiDocker, SiClerk, SiRedis,
  SiHtml5, SiCss3, SiJest, SiRender,
  SiCloudinary, SiPostgresql, SiGithubactions, SiMocha,
  SiCplusplus, SiC, SiFastapi, SiJunit5, SiVite,
} from "react-icons/si";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  duration: string;
  images: string[];
  link: string;
  github: string | { client: string; server: string };
}

const techIcons: { [key: string]: React.ReactElement } = {
  "React": <SiReact className="text-[#61DAFB]" />,
  "Next.js": <SiNextdotjs className="text-white" />,
  "TypeScript": <SiTypescript className="text-[#3178C6]" />,
  "JavaScript": <SiJavascript className="text-[#F7DF1E]" />,
  "Tailwind CSS": <SiTailwindcss className="text-[#38B2AC]" />,
  "Node.js": <SiNodedotjs className="text-[#339933]" />,
  "Express": <SiExpress className="text-white" />,
  "Express.js": <SiExpress className="text-white" />,
  "MongoDB": <SiMongodb className="text-[#47A248]" />,
  "Firebase": <SiFirebase className="text-[#FFCA28]" />,
  "CircleCI": <SiCircleci className="text-[#343434]" />,
  "Cypress": <SiCypress className="text-[#17202C]" />,
  "Python": <SiPython className="text-[#3776AB]" />,
  "Flask": <SiFlask className="text-white" />,
  "Docker": <SiDocker className="text-[#2496ED]" />,
  "Clerk": <SiClerk className="text-[#6C47FF]" />,
  "Redis": <SiRedis className="text-[#DC382D]" />,
  "HTML": <SiHtml5 className="text-[#E34F26]" />,
  "CSS": <SiCss3 className="text-[#1572B6]" />,
  "Jest": <SiJest className="text-[#C21325]" />,
  "AWS EC2": <FaAws className="text-[#FF9900]" />,
  "Render": <SiRender className="text-[#46E3B7]" />,
  "Cloudinary": <SiCloudinary className="text-[#3448C5]" />,
  "PostgreSQL": <SiPostgresql className="text-[#336791]" />,
  "GitHub Actions": <SiGithubactions className="text-white" />,
  "Pytest": <SiPython className="text-[#3776AB]" />,
  "JUnit": <SiJunit5 className="text-[#25A162]" />,
  "Mocha": <SiMocha className="text-[#8D6748]" />,
  "Java": <FaJava className="text-[#007396]" />,
  "C++": <SiCplusplus className="text-[#00599C]" />,
  "C": <SiC className="text-[#A8B9CC]" />,
  "FastAPI": <SiFastapi className="text-[#009688]" />,
  "TDD": <FaCheck className="text-white" />,
  "Unit Testing": <FaCheck className="text-white" />,
  "Integration Testing": <FaCheck className="text-white" />,
  "Microservices": <SiDocker className="text-[#2496ED]" />,
  "Agile Development": <FaCheck className="text-white" />,
  "CI/CD": <SiCircleci className="text-[#343434]" />,
  "REST APIs": <SiExpress className="text-white" />,
  "k6": <FaCheck className="text-white" />,
  "JMeter": <FaCheck className="text-white" />,
  "Google Generative API": <FaRobot className="text-[#4285F4]" />,
  "Vite": <SiVite className="text-[#646CFF]" />,
  "AWS S3": <FaAws className="text-[#FF9900]" />,
  "AWS SQS": <FaAws className="text-[#FF9900]" />,
  "AWS Lambda": <FaAws className="text-[#FF9900]" />,
  "AWS ECR": <FaAws className="text-[#FF9900]" />,
  "AWS Lightsail": <FaAws className="text-[#FF9900]" />,
};

const ProjectsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects: Project[] = PROJECTS;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const projectVariants = {
    hidden: { 
      opacity: 0,
      y: 50
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills in full-stack development, 
            from modern frontend designs to scalable backend architectures.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-32"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={projectVariants}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center gap-8 md:gap-12`}
            >
              <div className="w-full lg:w-3/5">
                <div className="relative overflow-hidden rounded-lg shadow-2xl">
                  <ProjectImageCarousel 
                    images={project.images} 
                    title={project.title}
                    github={project.github}
                    link={project.link}
                  />
                </div>
              </div>

              <div className="w-full lg:w-2/5">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                  <div className="text-blue-400 mb-4 font-mono text-sm">{project.duration}</div>
                  <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.technologies.map((tech, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ 
                          scale: 1.05,
                          y: -5,
                          boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
                        }}
                        transition={{ type: "spring", stiffness: 500, damping: 15 }}
                        className="flex items-center gap-2 bg-gray-700/50 backdrop-blur-sm text-gray-200 text-sm rounded-full px-4 py-2 border border-gray-700 hover:border-blue-400/50 transition-colors"
                      >
                        <span className="text-lg">{techIcons[tech] || <FaExternalLinkAlt className="text-white" />}</span>
                        <span>{tech}</span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="flex gap-6">
                    {project.github && project.github !== "" && (
                      typeof project.github === 'object' ? (
                        <>
                          <a
                            href={project.github.client}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition group"
                          >
                            <FaGithub className="text-xl group-hover:scale-110 transition" />
                            <span className="font-medium">Client Code</span>
                          </a>
                          <a
                            href={project.github.server}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition group"
                          >
                            <FaGithub className="text-xl group-hover:scale-110 transition" />
                            <span className="font-medium">Server Code</span>
                          </a>
                        </>
                      ) : (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition group"
                        >
                          <FaGithub className="text-xl group-hover:scale-110 transition" />
                          <span className="font-medium">View Code</span>
                        </a>
                      )
                    )}
                    {project.link && project.link !== "#" && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition group"
                      >
                        <FaExternalLinkAlt className="text-lg group-hover:scale-110 transition" />
                        <span className="font-medium">Live Demo</span>
                      </a>
                    )}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection; 