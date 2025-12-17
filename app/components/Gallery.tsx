"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const farmImages = [
  { id: 1, src: "/images/farm-12.webp", alt: "Farm image 1" },
  { id: 2, src: "/images/farm-2.webp", alt: "Farm image 2" },
  { id: 3, src: "/images/farm-3.webp", alt: "Farm image 3" },
  { id: 4, src: "/images/farm-4.webp", alt: "Farm image 4" },
  { id: 5, src: "/images/farm-5.webp", alt: "Farm image 5" },
  { id: 6, src: "/images/farm-6.webp", alt: "Farm image 6" },
  { id: 7, src: "/images/farm-7.webp", alt: "Farm image 7" },
  { id: 8, src: "/images/farm-8.webp", alt: "Farm image 8" },
  { id: 9, src: "/images/farm-9.webp", alt: "Farm image 9" },
  { id: 10, src: "/images/farm-10.webp", alt: "Farm image 10" },
  { id: 11, src: "/images/farm-11.webp", alt: "Farm image 11" },
  { id: 12, src: "/images/farm-1.webp", alt: "Farm image 12" },
];

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Autoplay functionality
  useEffect(() => {
    if (!isHovered && mounted) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % farmImages.length);
      }, 4000);

      return () => clearInterval(interval);
    }
  }, [isHovered, mounted]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % farmImages.length);
  };

  const goToPrevious = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + farmImages.length) % farmImages.length
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-white py-20 dark:bg-black md:py-28 lg:py-32"
    >
      {/* Decorative background elements */}
      <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-brand-beige/10 blur-3xl dark:bg-brand-brown/5" />
      <div className="absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-brand-olive/5 blur-3xl dark:bg-brand-olive/10" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 max-w-3xl text-center md:mb-16 lg:mb-20"
        >
          <p className="mb-3 font-sans text-xs font-medium uppercase tracking-[0.2em] text-brand-brown dark:text-brand-brown-light">
            Behind the Beans
          </p>
          <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-4xl md:text-5xl" style={{ fontFamily: 'var(--font-noto-sans)' }}>
            Gallery
          </h2>
          <p className="font-sans text-base leading-relaxed text-neutral-600 dark:text-neutral-400 sm:text-lg">
            Explore our organic coffee plantation for a rich and authentic
            flavor experience. From seed to cup, we prioritize quality.
          </p>
        </motion.div>

        {/* Slider Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Main Image Display */}
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-neutral-100 dark:bg-neutral-900 md:aspect-[21/9]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={farmImages[currentIndex].src}
                  alt={farmImages[currentIndex].alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                  priority={currentIndex === 0}
                />
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <div className="absolute inset-0 flex items-center justify-between p-4 md:p-6">
              {/* Previous Button */}
              <button
                onClick={goToPrevious}
                aria-label="Previous image"
                className="group flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow-lg backdrop-blur-sm transition-all hover:bg-white hover:scale-110 dark:bg-neutral-900/90 dark:hover:bg-neutral-900 md:h-12 md:w-12"
              >
                <svg
                  className="h-5 w-5 text-neutral-800 transition-transform group-hover:-translate-x-0.5 dark:text-neutral-200 md:h-6 md:w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              {/* Next Button */}
              <button
                onClick={goToNext}
                aria-label="Next image"
                className="group flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow-lg backdrop-blur-sm transition-all hover:bg-white hover:scale-110 dark:bg-neutral-900/90 dark:hover:bg-neutral-900 md:h-12 md:w-12"
              >
                <svg
                  className="h-5 w-5 text-neutral-800 transition-transform group-hover:translate-x-0.5 dark:text-neutral-200 md:h-6 md:w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>

            {/* Slide Counter */}
            <div className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1.5 font-sans text-xs font-medium text-neutral-800 backdrop-blur-sm dark:bg-neutral-900/90 dark:text-neutral-200 md:right-6 md:top-6 md:px-4 md:py-2 md:text-sm">
              {currentIndex + 1} / {farmImages.length}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="mt-6 flex items-center justify-center gap-2 md:mt-8">
            {farmImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                className="group relative"
              >
                <span
                  className={`block h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-8 bg-brand-brown dark:bg-brand-brown-light"
                      : "w-2 bg-neutral-300 hover:bg-neutral-400 dark:bg-neutral-700 dark:hover:bg-neutral-600"
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Autoplay Indicator */}
          {!isHovered && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-4 text-center font-sans text-xs text-neutral-400 dark:text-neutral-600"
            >
              Hover to pause autoplay
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
}