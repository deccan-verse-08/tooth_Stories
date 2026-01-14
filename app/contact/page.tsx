"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function UnderDevelopment() {
  return (
    <>
      <Header />

      <section className="relative min-h-[100svh] flex items-center justify-center bg-[#FFFCFA] overflow-hidden">
        {/* Soft background accents */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(212,175,55,0.06),transparent_45%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(194,30,86,0.06),transparent_45%)]" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 max-w-lg mx-auto px-6 text-center"
        >
          {/* Emoji mark */}
          <div className="text-5xl mb-6">🦷✨</div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight">
            This Smile Story <br />
            <span className="italic text-[#C21E56]">Is Still in the Chair</span>
          </h1>

          {/* Divider */}
          <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto my-8" />

          {/* Message */}
          <p className="text-gray-500 font-light leading-relaxed text-lg">
            We’re carefully crafting this page — just like a perfect dental
            treatment. Precision takes time, and trust us, it’ll be worth the
            wait 🙂
          </p>

          {/* Subtle note */}
          <p className="mt-6 text-sm text-gray-400 italic">
            Gentle hands. Thoughtful design. Confident smiles.
          </p>

          {/* CTA */}
          <div className="mt-12">
            <Link
              href="/"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#C21E56] text-white text-[11px] font-bold uppercase tracking-widest hover:bg-[#A01845] hover:shadow-lg hover:shadow-[#C21E56]/25 transition-all"
            >
              <ArrowLeft size={14} />
              Back to Home
            </Link>
          </div>
        </motion.div>
      </section>

      <Footer />
    </>
  );
}
