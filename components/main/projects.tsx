"use client";

import React from 'react';
import { PROJECTS } from "@/constants";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import ProjectImageCarousel from "../sub/ProjectImageCarousel";
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs, SiExpress, SiMongodb, SiFirebase, SiCircleci, SiCypress, SiPython, SiFlask, SiDocker, SiClerk, SiRedis } from "react-icons/si";

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
  "Tailwind CSS": <SiTailwindcss className="text-[#38B2AC]" />,
  "Node.js": <SiNodedotjs className="text-[#339933]" />,
  "Express": <SiExpress className="text-white" />,
  "MongoDB": <SiMongodb className="text-[#47A248]" />,
  "Firebase": <SiFirebase className="text-[#FFCA28]" />,
  "CircleCI": <SiCircleci className="text-[#343434]" />,
  "Cypress": <SiCypress className="text-[#17202C]" />,
  "Python": <SiPython className="text-[#3776AB]" />,
  "Flask": <SiFlask className="text-white" />,
  "Docker": <SiDocker className="text-[#2496ED]" />,
  "Clerk": <SiClerk className="text-[#6C47FF]" />,
  "Redis": <SiRedis className="text-[#DC382D]" />
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
    <section id="projects" className="py-20 bg-gray-800">
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
                      <div
                        key={i}
                        className="flex items-center gap-2 bg-gray-700/50 backdrop-blur-sm text-gray-200 text-sm rounded-full px-4 py-2 border border-gray-700"
                      >
                        {techIcons[tech] && (
                          <span className="text-lg">{techIcons[tech]}</span>
                        )}
                        <span>{tech}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-6">
                    {project.github && (
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