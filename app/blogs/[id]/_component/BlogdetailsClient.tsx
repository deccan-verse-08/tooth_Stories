"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { BlogSection } from "@/app/data/blog";

type Blog = {
  id: number;
  title: string;
  content: BlogSection[];
  date: string;
  image?: string;
  category?: string;
  author?: string;
  excerpt?: string;
};

export default function BlogDetailClient({ blog }: { blog: Blog }) {
  // Calculate read time based on total text content
  const totalWords = blog.content.reduce((count, section) => {
    if (section.type === "paragraph") {
      return count + (section.text?.split(" ").length || 0);
    } else if (section.type === "list" && section.items) {
      return count + section.items.join(" ").split(" ").length;
    } else if (section.type === "heading") {
      return count + (section.text?.split(" ").length || 0);
    }
    return count;
  }, 0);

  const readTime = Math.ceil(totalWords / 200);

  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      {/* Back */}
      <Link
        href="/blogs"
        className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-black mb-6"
      >
        <ArrowLeft size={16} />
        Back to Blogs
      </Link>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold mb-4"
      >
        {blog.title}
      </motion.h1>

      {/* Meta */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="flex flex-wrap gap-6 text-sm text-gray-500 mb-8"
      >
        <span className="flex items-center gap-1">
          <Calendar size={14} /> {blog.date}
        </span>
        <span className="flex items-center gap-1">
          <Clock size={14} /> {readTime} min read
        </span>
      </motion.div>

      {/* Image */}
      {blog.image && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="relative w-full h-[420px] rounded-2xl overflow-hidden shadow-lg mb-10"
        >
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            priority
            className="object-cover"
          />
        </motion.div>
      )}

      {/* Content */}
      <motion.article
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="prose prose-lg max-w-none prose-headings:font-semibold prose-li:my-2"
      >
        {blog.content.map((section, index) => {
          if (section.type === "paragraph") {
            return (
              <p key={index} className="mb-5 text-gray-700 leading-relaxed">
                {section.text}
              </p>
            );
          }

          if (section.type === "heading") {
            return (
              <h2
                key={index}
                className="text-2xl font-semibold mt-8 mb-4 text-black"
              >
                {section.text}
              </h2>
            );
          }

          if (section.type === "list" && section.items) {
            return (
              <ul key={index} className="list-disc list-inside mb-5 space-y-2">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-gray-700">
                    {item}
                  </li>
                ))}
              </ul>
            );
          }

          return null;
        })}
      </motion.article>
    </main>
  );
}
