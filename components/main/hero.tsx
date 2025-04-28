"use client";
import { PERSONAL_INFO, SOCIAL_LINKS } from "@/constants";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineCode, HiOutlineDatabase } from "react-icons/hi";
import { RiStackLine } from "react-icons/ri";
import { useState, useEffect } from "react";
import { textVariant, fadeIn } from "@/lib/motion";
import Image from "next/image";

// Array of roles to rotate through
const roles = ["Full Stack Developer", "Software Engineer", "Problem Solver", "Web Craftsman"];

const HeroSection = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [roleHeight, setRoleHeight] = useState(48);
  
  // Update role height based on screen size
  useEffect(() => {
    const updateRoleHeight = () => {
      // Set heights based on current screen width
      if (window.innerWidth < 640) {
        setRoleHeight(48); // small screens
      } else if (window.innerWidth < 768) {
        setRoleHeight(64); // medium screens
      } else {
        setRoleHeight(80); // large screens
      }
    };
    
    // Initial calculation
    updateRoleHeight();
    
    // Update on resize
    window.addEventListener('resize', updateRoleHeight);
    return () => window.removeEventListener('resize', updateRoleHeight);
  }, []);
  
  // Change role every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden px-4 sm:px-6 pt-16 sm:pt-20" id="about">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,38,44,0.3)_0,rgba(2,6,23,0.6)_100%)]" />
        
        {/* Grid background */}
        <div className="absolute inset-0 bg-[length:50px_50px] [background-image:linear-gradient(to_right,rgba(17,57,102,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(17,57,102,0.1)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black_75%)]" />
        
        {/* Floating objects - visible only on larger screens */}
        <motion.div 
          className="absolute w-64 h-64 rounded-full bg-blue-500/5 blur-3xl hidden md:block"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 15,
            ease: "easeInOut",
          }}
          style={{ top: '20%', right: '15%' }}
        />
        
        <motion.div 
          className="absolute w-72 h-72 rounded-full bg-purple-500/5 blur-3xl hidden md:block"
          animate={{
            x: [0, -40, 0],
            y: [0, 50, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 18,
            ease: "easeInOut",
          }}
          style={{ bottom: '15%', left: '10%' }}
        />
      </div>
      
      <div className="container mx-auto py-12 md:py-20 z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-16 lg:gap-24">
          {/* Left column - Text content */}
          <div className="w-full lg:w-3/5">
            <motion.div 
              className="space-y-4 sm:space-y-6 md:space-y-8"
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: {
                  transition: {
                    staggerChildren: 0.2,
                  },
                },
              }}
            >
              <motion.div variants={fadeIn("up", 0)}>
                <span className="inline-block py-1 px-3 text-xs font-medium bg-blue-900/30 text-blue-400 rounded-full border border-blue-800/50 mb-4">
                  Hello, I&apos;m {PERSONAL_INFO.name}
                </span>
              </motion.div>
              
              <motion.h1 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white"
                variants={textVariant(0.1)}
              >
                I build <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">exceptional</span> web experiences
              </motion.h1>
              
              <motion.div 
                className="h-12 sm:h-16 md:h-20 overflow-hidden relative"
                variants={fadeIn("up", 0.2)}
              >
                <motion.div
                  className="absolute w-full"
                  animate={{ y: -currentRoleIndex * roleHeight }}
                  transition={{ duration: 0.5 }}
                >
                  {roles.map((role, index) => (
                    <div 
                      key={index} 
                      className="h-12 sm:h-16 md:h-20 flex items-center"
                    >
                      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium text-gray-400">
                        <span className="text-blue-500">&lt;</span> {role} <span className="text-blue-500">/&gt;</span>
                      </h2>
                    </div>
                  ))}
                </motion.div>
              </motion.div>
              
              <motion.p 
                className="text-sm sm:text-base md:text-lg text-gray-400 max-w-xl"
                variants={fadeIn("up", 0.3)}
              >
                {PERSONAL_INFO.description}
              </motion.p>
              
              {/* Tech stack icons */}
              <motion.div 
                className="flex flex-wrap gap-2 sm:gap-3 items-center"
                variants={fadeIn("up", 0.4)}
              >
                <span className="text-gray-500 text-sm">Tech Stack:</span>
                <motion.div 
                  className="flex gap-2 sm:gap-3"
                  variants={{
                    hidden: { opacity: 0 },
                    show: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.1,
                      },
                    },
                  }}
                >
                  {[
                    { icon: <HiOutlineCode />, label: "Frontend", color: "blue" },
                    { icon: <HiOutlineDatabase />, label: "Backend", color: "purple" },
                    { icon: <RiStackLine />, label: "Full Stack", color: "green" },
                  ].map((tech, i) => (
                    <motion.span
                      key={i}
                      className={`flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-${tech.color}-900/20 text-${tech.color}-400 border border-${tech.color}-700/30`}
                      variants={{
                        hidden: { y: 20, opacity: 0 },
                        show: { y: 0, opacity: 1 },
                      }}
                      whileHover={{ y: -5, scale: 1.1 }}
                    >
                      {tech.icon}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
              
              <motion.div 
                className="flex flex-wrap gap-3 sm:gap-5"
                variants={fadeIn("up", 0.5)}
              >
                <motion.a
                  href={SOCIAL_LINKS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 py-2 sm:py-3 px-4 sm:px-6 rounded-full bg-gray-800 text-white border border-gray-700 hover:bg-gray-700 transition-all text-sm sm:text-base"
                  whileHover={{ y: -5, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaGithub className="text-lg" />
                  <span>GitHub</span>
                </motion.a>
                
                <motion.a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 py-2 sm:py-3 px-4 sm:px-6 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:from-blue-700 hover:to-blue-600 transition-all shadow-lg shadow-blue-900/20 text-sm sm:text-base"
                  whileHover={{ y: -5, scale: 1.02, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.3)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaLinkedin className="text-lg" />
                  <span>LinkedIn</span>
                </motion.a>
                
                <motion.a
                  href="#projects"
                  className="flex items-center gap-2 py-2 sm:py-3 px-4 sm:px-6 rounded-full bg-transparent text-blue-400 border border-blue-500/30 hover:bg-blue-900/20 transition-all text-sm sm:text-base"
                  whileHover={{ y: -5, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>View Projects</span>
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 7L18 12M18 12L13 17M18 12H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
          
          {/* Right column - Visual element */}
          <motion.div 
            className="w-full sm:w-4/5 md:w-3/4 lg:w-2/5 relative flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="relative max-w-[280px] md:max-w-[320px]">
              {/* Glowing background effect */}
              <div className="absolute inset-0 -z-10 animate-pulse">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl" />
              </div>
              
              {/* Profile container */}
              <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 relative rounded-full border-2 border-gray-800 p-2 bg-gray-900/50 backdrop-blur-sm">
                {/* Rotating border effect */}
                <div className="absolute inset-0 -z-10">
                  <div className="w-full h-full rounded-full bg-transparent border-4 border-transparent border-t-blue-500 border-r-purple-500 animate-[spin_8s_linear_infinite]" />
                </div>
                
                {/* Profile image */}
                <div className="w-full h-full rounded-full overflow-hidden flex items-center justify-center border border-gray-700/50">
                  <Image 
                    src="/images/profileImage.png" 
                    alt="Profile Image"
                    width={320}
                    height={320}
                    className="object-cover w-full h-full"
                    priority
                  />
                </div>
          
                {/* Floating code snippets - responsive and hidden on smallest screens */}
                <motion.div 
                  className="absolute bottom-[-3rem] left-[-5rem] sm:left-[-6rem] md:left-[-8rem] p-2 sm:p-3 bg-gray-800/90 backdrop-blur-sm rounded-lg border border-gray-700/50 shadow-xl w-28 sm:w-32 text-[10px] sm:text-xs font-mono z-10 hidden sm:block"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 }}
                >
                  <div className="text-gray-400">
                    <span className="text-blue-400">const</span> <span className="text-green-400">developer</span> = <span className="text-yellow-500">true</span>;
                  </div>
                </motion.div>
                
                <motion.div 
                  className="absolute top-[-3rem] left-[-3rem] sm:left-[-4rem] md:left-[-6rem] p-2 sm:p-3 bg-gray-800/90 backdrop-blur-sm rounded-lg border border-gray-700/50 shadow-xl w-24 sm:w-28 text-[10px] sm:text-xs font-mono z-10 hidden sm:block"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4 }}
                >
                  <div className="text-gray-400">
                    <span className="text-purple-400">function</span> <span className="text-green-400">code</span>() &#123;
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll indicator - hidden on small screens */}
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center hidden md:flex"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <span className="text-gray-500 text-sm mb-2">Scroll to explore</span>
          <motion.div
            className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center p-1"
            initial={{ y: 0 }}
          >
            <motion.div 
              className="w-1.5 h-1.5 bg-blue-500 rounded-full"
              animate={{ 
                y: [0, 12, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection; 