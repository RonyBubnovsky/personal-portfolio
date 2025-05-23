"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motion";
import { SkillIcon } from "@/lib/skill-icons";
import { getCategoryIcon } from "@/constants/skill-icons";
import Tooltip from "./tooltip";
import { useState, useRef } from "react";

interface SkillCardProps {
  title: string;
  technologies: string[];
  index: number;
}

const SkillCard = ({ title, technologies, index }: SkillCardProps) => {
  const CategoryIcon = getCategoryIcon(title);
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  // Array of modern, vibrant colors
  const colors = [
    'rgba(147, 197, 253, 0.6)',    // Soft Blue
    'rgba(167, 139, 250, 0.6)',    // Soft Purple
    'rgba(165, 243, 252, 0.6)',    // Soft Cyan
    'rgba(192, 132, 252, 0.6)',    // Soft Violet
    'rgba(134, 239, 172, 0.6)',    // Soft Emerald
    'rgba(125, 211, 252, 0.6)',    // Soft Sky
    'rgba(186, 230, 253, 0.6)',    // Light Blue
    'rgba(199, 210, 254, 0.6)',    // Soft Indigo
    'rgba(153, 246, 228, 0.6)',    // Soft Teal
    'rgba(196, 181, 253, 0.6)',    // Light Purple
    'rgba(141, 162, 251, 0.6)',    // Cool Blue
    'rgba(172, 224, 249, 0.6)',    // Ice Blue
  ];

  const lineColor = colors[index % colors.length];
  
  // Generate random values for animation
  const randomStart = useRef(-Math.floor(Math.random() * 1000));
  const randomDelay = useRef(-Math.floor(Math.random() * 10));
  
  return (
    <motion.div
      ref={cardRef}
      variants={fadeIn("up", index * 0.1)}
      className="glass-effect rounded-2xl p-6 shadow-2xl backdrop-blur-md border border-gray-700/50 
                 hover:border-transparent transition-all duration-500 group relative
                 hover:bg-gradient-to-br from-gray-900/80 to-gray-800/80
                 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]
                 will-change-transform"
      whileHover={{
        y: -5,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* SVG Border Animation */}
      <svg 
        className="absolute inset-0 w-full h-full pointer-events-none" 
        style={{ 
          zIndex: 5,
          filter: isHovered ? `drop-shadow(0 0 12px ${lineColor}) blur(0.5px)` : 'none',
          transition: "filter 0.5s ease"
        }}
      >
        {/* Thin continuous border line */}
        <rect 
          className="w-full h-full" 
          x="0" 
          y="0" 
          width="100%" 
          height="100%" 
          rx="16" 
          ry="16"
          fill="none" 
          stroke={lineColor}
          strokeWidth="1"
          pathLength="100"
          strokeDasharray="100"
          strokeDashoffset={randomStart.current}
          style={{
            animation: `dashOffset ${isHovered ? '30s' : '60s'} linear ${randomDelay.current}s infinite`,
            transition: "all 0.3s ease",
            filter: isHovered ? `drop-shadow(0 0 3px ${lineColor})` : 'none'
          }}
        />
        
        {/* Additional decorative corner accents */}
        {isHovered && (
          <>
            <circle 
              cx="16" 
              cy="16" 
              r="2" 
              fill={lineColor} 
              style={{
                filter: `drop-shadow(0 0 2px ${lineColor})`,
                animation: "pulse 2s infinite"
              }}
            />
            <circle 
              cx="calc(100% - 16)" 
              cy="16" 
              r="2" 
              fill={lineColor}
              style={{
                filter: `drop-shadow(0 0 2px ${lineColor})`,
                animation: "pulse 2s infinite 0.5s"
              }}
            />
            <circle 
              cx="16" 
              cy="calc(100% - 16)" 
              r="2" 
              fill={lineColor}
              style={{
                filter: `drop-shadow(0 0 2px ${lineColor})`,
                animation: "pulse 2s infinite 1s"
              }}
            />
            <circle 
              cx="calc(100% - 16)" 
              cy="calc(100% - 16)" 
              r="2" 
              fill={lineColor}
              style={{
                filter: `drop-shadow(0 0 2px ${lineColor})`,
                animation: "pulse 2s infinite 1.5s"
              }}
            />
          </>
        )}
      </svg>

      {/* Add keyframes for pulse animation */}
      <style jsx>{`
        @keyframes pulse {
          0% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.5); }
          100% { opacity: 0.4; transform: scale(1); }
        }
      `}</style>
      
      {/* Animated background gradient */}
      <motion.div 
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
          repeatDelay: 0
        }}
      />

      {/* Category icon with enhanced animations */}
      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
        <motion.div 
          className="w-12 h-12 rounded-xl bg-gray-800/90 border border-gray-700 flex items-center justify-center shadow-lg
                     backdrop-blur-sm group-hover:border-blue-500/50"
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: index * 0.1 + 0.3 }}
          whileHover={{ 
            scale: 1.1,
            rotate: [0, 5, -5, 0],
            boxShadow: "0 0 30px rgba(59, 130, 246, 0.4)",
            borderColor: "rgba(59, 130, 246, 0.8)"
          }}
        >
          <CategoryIcon className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300" size={24} />
        </motion.div>
      </div>
      
      {/* Title with enhanced text effects */}
      <motion.h3 
        className="text-xl font-bold text-white mb-4 group-hover:text-blue-300 transition-all duration-300 mt-3 text-center
                   tracking-wide"
        initial={{ opacity: 0.8 }}
        whileHover={{ 
          scale: 1.05,
          letterSpacing: "0.05em",
          textShadow: "0 0 12px rgba(59, 130, 246, 0.6)" 
        }}
      >
        {title}
      </motion.h3>
      
      {/* Technologies grid with staggered animations */}
      <div className="mt-6 grid grid-cols-3 sm:grid-cols-4 gap-4 justify-items-center">
        {technologies.map((tech, i) => (
          <Tooltip key={i} text={tech} position="top">
            <motion.div
              className="skill-icon-container w-10 h-10 flex items-center justify-center
                         bg-gray-800/50 rounded-lg border border-gray-700/50
                         hover:border-blue-500/50 hover:bg-gray-700/50
                         will-change-transform"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                transition: { delay: 0.1 + i * 0.03 }
              }}
              whileHover={{
                scale: 1.1,
                transition: {
                  duration: 0.2,
                  ease: "easeOut"
                }
              }}
            >
              <SkillIcon 
                name={tech} 
                size={24} 
                className="text-gray-300 group-hover:text-blue-300 transition-colors duration-300" 
              />
            </motion.div>
          </Tooltip>
        ))}
      </div>

      {/* Simplified decorative elements */}
      <div 
        className="absolute -z-10 right-3 bottom-3 w-16 h-16 rounded-full bg-blue-500/5 opacity-30"
      />
      <div 
        className="absolute -z-10 left-3 top-3 w-12 h-12 rounded-full bg-purple-500/5 opacity-20"
      />
    </motion.div>
  );
};

export default SkillCard; 