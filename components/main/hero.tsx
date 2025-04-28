"use client";
import { PERSONAL_INFO, SOCIAL_LINKS } from "@/constants";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const HeroSection = () => {
  return (
    <section className="relative flex h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-black to-gray-900 pt-20">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,38,44,0.8)_0,rgba(2,6,23,0.6)_70%)]" />
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[length:20px_20px] [background-image:linear-gradient(to_right,#113966_1px,transparent_1px),linear-gradient(to_bottom,#113966_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_60%)]" />
      </div>

      <div className="container relative z-10 mx-auto flex flex-col md:flex-row items-center px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center md:text-left md:pr-10"
        >
          <h1 className="mb-2 text-4xl font-bold sm:text-5xl md:text-6xl text-white">
            Hi, I'm <span className="text-blue-500">{PERSONAL_INFO.name}</span>
          </h1>
          
          <h2 className="mb-6 text-xl md:text-2xl font-medium text-gray-300">
            {PERSONAL_INFO.title}
          </h2>
          
          <p className="mb-8 max-w-2xl text-base text-gray-400">
            {PERSONAL_INFO.description}
          </p>
          
          <div className="mb-10 flex flex-wrap items-center justify-center md:justify-start gap-4">
            <a 
              href={SOCIAL_LINKS.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-white hover:bg-blue-700 transition"
            >
              <FaGithub size={20} />
              GitHub
            </a>
            
            <a 
              href={SOCIAL_LINKS.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-gray-800 px-6 py-3 text-white hover:bg-gray-700 transition"
            >
              <FaLinkedin size={20} />
              LinkedIn
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 relative w-full max-w-sm md:max-w-md py-8 md:py-0"
        >
          <div className="relative mx-auto h-64 w-64 sm:h-80 sm:w-80 overflow-hidden rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 p-1">
            <div className="absolute inset-0 z-0 animate-pulse bg-gradient-to-r from-blue-500 to-purple-500 opacity-30 blur-lg" />
            {/* Replace with your actual image */}
            <div className="relative h-full w-full rounded-full bg-gray-800 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                {/* You can replace this with your profile image */}
                <span className="text-6xl">RB</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection; 