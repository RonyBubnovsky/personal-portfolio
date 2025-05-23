"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { NAV_LINKS } from "@/constants";
import { cn } from "@/lib/utils";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Update active section based on scroll position
      const sections = NAV_LINKS.map(link => link.path.replace("#", ""));
      
      // If at the top of the page (or close to it), set "about" as active
      if (offset < 100) {
        setActiveSection("about");
        return;
      }
      
      // Check other sections
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Adjusted threshold to better detect section visibility
          const threshold = window.innerHeight * 0.3;
          if (rect.top <= threshold && rect.bottom >= threshold) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    // Force scroll to about section on page load/refresh
    window.scrollTo({
      top: 0,
      behavior: "instant"
    });
    
    // Set active section to "about" and update URL
    setActiveSection("about");
    window.history.pushState(null, '', `#about`);
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      // Don't close if clicking on a link or inside nav element
      if (isMenuOpen && 
          e.target && 
          !(e.target as Element).closest('nav a') && 
          !(e.target as Element).closest('nav')) {
        setIsMenuOpen(false);
      }
    };
    
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Handle smooth scrolling with offset
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    
    // Close menu first
    setIsMenuOpen(false);
    
    // Add a small delay before scrolling to allow the menu to close first on mobile
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        const navHeight = 80; // Approximate navbar height
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
        
        // Update URL after scrolling
        window.history.pushState(null, '', `#${sectionId}`);
      }
    }, 100); // 100ms delay
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-gray-900/80 backdrop-blur-lg py-2 sm:py-3 border-b border-gray-800/50 shadow-lg shadow-blue-900/5"
          : "bg-transparent py-3 sm:py-5"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="#about" onClick={(e) => {
          e.stopPropagation(); // Stop event from bubbling up
          handleNavClick(e, "about");
        }}>
          <motion.span 
            className="text-white font-bold text-xl sm:text-2xl cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Rony<span className="text-blue-500">.</span>
          </motion.span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 lg:space-x-10">
          {NAV_LINKS.map((link, index) => {
            const sectionId = link.path.replace('#', '');
            const isActive = activeSection === sectionId;
            
            return (
              <li key={index} className="relative">
                <Link
                  href={link.path}
                  onClick={(e) => {
                    e.stopPropagation(); // Stop event from bubbling up
                    handleNavClick(e, sectionId);
                  }}
                  className={cn(
                    "text-gray-300 font-medium hover:text-white transition-colors duration-300 py-2 px-1 relative group",
                    isActive && "text-white"
                  )}
                >
                  {link.name}
                  <span 
                    className={cn(
                      "absolute bottom-0 left-0 h-[2px] w-0 bg-blue-500 transition-all duration-300 ease-out rounded-full opacity-0",
                      "group-hover:w-full group-hover:opacity-100",
                      isActive && "w-full opacity-100"
                    )}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile Menu Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="md:hidden text-white focus:outline-none bg-gray-800/80 p-2 rounded-lg"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <FiX className="h-5 w-5" />
          ) : (
            <FiMenu className="h-5 w-5" />
          )}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-gray-900/95 backdrop-blur-xl absolute top-full left-0 right-0 border-b border-gray-800/50 max-h-[80vh] overflow-y-auto shadow-xl"
          >
            <ul className="flex flex-col py-4 px-6">
              {NAV_LINKS.map((link, index) => {
                const sectionId = link.path.replace('#', '');
                const isActive = activeSection === sectionId;
                
                return (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="py-3 border-b border-gray-800/30 last:border-0"
                  >
                    <Link
                      href={link.path}
                      onClick={(e) => {
                        e.stopPropagation(); // Stop event from bubbling up
                        handleNavClick(e, sectionId);
                      }}
                      className={cn(
                        "text-gray-300 hover:text-white transition-all duration-300 block",
                        isActive && "text-white"
                      )}
                    >
                      <span className="relative group">
                        {link.name}
                        <span 
                          className={cn(
                            "absolute bottom-0 left-0 h-[2px] w-0 bg-blue-500 transition-all duration-300 ease-out rounded-full opacity-0",
                            "group-hover:w-full group-hover:opacity-100",
                            isActive && "w-full opacity-100"
                          )}
                        />
                      </span>
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar; 