"use client";
import { PERSONAL_INFO, SOCIAL_LINKS } from "@/constants";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaReact, FaNodeJs, FaPhoneAlt, FaUser } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiExpress, SiMongodb, SiTailwindcss } from "react-icons/si";
import { useState, useEffect } from "react";
import { textVariant, fadeIn } from "@/lib/motion";
import Image from "next/image";

// Array of roles to rotate through
const roles = ["Full Stack Developer", "Software Engineer", "Problem Solver", "Web Craftsman"];

const HeroSection = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [roleHeight, setRoleHeight] = useState(48);
  const [hoveredIcon, setHoveredIcon] = useState<number | null>(null);
  const [isProfileHovered, setIsProfileHovered] = useState(false);
  
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

  // Close tooltip when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setHoveredIcon(null);
    };
    
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
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
              <motion.h1 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white font-playfair"
                variants={textVariant(0.1)}
              >
                Hi, I&apos;m {PERSONAL_INFO.name} <br className="hidden sm:block" />
                <motion.div 
                  className="mt-4 md:mt-6 inline-block relative"
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                >
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-indigo-400 to-blue-600 relative z-10 font-bold">
                    Full Stack Developer
                  </span>
                  
                  {/* Animated underline */}
                  <motion.span 
                    className="absolute -bottom-1 left-0 h-[3px] bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-400 rounded-full"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                </motion.div>
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
                      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium text-gray-400 font-montserrat">
                        <span className="text-blue-500">&lt;</span> {role} <span className="text-blue-500">/&gt;</span>
                      </h2>
                    </div>
                  ))}
                </motion.div>
              </motion.div>
              
              <motion.p 
                className="text-sm sm:text-base md:text-lg text-gray-400 max-w-xl font-inter"
                variants={fadeIn("up", 0.3)}
              >
                {PERSONAL_INFO.description}
              </motion.p>
              
              {/* Tech stack icons */}
              <motion.div 
                className="flex flex-wrap gap-2 sm:gap-3 items-center"
                variants={fadeIn("up", 0.4)}
              >
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
                    { icon: <SiJavascript className="text-yellow-400" />, label: "JavaScript", bgClass: "bg-yellow-900/20 border-yellow-700/30" },
                    { icon: <SiTypescript className="text-blue-500" />, label: "TypeScript", bgClass: "bg-blue-900/20 border-blue-700/30" },
                    { icon: <FaReact className="text-cyan-400" />, label: "React", bgClass: "bg-cyan-900/20 border-cyan-700/30" },
                    { icon: <SiTailwindcss className="text-cyan-500" />, label: "Tailwind CSS", bgClass: "bg-cyan-900/20 border-cyan-700/30" },
                    { icon: <FaNodeJs className="text-green-500" />, label: "Node.js", bgClass: "bg-green-900/20 border-green-700/30" },
                    { icon: <SiExpress className="text-gray-200" />, label: "Express.js", bgClass: "bg-gray-800/40 border-gray-700/30" },
                    { icon: <SiMongodb className="text-green-500" />, label: "MongoDB", bgClass: "bg-green-900/20 border-green-700/30" },
                  ].map((tech, i) => (
                    <div key={i} className="relative" style={{ display: 'inline-block' }}>
                      <motion.div
                        className={`flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-lg ${tech.bgClass} cursor-pointer overflow-hidden`}
                        variants={{
                          hidden: { y: 20, opacity: 0 },
                          show: { y: 0, opacity: 1 },
                        }}
                        whileHover={{ y: -5, scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onHoverStart={() => setHoveredIcon(i)}
                        onHoverEnd={() => setHoveredIcon(null)}
                        onTap={() => setHoveredIcon(hoveredIcon === i ? null : i)}
                      >
                        <div className="text-lg sm:text-xl">{tech.icon}</div>
                      </motion.div>
                      
                      {hoveredIcon === i && (
                        <div className="absolute w-auto bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs font-medium bg-gray-800 text-white rounded-md shadow-lg whitespace-nowrap z-50">
                          {tech.label}
                          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-800 rotate-45"></div>
                        </div>
                      )}
                    </div>
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
                  className="group flex items-center gap-2 py-2.5 sm:py-3 px-5 sm:px-7 rounded-xl bg-gray-800/70 backdrop-blur-sm text-white border border-gray-700/50 hover:border-gray-600 transition-all duration-300 text-sm sm:text-base font-poppins relative overflow-hidden shadow-lg"
                  whileHover={{ 
                    y: -5, 
                    boxShadow: "0 15px 30px -10px rgba(0, 0, 0, 0.4)" 
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-gray-800 to-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                  <FaGithub className="text-lg relative z-10" />
                  <span className="relative z-10">GitHub</span>
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300 ease-out" />
                </motion.a>
                
                <motion.a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 py-2.5 sm:py-3 px-5 sm:px-7 rounded-xl bg-gradient-to-r from-blue-600/90 to-blue-500/90 backdrop-blur-sm text-white border border-blue-500/20 transition-all duration-300 text-sm sm:text-base font-poppins relative overflow-hidden shadow-lg"
                  whileHover={{ 
                    y: -5, 
                    boxShadow: "0 15px 30px -10px rgba(59, 130, 246, 0.4)"
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                  <FaLinkedin className="text-lg relative z-10" />
                  <span className="relative z-10">LinkedIn</span>
                  <motion.span 
                    className="absolute inset-0 rounded-xl border border-white/20 z-0"
                    animate={{ 
                      boxShadow: ["0 0 0px 0px rgba(255,255,255,0.2)", "0 0 8px 3px rgba(255,255,255,0)", "0 0 0px 0px rgba(255,255,255,0.2)"]
                    }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 2.5 
                    }}
                  />
                </motion.a>
                
                <motion.a
                  href="#projects"
                  className="group flex items-center gap-2 py-2.5 sm:py-3 px-5 sm:px-7 rounded-xl bg-transparent backdrop-blur-sm text-blue-400 border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 text-sm sm:text-base font-poppins relative overflow-hidden"
                  whileHover={{ 
                    y: -5,
                    boxShadow: "0 15px 30px -15px rgba(59, 130, 246, 0.3)"
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="absolute inset-0 w-full h-full bg-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                  <span className="relative z-10">View Projects</span>
                  <svg className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 7L18 12M18 12L13 17M18 12H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-400 group-hover:w-full transition-all duration-300 ease-out" />
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
              <div 
                className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 relative rounded-full border-2 border-gray-800 p-2 bg-gray-900/50 backdrop-blur-sm"
              >
                {/* Rotating border effect */}
                <div className="absolute inset-0 -z-10">
                  <div className="w-full h-full rounded-full bg-transparent border-4 border-transparent border-t-blue-500 border-r-purple-500 animate-[spin_8s_linear_infinite]" />
                </div>
                
                {/* Profile image */}
                <div 
                  className="w-full h-full rounded-full overflow-hidden flex items-center justify-center border border-gray-700/50 relative group cursor-pointer"
                  onMouseEnter={() => setIsProfileHovered(true)}
                  onMouseLeave={() => setIsProfileHovered(false)}
                  onClick={() => setIsProfileHovered(!isProfileHovered)}
                >
                  <Image 
                    src="/images/profileImage.png" 
                    alt="Profile Image"
                    width={320}
                    height={320}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110 group-hover:filter group-hover:brightness-50"
                    priority
                  />
                  
                  {/* Modern hover overlay with contact info - now visible on all devices */}
                  <div 
                    className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-300 z-20"
                    style={{ opacity: isProfileHovered ? 1 : 0 }}
                  >
                    <div
                      className="bg-gray-900/80 backdrop-blur-sm rounded-2xl p-4 w-[80%] border border-blue-500/30 flex flex-col gap-3"
                      style={{ 
                        transform: isProfileHovered ? 'scale(1) translateY(0)' : 'scale(0.8) translateY(20px)',
                        transition: 'transform 0.3s'
                      }}
                    >
                      <div 
                        className="flex items-center gap-2 text-white"
                        style={{ 
                          transform: isProfileHovered ? 'translateX(0)' : 'translateX(-10px)',
                          opacity: isProfileHovered ? 1 : 0,
                          transition: 'transform 0.3s, opacity 0.3s',
                          transitionDelay: '0.1s'
                        }}
                      >
                        <div className="bg-blue-500/20 p-1.5 rounded-full flex-shrink-0">
                          <FaUser className="text-blue-400 text-xs sm:text-sm" />
                        </div>
                        <span className="font-medium text-xs sm:text-sm">{PERSONAL_INFO.name}</span>
                      </div>
                      
                      <div 
                        className="flex items-center gap-2 text-white"
                        style={{ 
                          transform: isProfileHovered ? 'translateX(0)' : 'translateX(-10px)',
                          opacity: isProfileHovered ? 1 : 0,
                          transition: 'transform 0.3s, opacity 0.3s',
                          transitionDelay: '0.2s'
                        }}
                      >
                        <div className="bg-green-500/20 p-1.5 rounded-full flex-shrink-0">
                          <FaPhoneAlt className="text-green-400 text-xs sm:text-sm" />
                        </div>
                        <span className="font-medium text-xs sm:text-sm">+972508465858</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Background particles effect on hover - visible on all devices */}
                {isProfileHovered && (
                  <div className="absolute inset-0 -z-5">
                    {[...Array(10)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-blue-500 rounded-full"
                        initial={{ 
                          x: Math.random() * 100 - 50, 
                          y: Math.random() * 100 - 50,
                          opacity: 0
                        }}
                        animate={{ 
                          x: Math.random() * 200 - 100, 
                          y: Math.random() * 200 - 100,
                          opacity: [0, 1, 0]
                        }}
                        transition={{ 
                          duration: 1.5 + Math.random() * 2,
                          repeat: Infinity,
                          repeatType: "loop"
                        }}
                        style={{
                          left: `${50 + Math.random() * 50 - 25}%`,
                          top: `${50 + Math.random() * 50 - 25}%`,
                        }}
                      />
                    ))}
                  </div>
                )}
          
                {/* Floating code snippets - now visible on all screen sizes with responsive positioning */}
                <motion.div 
                  className="absolute bottom-[-2rem] md:bottom-[-3rem] left-[-3rem] md:left-[-5rem] lg:left-[-6rem] p-2 sm:p-3 bg-gray-800/90 backdrop-blur-sm rounded-lg border border-gray-700/50 shadow-xl w-24 sm:w-28 text-[8px] sm:text-xs font-mono z-20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 }}
                >
                  <div className="text-gray-400">
                    <span className="text-blue-400">const</span> <span className="text-green-400">developer</span> = <span className="text-yellow-500">true</span>;
                  </div>
                </motion.div>
                
                <motion.div 
                  className="absolute top-[-2rem] md:top-[-3rem] left-[-2rem] md:left-[-3rem] lg:left-[-4rem] p-2 sm:p-3 bg-gray-800/90 backdrop-blur-sm rounded-lg border border-gray-700/50 shadow-xl w-20 sm:w-24 text-[8px] sm:text-xs font-mono z-20"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4 }}
                >
                  <div className="text-gray-400">
                    <span className="text-purple-400">function</span> <span className="text-green-400">code</span>() &#123;
                  </div>
                </motion.div>

                {/* New floating code snippets on right side */}
                <motion.div 
                  className="absolute top-[-2rem] md:top-[-3rem] right-[-2rem] md:right-[-3rem] lg:right-[-4rem] p-2 sm:p-3 bg-gray-800/90 backdrop-blur-sm rounded-lg border border-gray-700/50 shadow-xl w-24 sm:w-28 text-[8px] sm:text-xs font-mono z-20"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.6 }}
                >
                  <div className="text-gray-400">
                    <span className="text-pink-400">import</span> &#123; <span className="text-green-400">creativity</span> &#125;
                  </div>
                </motion.div>
                
                <motion.div 
                  className="absolute bottom-[-2rem] md:bottom-[-3rem] right-[-3rem] md:right-[-5rem] lg:right-[-6rem] p-2 sm:p-3 bg-gray-800/90 backdrop-blur-sm rounded-lg border border-gray-700/50 shadow-xl w-28 sm:w-32 text-[8px] sm:text-xs font-mono z-20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.8 }}
                >
                  <div className="text-gray-400">
                    <span className="text-orange-400">return</span> <span className="text-blue-400">&lt;</span><span className="text-green-400">Solution</span><span className="text-blue-400">/&gt;</span>
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
          <span className="text-gray-500 text-sm mb-2 font-inter">Scroll to explore</span>
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