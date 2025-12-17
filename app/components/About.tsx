"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-brand-cream py-20 dark:bg-neutral-950 md:py-28 lg:py-32"
    >
      {/* Decorative background elements */}
      <div className="absolute left-0 top-1/4 h-80 w-80 rounded-full bg-brand-olive/5 blur-3xl dark:bg-brand-olive/10" />
      <div className="absolute bottom-1/3 right-0 h-96 w-96 rounded-full bg-brand-brown/5 blur-3xl dark:bg-brand-brown/10" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* First Block: Image Left, Text Right */}
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            <div className="relative">
              {/* Main image container */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-neutral-200 dark:bg-neutral-800 lg:aspect-[3/4]">
                <Image
                  src="/images/farm-2.webp"
                  alt="Pumori Coffee farm in the highlands"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>

              {/* Decorative offset border */}
              <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl border-2 border-brand-olive/20 dark:border-brand-olive/30" />

              {/* Floating accent badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute -top-6 -right-6 rounded-full bg-white p-6 shadow-xl dark:bg-neutral-900"
              >
                <div className="text-center">
                  <p className="font-display text-3xl font-bold text-brand-olive dark:text-brand-olive-light">
                    100+
                  </p>
                  <p className="font-sans text-xs font-medium uppercase tracking-wider text-neutral-600 dark:text-neutral-400">
                    Ropani
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-1 lg:order-2"
          >
            {/* Eyebrow */}
            <p className="mb-4 font-sans text-xs font-medium uppercase tracking-[0.2em] text-brand-brown dark:text-brand-brown-light">
              Our Story
            </p>

            {/* Heading */}
            <h2 className="mb-6 text-3xl font-extrabold leading-tight tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-4xl md:text-5xl" style={{ fontFamily: 'var(--font-noto-sans)' }}>
              Where Mountains Meet{" "}
              <span className="text-brand-brown dark:text-brand-brown-light">
                Mastery
              </span>
            </h2>

            {/* Body text */}
            <div className="space-y-4 font-sans text-base leading-relaxed text-neutral-600 dark:text-neutral-400 sm:text-lg">
              <p>
                Nestled in the misty highlands of Nepal where ancient traditions blend
                with pristine nature, Pumori Coffee was born from a passion for
                agriculture and a deep respect for the land.
              </p>
              <p>
                For over a decade, we've worked closely with local farmers,
                ensuring every bean is cultivated with care, harvested at peak
                ripeness, and roasted to perfection. Our commitment goes beyond
                just great coffee, it's about preserving heritage, supporting
                communities, and honoring the earth.
              </p>
              <p>
                Every cup tells a story of patience, craftsmanship, and an
                unwavering dedication to quality that you can taste in every
                sip.
              </p>
            </div>

            {/* Feature tags */}
            <div className="mt-8 flex flex-wrap gap-3">
              {["Ethically Sourced", "Organic", "Single Origin"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-brand-olive/30 bg-brand-olive/5 px-4 py-2 font-sans text-sm font-medium text-brand-olive dark:border-brand-olive/40 dark:bg-brand-olive/10 dark:text-brand-olive-light"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </motion.div>
        </div>

        {/* Second Block: Text Left, Image Right */}
        <div className="mt-20 grid items-center gap-8 lg:mt-32 lg:grid-cols-2 lg:gap-16">
          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-1"
          >
            {/* Eyebrow */}
            <p className="mb-4 font-sans text-xs font-medium uppercase tracking-[0.2em] text-brand-brown dark:text-brand-brown-light">
              Our Process
            </p>

            {/* Heading */}
            <h2 className="mb-6 text-3xl font-extrabold leading-tight tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-4xl md:text-5xl" style={{ fontFamily: 'var(--font-noto-sans)' }}>
              From Seed to{" "}
              <span className="text-brand-brown dark:text-brand-brown-light">
                Sip
              </span>
            </h2>

            {/* Body text */}
            <div className="space-y-4 font-sans text-base leading-relaxed text-neutral-600 dark:text-neutral-400 sm:text-lg">
              <p>
                Our coffee begins its journey at high altitudes at 1200m where cool
                temperatures and fertile soil create the perfect
                conditions for exceptional beans. Each cherry is handpicked at
                peak ripeness, ensuring only the finest make it to your cup.
              </p>
              <p>
                After meticulous sorting and processing, our master roasters
                apply decades of expertise to unlock the unique flavor profiles
                hidden within each bean. The result is a perfectly balanced cup
                that honors both tradition and innovation.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-3 gap-6">
              <div>
                <p className="font-display text-2xl font-bold text-brand-brown dark:text-brand-brown-light sm:text-3xl">
                  1200m+
                </p>
                <p className="mt-1 font-sans text-xs font-medium uppercase tracking-wider text-neutral-500 dark:text-neutral-500">
                  Altitude
                </p>
              </div>
            </div>
          </motion.div>

          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2"
          >
            <div className="relative">
              {/* Main image container */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-neutral-200 dark:bg-neutral-800 lg:aspect-[3/4]">
                <Image
                  src="/images/farm-8.webp"
                  alt="Coffee processing and roasting"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>

              {/* Decorative offset border */}
              <div className="absolute -bottom-4 -left-4 -z-10 h-full w-full rounded-2xl border-2 border-brand-brown/20 dark:border-brand-brown/30" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}