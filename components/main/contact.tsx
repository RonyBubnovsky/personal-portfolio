"use client";

import { PERSONAL_INFO, SOCIAL_LINKS, LANGUAGES } from "@/constants";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const ContactSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Feel free to reach out to me for collaboration, questions, or just to say hello!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-gray-900 p-8 rounded-lg"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <HiOutlineMail className="text-blue-500 text-2xl mr-4 mt-1" />
                <div>
                  <h4 className="text-gray-300 font-medium mb-1">Email</h4>
                  <a 
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-blue-400 hover:text-blue-300 transition"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>
              
              {PERSONAL_INFO.phone && (
                <div className="flex items-start">
                  <HiOutlinePhone className="text-blue-500 text-2xl mr-4 mt-1" />
                  <div>
                    <h4 className="text-gray-300 font-medium mb-1">Phone</h4>
                    <a 
                      href={`tel:${PERSONAL_INFO.phone}`}
                      className="text-blue-400 hover:text-blue-300 transition"
                    >
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>
              )}
              
              {PERSONAL_INFO.location && (
                <div className="flex items-start">
                  <HiOutlineLocationMarker className="text-blue-500 text-2xl mr-4 mt-1" />
                  <div>
                    <h4 className="text-gray-300 font-medium mb-1">Location</h4>
                    <p className="text-gray-400">
                      {PERSONAL_INFO.location}
                    </p>
                  </div>
                </div>
              )}
            </div>
            
            <div className="mt-10">
              <h3 className="text-xl font-bold text-white mb-4">Connect</h3>
              <div className="flex items-center space-x-4">
                {SOCIAL_LINKS.github && (
                  <a
                    href={SOCIAL_LINKS.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-gray-800 text-blue-400 hover:bg-gray-700 hover:text-white transition"
                  >
                    <FaGithub size={20} />
                  </a>
                )}
                {SOCIAL_LINKS.linkedin && (
                  <a
                    href={SOCIAL_LINKS.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-gray-800 text-blue-400 hover:bg-gray-700 hover:text-white transition"
                  >
                    <FaLinkedin size={20} />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-900 p-8 rounded-lg"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Languages</h3>
            <div className="space-y-4">
              {LANGUAGES.map((lang, index) => (
                <div key={index} className="flex justify-between items-center mb-2">
                  <span className="text-gray-300 font-medium">{lang.language}</span>
                  <span className="text-blue-400 text-sm rounded-full bg-blue-900/30 px-3 py-1">
                    {lang.proficiency}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <h3 className="text-xl font-bold text-white mb-4">Best Way to Contact</h3>
              <p className="text-gray-400">
                The best way to reach me is via email. I will get back to you as soon as possible.
              </p>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="inline-block mt-4 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-500 transition"
              >
                Send Email
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 