"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 1.05 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/HeroCover.webp"
          alt="Coffee plants in the Himalayas"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/50 dark:bg-black/60" />
      </div>

      {/* Decorative elements */}
      <div className="absolute left-0 top-1/4 h-64 w-64 rounded-full bg-brand-olive/10 blur-3xl" />
      <div className="absolute bottom-1/4 right-0 h-96 w-96 rounded-full bg-brand-brown/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-screen items-center justify-center py-24 md:py-32">
          {/* Text Content - Centered */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={mounted ? "visible" : "hidden"}
            className="text-center max-w-4xl"
          >
            {/* Eyebrow text */}
            <motion.p
              variants={itemVariants}
              className="mb-6 font-sans text-xs font-medium uppercase tracking-[0.2em] text-brand-beige"
            >
              Premium Specialty Coffee
            </motion.p>

            {/* Main headline */}
            <motion.h1
              variants={itemVariants}
              className="text-2xl font-extrabold leading-tight tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
              style={{ fontFamily: 'var(--font-noto-sans)' }}
            >
              HIMALAYAN ORGANIC
              <br />
              <span className="text-brand-brown">ARABICA COFFEE</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              variants={itemVariants}
              className="mx-auto mt-8 max-w-3xl font-sans text-base leading-relaxed text-neutral-200 sm:text-lg md:text-xl md:mt-10"
            >
              Arabica coffee beans cultivated organically in the hills of Sindhupalchowk, Nepal, nestled in the Himalayas at an elevation of 1200 metres.
            </motion.p>

            {/* Decorative line with origin text */}
            <motion.div
              variants={itemVariants}
              className="mt-10 flex items-center justify-center gap-4 md:mt-14"
            >
              <span className="h-px w-12 bg-brand-beige/60" />
              <span className="font-sans text-xs font-medium uppercase tracking-[0.15em] text-brand-beige">
                Single Origin • Organic • Ethically Sourced
              </span>
              <span className="h-px w-12 bg-brand-beige/60" />
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              variants={itemVariants}
              className="mt-16 flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="flex flex-col items-center gap-2"
              >
                <span className="font-sans text-xs uppercase tracking-widest text-neutral-300">
                  Scroll to explore
                </span>
                <div className="h-12 w-px bg-gradient-to-b from-brand-beige/60 to-transparent" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade for smooth transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/20 to-transparent dark:from-black dark:to-transparent" />
    </section>
  );
}