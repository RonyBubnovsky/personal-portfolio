"use client";

import React from "react";
import { WORK_EXPERIENCE, EDUCATION } from "@/constants";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useRef, useState } from "react";
import { HiOutlineBriefcase, HiOutlineAcademicCap } from "react-icons/hi";
import { RiArrowRightLine } from "react-icons/ri";

// Define types for work and education items
type WorkExperienceItem = {
  title: string;
  company: string;
  duration: string;
  description: string;
};

type EducationItem = {
  degree: string;
  institution: string;
  duration: string;
  gpa?: string;
  description: string;
};

type TimelineItem = WorkExperienceItem | EducationItem;

const ExperienceSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  
  const [activeTab, setActiveTab] = useState<"work" | "education">("education");
  const [expandedItem, setExpandedItem] = useState<number | null>(null);
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.4, 1, 1, 0.4]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);
  
  const [headingRef, headingInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleItemClick = (index: number): void => {
    if (expandedItem === index) {
      setExpandedItem(null);
    } else {
      setExpandedItem(index);
    }
  };

  const renderTimelineItem = (item: TimelineItem, index: number, type: "work" | "education"): React.ReactNode => {
    const isExpanded = expandedItem === index;
    const isWork = type === "work";
    // Make education items and specifically Student Tutor non-expandable
    const isStudentTutor = isWork && (item as WorkExperienceItem).title === "Student Tutor";
    const isExpandable = isWork && !isStudentTutor;
    
    return (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.6, 
          delay: 0.1 * index,
          type: "spring",
          stiffness: 100
        }}
        onClick={() => isExpandable && handleItemClick(index)}
        className={`
          relative backdrop-blur-sm bg-gray-800/70 p-6 md:p-8 rounded-2xl
          border border-gray-700/50 shadow-xl hover:shadow-blue-500/10
          transform transition-all duration-300
          ${isExpanded ? 'md:col-span-2 scale-[1.02]' : ''}
          ${isExpanded ? 'shadow-lg shadow-blue-500/20' : ''}
          hover:border-blue-500/50 ${isExpandable ? 'cursor-pointer' : 'cursor-default'}
          group
        `}
        style={{ 
          perspective: "1000px",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="flex flex-col md:flex-row gap-4 items-start">
          <div className={`bg-gradient-to-br ${isWork ? 'from-blue-600 to-blue-400' : 'from-purple-600 to-purple-400'} p-3 rounded-xl text-white shadow-lg`}>
            {isWork ? <HiOutlineBriefcase className="text-2xl" /> : <HiOutlineAcademicCap className="text-2xl" />}
          </div>
          
          <div className="flex-1">
            <h4 className="text-xl md:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
              {isWork ? (item as WorkExperienceItem).title : (item as EducationItem).degree}
            </h4>
            <p className="text-blue-400 font-medium mb-1">
              {isWork ? (item as WorkExperienceItem).company : (item as EducationItem).institution}
            </p>
            <p className="text-gray-400 text-sm md:text-base mb-3">{item.duration}</p>
            
            {!isWork && 'gpa' in item && item.gpa && (
              <div className="inline-block bg-green-900/30 px-3 py-1 rounded-full text-green-400 text-sm mb-3">
                GPA: {item.gpa}
              </div>
            )}
            
            <div className={`
              overflow-hidden transition-all duration-500 ease-in-out
              ${isExpanded ? 'max-h-96 opacity-100' : ''}
              ${isExpandable ? (isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 md:max-h-20 opacity-70') : 'max-h-96 opacity-100'}
            `}>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
          
          {isExpandable && (
            <motion.div 
              animate={{ rotate: isExpanded ? 90 : 0 }}
              className="text-blue-400 hidden md:block"
            >
              <RiArrowRightLine size={24} />
            </motion.div>
          )}
        </div>
        
        {isExpandable && !isExpanded && (
          <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 text-sm text-blue-400 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
            <span>Read more</span>
            <RiArrowRightLine />
          </div>
        )}
      </motion.div>
    );
  };

  return (
    <section 
      id="experience" 
      className="py-20 md:py-32 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 overflow-hidden"
      ref={containerRef}
    >
      <motion.div 
        style={{ opacity, scale }}
        className="container mx-auto px-4"
      >
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 40 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ 
            duration: 0.8, 
            type: "spring",
            stiffness: 100 
          }}
          className="text-center mb-16 md:mb-24"
        >
          <div className="inline-block mb-4 px-4 py-1 bg-blue-500/10 rounded-full">
            <span className="text-blue-400 font-medium">My Journey</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Experience & Education
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            My professional journey and educational background that have shaped my skills and expertise.
          </p>
        </motion.div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-gray-800/50 p-1.5 rounded-xl backdrop-blur-sm border border-gray-700/30">
            <button
              onClick={() => setActiveTab("work")}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === "work" 
                  ? "bg-blue-500 text-white shadow-lg" 
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <span className="flex items-center gap-2">
                <HiOutlineBriefcase /> Work
              </span>
            </button>
            <button
              onClick={() => setActiveTab("education")}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === "education" 
                  ? "bg-blue-500 text-white shadow-lg" 
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <span className="flex items-center gap-2">
                <HiOutlineAcademicCap /> Education
              </span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {activeTab === "work" && 
            WORK_EXPERIENCE.map((job, index) => 
              renderTimelineItem(job as WorkExperienceItem, index, "work")
            )
          }
          
          {activeTab === "education" && 
            EDUCATION.map((edu, index) => 
              renderTimelineItem(edu as EducationItem, index, "education")
            )
          }
        </div>
      </motion.div>
    </section>
  );
};

export default ExperienceSection; 