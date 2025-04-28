"use client";

import { WORK_EXPERIENCE, EDUCATION } from "@/constants";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { HiOutlineBriefcase, HiOutlineAcademicCap } from "react-icons/hi";

const ExperienceSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Experience & Education
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            My professional journey and educational background that have shaped my skills and expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl font-bold text-white mb-8 flex items-center"
            >
              <HiOutlineBriefcase className="text-blue-500 mr-3 text-3xl" />
              Work Experience
            </motion.h3>

            <div className="space-y-8">
              {WORK_EXPERIENCE.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="bg-gray-800 p-6 rounded-lg border-l-4 border-blue-500"
                >
                  <h4 className="text-xl font-bold text-white">{job.title}</h4>
                  <p className="text-blue-400 mb-2">{job.company}</p>
                  <p className="text-gray-500 mb-4">{job.duration}</p>
                  <p className="text-gray-300">{job.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl font-bold text-white mb-8 flex items-center"
            >
              <HiOutlineAcademicCap className="text-blue-500 mr-3 text-3xl" />
              Education
            </motion.h3>

            <div className="space-y-8">
              {EDUCATION.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="bg-gray-800 p-6 rounded-lg border-l-4 border-blue-500"
                >
                  <h4 className="text-xl font-bold text-white">{edu.degree}</h4>
                  <p className="text-blue-400 mb-2">{edu.institution}</p>
                  <p className="text-gray-500 mb-2">{edu.duration}</p>
                  {edu.gpa && (
                    <p className="text-green-400 mb-4">GPA: {edu.gpa}</p>
                  )}
                  <p className="text-gray-300">{edu.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection; 