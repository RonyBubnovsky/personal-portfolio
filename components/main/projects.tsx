"use client";

import { PROJECTS } from "@/constants";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  duration: string;
  image: string;
  link: string;
  github: string | { client: string; server: string };
}

const ProjectsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
            My Projects
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Here are some of the projects I&apos;ve worked on. Each project showcases different skills and technologies I&apos;ve mastered.
          </p>
        </motion.div>

        <div className="space-y-24">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center gap-8 md:gap-12`}
            >
              <div className="w-full lg:w-1/2">
                <div className="relative overflow-hidden rounded-lg aspect-video bg-gray-700 shadow-xl group">
                  <div className="absolute inset-0 bg-blue-600/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10">
                    <div className="flex gap-4">
                      {project.github && (
                        typeof project.github === 'object' ? (
                          <>
                            <a
                              href={project.github.client}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-3 rounded-full bg-gray-900/80 text-white hover:bg-gray-900 transition"
                              title="Client Repository"
                            >
                              <FaGithub size={24} />
                            </a>
                            <a
                              href={project.github.server}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-3 rounded-full bg-gray-900/80 text-white hover:bg-gray-900 transition"
                              title="Server Repository"
                            >
                              <FaGithub size={24} />
                            </a>
                          </>
                        ) : (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-gray-900/80 text-white hover:bg-gray-900 transition"
                          >
                            <FaGithub size={24} />
                          </a>
                        )
                      )}
                      {project.link && project.link !== "#" && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 rounded-full bg-gray-900/80 text-white hover:bg-gray-900 transition"
                        >
                          <FaExternalLinkAlt size={24} />
                        </a>
                      )}
                    </div>
                  </div>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>

              <div className="w-full lg:w-1/2">
                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                <div className="text-gray-400 mb-4">{project.duration}</div>
                <p className="text-gray-300 mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-900/40 text-blue-200 text-sm rounded-full px-3 py-1 border border-blue-700/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.github && (
                    typeof project.github === 'object' ? (
                      <>
                        <a
                          href={project.github.client}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition"
                        >
                          <FaGithub size={18} />
                          Client Code
                        </a>
                        <a
                          href={project.github.server}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition"
                        >
                          <FaGithub size={18} />
                          Server Code
                        </a>
                      </>
                    ) : (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition"
                      >
                        <FaGithub size={18} />
                        View Code
                      </a>
                    )
                  )}
                  {project.link && project.link !== "#" && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition"
                    >
                      <FaExternalLinkAlt size={16} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection; 