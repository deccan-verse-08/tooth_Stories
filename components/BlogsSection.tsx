"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { Calendar, User, ArrowRight } from "lucide-react";
import { blogs } from "@/app/data/blog";

/* ================= VARIANTS ================= */

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const card: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.96,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
};

/* ================= COMPONENT ================= */

export default function BlogSection() {
  return (
    <section className="relative py-32 bg-gradient-to-b from-white via-[#FFFCFA] to-[#FFF5F0]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block mb-4 text-xs tracking-[0.3em] uppercase font-bold bg-gradient-to-r from-[#C21E56] to-[#D4AF37] bg-clip-text text-transparent">
            Our Insights
          </span>

          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Dental Knowledge That
            <span className="block font-light bg-gradient-to-r from-[#C21E56] to-[#D4AF37] bg-clip-text text-transparent">
              Empowers Your Smile
            </span>
          </h2>

          <p className="text-gray-500 max-w-2xl mx-auto font-light">
            Expert-written articles to help you make informed decisions about
            your oral health.
          </p>
        </motion.div>

        {/* Blog Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {blogs.map((blog) => (
            <motion.div key={blog.id} variants={card}>
              <Link href={`/blogs/${blog.id}`} className="group block h-full">
                <div className="relative h-full bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-[#C21E56]/10 transition-all duration-500 overflow-hidden">
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-8 flex flex-col h-[calc(100%-14rem)]">
                    {/* Category */}
                    <span className="inline-block mb-3 text-xs font-semibold tracking-wider uppercase bg-gradient-to-r from-[#C21E56] to-[#D4AF37] bg-clip-text text-transparent">
                      {blog.category}
                    </span>

                    {/* Title */}
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#C21E56] transition-colors duration-300">
                      {blog.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-gray-500 text-sm leading-relaxed font-light line-clamp-3 mb-6">
                      {blog.excerpt}
                    </p>

                    {/* Meta */}
                    <div className="mt-auto flex items-center justify-between text-xs text-gray-400">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <User size={14} />
                          {blog.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar size={14} />
                          {blog.date}
                        </span>
                      </div>

                      <span className="flex items-center gap-1 font-semibold text-[#C21E56] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Read
                        <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>

                  {/* Hover Glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#C21E56]/10 to-[#D4AF37]/10 blur-2xl" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
