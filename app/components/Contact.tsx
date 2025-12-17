"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-brand-cream py-20 dark:bg-neutral-950 md:py-28 lg:py-32"
    >
      {/* Decorative background elements */}
      <div className="absolute left-0 top-1/3 h-96 w-96 rounded-full bg-brand-olive/5 blur-3xl dark:bg-brand-olive/10" />
      <div className="absolute bottom-1/4 right-0 h-80 w-80 rounded-full bg-brand-brown/5 blur-3xl dark:bg-brand-brown/10" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center md:mb-16 lg:mb-20"
        >
          <p className="mb-3 font-sans text-xs font-medium uppercase tracking-[0.2em] text-brand-brown dark:text-brand-brown-light">
            Visit Us
          </p>
          <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-4xl md:text-5xl" style={{ fontFamily: 'var(--font-noto-sans)' }}>
            Get in Touch
          </h2>
          <p className="mx-auto max-w-2xl font-sans text-base leading-relaxed text-neutral-600 dark:text-neutral-400 sm:text-lg">
            We welcome visitors to explore our coffee farm in Sindhupalchowk,
            Nepal. Feel free to connect with us or visit to learn more about
            our process.
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col justify-center space-y-8"
          >
            {/* Location */}
            <div className="group">
              <div className="mb-4 inline-flex rounded-full bg-brand-brown/10 p-3 text-brand-brown transition-colors group-hover:bg-brand-brown/20 dark:bg-brand-brown/20 dark:text-brand-brown-light dark:group-hover:bg-brand-brown/30">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 font-display text-xl font-medium text-neutral-900 dark:text-neutral-100">
                Location
              </h3>
              <p className="font-sans text-base text-neutral-600 dark:text-neutral-400">
                Sindhupalchowk District
                <br />
                Bagmati Province, Nepal
              </p>
            </div>

            {/* Email */}
            <div className="group">
              <div className="mb-4 inline-flex rounded-full bg-brand-brown/10 p-3 text-brand-brown transition-colors group-hover:bg-brand-brown/20 dark:bg-brand-brown/20 dark:text-brand-brown-light dark:group-hover:bg-brand-brown/30">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
              </div>
              <h3 className="mb-2 font-display text-xl font-medium text-neutral-900 dark:text-neutral-100">
                Email
              </h3>
              <a
                href="mailto:info@pumoricoffee.com"
                className="font-sans text-base text-neutral-600 transition-colors hover:text-brand-brown dark:text-neutral-400 dark:hover:text-brand-brown-light"
              >
                pumoricoffeenepal@gmail.com
              </a>
            </div>

            
          </motion.div>

          {/* Google Map */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              {/* Map container with aspect ratio */}
              <div className="relative aspect-[4/3] w-full lg:aspect-square">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d56428.93613657193!2d85.82959216613129!3d27.877152116937808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sbhote%20koshi%20corridor!5e0!3m2!1sen!2snp!4v1765984734772!5m2!1sen!2snp"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Pumori Coffee Location - Sindhupalchowk, Nepal"
                  className="absolute inset-0 grayscale-[20%] transition-all duration-500 hover:grayscale-0"
                />
              </div>

              {/* Decorative border overlay */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-neutral-900/10 dark:ring-white/10" />
            </div>

            {/* Map caption */}
            <p className="mt-4 text-center font-sans text-sm text-neutral-500 dark:text-neutral-500">
              Nestled in the Himalayan highlands of Nepal
            </p>
          </motion.div>
        </div>

    
      </div>
    </section>
  );
}