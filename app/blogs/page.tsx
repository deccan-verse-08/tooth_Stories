"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Calendar, User, ArrowRight, Sparkles, Clock } from "lucide-react";

import { blogs, type Blog } from "../data/blog";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/* ---------------- Animations ---------------- */

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const floatingOrb = {
  animate: {
    y: [0, -20, 0],
    scale: [1, 1.1, 1],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: [0.42, 0, 0.58, 1] as const,
    },
  },
};

/* ---------------- Helpers ---------------- */

const calculateReadingTime = (content: Blog["content"]): number => {
  const wordsPerMinute = 200;
  let totalWords = 0;

  content.forEach((section) => {
    if (section.text) totalWords += section.text.split(" ").length;
    if (section.items) {
      section.items.forEach((item) => {
        totalWords += item.split(" ").length;
      });
    }
  });

  return Math.ceil(totalWords / wordsPerMinute);
};

/* ---------------- Page ---------------- */

export default function BlogPage() {
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <>
      <Header />

      <main className="relative bg-gradient-to-br from-[#FFFCFA] via-[#FFF5F0] to-[#FFFCFA] min-h-screen overflow-hidden">
        {/* Background Effects */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <motion.div style={{ y: backgroundY }} className="absolute inset-0">
            <motion.div
              variants={floatingOrb}
              animate="animate"
              className="absolute top-20 -left-20 w-96 h-96 bg-gradient-to-br from-[#C21E56]/10 to-[#D4AF37]/10 rounded-full blur-3xl"
            />
            <motion.div
              variants={floatingOrb}
              animate="animate"
              transition={{ delay: 2 }}
              className="absolute top-1/3 -right-32 w-[500px] h-[500px] bg-gradient-to-tr from-[#D4AF37]/8 to-[#C21E56]/8 rounded-full blur-3xl"
            />
          </motion.div>
        </div>

        {/* Content */}
        <div className="relative z-10 pt-32 pb-20">
          <div className="max-w-[1400px] mx-auto px-6">
            {/* Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 px-6 py-2.5 bg-white/70 backdrop-blur-xl border border-white/40 rounded-full mb-6 shadow-sm">
                <Sparkles size={14} className="text-[#D4AF37]" />
                <span className="text-xs font-bold tracking-[0.3em] uppercase bg-gradient-to-r from-[#C21E56] to-[#D4AF37] bg-clip-text text-transparent">
                  Our Journal
                </span>
                <Sparkles size={14} className="text-[#C21E56]" />
              </div>

              <h1 className="font-heading text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-6 leading-tight">
                Latest{" "}
                <span className="bg-gradient-to-r from-[#D4AF37] to-[#C21E56] bg-clip-text text-transparent">
                  Insights
                </span>
              </h1>

              <p className="font-sans text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
                Discover dental stories, expert insights, and preventive care
                knowledge crafted for long-term oral health.
              </p>
            </div>

            {/* Blog Grid */}
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {blogs.map((blog) => {
                const readingTime = calculateReadingTime(blog.content);

                return (
                  <motion.div
                    key={blog.id}
                    variants={item}
                    whileHover={{ y: -8 }}
                    className="group"
                  >
                    <Link href={`/blogs/${blog.id}`}>
                      <div className="h-full bg-white/80 backdrop-blur-xl rounded-[2.5rem] overflow-hidden border border-white/50 shadow-lg hover:shadow-xl transition-all duration-500 flex flex-col">
                        {/* Image */}
                        <div className="relative h-72 w-full overflow-hidden">
                          <Image
                            src={blog.image}
                            alt={blog.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                          <div className="absolute top-5 left-5 text-[10px] font-bold uppercase tracking-wider px-4 py-2 bg-white rounded-full text-[#C21E56]">
                            {blog.category}
                          </div>

                          <div className="absolute top-5 right-5 flex items-center gap-1.5 px-4 py-2 bg-black/40 rounded-full text-white text-[10px] uppercase">
                            <Clock size={12} />
                            {readingTime} min
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-8 flex flex-col flex-grow">
                          <div className="flex items-center gap-4 text-gray-400 text-[10px] uppercase tracking-wider font-semibold mb-4">
                            <span className="flex items-center gap-1.5">
                              <Calendar size={12} /> {blog.date}
                            </span>
                            <span className="flex items-center gap-1.5">
                              <User size={12} /> {blog.author}
                            </span>
                          </div>

                          <h3 className="font-heading text-2xl lg:text-3xl font-bold text-gray-900 mb-4 leading-snug">
                            {blog.title}
                          </h3>

                          <p className="font-sans text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                            {blog.excerpt}
                          </p>

                          <div className="mt-auto flex items-center justify-between pt-6 border-t">
                            <span className="font-sans text-[#D4AF37] font-bold text-xs uppercase tracking-widest">
                              Read Story
                            </span>
                            <ArrowRight
                              size={18}
                              className="text-[#C21E56] transition-transform group-hover:translate-x-1"
                            />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
