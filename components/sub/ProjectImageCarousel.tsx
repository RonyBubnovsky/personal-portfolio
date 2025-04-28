"use client";

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { HiOutlinePause, HiOutlinePlay } from 'react-icons/hi2';

interface ProjectImageCarouselProps {
  images: string[];
  title: string;
  github?: string | { client: string; server: string };
  link?: string;
}

const ProjectImageCarousel = ({ images, title, github, link }: ProjectImageCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = useCallback((newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => (prevIndex + newDirection + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      paginate(1);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, paginate]);

  const handleDragEnd = (e: MouseEvent | TouchEvent | PointerEvent, { offset, velocity }: PanInfo) => {
    const swipe = swipePower(offset.x, velocity.x);

    if (swipe < -swipeConfidenceThreshold) {
      paginate(1);
    } else if (swipe > swipeConfidenceThreshold) {
      paginate(-1);
    }
  };

  const controlStyles = {
    base: "absolute p-3 rounded-full transition-all transform backdrop-blur-sm shadow-lg border",
    light: "bg-gray-900/70 text-white hover:bg-gray-900/90 border-gray-600",
    dark: "bg-white/70 text-gray-900 hover:bg-white/90 border-gray-200",
  };

  return (
    <div className="carousel-container relative w-full aspect-video bg-gray-800 rounded-lg overflow-hidden">
      {/* Main Image */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={handleDragEnd}
          className="absolute inset-0 cursor-grab active:cursor-grabbing z-10"
        >
          <Image
            src={images[currentIndex]}
            alt={`${title} - Image ${currentIndex + 1}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={currentIndex === 0}
          />
        </motion.div>
      </AnimatePresence>

      {/* Dark overlay */}
      <div className="controls-overlay absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 opacity-0 transition-opacity duration-300 z-20">
        {/* Links */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex gap-4">
            {github && (
              typeof github === 'object' ? (
                <>
                  <a
                    href={github.client}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-white/90 text-gray-900 rounded-full hover:bg-white transition-all transform hover:scale-105 backdrop-blur-sm"
                    title="Client Repository"
                  >
                    <FaGithub size={20} />
                    <span className="font-medium">Client</span>
                  </a>
                  <a
                    href={github.server}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-white/90 text-gray-900 rounded-full hover:bg-white transition-all transform hover:scale-105 backdrop-blur-sm"
                    title="Server Repository"
                  >
                    <FaGithub size={20} />
                    <span className="font-medium">Server</span>
                  </a>
                </>
              ) : (
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-white/90 text-gray-900 rounded-full hover:bg-white transition-all transform hover:scale-105 backdrop-blur-sm"
                >
                  <FaGithub size={20} />
                  <span className="font-medium">View Code</span>
                </a>
              )
            )}
            {link && link !== "#" && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-white/90 text-gray-900 rounded-full hover:bg-white transition-all transform hover:scale-105 backdrop-blur-sm"
              >
                <FaExternalLinkAlt size={20} />
                <span className="font-medium">Live Demo</span>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Navigation controls */}
      {images.length > 1 && (
        <>
          <button
            onClick={() => paginate(-1)}
            className={`${controlStyles.base} ${controlStyles.dark} left-4 top-1/2 -translate-y-1/2 z-30 opacity-0 carousel-control`}
            aria-label="Previous image"
          >
            <FaChevronLeft size={20} />
          </button>
          <button
            onClick={() => paginate(1)}
            className={`${controlStyles.base} ${controlStyles.dark} right-4 top-1/2 -translate-y-1/2 z-30 opacity-0 carousel-control`}
            aria-label="Next image"
          >
            <FaChevronRight size={20} />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3 z-30 opacity-0 carousel-control">
            <div className="flex items-center gap-3 bg-gray-900/30 backdrop-blur-sm rounded-full px-3 py-2 border border-white/20">
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className={`${controlStyles.base} relative p-2`}
                aria-label={isAutoPlaying ? "Pause autoplay" : "Start autoplay"}
              >
                {isAutoPlaying ? <HiOutlinePause size={16} /> : <HiOutlinePlay size={16} />}
              </button>
              <div className="h-4 w-px bg-white/20" />
              <div className="flex gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setDirection(index > currentIndex ? 1 : -1);
                      setCurrentIndex(index);
                    }}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? 'bg-white scale-125' 
                        : 'bg-white/50 hover:bg-white/80'
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </>
      )}

      {/* Add CSS-only hover effect with a style tag */}
      <style jsx>{`
        .carousel-container:hover .controls-overlay,
        .carousel-container:hover .carousel-control {
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default ProjectImageCarousel; 