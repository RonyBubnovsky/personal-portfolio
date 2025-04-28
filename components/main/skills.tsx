"use client";

import { SKILLS } from "@/constants";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SkillCard from "../sub/skill-card";
import { staggerContainer } from "@/lib/motion";

const SkillsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section 
      id="skills" 
      className="pt-20 pb-24 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 relative overflow-hidden"
    >
      {/* Background gradient elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
      
      {/* Decorative dots */}
      <div className="absolute top-20 left-10 w-20 h-20">
        <div className="grid grid-cols-3 gap-2">
          {[...Array(9)].map((_, i) => (
            <motion.div
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-blue-500/40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              transition={{ 
                delay: i * 0.1, 
                duration: 1, 
                repeat: Infinity, 
                repeatType: "reverse" 
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Decorative dots - right side */}
      <div className="absolute bottom-20 right-10 w-20 h-20">
        <div className="grid grid-cols-3 gap-2">
          {[...Array(9)].map((_, i) => (
            <motion.div
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-purple-500/40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              transition={{ 
                delay: i * 0.1, 
                duration: 1, 
                repeat: Infinity, 
                repeatType: "reverse" 
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-space-grotesk text-white mb-3">
            Technical Skills
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto font-plus-jakarta">
            My technical expertise spans across various technologies and domains, allowing
            me to build comprehensive full-stack applications.
          </p>

          {/* Decorative line */}
          <motion.div 
            className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full"
            initial={{ width: 0, opacity: 0 }}
            animate={inView ? { width: 80, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        <motion.div
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {SKILLS.map((skillCategory, index) => (
            <SkillCard
              key={index}
              title={skillCategory.title}
              technologies={skillCategory.technologies}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection; 