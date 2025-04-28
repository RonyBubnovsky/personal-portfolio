"use client";

import { motion } from "framer-motion";
import { fadeIn, hoverScale, pulseAnimation } from "@/lib/motion";
import { SkillIcon } from "@/lib/skill-icons";
import { getCategoryIcon } from "@/constants/skill-icons";
import Tooltip from "./tooltip";

interface SkillCardProps {
  title: string;
  technologies: string[];
  index: number;
}

const SkillCard = ({ title, technologies, index }: SkillCardProps) => {
  // Get the category icon component
  const CategoryIcon = getCategoryIcon(title);
  
  return (
    <motion.div
      variants={fadeIn("up", index * 0.1)}
      className="glass-effect rounded-xl p-6 shadow-xl backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300 group relative"
    >
      {/* Category icon at the top */}
      <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
        <motion.div 
          className="w-10 h-10 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center shadow-lg"
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: index * 0.1 + 0.3 }}
          whileHover={{ 
            y: -3, 
            boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)",
            borderColor: "rgba(59, 130, 246, 0.8)"
          }}
        >
          <CategoryIcon className="text-blue-400" size={20} />
        </motion.div>
      </div>
      
      <motion.h3 
        className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors mt-2 text-center"
        initial={{ opacity: 0.8 }}
        whileHover={{ 
          scale: 1.05, 
          color: "rgb(96, 165, 250)",
          textShadow: "0 0 8px rgba(59, 130, 246, 0.5)" 
        }}
      >
        {title}
      </motion.h3>
      
      <div className="mt-4 flex flex-wrap gap-4 justify-center">
        {technologies.map((tech, i) => (
          <Tooltip key={i} text={tech} position="top">
            <motion.div
              className="skill-icon-container w-8 h-8 flex items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                transition: { delay: index * 0.05 + i * 0.05 }
              }}
              whileHover={hoverScale}
              whileTap={{ scale: 0.95 }}
            >
              <SkillIcon name={tech} size={24} className="text-gray-300 group-hover:text-blue-400 transition-colors" />
            </motion.div>
          </Tooltip>
        ))}
      </div>

      {/* Decorative elements */}
      <motion.div 
        className="absolute -z-10 right-2 bottom-2 w-12 h-12 rounded-full bg-blue-500/10"
        animate={pulseAnimation}
      />
    </motion.div>
  );
};

export default SkillCard; 