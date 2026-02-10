"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useSpring } from "framer-motion";
import { Calendar, Clock, ArrowLeft, User, Tag, Share2 } from "lucide-react";
import { BlogSection, Blog } from "@/app/data/blog";

export default function BlogDetailClient({ blog }: { blog: Blog }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Read time
  const totalWords = blog.content.reduce((count, section) => {
    if (section.type === "paragraph")
      return count + (section.text?.split(" ").length || 0);
    if (section.type === "list" && section.items)
      return count + section.items.join(" ").split(" ").length;
    if (section.type === "heading")
      return count + (section.text?.split(" ").length || 0);
    return count;
  }, 0);

  const readTime = Math.ceil(totalWords / 200);

  // Share handler
  const handleShare = async () => {
    const url = window.location.href;

    if (navigator.share) {
      await navigator.share({
        title: blog.title,
        text: blog.excerpt || blog.title,
        url,
      });
    } else {
      await navigator.clipboard.writeText(url);
      alert("Link copied to clipboard ✨");
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#FFFCF4] via-white to-[#FFF7E6] pb-20">
      {/* Reading Progress */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D4AF37] to-[#C4A030] origin-left z-50"
        style={{ scaleX }}
      />

      {/* Hero */}
      <header className="relative pt-12 pb-10 md:pt-20 bg-gradient-to-b from-[#FFF7E6] to-white border-b border-[#D4AF37]/20">
        <div className="max-w-5xl mx-auto px-4">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-black mb-8"
          >
            <ArrowLeft size={16} />
            Back to Insights
          </Link>

          <span className="inline-block mb-4 px-4 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-[#D4AF37] to-[#C4A030] text-white">
            {blog.category}
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            {blog.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-gray-500 mt-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#C4A030] flex items-center justify-center text-white">
                <User size={18} />
              </div>
              <span className="font-medium text-gray-900">{blog.author}</span>
            </div>

            <span className="flex items-center gap-2 border-l pl-6">
              <Calendar size={16} /> {blog.date}
            </span>

            <span className="flex items-center gap-2 border-l pl-6">
              <Clock size={16} /> {readTime} min read
            </span>
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 mt-14">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Main */}
          <div className="lg:col-span-8">
            {/* Image */}
            {blog.image && (
              <div className="w-full mb-12">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={1200}
                  height={600}
                  className="w-full h-auto rounded-3xl shadow-2xl"
                  priority
                />
              </div>
            )}

            {/* Excerpt */}
            {blog.excerpt && (
              <div className="border-l-4 border-[#D4AF37] pl-6 mb-12 text-xl text-gray-600 italic">
                {blog.excerpt}
              </div>
            )}

            {/* Content */}
            <article
              className="
                prose prose-lg max-w-none
                prose-headings:font-bold
                prose-p:text-gray-700
                prose-li:text-gray-700
                prose-strong:text-[#C4A030]
                prose-h2:text-3xl
              "
            >
              {blog.content.map((section, index) => {
                if (section.type === "paragraph") {
                  return <p key={index}>{section.text}</p>;
                }

                if (section.type === "heading") {
                  return (
                    <h2 key={index} className="flex items-center gap-3">
                      <span className="w-8 h-1 bg-gradient-to-r from-[#D4AF37] to-[#C4A030] rounded-full" />
                      {section.text}
                    </h2>
                  );
                }

                if (section.type === "list" && section.items) {
                  return (
                    <div
                      key={index}
                      className="bg-[#FFFBF0] border border-[#D4AF37]/20 rounded-2xl p-6 my-8"
                    >
                      <ul className="list-none p-0 m-0 space-y-4">
                        {section.items.map((item, i) => (
                          <li key={i} className="flex gap-3">
                            <span className="w-2 h-2 mt-2 bg-[#D4AF37] rounded-full" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                }
                return null;
              })}
            </article>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4">
            <div className="sticky top-12 space-y-8">
              {/* CTA */}
              <div className="p-6 rounded-3xl bg-gradient-to-br from-[#D4AF37] to-[#C4A030] text-white shadow-2xl">
                <h3 className="text-xl font-bold mb-2">Need dental advice?</h3>
                <p className="text-white/90 mb-6 text-sm">
                  Schedule a consultation with Dr. Vaibhav Harkare.
                </p>
                <button className="w-full py-3 bg-white text-[#C4A030] rounded-xl font-bold hover:bg-[#FFF7E6] transition">
                  Book Appointment
                </button>
              </div>

              {/* Meta */}
              <div className="p-6 rounded-3xl border bg-white">
                <h4 className="font-bold mb-4 flex items-center gap-2">
                  <Tag size={18} /> Category
                </h4>

                <span className="inline-block px-3 py-1 bg-[#FFF7E6] rounded-lg text-sm">
                  {blog.category}
                </span>

                <hr className="my-6" />

                <button
                  onClick={handleShare}
                  className="flex items-center justify-center gap-2 w-full text-gray-500 hover:text-[#C4A030] transition font-medium"
                >
                  <Share2 size={18} />
                  Share this article
                </button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
