"use client";

import { PERSONAL_INFO, SOCIAL_LINKS, LANGUAGES } from "@/constants";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useRef } from "react";
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker, HiChevronRight } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { SiGooglemaps } from "react-icons/si";
import Link from "next/link";

const ContactSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.4, 1, 1, 0.4]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  const contactInfo = [
    {
      id: 'email',
      title: 'Email',
      value: PERSONAL_INFO.email,
      icon: <HiOutlineMail className="text-3xl" />,
      colorClass: 'from-blue-600 to-blue-400',
      action: handleCopyEmail,
      actionText: copied ? "Copied!" : "Copy",
      link: `mailto:${PERSONAL_INFO.email}`
    },
    {
      id: 'phone',
      title: 'Phone',
      value: PERSONAL_INFO.phone,
      icon: <HiOutlinePhone className="text-3xl" />,
      colorClass: 'from-green-600 to-green-400',
      link: `tel:${PERSONAL_INFO.phone}`
    },
    {
      id: 'location',
      title: 'Location',
      value: PERSONAL_INFO.location,
      icon: <HiOutlineLocationMarker className="text-3xl" />,
      colorClass: 'from-purple-600 to-purple-400',
      link: `https://www.google.com/maps/search/${encodeURIComponent(PERSONAL_INFO.location)}`
    },
  ];

  const socialLinks = [
    {
      id: 'github',
      label: 'GitHub',
      url: SOCIAL_LINKS.github,
      icon: <FaGithub size={22} />,
      color: 'hover:text-white',
      bgHover: 'group-hover:bg-gray-800'
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      url: SOCIAL_LINKS.linkedin,
      icon: <FaLinkedin size={22} />,
      color: 'hover:text-blue-400',
      bgHover: 'group-hover:bg-blue-900/20'
    },
    {
      id: 'email',
      label: 'Email',
      url: `mailto:${PERSONAL_INFO.email}`,
      icon: <FaEnvelope size={20} />,
      color: 'hover:text-green-400',
      bgHover: 'group-hover:bg-green-900/20'
    },
    {
      id: 'phone',
      label: 'Phone',
      url: `tel:${PERSONAL_INFO.phone}`,
      icon: <FaPhoneAlt size={18} />,
      color: 'hover:text-purple-400',
      bgHover: 'group-hover:bg-purple-900/20'
    }
  ];

  return (
    <section 
      id="contact" 
      className="py-20 md:py-32 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 overflow-hidden"
      ref={containerRef}
    >
      <motion.div 
        style={{ opacity, scale }}
        className="container mx-auto px-4"
      >
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ 
            duration: 0.8, 
            type: "spring",
            stiffness: 100 
          }}
          className="text-center mb-16 md:mb-24"
        >
          <div className="inline-block mb-4 px-4 py-1 bg-blue-500/10 rounded-full">
            <span className="text-blue-400 font-medium">Contact Me</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Let&apos;s Work Together
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            Feel free to reach out for collaborations, questions, or just to say hello!
          </p>
        </motion.div>

        {/* Contact Cards */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20"
        >
          {contactInfo.map((item) => (
            <Link 
              href={item.link}
              key={item.id}
              target={item.id === 'location' ? "_blank" : undefined}
              rel={item.id === 'location' ? "noopener noreferrer" : undefined}
            >
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 h-full shadow-xl hover:shadow-blue-900/20 hover:border-blue-500/30 transition-all duration-300 group"
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800/50 to-gray-900/50 opacity-100 group-hover:opacity-80 transition-opacity duration-300" />
                
                {/* Animated background glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent -z-10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 animate-glow" />

                <div className="p-8 flex flex-col h-full relative z-10">
                  <div className={`w-14 h-14 rounded-2xl mb-6 flex items-center justify-center bg-gradient-to-br ${item.colorClass} text-white`}>
                    {item.icon}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-300 flex-grow mb-4">{item.value}</p>
                  
                  <div className="mt-auto flex items-center text-blue-400 font-medium">
                    {item.action ? (
                      <button 
                        onClick={(e) => {
                          e.preventDefault();
                          item.action();
                        }}
                        className="flex items-center gap-1 group-hover:gap-2 transition-all duration-300"
                      >
                        {item.actionText}
                        <HiChevronRight className="transition-transform group-hover:translate-x-1" />
                      </button>
                    ) : (
                      <span className="flex items-center gap-1 group-hover:gap-2 transition-all duration-300">
                        Connect
                        <HiChevronRight className="transition-transform group-hover:translate-x-1" />
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>

        {/* Two Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Languages Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gray-800/30 backdrop-blur-md rounded-2xl p-8 border border-gray-700/50"
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <div className="p-2 bg-blue-900/30 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7 2a1 1 0 011 1v1h3a1 1 0 110 2H9.20l-1 2H11a1 1 0 110 2H8.2l-1 2H10a1 1 0 110 2H7.2l-.4.8A1 1 0 016 14H3a1 1 0 01-.8-1.6L4.8 8 2.4 3.6A1 1 0 013 2h4zm9 0a1 1 0 011 1v1h.5a1 1 0 110 2H17v1h.5a1 1 0 110 2H17v1h.5a1 1 0 110 2H17v1h.5a1 1 0 110 2H16a1 1 0 01-1-1v-1h-3a1 1 0 110-2h3v-1h-3a1 1 0 110-2h3v-1h-3a1 1 0 010-2h3V4h-3a1 1 0 110-2h3V2a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
              </div>
              <span>Languages</span>
            </h3>
            
            <div className="space-y-5">
              {LANGUAGES.map((lang, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + (index * 0.1) }}
                  className="relative"
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-medium">{lang.language}</span>
                    <motion.span 
                      whileHover={{ scale: 1.05 }}
                      className="text-blue-400 text-sm rounded-full bg-blue-900/30 px-3 py-1 border border-blue-500/20"
                    >
                      {lang.proficiency}
                    </motion.span>
                  </div>
                  
                  {/* Custom Progress Bar */}
                  <div className="h-2 w-full bg-gray-700/50 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full"
                      initial={{ width: 0 }}
                      animate={inView ? { 
                        width: lang.proficiency === "Native" ? "100%" : 
                               lang.proficiency === "Advanced" ? "85%" : 
                               lang.proficiency === "Full Professional Proficiency" ? "90%" : "75%" 
                      } : {}}
                      transition={{ duration: 0.8, delay: 0.6 + (index * 0.1) }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-10 p-5 rounded-xl bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-500/10"
            >
              <h3 className="text-xl font-bold text-white mb-4">Location</h3>
              <div className="flex items-center gap-3">
                <SiGooglemaps className="text-blue-400 text-xl" />
                <p className="text-gray-300">
                  Based in <span className="text-white font-medium">{PERSONAL_INFO.location}</span>
                </p>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Connect Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gray-800/30 backdrop-blur-md rounded-2xl p-8 border border-gray-700/50"
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <div className="p-2 bg-blue-900/30 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                  <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                </svg>
              </div>
              <span>Connect With Me</span>
            </h3>
            
            <p className="text-gray-400 mb-8">
              I&apos;m always open to discussing new projects, creative ideas or opportunities to be part of your vision.
            </p>
            
            {/* Social Links with hover effects */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + (index * 0.1) }}
                  whileHover={{ y: -5, x: 0 }}
                  className="group flex items-center gap-2 p-4 rounded-xl border border-gray-700/50 bg-gray-800/50 hover:border-blue-500/30 transition-all duration-300"
                >
                  <div className={`p-2.5 rounded-full bg-gray-700/50 ${social.bgHover} transition-colors duration-300`}>
                    <span className={`text-gray-300 ${social.color} transition-colors duration-300`}>
                      {social.icon}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-white font-medium block text-sm sm:text-base truncate">{social.label}</span>
                    <span className="text-gray-400 text-xs sm:text-sm">Connect</span>
                  </div>
                  <motion.div 
                    className="text-gray-400 flex-shrink-0"
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                  >
                    <HiChevronRight size={18} />
                  </motion.div>
                </motion.a>
              ))}
            </div>
            
            {/* Call To Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 1 }}
              className="mt-6 text-center"
            >
              <h3 className="text-xl font-bold text-white mb-3">Ready to Start a Project?</h3>
              <p className="text-gray-400 mb-6">
                Let&apos;s work together to bring your ideas to life
              </p>
              <motion.a
                href={`mailto:${PERSONAL_INFO.email}?subject=Project%20Inquiry`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block py-4 px-8 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-medium rounded-full shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-300"
              >
                <span className="flex items-center gap-2">
                  <FaEnvelope />
                  <span>Send a Message</span>
                </span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection; 