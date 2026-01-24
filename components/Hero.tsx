"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, ShieldCheck, Star, Award } from "lucide-react";

/* ================= VARIANTS ================= */

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

/* ================= COMPONENT ================= */

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] bg-[#FFFCFA] overflow-hidden">
      {/* Soft background grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.04]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-24 lg:py-28 grid lg:grid-cols-2 gap-10 sm:gap-12 md:gap-16 lg:gap-20 items-center">
        {/* ================= LEFT CONTENT ================= */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-6 sm:gap-8 md:gap-10"
        >
          <motion.div variants={item} className="flex items-center gap-3 sm:gap-4 flex-wrap">
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.3em] sm:tracking-[0.4em] text-[#C21E56]">
              Trusted Dental Studio
            </span>
            <div className="flex gap-0.5 sm:gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  size={11}
                  className="sm:w-3 sm:h-3 fill-[#D4AF37] text-[#D4AF37]"
                />
              ))}
            </div>
          </motion.div>

          <motion.h1
            variants={item}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[78px] font-serif text-gray-900 leading-[1.1] sm:leading-[1.05]"
          >
            Dentistry Crafted
            <br />
            <span className="italic text-[#C21E56] font-light">
              With Precision & Care
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="max-w-md text-sm sm:text-base md:text-lg text-gray-500 font-light leading-relaxed"
          >
            At Tooth Stories, we combine advanced dental science with a calm,
            patient-first approach — delivering smiles that feel as good as they
            look.
          </motion.p>

          <motion.div variants={item} className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 md:gap-8">
            <Link
              href="/contact"
              className="w-full sm:w-auto text-center px-8 sm:px-10 py-4 sm:py-5 rounded-full bg-[#C21E56] text-white text-[10px] sm:text-[11px] font-bold tracking-wider sm:tracking-widest uppercase hover:bg-[#A01845] hover:shadow-xl hover:shadow-[#C21E56]/30 transition-all"
            >
              Book Consultation
            </Link>

            <Link
              href="/services"
              className="w-full sm:w-auto text-center flex items-center justify-center gap-2 sm:gap-3 px-8 sm:px-10 py-4 sm:py-5 rounded-full border border-gray-200 text-gray-900 text-[10px] sm:text-[11px] font-bold tracking-wider sm:tracking-widest uppercase hover:bg-gray-50 transition-all group"
            >
              View Treatments
              <ArrowRight size={14} className="sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            variants={item}
            className="flex flex-row items-center justify-center sm:justify-start gap-4 sm:gap-6 md:gap-10 pt-4 sm:pt-6 text-gray-400"
          >
            <div className="flex items-center gap-2 sm:gap-3">
              <ShieldCheck size={16} className="sm:w-[18px] sm:h-[18px] text-[#D4AF37]" />
              <span className="text-[9px] sm:text-[10px] uppercase tracking-wider sm:tracking-widest font-bold">
                Certified & Safe
              </span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <Award size={16} className="sm:w-[18px] sm:h-[18px] text-[#D4AF37]" />
              <span className="text-[9px] sm:text-[10px] uppercase tracking-wider sm:tracking-widest font-bold">
                Expert Dentists
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* ================= RIGHT IMAGE ================= */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative mt-8 lg:mt-0"
        >
          {/* Rectangular Image */}
          <div className="relative w-full max-w-[520px] mx-auto aspect-[3/4] overflow-hidden rounded-xl sm:rounded-2xl border border-gray-200 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.15)] sm:shadow-[0_40px_90px_-30px_rgba(0,0,0,0.15)]">
            <Image
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09"
              alt="Dental Clinic"
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* Floating stat card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="absolute -bottom-6 sm:-bottom-8 md:-bottom-10 -left-4 sm:-left-6 md:-left-10 bg-white/90 backdrop-blur-xl p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl border border-gray-100 shadow-lg sm:shadow-xl max-w-[160px] sm:max-w-none"
          >
            <p className="text-[9px] sm:text-[10px] uppercase tracking-wider sm:tracking-widest font-bold text-[#C21E56]">
              Patient Promise
            </p>
            <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-gray-700 font-light leading-snug sm:leading-normal">
              Gentle treatments. <br />
              Honest guidance. <br />
              Lasting results.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}