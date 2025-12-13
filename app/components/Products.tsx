"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const products = [
  {
    id: 1,
    src: "/images/product-1.JPG",
    alt: "Premium Coffee Product 1",
  },
  {
    id: 2,
    src: "/images/product-2.JPG",
    alt: "Premium Coffee Product 2",
  },
  {
    id: 3,
    src: "/images/product-3.JPG",
    alt: "Premium Coffee Product 3",
  },
  {
    id: 4,
    src: "/images/product-4.JPG",
    alt: "Premium Coffee Product 4",
  },
];

export default function Products() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="products"
      className="relative overflow-hidden bg-white py-20 dark:bg-black md:py-28 lg:py-32"
    >
      {/* Decorative background elements */}
      <div className="absolute right-0 top-1/3 h-72 w-72 rounded-full bg-brand-beige/10 blur-3xl dark:bg-brand-brown/5" />
      <div className="absolute bottom-1/4 left-0 h-96 w-96 rounded-full bg-brand-olive/5 blur-3xl dark:bg-brand-olive/10" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center md:mb-16 lg:mb-20"
        >
          <p className="mb-3 font-sans text-xs font-medium uppercase tracking-[0.2em] text-brand-olive dark:text-brand-olive-light">
            Our Collection
          </p>
          <h2 className="font-display text-3xl font-medium tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-4xl md:text-5xl">
            Crafted with Care
          </h2>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:gap-10">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-neutral-100 dark:bg-neutral-900">
                {/* Image */}
                <Image
                  src={product.src}
                  alt={product.alt}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-black/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Subtle border glow on hover */}
                <div className="absolute inset-0 rounded-2xl ring-2 ring-brand-olive/0 ring-offset-0 transition-all duration-500 group-hover:ring-brand-olive/30 dark:group-hover:ring-brand-olive-light/30" />
              </div>

              {/* Decorative corner accent */}
              <div className="absolute -bottom-2 -right-2 h-20 w-20 rounded-full bg-brand-beige/20 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100 dark:bg-brand-brown/30" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}