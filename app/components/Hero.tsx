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
      className="relative min-h-screen overflow-hidden bg-brand-cream dark:bg-neutral-950"
    >
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-transparent to-white/30 dark:from-black/50 dark:via-transparent dark:to-black/30" />

      {/* Decorative elements */}
      <div className="absolute left-0 top-1/4 h-64 w-64 rounded-full bg-brand-olive/5 blur-3xl dark:bg-brand-olive/10" />
      <div className="absolute bottom-1/4 right-0 h-96 w-96 rounded-full bg-brand-brown/5 blur-3xl dark:bg-brand-brown/10" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid min-h-screen items-center gap-8 py-24 md:py-32 lg:grid-cols-2 lg:gap-16">
          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={mounted ? "visible" : "hidden"}
            className="order-2 text-center lg:order-1 lg:text-left"
          >
            {/* Eyebrow text */}
            <motion.p
              variants={itemVariants}
              className="mb-4 font-sans text-xs font-medium uppercase tracking-[0.2em] text-brand-olive dark:text-brand-olive-light"
            >
              Premium Specialty Coffee
            </motion.p>

            {/* Main headline */}
            <motion.h1
              variants={itemVariants}
              className="font-display text-4xl font-medium leading-tight tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Rooted in{" "}
              <span className="text-brand-olive dark:text-brand-olive-light">
                Nature
              </span>
              <br />
              <span className="italic">Brewed with Soul</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              variants={itemVariants}
              className="mx-auto mt-6 max-w-md font-sans text-base leading-relaxed text-neutral-600 dark:text-neutral-400 sm:text-lg md:mt-8 lg:mx-0 lg:max-w-lg"
            >
              From the misty highlands where ancient traditions meet pristine
              nature, we bring you coffee that tells a story — one of patience,
              craft, and an unwavering commitment to excellence.
            </motion.p>

            {/* Decorative line with origin text */}
            <motion.div
              variants={itemVariants}
              className="mt-8 flex items-center justify-center gap-4 md:mt-12 lg:justify-start"
            >
              <span className="h-px w-12 bg-brand-brown/40 dark:bg-brand-beige/40" />
              <span className="font-sans text-xs font-medium uppercase tracking-[0.15em] text-neutral-500 dark:text-neutral-500">
                Single Origin • Hand Roasted • Ethically Sourced
              </span>
              <span className="h-px w-12 bg-brand-brown/40 dark:bg-brand-beige/40" />
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              variants={itemVariants}
              className="mt-12 hidden lg:block"
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="flex flex-col items-start gap-2"
              >
                <span className="font-sans text-xs uppercase tracking-widest text-neutral-400 dark:text-neutral-600">
                  Scroll to explore
                </span>
                <div className="h-12 w-px bg-gradient-to-b from-brand-brown/60 to-transparent dark:from-brand-beige/60" />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate={mounted ? "visible" : "hidden"}
            className="order-1 flex justify-center lg:order-2 lg:justify-end"
          >
            <div className="relative">
              {/* Image frame with decorative border */}
              <div className="relative aspect-[3/4] w-72 overflow-hidden rounded-2xl sm:w-80 md:w-96 lg:w-[420px]">
                {/* Decorative frame offset */}
                <div className="absolute -bottom-3 -right-3 h-full w-full rounded-2xl border border-brand-olive/20 dark:border-brand-olive/30" />
                <div className="absolute -bottom-6 -right-6 h-full w-full rounded-2xl border border-brand-brown/10 dark:border-brand-brown/20" />

                {/* Main image container */}
                <div className="relative h-full w-full overflow-hidden rounded-2xl bg-neutral-200 dark:bg-neutral-800">
                  <Image
                    src="/images/farm-1.jpg"
                    alt="Pumori Coffee farm in the highlands"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 640px) 288px, (max-width: 768px) 320px, (max-width: 1024px) 384px, 420px"
                  />

                  {/* Subtle overlay for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                </div>
              </div>

              {/* Floating accent card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={mounted ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="absolute -left-4 bottom-16 rounded-xl bg-white/90 p-4 shadow-lg backdrop-blur-sm dark:bg-neutral-900/90 sm:-left-8 sm:p-5"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-olive/10 dark:bg-brand-olive/20">
                    <svg
                      className="h-5 w-5 text-brand-olive dark:text-brand-olive-light"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-sans text-xs font-medium uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                      Altitude
                    </p>
                    <p className="font-display text-lg font-medium text-neutral-900 dark:text-neutral-100">
                      1,600+ meters
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade for smooth transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent dark:from-black" />
    </section>
  );
}